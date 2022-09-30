import {configureStore} from '@reduxjs/toolkit';

import cartReducer from './cartRedux';
import userSlice from './userRedux';

export const store= configureStore({
    reducer:{
        cart:cartReducer,
        user:userSlice
    }
})