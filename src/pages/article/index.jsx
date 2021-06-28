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
							<img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="article-one" />
						</div>
						<div className="article-content">
							<div className="article-category">
								<span>Productivity</span>
								<span>3 days ago</span>
							</div>
							<div className="article-head">
								Perjalanan Kopi Sebelum Sampai ke Cangkirmu
							</div>
							<div className="article-body">
								Kopi memiliki perjalanan panjang sebelum kita nikmati. Awalnya kopi ditanam oleh petani. Saat panen petani memetik cherry kopi (buah kopi) dan memisahkan bijinya dari buahnya. Ada beberapa proses yang dilakukan dalam tahap ini ada wet process, honey process dan lain-lain. Setelah biji kopi dan buahnya terpisah maka biji kopi yang mentah harus dijemur beberapa waktu sampai kadar airnya berada di tingkat yang telah ditentukan. Setelah itu green bean atau biji kopi hijau ini dijual ke roaster (penyangrai kopi) atau perusahaan yang mengolah sendiri biji hijau mereka.

								Green bean siap disangrai (roasting) sesuai keinginan atau karakteristik bijinya oleh roaster. Tidak semua biji mampu disangrai medium atau dark karena setiap biji memiliki karakteristik masing-masing. Setelah disangrai maka biji kopi tersebut siap diolah barista menjadi minuman. Tetapi sebelumnya harus digiling dahulu sesuai permintaan. Setelah digiling bubuk kopi siap dinikmati menjadi aneka minuman nikmat.
							</div>
							<div className="article-footer">
								<div className="author">
									<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="author" />
									<span>Roroa Zoro</span>
								</div>
								<a href="# ">Read more</a>
							</div>
						</div>
					</div>
					<div className="article-item">
						<div className="article-img">
							<img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="article-two" />
						</div>
						<div className="article-content">
							<div className="article-category">
								<span>General</span>
								<span>3 days ago</span>
							</div>
							<div className="article-head">
								Kopi Memiliki Beragam Rasa
							</div>
							<div className="article-body">
								Well, ‘beragam rasa’ yang dimaksud di sini adalah after taste. After taste adalah flavour atau rasa yang tertinggal di mulut pada saat meneguk kopi. Mungkin kamu belum tahu kalau kopi mampu memberikan aneka after taste pada saat diminum. Tak semua kopi memiliki karakteristik sama terutama saat dinikmati melalui metode manual brewing. Ada kopi yang after taste-nya nutty, cocoa atau justru karamel. Ada juga yang after taste-nya jeruk atau bisa juga stroberi. Kenapa bisa demikian? Itu tergantung kontur tanah dan di mana kopi itu berasal dan di mana kopi itu ditanam. Kopi adalah tanaman unik yang ternyata juga bisa menyerap ‘rasa’ dari tanaman yang ada di dekatnya. Keunikannya ini menjadikan kopi istimewa. Kini banyak para ahli kopi yang mencari kopi-kopi unik di seluruh dunia untuk menemukan after taste-nya.
							</div>
							<div className="article-footer">
								<div className="author">
									<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="author" />
									<span>Fajrin Mahyuddin</span>
								</div>
								<a href="# ">Read more</a>
							</div>
						</div>
					</div>
					<div className="article-item">
						<div className="article-img">
							<img src="https://images.unsplash.com/photo-1515442261605-65987783cb6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="article-three" />
						</div>
						<div className="article-content">
							<div className="article-category">
								<span>Kopi</span>
								<span>3 days ago</span>
							</div>
							<div className="article-head">
								Kopi Tak Melulu Hitam dan Pahit
							</div>
							<div className="article-body">
								Di mindset kebanyakan masyarakat Indonesia kopi haruslah hitam dan pahit. Padahal seharusnya tidak begitu. Robusta yang disangrai dengan gelap tentulah memberi pahit yang luar biasa dahsyat. Kehitaman dan kepahitan tingkat kopi berasal dari proses penyangraiannya (roasting). Semakin lama biji kopi disangrai maka akan semakin pahit dan hitamlah kopi tersebut. Ada tiga tingkat proses penyangraian yaitu light, medium dan dark. Sebaiknya kopi tidak disangrai terlalu dark karena akan menghilangkan karakteristik biji kopi tersebut.
							</div>
							<div className="article-footer">
								<div className="author">
									<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="author" />
									<span>Naruto</span>
								</div>
								<a href="# ">Read more</a>
							</div>
						</div>
					</div>
					<div className="article-item">
						<div className="article-img">
							<img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="article-two" />
						</div>
						<div className="article-content">
							<div className="article-category">
								<span>General</span>
								<span>3 days ago</span>
							</div>
							<div className="article-head">
								Kopi Memiliki Beragam Rasa
							</div>
							<div className="article-body">
								Well, ‘beragam rasa’ yang dimaksud di sini adalah after taste. After taste adalah flavour atau rasa yang tertinggal di mulut pada saat meneguk kopi. Mungkin kamu belum tahu kalau kopi mampu memberikan aneka after taste pada saat diminum. Tak semua kopi memiliki karakteristik sama terutama saat dinikmati melalui metode manual brewing. Ada kopi yang after taste-nya nutty, cocoa atau justru karamel. Ada juga yang after taste-nya jeruk atau bisa juga stroberi. Kenapa bisa demikian? Itu tergantung kontur tanah dan di mana kopi itu berasal dan di mana kopi itu ditanam. Kopi adalah tanaman unik yang ternyata juga bisa menyerap ‘rasa’ dari tanaman yang ada di dekatnya. Keunikannya ini menjadikan kopi istimewa. Kini banyak para ahli kopi yang mencari kopi-kopi unik di seluruh dunia untuk menemukan after taste-nya.
							</div>
							<div className="article-footer">
								<div className="author">
									<img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="author" />
									<span>Fajrin Mahyuddin</span>
								</div>
								<a href="# ">Read more</a>
							</div>
						</div>
					</div>
				</div>
				<div className="article-more">
					<button>load more</button>
				</div>
			</div>
		</StandartLayout>
	)
}

export default ArticleList;
