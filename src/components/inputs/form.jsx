import React from 'react';
import { InputAlert } from 'components'

const Form = ({ onSubmit, className, alert, children, closeAlert }) => {
	return (
		<form onSubmit={onSubmit} className={`form-wrapper ${className}`}>
			{ alert?.type && <InputAlert alert={{ ...alert }} onClick={closeAlert} />}
			{children}
		</form>
	)
}

export default Form;
