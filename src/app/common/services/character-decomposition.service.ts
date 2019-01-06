import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { CharacterDecompositionWithPrononciations } from '@common/models/character-decomposition-with-prononciations';
import { CharacterDecompositionHtml } from '@common/models/character-decomposition-html';

@Injectable({
  providedIn: 'root'
})
export class CharacterDecompositionService {
  private baseUrl = `${environment.rootUrl}/api/CharactorDecompositions/`;

  constructor(private http: HttpClient) {}

  public GetDecompositions(data: CharacterDecompositionWithPrononciations): Promise<CharacterDecompositionHtml> {
    const uri = `${this.baseUrl}decompositions`;
    return this.http.post<CharacterDecompositionHtml>(uri, data).toPromise();
  }
}
