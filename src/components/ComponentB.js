/* eslint-disable import/no-cycle */
import ComponentD from './ComponentD';

const ComponentB = () => (
  <div>
    <ComponentD />
  </div>
);

export default ComponentB;
