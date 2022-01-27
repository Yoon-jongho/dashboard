import React from 'react';
import Chart from '../../components/chart/Chart';
import Featuredinfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';

const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart data={userData} title={'User Analytics'} />
    </div>
  );
};

export default Home;
