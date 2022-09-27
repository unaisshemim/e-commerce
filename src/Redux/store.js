import {configureStore} from '@reduxjs/toolkit';

import cartReducer from './CartRedux';

export const store= configureStore({
    reducer:{
        cart:cartReducer,
    }
})