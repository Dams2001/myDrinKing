import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../home/Home";
import SobreNosotros from "../sobreNosotros/SobreNosotros";

const GeneralTemplate = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
    </div>
  );
};

export default GeneralTemplate;
