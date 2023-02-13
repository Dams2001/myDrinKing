import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import GeneralTemplate from "./components/generalTemplate/GeneralTemplate";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <GeneralTemplate />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
