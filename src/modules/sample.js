import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import { createRequestThunk } from "../lib/createRequestThunk";

//액션 타입을 선언함
//한 요청당 세개(요청, 성공, 실패)

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

/////////////////////////////////////////////////////////////////////
//thunk 함수 생성 _ 시작 / 성공 / 실패시 각각 다른 액션을 디스패치함
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST }); //요청 시작을 알리는 액션
//   try {
//     const response = await api.getPost(id);
//     dispatch({ type: GET_POST_SUCCESS, payload: response.data }); // 요청성공
//   } catch (e) {
//     dispatch({ type: GET_POST_FAILURE, payload: e, error: true }); //에러발생
//     throw e; //나중에 컴포넌트단에서 에러 조회할 수 있도록 함
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS }); //요청 시작을 알리는 액션
//   try {
//     const response = await api.getUsers();
//     dispatch({ type: GET_USERS_SUCCESS, payload: response.data }); // 요청성공
//   } catch (e) {
//     dispatch({ type: GET_USERS_FAILURE, payload: e, error: true }); //에러발생
//     throw e; //나중에 컴포넌트단에서 에러 조회할 수 있도록 함
//   }
// };
//////////////////////////////////////////////////////////////////////
// 요약표시(createRequestThunk)
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

///////////////////////////////////////////////////////////////////////
// 초기상태 선언 _ 로딩 중 상태는 loading 이라는 객체에서 관리

const initialState = {
  // 로딩모듈 설정 후 코드 삭제
  //   loading: {
  //     GET_POST: false,
  //     GET_USERS: false,
  //   },
  post: null,
  users: null,
};
///////////////////////////////////////////////////////////
// 로딩모듈 설정 후 불필요한 코드 제거!
// const sample = handleActions(
//   {
//     [GET_POST]: (state) => ({
//       ...state,
//       loading: { ...state.loading, GET_POST: true },
//     }),
//     [GET_POST_SUCCESS]: (state, action) => ({
//       ...state,
//       loading: { ...state.loading, GET_POST: false },
//       post: action.payload,
//     }),
//     [GET_POST_FAILURE]: (state) => ({
//       ...state,
//       loading: { ...state.loading, GET_POST: false },
//     }),
//     [GET_USERS]: (state) => ({
//       ...state,
//       loading: { ...state.loading, GET_USERS: true },
//     }),
//     [GET_USERS_SUCCESS]: (state, action) => ({
//       ...state,
//       loading: { ...state.loading, GET_USERS: false },
//       users: action.payload,
//     }),
//     [GET_USERS_FAILURE]: (state) => ({
//       ...state,
//       loading: { ...state.loading, GET_USERS: false },
//     }),
//   },
//   initialState
// );
// 이제 sample 리듀서 에서는 로딩상태는 관리 할 필요가 없고 성공했을때의 케이스만 관리하면 됨.
const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      //   loading: { ...state.loading, GET_POST: false },
      post: action.payload,
    }),

    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      //   loading: { ...state.loading, GET_USERS: false },
      users: action.payload,
    }),
  },
  initialState
);

export default sample;
