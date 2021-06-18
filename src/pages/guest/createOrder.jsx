import React from 'react'
import { StandartLayout } from 'layout'
import { Form, InputText } from 'components'

const CreateOrder = () => {
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div className="create-order">
					<Form onSubmit={() => console.log("submit")} className="form-vertical">
						<InputText className="input-horizontal" />
						<InputText />
						<InputText />
					</Form>
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export default CreateOrder;
