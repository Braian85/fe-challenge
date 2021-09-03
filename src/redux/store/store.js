import {configureStore} from '@reduxjs/toolkit';
import {counterSlices} from '../slices/counterSlices';
import {chatSlices} from '../slices/chatSlices';

const store = configureStore({
    reducer:{
        counter: counterSlices,
        chat: chatSlices
    }
});

export default store; 