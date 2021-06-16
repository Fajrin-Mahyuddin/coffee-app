import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const SubmitBtn = ({ type, label, Icons, loading, ...props }) => {
	return (
		<button type={type} {...props}>
			{loading ?
				<LoadingOutlined spin={true} /> :
				<>
					{Icons && <Icons />} {label}
				</>
			}
		</button >
	)
}

export default SubmitBtn;
