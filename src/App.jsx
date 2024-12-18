import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DetailPage } from "./pages/DetailPage";

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/users/:id" element={<DetailPage />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
