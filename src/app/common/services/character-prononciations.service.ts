import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '@config/app.config';
import { CharacterPrononciations } from '@common/models/character-prononciations';

@Injectable({
  providedIn: 'root'
})
export class CharacterPrononciationsService {
  private baseUrl = `${APP_CONFIG.rootUrl}SentencePrononciations/`;

  constructor(private http: HttpClient) {}

  public GetPrononciations(characters: string): Promise<Array<CharacterPrononciations>> {
    const uri = `${this.baseUrl}${characters}/character-prononciations`;
    return this.http.get<Array<CharacterPrononciations>>(uri).toPromise();
  }
}
