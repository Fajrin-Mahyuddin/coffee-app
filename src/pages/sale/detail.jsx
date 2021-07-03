import React, { useRef } from 'react';
import StandartLayout from 'layout/standart';
import { DoubleRightOutlined, RightOutlined, StarFilled, PlusSquareFilled } from '@ant-design/icons';
import SubmitBtn from 'components/buttons/submitBtn';
import { ifFooterPriceScrolled } from 'utils/scrolled';

const SaleDetail = () => {
	const refFooterPrice = useRef();
	window.addEventListener('scroll', () => ifFooterPriceScrolled(refFooterPrice))
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
					<div className="sale-item">
						<div className="sale-item__img">
							<img src="https://images.unsplash.com/photo-1616662707932-350e6e599ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80" alt="sale-item-img" />
						</div>
						<div className="sale-item__desc">
							<div className="sale-item__desc-head">
								Moka Pos Coffee
							</div>
							<div className="sale-item__decs-price">
								<span className="label">0%</span>
								<span>Rp 120.000</span>
							</div>
							<div className="sale-item__desc-review">
								<StarFilled />
								<StarFilled />
								<StarFilled />
								<StarFilled />
								<span className="label label-sm label-primary">Best Seller</span>
							</div>
							<div className="sale-item__desc-paragraph">
								<div>Kondisi: Baru</div>
								<div>Berat: 1000 Gram</div>
								<div>Category: 1000 Gram</div>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis voluptate architecto quia, iusto ipsam minus quod non iste possimus illum officia atque iure natus doloribus voluptatum ab quae soluta, tempore exercitationem qui saepe quasi nihil inventore. Veniam minus facere id labore optio, omnis corporis vero facilis quos architecto quisquam veritatis officiis provident inventore placeat excepturi qui reiciendis at quam aspernatur sint numquam debitis soluta? Repudiandae distinctio optio sit ut magnam? At laborum aspernatur ullam recusandae, atque vel eum deleniti. Deserunt vitae molestiae quaerat facilis minima ad, earum numquam aut nobis natus aperiam? Optio, sed dolores recusandae laborum adipisci vitae in?</p>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ullam, consequatur officia quo obcaecati molestias ducimus tenetur fugiat autem dolor veritatis facilis? Adipisci incidunt vero cumque, veniam temporibus rem at blanditiis voluptatum molestias, quibusdam autem animi quos reprehenderit aut necessitatibus eaque fugiat odit quas excepturi pariatur, libero nobis. Architecto numquam quaerat suscipit eveniet, nemo odio, animi minima aliquid dicta cum ad iste iure consectetur cumque similique ratione maxime consequatur. Quos nostrum explicabo ipsum ea aliquid fugiat et id minus sit ipsa aspernatur, quasi laborum hic culpa deserunt similique quod tenetur impedit deleniti at pariatur quibusdam libero neque voluptates! Reprehenderit minima reiciendis ab nemo aliquam nesciunt. Officia minus reprehenderit recusandae et velit animi molestias eaque? Eveniet cupiditate atque libero temporibus quia corporis. Ullam, itaque voluptatibus id dignissimos consequatur porro aperiam ipsam sed in illo. Vitae odit ad beatae aut porro incidunt voluptatum velit architecto. Ex aliquid ea harum asperiores veritatis numquam velit, labore iure. Atque aut iusto blanditiis obcaecati facere deserunt laudantium fuga animi, ullam asperiores placeat, aperiam expedita dolore? Cupiditate, cum? Nam, hic doloremque ipsum est consequatur labore eius fugiat, repudiandae, delectus sit illo possimus consequuntur! Quia autem esse distinctio corrupti quisquam totam ipsum eaque sequi, nobis quas sed modi.</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus impedit autem dolores quasi, delectus ea illum minima earum fugit natus rem obcaecati animi sit. Impedit non a magni doloremque adipisci perspiciatis dicta, vero sed excepturi expedita minus molestiae quam sunt provident velit et qui ab saepe aspernatur explicabo autem odio rem? Cumque optio placeat numquam sapiente quo et accusamus sequi nobis quaerat deserunt corporis, inventore, explicabo consectetur voluptate laudantium labore iure, autem totam animi aut! Ex iste accusantium fugit necessitatibus exercitationem quas adipisci tempora placeat, impedit, quod ipsum. Totam fugit maiores tenetur quam ea quidem corporis! Pariatur quidem odit dignissimos? Optio tempore repudiandae, aperiam tenetur reiciendis sit omnis in magnam, suscipit ipsum veritatis iure cupiditate alias modi labore fuga, non ad? Minima, quos. Quae sed laborum voluptates incidunt amet, reiciendis magni? Numquam necessitatibus rerum assumenda, enim est qui, doloribus tempora quibusdam modi officiis soluta ipsa! Corporis nostrum nesciunt autem amet omnis laborum iure voluptatibus magnam recusandae placeat quae necessitatibus eos quasi doloribus eum, sit itaque tempora odit. Aut sint laborum quasi dolores repellat enim ipsum quos! Reprehenderit dignissimos illo neque commodi, iste ipsam? Dolorum recusandae repellat dignissimos praesentium? Eius facilis odio quod. Facere similique et omnis blanditiis, repudiandae reprehenderit aspernatur aliquam perferendis impedit voluptatibus dolore deleniti, est recusandae dolorum? Praesentium veniam dolores mollitia omnis asperiores cumque consequatur rerum aut hic architecto ex iste assumenda porro velit sunt id, delectus, quos veritatis perferendis atque ipsum possimus, ducimus dolorum adipisci! Beatae quasi architecto explicabo laudantium deserunt eveniet repellat molestiae modi facere soluta natus ipsam quaerat ad qui magni fugiat officiis tenetur debitis rerum perspiciatis, culpa optio accusantium. Possimus reprehenderit odio veniam laboriosam, esse soluta dicta est officia ut perferendis harum facilis consectetur quidem dolorum unde repellendus eius rem enim similique itaque ex dignissimos adipisci blanditiis perspiciatis. Accusamus eaque ipsa cupiditate ducimus inventore!
								</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis animi officia. Voluptatibus, ex perferendis adipisci illum, voluptatum ipsa ut eaque velit nemo, repellendus ea sunt optio consequatur. Natus illum nemo similique nihil officiis, aliquid provident ipsum obcaecati reprehenderit porro laboriosam vero nisi quam nostrum voluptatem id molestias repellat consequatur error? Maiores, atque quia soluta officiis velit aliquam doloribus inventore perferendis, laborum suscipit numquam a culpa. Nobis, facere cupiditate ipsa temporibus voluptatibus magni impedit voluptatem ratione itaque, minus nemo! Provident consequuntur saepe, architecto est deleniti suscipit at similique maiores adipisci neque cum commodi? Quidem quibusdam expedita quasi, cumque quas saepe officia esse at quae provident, consectetur reprehenderit earum sed, voluptas culpa maiores laboriosam temporibus reiciendis necessitatibus deserunt atque eum? Perspiciatis possimus ducimus ad dolores. Corrupti modi molestiae, voluptates sequi autem accusamus porro magnam sed fugiat assumenda, veniam totam. Harum quod fugiat repudiandae, doloribus, sed quis saepe, ipsam eius laudantium eos in nobis optio error reprehenderit incidunt officiis dolorem perspiciatis atque commodi corporis alias iste? Quae natus consequatur, reprehenderit consectetur animi id velit pariatur. Quod, dolorem ipsam inventore culpa beatae minima eum animi doloribus voluptate modi ducimus. Magni consectetur nobis voluptatibus nam fugiat repudiandae ipsam, enim, illo dolor tenetur deleniti dicta magnam? Fuga repellat libero eaque labore illum odio aut molestias quis nulla alias laborum impedit quas, veritatis nemo architecto reprehenderit soluta eius. Inventore quas reprehenderit et assumenda doloribus possimus consequuntur totam tenetur consequatur, soluta cumque laboriosam excepturi, aliquam explicabo recusandae sint necessitatibus officia. Ut, nulla officia. Iusto nam, sequi voluptatem culpa excepturi earum quam dicta neque nemo fugit quia, odit accusamus ipsa blanditiis dolor ipsum, perspiciatis laudantium dolore quis alias itaque! Molestias, harum cum. Porro culpa assumenda sit exercitationem ipsum inventore. Obcaecati, corrupti eum iste temporibus dolor magni ipsa, tenetur illo accusamus vitae error? Debitis libero vel assumenda maiores eius?</p>
							</div>
							<div className="sale-item__desc-paragraph-tags">
								<span className="label label-sm label-primary">Machine</span>
								<span className="label label-sm label-info">Manual</span>
							</div>
							<div ref={refFooterPrice} className="sale-item__desc-footer">
								<div className="sale-item__total-order">
									<button><PlusSquareFilled /></button>
									<span>0</span>
									<button><PlusSquareFilled /></button>
								</div>
								<SubmitBtn label="Order" className="btn sm-btn success-btn" />
							</div>
						</div>
					</div>
					<div className="obstacle">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum possimus praesentium eos!
					</div>
				</div>
			</StandartLayout.Content>
		</StandartLayout>
	)
}

export default SaleDetail;
