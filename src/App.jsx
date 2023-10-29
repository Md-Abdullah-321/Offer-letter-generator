import { Route, Routes } from "react-router-dom";
import Generator from "./pages/generator.jsx";
import OfferLetterGeneratorForm from "./pages/index.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OfferLetterGeneratorForm />} />
        <Route path="/generate" element={<Generator />} />
      </Routes>
    </>
  );
}

export default App;
