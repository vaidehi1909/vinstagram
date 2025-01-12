import { Outlet } from "react-router-dom";

import "./App.css";
import ReduxProvider from "../redux/ReduxProvider";
import { store } from "../redux/store";
import ToastMessage from "./components/common/ToastMessage";

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="body">
        <Outlet />
      </div>
      <ToastMessage />
    </ReduxProvider>
  );
}

export default App
