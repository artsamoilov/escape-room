const ERROR_TIMEOUT = 2000;

export enum HTTPCode {
  BadRequest = 400,
  NotFound = 404,
}

export enum AppRoute {
  Home = '/',
  Contacts = '/contacts',
  Quest = '/detailed-quest/:id',
  NotFound = '/404',
}

export enum APIRoute {
  Quests = '/quests',
  Order = '/orders',
}

export enum Level {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const TranslatedLevel = {
  [Level.Easy]: 'лёгкий',
  [Level.Medium]: 'средний',
  [Level.Hard]: 'сложный',
}

export enum Type {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export const TranslatedType = {
  [Type.All]: 'все квесты',
  [Type.Adventures]: 'приключения',
  [Type.Horror]: 'ужасы',
  [Type.Mystic]: 'мистика',
  [Type.Detective]: 'детектив',
  [Type.SciFi]: 'sci-fi',
}
