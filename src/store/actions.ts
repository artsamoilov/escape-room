import { createAction } from '@reduxjs/toolkit';
import { QuestType } from 'types/quest-type';

export const loadQuests = createAction<QuestType[]>('data/loadQuests');

export const loadQuest = createAction<QuestType>('data/loadQuest');
