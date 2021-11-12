/* eslint-disable import/no-cycle */
import ComponentE from './ComponentE';

const ComponentC = () => (
  <div>
    <ComponentE />
  </div>
);

export default ComponentC;
