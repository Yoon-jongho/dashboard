import React from 'react';
import Chart from '../../components/chart/Chart';
import Featuredinfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart data={userData} title={'User Analytics'} />
      <div className="homeWigets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
