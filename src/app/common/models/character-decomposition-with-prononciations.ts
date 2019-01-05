export class CharacterDecompositionWithPrononciations {
  public CharacterParts: string;
  public CharactersWithChosenPrononciation: Array<CharacterWithChosenPrononciation>;

  constructor(
    characterParts?: string,
    charactersWithChosenPrononciation?: Array<CharacterWithChosenPrononciation>
  ) {
    this.CharacterParts = characterParts || '';
    this.CharactersWithChosenPrononciation = charactersWithChosenPrononciation || [];
  }
}

export class CharacterWithChosenPrononciation {
  public Character: string;
  public PositionInSentence: number;
  public Prononciation: string;

  constructor(character: string, positionInSentence: number, prononciation: string) {
    this.Character = character;
    this.PositionInSentence = positionInSentence;
    this.Prononciation = prononciation;
  }
}
