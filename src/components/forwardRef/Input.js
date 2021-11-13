import React from 'react';

const Input = ({ type, placeholder }, ref) => (
  <input ref={ref} type={type} placeholder={placeholder} />
);

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
