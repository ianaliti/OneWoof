import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./sidebar.module.css";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="sidebar">
      {!sidebarOpen ? (
        <div className="sidebar_icon" onMouseEnter={handleSidebarOpen}>
          <FontAwesomeIcon icon="fas fa-bars"></FontAwesomeIcon>
        </div>
      ) : (
        <>
          <div className="sidebar_icon" onMouseLeave={handleSidebarClose}>
            <FontAwesomeIcon icon="fas fa-times"></FontAwesomeIcon>
          </div>
          <div className="sidebar_items">
            <div className="sidebar_item">
              <FontAwesomeIcon icon="fas fa-home"></FontAwesomeIcon>
              <p>Home</p>
            </div>
            <div className="sidebar_item">
              <FontAwesomeIcon icon="fas fa-user"></FontAwesomeIcon>
              <p>About</p>
            </div>
            <div className="sidebar_item">
              <FontAwesomeIcon icon="fas fa-envelope"></FontAwesomeIcon>
              <p>Contact</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;