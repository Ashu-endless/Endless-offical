
import './App.css';
import StarsDiv from './components/stars/StarsDiv';
import Services from './components/services/Services';
function App() {
  return (
    <>
    <section className='section'>
      <StarsDiv/>
<div id='Endless-fp' >
    <div id='Endless-Title' >Endless</div>
  <div id='Endless-moto' >Exploring the endless possibilities of endless universe...</div>
</div>
  
  </section>

  <section id="section-2" className='section' >
    <p class={"h1"} >Our product and Services</p>
    <Services />
  </section>

  <section id='section-3' className='section' >
    <div id='idea-div' >
    <p id='idea-p' >Have an startup idea related to app or tech?</p>
    <div id='computer-png' ></div>
    </div>

    <div id='cwu-div' > <p className='orange' >Connect with us at</p>
    <a id='cwu-a' href="https://www.instagram.com/ashu_endless_/"> <div id='instagram-icon' ></div> <p>ashu_endless_</p> </a>
     </div>
  </section>
    </>
    
  );
}

export default App;
