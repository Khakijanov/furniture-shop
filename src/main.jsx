import ReactDOM from "react-dom/client";
// APP
import App from "./App.jsx";
// css
import "./index.css";
// provider
import { Provider } from "react-redux";
// store
import { store } from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
