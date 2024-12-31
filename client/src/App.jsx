import { Outlet } from "react-router-dom";

import "./App.css";
import ReduxProvider from "../redux/ReduxProvider";
import { store } from "../redux/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="body">
        <Outlet />
      </div>
    </ReduxProvider>
  );
}

export default App
