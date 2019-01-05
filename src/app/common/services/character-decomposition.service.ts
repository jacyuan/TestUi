import { Injectable } from '@angular/core';
import { APP_CONFIG } from '@config/app.config';
import { HttpClient } from '@angular/common/http';
import { CharacterDecompositionWithPrononciations } from '@common/models/character-decomposition-with-prononciations';
import { CharacterDecompositionHtml } from '@common/models/character-decomposition-html';

@Injectable({
  providedIn: 'root'
})
export class CharacterDecompositionService {
  private baseUrl = `${APP_CONFIG.rootUrl}CharactorDecompositions/`;

  constructor(private http: HttpClient) {}

  public GetDecompositions(data: CharacterDecompositionWithPrononciations): Promise<CharacterDecompositionHtml> {
    const uri = `${this.baseUrl}decompositions`;
    return this.http.post<CharacterDecompositionHtml>(uri, data).toPromise();
  }
}
