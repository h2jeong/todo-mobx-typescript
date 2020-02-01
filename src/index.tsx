import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { TodoList } from "./stores/todo-list";
import { StoreProvider } from "./helpers/store-provider";

const todoList = new TodoList([
  "Should Starting Writing in React",
  "Should Learn MobX",
  "Should Watch Once Piece :)"
]);

//@ts-ignore - for debugging
window.todoList = todoList;

ReactDOM.render(
  <StoreProvider value={todoList}>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
