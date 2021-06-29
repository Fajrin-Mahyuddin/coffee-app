import React from 'react';
import StandartLayout from 'layout/standart';
import { DollarTwoTone, EyeOutlined, FieldTimeOutlined, HeatMapOutlined, ReadOutlined, RightOutlined, ShopFilled, SignalFilled } from '@ant-design/icons';

const DetailArticle = () => {
	return (
		<StandartLayout>
			<StandartLayout.Content>
				<div className="article-detail">
					<div className="article-detail__breadcrumbs">
						<ReadOutlined />
						<a href="# ">satu</a>
						<RightOutlined />
						<a href="# ">dua</a>
						<RightOutlined />
						<a href="# ">tiga</a>
					</div>
					<div className="article-detail__img">
						{/* <hr /> */}
						<img src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" />
					</div>
					<div className="article-detail__content">
						<div className="article-detail__content-head display-horizontal">
							<div className="author">
								<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="author" />
								<span>Roroa Zoro</span>
							</div>
							<span> <EyeOutlined /> 222</span>
						</div>
						<hr />
						<div className="article-detail__content-title">
							Lorem ipsum dolor sit amet consectetur adipisicing.
							<span><SignalFilled /> Majene - <FieldTimeOutlined /> Sabtu, 20 Juni 2020</span>
						</div>
						<div className="article-detail__content-body">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis nam ab totam molestias exercitationem qui ipsum nisi voluptatibus recusandae sed voluptatem eos illum praesentium, pariatur distinctio numquam commodi inventore delectus optio, neque consequuntur, aliquam officia. Sunt enim esse neque tempora eaque ea, quasi modi nostrum delectus ipsam? Accusantium voluptatibus fugit asperiores possimus laborum velit, soluta quae ut delectus animi et qui, ipsum magni! Quibusdam quam itaque, sed laborum ab voluptatibus excepturi.
								<img src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="content-imt" width="100%" height="50%" style={{ margin: "20px 0" }} />
								<br />
								corrupti aut nesciunt quis. Laborum, eum modi officia recusandae, doloribus eligendi accusamus ratione aperiam corrupti officiis, optio porro perferendis et similique vitae maiores repellat eos ipsam earum! Voluptatibus exercitationem obcaecati eius nemo atur similique voluptatem quas velit minima voluptatibus, totam neque vero aperiam consectetur voluptatum fugit necessitatibus ipsa, error itaque odio maxime? Ea ab voluptatum delectus repellendus velit officia? Vitae similique impedit fuga ullam?
							</p>
						</div>
						<div className="article-detail__content-footer">
							<div className="article-detail__share-sosial-media display-horizontal">
								<ShopFilled />
								<ShopFilled />
								<ShopFilled />
							</div>
							<div className="article-detail__comments">
								blabla
							</div>
						</div>
					</div>
					<div className="article-detail__side-content">
						<div>
							side content
						</div>
					</div>
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export default DetailArticle
