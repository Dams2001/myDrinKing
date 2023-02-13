import React, { useEffect } from 'react';

import SobreNosotrosHeroe from './SobreNosotrosHeroe';
import SobreNosotrosContenido from './SobreNosotrosContenido';

const SobreNosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <SobreNosotrosHeroe/>
        <SobreNosotrosContenido/>
    </div>
  )
}

export default SobreNosotros;