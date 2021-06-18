import React, { useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const SubmitBtn = ({ type, label, icon: Icon, loading, ...props }) => {
	return (
		<button type={type} {...props}>
			{loading ?
				<LoadingOutlined spin={true} /> :
				<>
					{Icon && <Icon />} {label}
				</>
			}
		</button >
	)
}

export default SubmitBtn;
