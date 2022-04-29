export const NAME_REG_EX = /^[a-zA-Zа-яА-ЯёЁ\s]*$/;
export const PHONE_REG_EX = /\d{10}/;
export const PEOPLE_COUNT_REG_EX = /\d/;

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
  AllQuests = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  Scifi = 'sci-fi',
}

export const TranslatedType = {
  [Type.AllQuests]: 'Все квесты',
  [Type.Adventures]: 'Приключения',
  [Type.Horror]: 'Ужасы',
  [Type.Mystic]: 'Мистика',
  [Type.Detective]: 'Детектив',
  [Type.Scifi]: 'Sci-fi',
}
