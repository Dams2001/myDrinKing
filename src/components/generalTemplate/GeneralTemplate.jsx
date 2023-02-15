import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../home/Home";
import SobreNosotros from "../sobreNosotros/SobreNosotros";
import PostsInstagram from "../postsInstagram/PostsInstagram";
import Productos from "../productos/Productos";

const GeneralTemplate = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/entradas-blog" element={<PostsInstagram />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
    </div>
  );
};

export default GeneralTemplate;
