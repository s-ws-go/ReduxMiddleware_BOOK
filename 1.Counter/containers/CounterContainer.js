import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onDecrease={decreaseAsync}
      onIncrease={increaseAsync}
    />
  );
};

export default connect((state) => ({ number: state.counter }), {
  increaseAsync,
  decreaseAsync,
})(CounterContainer);
// connect 로 연결
