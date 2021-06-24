import React from 'react';
import { StandartLayout } from 'layout';
import { useHistory } from 'react-router-dom';

const Guest = () => {
	const history = useHistory();
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<>
					<div className="service">
						<div className="service-item">
							<div className="image-cover">
								<img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="express-packages" />
							</div>
							<div className="desc">
								<div className="desc-text">
									<h5>Express</h5>
									<p>Lorem ipsum</p>
								</div>
								<div className="footer-desc">
									<ul>
										<li className="label-sm label-info">Cuci</li>
										<li className="label-sm label-info">Setrika</li>
										<li className="label-sm label-info">Perfume</li>
										<li className="label-sm label-info">Perfume</li>
										<li className="label-sm label-info">Perfume</li>
										<li className="label-sm label-info">Perfume</li>
										<li className="label-sm label-info">Perfume</li>
									</ul>
									<div className="select-price">
										<span>IDR <strong>15000</strong> /kg</span>
										<button onClick={() => history.push('/order/create')} type="button" className="btn sm-btn primary-btn">Select</button>
									</div>
								</div>
							</div>
						</div>
						<div className="service-item">
							<div className="image-cover">
								<img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="express-packages" />
							</div>
							<div className="desc">
								<div className="desc-text">
									<h5>Express</h5>
									<p>Lorem ipsum</p>
								</div>
								<div className="footer-desc">
									<ul>
										<li className="label-sm label-info">Cuci</li>
										<li className="label-sm label-info">Setrika</li>
										<li className="label-sm label-info">Perfume</li>
										<li className="label-sm label-info">Perfume</li>
										<li className="label-sm label-info">Perfume</li>
										<li className="label-sm label-info">Perfume</li>
										<li className="label-sm label-info">Perfume</li>
									</ul>
									<div className="select-price">
										<span>IDR <strong>15000</strong> /kg</span>
										<button onClick={() => history.push('/order/create')} type="button" className="btn sm-btn primary-btn">Select</button>
									</div>
								</div>
							</div>
						</div>
						<div className="service-item">
							<div className="image-cover">
								<img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="express-packages" />
							</div>
							<div className="desc">
								<div className="desc-text">
									<h5>Express</h5>
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae obcaecati odit alias sed itaque saepe! Odit tempora distinctio aperiam dolores maiores soluta excepturi autem, hic esse facilis, quos porro. Debitis, consequatur excepturi! Consequuntur corporis repellendus ut ex voluptatem sapiente!</p>
								</div>
								<div className="footer-desc">
									<div className="tags-item">
										<ul>
											<li className="label-sm label-info">Cuci</li>
											<li className="label-sm label-info">Setrika</li>
											<li className="label-sm label-info">Perfume</li>
											<li className="label-sm label-info">Perfume</li>
										</ul>
									</div>
									<div className="select-price">
										<span>IDR <strong>15000</strong> /kg</span>
										<button type="button" className="btn sm-btn primary-btn">Select</button>
									</div>
								</div>
							</div>
						</div>
						<div className="service-item">
							<div className="image-cover">
								<img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="express-packages" />
							</div>
							<div className="desc">
								<div className="desc-text">
									<h5>Express</h5>
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, aliquid. Lorem ip!</p>
								</div>
								<div className="footer-desc">
									<div className="tags-item">
										<ul>
											<li className="label-sm label-info">Cuci</li>
											<li className="label-sm label-info">Setrika</li>
											<li className="label-sm label-info">Perfume</li>
											<li className="label-sm label-info">Perfume</li>
										</ul>
									</div>
									<div className="select-price">
										<span>IDR <strong>15000</strong> /kg</span>
										<button type="button" className="btn sm-btn primary-btn">Select</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="title mt-20">
						History
						<hr />
					</div>
					<div className="service">
						<div className="service-item">
							<div className="image-cover">
								<img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="express-packages" />
							</div>
							<div className="desc">
								<div className="desc-text">
									<h5>Express</h5>
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, aliquid. Lorem ip!</p>
								</div>
								<div className="footer-desc">
									<div className="tags-item">
										<ul>
											<li className="label-sm label-info">Cuci</li>
											<li className="label-sm label-info">Setrika</li>
											<li className="label-sm label-info">Perfume</li>
											<li className="label-sm label-info">Perfume</li>
										</ul>
									</div>
									<div className="select-price">
										<span>IDR <strong>15000</strong> /kg</span>
										<button type="button" className="btn sm-btn primary-btn">Select</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export default Guest;
