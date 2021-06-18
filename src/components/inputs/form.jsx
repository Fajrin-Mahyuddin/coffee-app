import React from 'react';

const Form = ({ onSubmit, className, children }) => {
	return (
		<form onSubmit={onSubmit} className={`form-wrapper ${className}`}>
			{/* { alert?.type && <InputAlert alert={{ ...alert }} onClick={closeAlert} />} */}
			{children}
		</form>
	)
}

export default Form;
