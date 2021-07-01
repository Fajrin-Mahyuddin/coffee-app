import { DoubleRightOutlined, HeartFilled, RightOutlined, StarFilled } from '@ant-design/icons';
import { SubmitBtn } from 'components';
import { Iphone2 } from 'image';
import { CoverSale } from 'image/svg';
import { StandartLayout } from 'layout';
import React from 'react';

const SalePage = () => {
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div className="sale-wrapper">
					<div className="breadcrumbs">
						<DoubleRightOutlined />
						<a href="# ">Dashboard</a>
						<RightOutlined />
						<a href="# ">Guest</a>
						<RightOutlined />
						<a href="# ">Sales</a>
					</div>
					<div className="sale-banner display-column">
						<div className="sale-banner__text">
							<h3>Welcome to Coffee Shop</h3>
							<p>Best online shop</p>
							<SubmitBtn className="btn md-btn info-btn" label="Get Started" />
						</div>
						<div className="sale-banner__img">
							<img src={Iphone2} alt="sale-img" />
						</div>
					</div>
					<div className="sale-cover">
						<div className="sale-cover__main">
							<div className="sale-cover__main-desc">
								<h2>One Sale Many Things</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dignissimos quas, quis autem tenetur ab.</p>
								<SubmitBtn className="btn md-btn info-btn" label="Get Started" />
							</div>
							<div className="sale-cover__main-img">
								<img src={CoverSale} alt="cover img" />
							</div>
						</div>
						<div className="sale-cover__main">
							<div className="sale-cover__main-desc">
								<h2>One Sale Many Things</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dignissimos quas, quis autem tenetur ab.</p>
								<SubmitBtn className="btn md-btn info-btn" label="Get Started" />
							</div>
							<div className="sale-cover__main-img">
								<img src={CoverSale} alt="cover img" />
							</div>
						</div>
					</div>
					<div className="sale-list">

						<div className="sale-item">
							<div className="sale-item__img">
								<img src="https://images.unsplash.com/photo-1565452344518-47faca79dc69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="img-item" />
								<HeartFilled />
							</div>
							<div className="sale-item__content">
								<div className="sale-item__content-title">
									Kris Coffee Maker 1.5 Liter
								</div>
								<div className="sale-item__content-review display-horizontal">
									<div className="start">
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "grey" }} />
										<StarFilled style={{ color: "grey" }} />
									</div>
									<span className="label label-sm label-primary">Best</span>
								</div>
								<div className="sale-item__content-desc">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor ipsum asperiores.
								</div>
								<div className="sale-item__content-footer display-horizontal">
									<div className="content-price">
										<span className="label label-sm label-warning label-transparent">0%</span>
										<span>Rp 120.0000</span>
									</div>
									<div className="content-action">
										<SubmitBtn label="Order" className="btn sm-btn success-btn" />
									</div>
								</div>
							</div>
						</div>

						<div className="sale-item">
							<div className="sale-item__img">
								<img src="https://images.unsplash.com/photo-1616662707703-b4e4ab08e59e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80" alt="img-item" />
								<HeartFilled />
							</div>
							<div className="sale-item__content">
								<div className="sale-item__content-title">
									Moka Pot Red - Coffee Maker
								</div>
								<div className="sale-item__content-review display-horizontal">
									<div className="start">
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "orange" }} />
										<StarFilled style={{ color: "grey" }} />
									</div>
									<span className="label label-sm label-primary">Best</span>
								</div>
								<div className="sale-item__content-desc">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor ipsum asperiores. Lorem ipsum dolor sit amet consectetur.
								</div>
								<div className="sale-item__content-footer display-horizontal">
									<div className="content-price">
										<span className="label label-sm label-warning label-transparent">0%</span>
										<span>Rp 120.0000</span>
									</div>
									<div className="content-action">
										<SubmitBtn label="Order" className="btn sm-btn success-btn" />
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export default SalePage