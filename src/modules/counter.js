import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

///////////////////////////////////////////////////////////////////
///////// 리덕스사가 코드
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

//액션생성함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록 ()=>undefined 를 두 번째 파라미터로 입력
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

// //redux-chunk __ 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };

// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

///////////////////////////////////////////////////////////////////
///////// 리덕스사가 코드
// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록 ()=>undefined 를 두 번째 파라미터로 입력

function* increaseSaga() {
  yield delay(1000); // 1초를 기다림
  yield put(increase()); // 특정 액션을 디스패치함
}

function* decreaseSaga() {
  yield delay(1000); // 1초를 기다림
  yield put(decrease()); // 특정 액션을 디스패치함
}

//takeEvery는 들어오는 모든 액션에 대해 특정 작업을 진행
//takeLatest는 기존 작업이 있다면 취소하고 가장 마지막으로 실행된 것만 수행
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
