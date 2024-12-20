import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DetailPage } from "./pages/DetailPage";
import "./App.css";
import { UsersLoader } from "./containers/UsersLoader";
import { LoadingState } from "./containers/LoadingState";
import { UserContextProvider } from "./context/UserContextProvider";

function App() {
  return (

      <UserContextProvider>
        <LoadingState>
          <UsersLoader>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/users/:id" element={<DetailPage />}></Route>
            </Routes>
          </UsersLoader>
        </LoadingState> 
      </UserContextProvider>
  );
}

export default App;
