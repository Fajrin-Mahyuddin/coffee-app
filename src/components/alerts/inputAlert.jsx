import React from 'react';
import { CloseCircleFilled } from '@ant-design/icons'

const InputAlert = ({ alert: { type, body }, onClick }) => {
	return (
		<div className={`alert-${type}`}>
			<span className="alert-body">
				{body}
			</span>
			<CloseCircleFilled onClick={onClick} />
		</div>
	)
}

export default InputAlert;
