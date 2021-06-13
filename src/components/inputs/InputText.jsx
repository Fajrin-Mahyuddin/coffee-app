/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';

const InputText = ({
  id,
  label,
  Icons,
  inputType,
  error,
  ...props
}, ref) => {
  return (
    <div className={`input-wrapper ${inputType}`}>
      <label htmlFor={id}>
        {label}
      </label>
      {Icons && <Icons className="form-icon" />}
      <input
        id={id}
        type="text"
        autoComplete="off"
        ref={ref}
        className={`input ${error && 'error'}`}
        {...props}
      />
    </div>
  );
};

export default forwardRef(InputText);
