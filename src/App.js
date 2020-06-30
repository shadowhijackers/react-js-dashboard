import React from "react";
import { Provider } from "react-redux";

import "./App.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import rootReducer from "./store/reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
