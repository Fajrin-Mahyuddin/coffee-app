import React from 'react';
import { StandartLayout } from 'layout';
import { ArticleSaly, Cupboard } from 'image'
import { SubmitBtn } from 'components';

const ArticleList = () => {
	return (
		<StandartLayout>
			<div className="container">
				<div className="article-cover">
					<div className="article-cover__paragraph">
						<h1>Good day starts with <strong> coffee</strong></h1>
						<p>All about coffee that you should know - <i>coffee lovers</i>.</p>
						<SubmitBtn label="Read more" className="btn sm-btn primary-btn mr-5" />
						<SubmitBtn label="Need a cup of coffee ?" className="btn sm-btn default-btn" />
					</div>
					<div className="article-cover__img">
						<img className="article-cover__second-img" src={Cupboard} alt="article-cover" />
						<img className="article-cover__main-img" src={ArticleSaly} alt="article-cover" />
					</div>
				</div>
				<div className="article-wrapper">
					<div className="article-item">
						<div className="article-img">
							<img src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" alt="article-one" />
						</div>
						<div className="article-content">
							<div className="article-head">
								Title
							</div>
							<div className="article-body">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim asperiores placeat. Lorem ipsum dolor sit amet.
							</div>
							<div className="article-footer">
								<button>Oke</button>
							</div>
						</div>
					</div>
					<div className="article-item">
						<div className="article-img">
							<img src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" alt="article-one" />
						</div>
						<div className="article-content">
							<div className="article-head">
								Title
							</div>
							<div className="article-body">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim asperiores placeat. Lorem ipsum dolor sit amet.
							</div>
							<div className="article-footer">
								<button>Oke</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StandartLayout>
	)
}

export default ArticleList;
