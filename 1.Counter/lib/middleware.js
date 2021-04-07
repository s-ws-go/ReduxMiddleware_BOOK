const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type); //액션 타입으로 log를 그룹화함 __ 콘솔을 그룹화하여 보여줌
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action); //디음 미들웨어 혹은 리듀서에게 전달
  console.log("다음 상태", store.getState()); //업데이트 된 상태
  console.groupEnd(); //그룹 끝
};

export default loggerMiddleware;

/*
next(action) 을 호출하면 그 다음 처리해야 할 미들웨어에게 액션을 넘겨주고
만약 그 다음 미들웨어가 없다면 리듀서에게 액션을 넘겨 줌.
*/
