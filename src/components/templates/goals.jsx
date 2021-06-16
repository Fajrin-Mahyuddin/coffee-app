import React from 'react';

const Goals = () => {
	return (
		<div className="card-item">
			<span className="title-card">
				Goals
				{' '}
				<PlusOutlined />
			</span>
			<LeftOutlined className="left-goals" />
			<RightOutlined className="right-goals" />
			<div className="card-body">
				<div className="goals-container">
					<div className="goals card-shadow">
						<div className="head-goals flex-columns">
							<span className="price">
								IDR 5000
							</span>
							<span className="date">23/02/2020</span>
						</div>
						<div className="footer-goals">
							<img src={iconsMountain} alt="icon-one" />
							Holiday
						</div>
					</div>
					<div className="space" />
					<div className="goals card-shadow">
						<div className="head-goals flex-columns">
							<span className="price">
								IDR 5000
							</span>
							<span className="date">23/02/2020</span>
						</div>
						<div className="footer-goals">
							<img src={iconsMountain} alt="icon-one" />
							Holiday
						</div>
					</div>
					<div className="space" />
					<div className="goals card-shadow">
						<div className="head-goals flex-columns">
							<span className="price">
								IDR 5000
							</span>
							<span className="date">23/02/2020</span>
						</div>
						<div className="footer-goals">
							<img src={iconsMountain} alt="icon-one" />
							Holiday
						</div>
					</div>
					<div className="space" />
					<div className="goals card-shadow">
						<div className="head-goals flex-columns">
							<span className="price">
								IDR 5000
							</span>
							<span className="date">23/02/2020</span>
						</div>
						<div className="footer-goals">
							<img src={iconsMountain} alt="icon-one" />
							Holiday
						</div>
					</div>
					<div className="space" />
					<div className="goals card-shadow">
						<div className="head-goals flex-columns">
							<span className="price">
								IDR 5000
							</span>
							<span className="date">23/02/2020</span>
						</div>
						<div className="footer-goals">
							<img src={iconsMountain} alt="icon-one" />
							Holiday
						</div>
					</div>
					<div className="space" />
					<div className="goals card-shadow">
						<div className="head-goals flex-columns">
							<span className="price">
								IDR 5000
							</span>
							<span className="date">23/02/2020</span>
						</div>
						<div className="footer-goals">
							<img src={iconsMountain} alt="icon-one" />
							Holiday
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Goals
