import {createReducer} from '@reduxjs/toolkit';
import {setType, loadQuests, loadQuest} from './actions';
import {Type} from '../const';
import {QuestType} from '../types/quest-type';

type StateType = {
  selectedType: Type,
  quests: QuestType[],
  quest: QuestType,
}

const initialState: StateType = {
  selectedType: Type.All,
  quests: [],
  quest: {} as QuestType,
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setType, (state, action) => {
      state.selectedType = action.payload;
    })
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(loadQuest, (state, action) => {
      state.quest = action.payload;
    })
});

export {reducer};
