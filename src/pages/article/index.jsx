import React from 'react';
import { StandartLayout } from 'layout';

const ArticleList = () => {
	return (
		<StandartLayout>
			<div className="article-container">
				<div className="article-cover">
					<div className="article-cover__paragraph">
						Lorem ipsum dolor sit amet.
					</div>
					<div className="article-cover__img">
						<img src="# " alt="article-cover__img" />
					</div>
				</div>
				<div className="article-item">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius consequatur saepe ut ab, tenetur non natus odio facilis voluptate, laborum soluta! Quod distinctio, aliquam possimus, laboriosam tempora fuga ad laborum nisi reprehenderit facilis minima eius harum dignissimos! Ex alias, optio recusandae, minima eligendi impedit beatae facere accusantium sit adipisci cumque deleniti architecto quia vitae delectus asperiores. Provident eligendi rerum placeat pariatur cum impedit fugiat consequatur alias architecto! Amet dolore iusto reprehenderit cupiditate reiciendis magni ea earum quaerat facilis neque ducimus repellat corporis, assumenda eligendi in quos eum provident. Aliquid placeat quasi dolorem saepe incidunt explicabo soluta cumque deleniti quas cupiditate, reiciendis facilis, mollitia porro obcaecati hic voluptas repellat ad in. Doloribus commodi dignissimos vel ipsum totam molestiae enim necessitatibus quae sint laborum, placeat aperiam maxime, numquam magnam doloremque voluptates unde nobis sit pariatur, iusto aspernatur quas natus earum. Accusamus tempora rerum, nemo neque non odio! Voluptas eum dolorem et eaque, ex praesentium, dolores voluptate ipsam sunt debitis nulla a nobis libero deserunt nihil commodi sequi? Maiores in, tempora, iure, incidunt sed alias ea harum cupiditate ut architecto aperiam. Quisquam eligendi accusamus ullam temporibus suscipit consectetur repudiandae asperiores aut dolore, doloribus minus aliquam, vel quasi vero rerum beatae ratione cum.
					<div className="article-img">
						<img src="# " alt="article-one" />
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
		</StandartLayout>
	)
}

export default ArticleList;
