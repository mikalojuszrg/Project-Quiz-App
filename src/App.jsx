import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
