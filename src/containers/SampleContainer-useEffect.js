import React, { useEffect } from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const SampleContainer = ({
  getPost,
  getUsers, // 액션 처리
  loadingPost,
  post,
  loadingUsers,
  users, //컴포넌트 프롭스
}) =>
  //  실패했을 때를 관리하고 싶다면 _FAILURE가 붙은 액션을 리듀서에서 처리하거나,
  //  *** try / catch 구문으로 에러 값을 조회할 수 있다.
  {
    useEffect(() => {
      //useEffect에 파라미터로 넣는 함수는 async로 호출할 수 없기 때문에
      //그 내부에서 async 함수를 선언하고 호출 해 준다.
      const fn = async () => {
        try {
          await getPost(1);
          await getUsers(1);
        } catch (e) {
          console.log(e);
        }
      };
      fn();
    }, [getPost, getUsers]);
    return (
      <Sample
        loadingPost={loadingPost}
        post={post}
        loadingUsers={loadingUsers}
        users={users}
      />
    );
  };

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["sample/GET_USERS"],
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
