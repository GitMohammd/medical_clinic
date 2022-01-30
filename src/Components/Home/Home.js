import React from 'react';
import './Home.css'
import Bannar from '../Bannar/Bannar';
import NavBar from '../NavBar/NavBar';
import BannarCard from '../BannarCard/BannarCard';
import Service from '../Service/Service';

const Home = () => {
  return (
    <>
      <div className="home">
        <NavBar></NavBar>
        <Bannar></Bannar>
        <BannarCard></BannarCard>
        <Service></Service>
      </div>
    </>
  );
};

export default Home;