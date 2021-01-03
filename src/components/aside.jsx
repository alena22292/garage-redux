import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{ backgroundImage: "url('/assets/images/Auto-Repair.jpg')" }}></div>
      <img className="logo" src="/assets/images/repair-shop.svg" alt="logo" />
      <h1>{props.garage}</h1>
      <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictionnal).</p>
      {props.children}
    </div>
  );
};

export default Aside;
