import React from 'react';
import './widgetSm.css';
import { Visibility } from '@material-ui/icons';

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/267415/pexels-photo-267415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Yoon</span>
            <span className="widgetSmUserName">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/267415/pexels-photo-267415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Song</span>
            <span className="widgetSmUserName">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/267415/pexels-photo-267415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Kim</span>
            <span className="widgetSmUserName">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
