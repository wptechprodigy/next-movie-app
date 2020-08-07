import React from 'react';
import Modal from './modal';

const SideMenu = ({ name, categories }) => {
  return (
    <>
      <Modal />
      <h1 className="my-4">{name}</h1>
      <div className="list-group">
        {categories.map((category) => (
          <a href="#" key={category.id} className="list-group-item">
            {category.genre}
          </a>
        ))}
      </div>
    </>
  );
};

export default SideMenu;
