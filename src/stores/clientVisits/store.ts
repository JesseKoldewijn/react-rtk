import { configureStore } from "@reduxjs/toolkit";

import { clientVisitsReducer } from "./reducer";

export const clientVisitsStore = configureStore({
  reducer: {
    clientVisits: clientVisitsReducer.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof clientVisitsStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof clientVisitsStore.dispatch;
