import React, { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload }; // setState({ count: state.count + 1 });
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterComponent = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <h1>The count is {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        Decrease
      </button>
    </div>
  );
};

export default CounterComponent;