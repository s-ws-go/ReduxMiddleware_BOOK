import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
// import loggerMiddleware from "./lib/middleware";
import rootReducer, { rootSaga } from "./modules";
import reduxLogger from "redux-logger";
import reduxChunk from "redux-thunk";
import "regenerator-runtime/runtime";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(reduxLogger, reduxChunk, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*
 redux-thunk : 액션생성함수에서 일반 액션객체를 반환하는 대신 함수를 반환한다. 
*/
