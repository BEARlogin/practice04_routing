import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DetailPage } from "./pages/DetailPage";

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { UsersLoader } from "./redux/containers/UsersLoader";
import { LoadingState } from "./redux/containers/LoadingState";

function App() {
  return (
    <Provider store={store}>
      <LoadingState>
        <UsersLoader>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/users/:id" element={<DetailPage />}></Route>
          </Routes>
        </UsersLoader>
      </LoadingState> 
    </Provider>
  );
}

export default App;
