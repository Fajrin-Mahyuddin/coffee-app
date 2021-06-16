import React from 'react'

const InputWithButton = ({ Icon, ...props }) => {
	return (
		<>
			<input type="text" {...props} />
			<button type="button">
				<Icon />
			</button>
		</>
	)
}

export default InputWithButton;
