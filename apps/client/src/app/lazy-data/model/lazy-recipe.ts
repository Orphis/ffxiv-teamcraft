export interface LazyRecipe {
  id:                      number | string;
  job:                     number;
  lvl:                     number;
  yields:                  number;
  result:                  number;
  stars:                   number;
  qs:                      boolean;
  hq:                      boolean;
  durability?:             number;
  quality?:                number;
  progress?:               number;
  suggestedControl?:       number;
  suggestedCraftsmanship?: number;
  progressDivider?:        number;
  qualityDivider?:         number;
  progressModifier?:       number;
  qualityModifier?:        number;
  controlReq?:             number;
  craftsmanshipReq?:       number;
  rlvl?:                   number;
  requiredQualityPercent?: number;
  ingredients:             Ingredient[];
  expert?:                 boolean;
  conditionsFlag?:         number;
  masterbook?:             Masterbook;
}

export interface Ingredient {
  id:      number;
  amount:  number;
  quality: number | null;
  phase?:  number;
}

export interface Masterbook {
  id:   string;
  name: Name;
}

export interface Name {
  en: string;
  ja: string;
  de: string;
  fr: string;
}
