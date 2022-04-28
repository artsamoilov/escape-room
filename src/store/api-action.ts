import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from 'store/store'
import {loadQuests, loadQuest} from './actions';
import {APIRoute} from '../const';
import {QuestType} from '../types/quest-type';

export const fetchQuestsAction = createAsyncThunk(
  'data/fetchQuests',
  async () => {
    const {data} = await api.get<QuestType[]>(APIRoute.Quests);
    store.dispatch(loadQuests(data));
  },
);

export const fetchSelectedQuestAction = createAsyncThunk(
  'data/fetchSelectedQuest',
  async (id: number) => {
    const {data} = await api.get<QuestType>(`${APIRoute.Quests}/${id}`);
    store.dispatch(loadQuest(data));
  },
);
