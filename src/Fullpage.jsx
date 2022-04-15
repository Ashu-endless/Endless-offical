import React from 'react';
// import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import App from './App';
import './App.css';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <App/>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
// ReactDOM.render(<Fullpage />, document.getElementById('react-root'));