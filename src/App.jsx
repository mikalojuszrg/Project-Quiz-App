import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";

import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <MainPage />
            </MainLayout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
