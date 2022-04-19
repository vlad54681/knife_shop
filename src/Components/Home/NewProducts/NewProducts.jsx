import { NavLink } from "react-router-dom";
import "../Home.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Pagination, Navigation, Autoplay } from "swiper";
import image from "../../../assets/img/product-card/image.jpg";
export default function NewProducts({ title, rating }) {


	const slides = [...Array(5)].map((item, index) =>
		<SwiperSlide key={`${item}${index}`} className="products-new__slide">
			<article className="product-card">
				<NavLink to="" className="product-card__image">
					<span className="product-card__item-image-ibg product-card__item-image-ibg_contain ">
						<img src={image} alt="Картинка" />
					</span>
				</NavLink>
				<div className="product-card__body">
					<h4 className="product-card__title">
						<NavLink to="" className="product-card__link-title">Нож лиса</NavLink>
					</h4>
					<div className="product-card__info info-product-card">
						<div className="info-product-card__size">95х18</div>
						<div className="info-product-card__materials">Орех, Алюминий</div>
					</div>

					<div className="product-card__rating rating rating_set">
						<div className="rating__body">
							<div className="rating__active"></div>
							<div className="rating__items">
								{rating}

							</div>
						</div>
						<div className="rating__value">3.6</div>
						<div className="rating__info">12 отзывов</div>
					</div>
					<div className="product-card__footer">
						<div className="product-card__price">2 719 р.</div>
						<NavLink to="" className="product-card__compare _compare"></NavLink>
						<NavLink to="" className="product-card__favourite _favourite"></NavLink>
					</div>
					<button type="button" className="product-card__cart button">
						<span className="_cart">В корзину</span>
					</button>
				</div>
			</article>
		</SwiperSlide>
	)

	return (
		<section className="products-new">
			<div className="products-new__inner">
				<div className="products-new__container">
					<div className="products-new__body">
						<div className="products-new__section">
							<h2 className="products-new__title">{title}</h2>
							<div className="products-new__text">
								Добро пожаловать на официальный сайт «ЗЛАТМАКС»!
								В нашем магазине представлен наиболее широкий выбор
								Златоустовских ножей от Златоустовских Оружейных
								Фабрик и компаний, мы являемся официальными поставщиками.
							</div>
							<NavLink to="/" className="products-new__link link-arrow _arrowBottom"><span>Больше новинок</span></NavLink>
						</div>
					</div>
					<div className="products-new__content">
						<Swiper
							className="products-new__swiper"
							modules={[Pagination, Navigation, Autoplay]}
							slidesPerView={3}
							observer={true}
							observeParents={true}
							spaceBetween={30}
							speed={800}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							pagination={{
								el: ".products-new__dotts",
								clickable: true,
								dynamicBullets: true,
								dynamicMainBullets: 3
							}}
							watchOverflow={true}
							breakpoints={{
								320: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								992: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								1330: {
									slidesPerView: 3,
									spaceBetween: 30,
								}
							}
							}

						>
							{slides}
							<div className="products-new__dotts dotts"></div>

						</Swiper>

					</div>
				</div>
			</div>
		</section>
	)
}