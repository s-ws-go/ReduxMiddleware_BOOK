import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import sample from "./sample";
import loading from "./loading";
import { all } from "@redux-saga/core/effects";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

// 리듀서들의 사가들을 합쳐서 관리하는 루트 사가를 만들어 줌
export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;
