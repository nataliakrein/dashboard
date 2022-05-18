import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "../../redux/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const ReduxProvider = ({ children }) => {
  //const store = createStore(rootReducer, applyMiddleware(thunk));
  //return <Provider store={store}>{children}</Provider>;
  const store = applyMiddleware(thunk)(createStore)(persistedReducer);
  const persistor = persistStore(store);

  return (
    <Provider persistor={persistor} store={store}>
      {children}
    </Provider>
  );
};
