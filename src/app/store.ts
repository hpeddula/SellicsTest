import { configureStore } from '@reduxjs/toolkit';
import appImageSlice from '../slice/appImageSlice';
import { persistStore, persistReducer ,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage/session'

const persistConfig = { // configuration object for redux-persist
  key: 'root',
  storage, // define which storage to use
}

export const persistedReducer = persistReducer(persistConfig, appImageSlice) // create a persisted reducer

export const store = configureStore({
  reducer: {
    appImages:persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
})
export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch