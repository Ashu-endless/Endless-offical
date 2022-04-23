import React, { useState, useEffect } from 'react';
import Services from '../components/services/Services';
// import "animate.css/animate.min.css"
// import "../node_modules/animate.css/animate.min.css";



function OurServices() {
   
  useEffect(() => {
    // Update the document title using the browser API
    document.querySelector("#root").addEventListener('scroll',function(){
      console.log("Scrolled")
      if(document.querySelector('#section-2').getBoundingClientRect().top > 150){
        // document.querySelector('#section-2').style.opacity = "1"
        document.querySelector('#section-2').classList.add('scale-in-ver-center')
      }
      else{
        document.querySelector('#section-2').classList.remove('scale-in-ver-center')
      }
    })
  });


    return (

        <section data-anchor="Services" id="section-2" className='section flipOutY' >
    <p className={"h1"} >Our product and Services</p>
    <Services />
  </section>

    );
  }
  
  export default OurServices;
  