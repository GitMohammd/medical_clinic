import React from 'react';
import './Home.css'
import Bannar from '../Bannar/Bannar';
import NavBar from '../NavBar/NavBar';
import BannarCard from '../BannarCard/BannarCard';

const Home = () => {
  return (
    <>
      <div className="home">
        <NavBar></NavBar>
        <Bannar></Bannar>
        <BannarCard></BannarCard>
      </div>
    </>
  );
};

export default Home;