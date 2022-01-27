import React from 'react';
import './sidebar.css';
import { LineStyle, Timeline, TrendingUp, PersonOutline, AttachMoney, Assessment, Email, DynamicFeed, ChatBubble, Photo, Report, InsertEmoticon } from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonOutline />
              Users
            </li>
            <li className="sidebarListItem">
              <AttachMoney />
              Transactions
            </li>
            <li className="sidebarListItem">
              <Assessment />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Email />
              E-mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubble />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Photo />
              Photo
            </li>
            <li className="sidebarListItem">
              <Report />
              Loss
            </li>
            <li className="sidebarListItem">
              <InsertEmoticon />
              Claim
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
