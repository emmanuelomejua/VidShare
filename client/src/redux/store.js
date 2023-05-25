import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER } from 'redux-persist';
import  storage  from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import videoReducer from "./videoReducer";


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({user: userReducer, video: videoReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [ FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER ]
            }
        })
})

export let persistor = persistStore(store)
