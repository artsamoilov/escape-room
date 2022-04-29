import {createReducer} from '@reduxjs/toolkit';
import {loadQuests, loadQuest} from './actions';
import {QuestType} from '../types/quest-type';

type StateType = {
  quests: QuestType[],
  quest: QuestType,
}

const initialState: StateType = {
  quests: [],
  quest: {} as QuestType,
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(loadQuest, (state, action) => {
      state.quest = action.payload;
    })
});

export {reducer};
