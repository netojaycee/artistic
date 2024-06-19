import { Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Landing from "./pages/home";
import Design from "./pages/design/Design";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/design" element={<Design />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
