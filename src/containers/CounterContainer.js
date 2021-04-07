import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onDecrease={decrease} onIncrease={increase} />
  );
};

export default connect((state) => ({ number: state.counter }), {
  increase,
  decrease,
})(CounterContainer);
