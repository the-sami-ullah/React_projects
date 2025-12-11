const redux = require("redux");

const IntialVAlue = {
  counter: 0,
};

// Step 01 Reducer

const Reducer = (store = IntialVAlue, action) => {
  let newStore = store;
  if (action.type === "INCR") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECR") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "Add") {
    newStore = { counter: store.counter + 7 };
  }
  // console.log(newStore, "reducer");
  return newStore;
};

// Step 02  Create Store

const store = redux.createStore(Reducer);

//Step 03 Subcriber

const Subcriber = () => {
  const state = store.getState();
  console.log(state);
};

// Step 04
store.subscribe(Subcriber);

store.dispatch({ type: "INCR" });
store.dispatch({ type: "INCR" });
store.dispatch({ type: "INCR" });
store.dispatch({ type: "DECR" });
store.dispatch({ type: "Add" });
