import { Component, OnInit } from '@angular/core';
import { CharacterDecomposition } from '@common/models/character-decomposition';
import { CharacterPrononciationsService } from '@common/services/character-prononciations.service';
import * as _ from 'lodash';
import {
  CharacterDecompositionWithPrononciations,
  CharacterWithChosenPrononciation
} from '@common/models/character-decomposition-with-prononciations';
import { CharacterPrononciations } from '@common/models/character-prononciations';
import { CharacterDecompositionService } from '@common/services/character-decomposition.service';

@Component({
  selector: 'app-character-decomposition',
  templateUrl: './character-decomposition.component.html',
  styleUrls: ['./character-decomposition.component.css']
})
export class CharacterDecompositionComponent implements OnInit {
  public characterDecomposition: CharacterDecomposition;
  public characterDecompositionHtml: string;
  public isLoading: boolean;

  constructor(
    private characterPrononciationsService: CharacterPrononciationsService,
    private characterDecompositionService: CharacterDecompositionService
  ) {}

  ngOnInit() {
    this.characterDecomposition = new CharacterDecomposition();
    this.characterDecompositionHtml = null;
    this.isLoading = false;
  }

  public canConfirm(): boolean {
    return (
      this.characterDecomposition &&
      ((this.characterDecomposition.Parts && this.characterDecomposition.Parts.length > 0) ||
        (this.characterDecomposition.Characters &&
          this.characterDecomposition.Characters.length > 0))
    );
  }

  public async confirm(): Promise<void> {
    this.startLoading();

    // 创建一个用于http call的数据
    const requestDto = new CharacterDecompositionWithPrononciations(
      this.characterDecomposition.Parts
    );

    // 如果用户没有提供要查询的生词，而只有偏旁部首，那么我们就没有显示注音的问题
    if (
      !this.characterDecomposition.Characters ||
      this.characterDecomposition.Characters.length === 0
    ) {
      this.generateDecompositions(requestDto);
    } else {
      // 如果用户提供了要查询的生词，那么要注意多音字的问题
      // 我们先找出这些词的所有发音
      const charactersWithPrononciations = await this.characterPrononciationsService.GetPrononciations(
        this.characterDecomposition.Characters
      );

      // 先把那些只有一个发音的字找出来
      const singlePrononciationCharacters = _.chain(charactersWithPrononciations)
        .filter((c: CharacterPrononciations) => {
          return c.Prononciations && c.Prononciations.length === 1;
        })
        .map((c: CharacterPrononciations) => {
          return new CharacterWithChosenPrononciation(
            c.Character,
            c.PositionInSentence,
            c.Prononciations[0]
          );
        })
        .value();

      // 先把这部分 非多音字 加入到http call的数据里面
      singlePrononciationCharacters.forEach(c =>
        requestDto.CharactersWithChosenPrononciation.push(c)
      );

      // 如果要查找的生词里面包含多音字，我们要让用户选择单独一个发音
      if (singlePrononciationCharacters.length !== this.characterDecomposition.Characters.length) {
        const multiplePrononciationsCharacters = _.filter(
          charactersWithPrononciations,
          (c: CharacterPrononciations) => {
            return c.Prononciations && c.Prononciations.length > 1;
          }
        );

        // todo
      } else {
        await this.generateDecompositions(requestDto);
      }
    }
  }

  private async generateDecompositions(data: CharacterDecompositionWithPrononciations) {
    this.characterDecompositionHtml = null;
    const res = await this.characterDecompositionService.GetDecompositions(data);
    this.characterDecompositionHtml = res.SvgContent;
  }

  private startLoading() {
    this.isLoading = true;
  }

  private stopLoading() {
    this.isLoading = false;
  }
}
