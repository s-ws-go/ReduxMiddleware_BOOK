/* 
기존에는 리듀서 내부에서 각 요청에 관련된 액션이 디스패치 될 때마다 로딩 상태를 변경했지.
로딩 상태만 관리하는 모듈을 만들어서 관리 해 보자.
*/

import { createAction, handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

// 요청을 위한 액션타입을 payload로 설정한다. (예. "sample/GET_POST")

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType
);
export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType
);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState
);

export default loading;

/* 요청이 시작될 때 디스패치 할 액션은 
   { type: 'loading/START_LOADING', payload: 'sample/GET_POST'}
   이 액션이 디스패치되면 loading 리듀서가 관리하고 있는 상태에서 sample/GET_POST 값을 true로 바꾼다.
   만약 기존 sample/GET_POST가 존재하지 않으면 새로 값을 설정 해 준다.
   요청이 끝나면,
   { type: 'loading/FINISH_LOADING', payload: 'sample/GET_POST'}
   이 액션을 디스패치하고, 기존 true값을 false로 변경 해 준다.
*/
