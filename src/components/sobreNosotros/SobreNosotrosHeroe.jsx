import React from 'react';


// import slider1 from './slider1.jpg';
// import slider2 from './slider2.jpg';
// import slider3 from './slider3.jpg';
// import slider4 from './slider4.jpg';

import slider1 from './slider1.jpeg';
import slider2 from './slider2.jpeg';
import slider3 from './slider3.jpeg';
import slider4 from './slider4.jpeg';



const SobreNosotrosHeroe = () => {
  return (
    <>
    {/* <section className='sobrenosotros__container'>
      <h2>Quiénes Somos</h2>
    </section> */}
    <div className='slider-frame sobrenosotros__container'>
    <h2>Quiénes Somos</h2> 
    <ul>
          <li><img src={slider1} alt="img1" /></li>
          <li><img src={slider2} alt="img2" /></li>
          <li><img src={slider3} alt="img3" /></li>
          <li><img src={slider4} alt="img4" /></li>
        </ul>
      </div>
    </>
  )
}

export default SobreNosotrosHeroe;