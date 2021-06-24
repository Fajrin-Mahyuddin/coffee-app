import React from 'react'
import { StandartLayout } from 'layout'
import { Form, InputText, SubmitBtn, InputAlert } from 'components'
import { SendOutlined } from '@ant-design/icons'

const CreateOrder = () => {
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div className="create-order">
					<Form className="form-horizontal w-100" onSubmit={() => console.log("submit")}>
						<Form.Row>
							<Form.Column>
								<InputAlert alert={null} />
							</Form.Column>
						</Form.Row>
						<Form.Row>
							<Form.Column>
								<InputText classWrapper="display-column column-item" label="Jumlah pesanan" error={false} />
								<InputText classWrapper="display-column column-item" label="Harga" />
								<InputText classWrapper="display-column column-item" label="Jumlah" />
								<InputText classWrapper="display-column column-item" label="Jumlah" />
							</Form.Column>
							<Form.Column>
								<InputText classWrapper="display-column column-item" label="Jumlah pesanan" />
								<InputText classWrapper="display-column column-item" label="Harga" />
							</Form.Column>
						</Form.Row>
						<hr />
						<Form.Row>
							<Form.Column>
								<div>
									<SubmitBtn icon={SendOutlined} className="btn primary-btn md-btn" label="Order" />
								</div>
							</Form.Column>
						</Form.Row>
					</Form>
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export default CreateOrder;
