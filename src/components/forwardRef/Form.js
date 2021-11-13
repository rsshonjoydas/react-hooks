import React, { useEffect, useRef } from 'react';
import Input from './Input';

const Form = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Input ref={inputRef} type="text" placeholder="enter something" />
    </div>
  );
};

export default Form;
