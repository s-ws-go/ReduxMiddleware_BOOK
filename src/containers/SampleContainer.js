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
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
    // 숫자 1은 아이디값인데, 사실은 getUsers 안에는 id값 넣을 필요 없다.
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
  // loading 모듈 작업하면서 loading 파라미터 추가!
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    // loadingPost: sample.loading.GET_POST,
    // loadingUsers: sample.loading.GET_USERS,
    loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["sample/GET_USERS"],
  }),
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
