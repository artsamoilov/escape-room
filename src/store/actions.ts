import { createAction } from '@reduxjs/toolkit';
import {QuestType} from '../types/quest-type';

export const setType = createAction('data/setType', (value) => ({payload: value}));

export const loadQuests = createAction<QuestType[]>('data/loadQuests');

export const loadQuest = createAction<QuestType>('data/loadQuest');
