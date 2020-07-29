import React from 'react';

const SideMenu = ({name}) => {
  return (
    <>
      <h1 className="my-4">{name}</h1>
      <div className="list-group">
        <a href="#" className="list-group-item">
          Category 1
        </a>
        <a href="#" className="list-group-item">
          Category 2
        </a>
        <a href="#" className="list-group-item">
          Category 3
        </a>
      </div>
    </>
  );
};

export default SideMenu;
