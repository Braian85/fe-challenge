import {createAction, createReducer} from '@reduxjs/toolkit';
export const newtext = createAction("modifyChat/chat");

const initialChat = {
    value: ""
    }

export const chatSlices = createReducer(initialChat, builder => {
    builder.addCase(newtext, (state, action) => {
        state.value = action.payload;
    })

})