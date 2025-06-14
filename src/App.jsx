import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Modelos from "./pages/Modelos";
import ModeloDetalle from "./pages/ModeloDetalle";
import TestDrive from "./pages/TestDrive";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/modelo/:id" element={<ModeloDetalle />} />
        <Route path="/test-drive" element={<TestDrive />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
