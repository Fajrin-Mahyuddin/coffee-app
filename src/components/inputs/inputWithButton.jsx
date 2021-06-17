import React from 'react'

const InputWithButton = ({ className, disabled, Icon, ...props }) => {
	return (
		<div className={className}>
			<input disabled={disabled} type="text" {...props} />
			<button disabled={disabled} type="button">
				<Icon />
			</button>
		</div>
	)
}

export default InputWithButton;
