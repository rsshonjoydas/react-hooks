/* eslint-disable import/no-cycle */
import React from 'react';
import ComponentF from './ComponentF';

const ComponentE = () => (
  <div>
    <ComponentF />
  </div>
);

export default ComponentE;
