import React from 'react';
import StandartLayout from 'layout/standart';
import { DoubleRightOutlined, RightOutlined } from '@ant-design/icons';

const SaleDetail = () => {
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div className="sale-detail">
					<div className="breadcrumbs">
						<DoubleRightOutlined />
						<a href="# ">Dashboard</a>
						<RightOutlined />
						<a href="# ">Guest</a>
						<RightOutlined />
						<a href="# ">Sales</a>
					</div>
					detail sale item
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export default SaleDetail;
