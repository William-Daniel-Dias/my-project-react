import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FeaturesPage } from "./pages/Features"
import { ContactPage } from "./pages/Contact"
import { HomePage } from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App