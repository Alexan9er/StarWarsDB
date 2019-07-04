import React from 'react';

import './row.css';

const Row = ({ left, right }) => (
  <div className="row">
    <div className="col-lg-5">{left}</div>
    <div className="col-lg-7">{right}</div>
  </div>
);

export default Row;
