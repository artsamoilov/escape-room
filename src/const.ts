export enum AppRoute {
  Home = '/',
  Contacts = '/contacts',
  Quest = '/detailed-quest/:id',
  NotFound = '/404',
}

export enum QuestLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const TranslatedQuestLevel = {
  [QuestLevel.Easy]: 'лёгкий',
  [QuestLevel.Medium]: 'средний',
  [QuestLevel.Hard]: 'сложный',
}

export enum QuestType {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export const TranslatedQuestType = {
  [QuestType.All]: 'все квесты',
  [QuestType.Adventures]: 'приключения',
  [QuestType.Horror]: 'ужасы',
  [QuestType.Mystic]: 'мистика',
  [QuestType.Detective]: 'детектив',
  [QuestType.SciFi]: 'sci-fi',
}
