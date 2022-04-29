import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from 'store/store'
import {loadQuests, loadQuest} from './actions';
import {APIRoute} from '../const';
import {QuestType} from '../types/quest-type';
import {toast} from 'react-toastify';
import {OrderType} from '../types/order-type';

export const fetchQuestsAction = createAsyncThunk(
  'data/fetchQuests',
  async () => {
    try {
      const {data} = await api.get<QuestType[]>(APIRoute.Quests);
      store.dispatch(loadQuests(data));
    } catch (error) {
      toast.warn('При загрузке списка квестов произошла ошибка');
    }
  },
);

export const fetchSelectedQuestAction = createAsyncThunk(
  'data/fetchSelectedQuest',
  async (id: number) => {
    try {
      const {data} = await api.get<QuestType>(`${APIRoute.Quests}/${id}`);
      store.dispatch(loadQuest(data));
    } catch (error) {
      toast.warn('При загрузке квеста произошла ошибка');
    }
  },
);

export const postOrderAction = createAsyncThunk(
  'data/postOrder',
  async (orderData: OrderType) => {
    try {
      await api.post(APIRoute.Order, orderData);
      toast.success('Заказ успешно отправлен');
    } catch (error) {
      toast.warn('При отправке заказа произошла ошибка');
    }
  },
);
