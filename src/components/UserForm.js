/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import useInput from '../Hook/useInput';

const UserForm = () => {
  const [firstName, bindFirstName, resetFistName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFistName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last name</label>
          <input type="text" {...bindLastName} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
