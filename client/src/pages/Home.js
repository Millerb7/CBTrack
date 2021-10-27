import React, { useState } from 'react';
import Input from '../components/Entry/Input';
import HomeNavbar from '../components/Navbars/HomeNavbar';
import Articles from '../components/Home/Articles';
import IntroModal from '../components/Home/IntroModal';

import 'bulma/css/bulma.css';
import '../index.css';

const styles = {
  body: {
    background: 'var(--dark)',
  }
};


const Home = () => {
  const [openModal, setModal] = useState(false);

  return (
    <div style={styles.body}>
      <HomeNavbar />
      <div  className="tile is-ancestor">
        <div className="tile is-parent box is-flex is-flex-direction-column is-align-items-center m-5">
        <h1 className="title is-size-1">CBTrack</h1>
        <h1 className="title is-size-3">Welcome to self help!</h1>
        <h3 className="title is-size-6">Web app is a work in progress still :)</h3>
        <button id="introBtn" className="title is-size-5 p-1" onClick={() => setModal(true)}>Introduction to CBT</button>
        {openModal && <IntroModal closeModal = {setModal} />}
        <div>
          <Articles />
        </div>
      </div>
    </div>
    <Input />
    </div>
  );
};

export default Home;