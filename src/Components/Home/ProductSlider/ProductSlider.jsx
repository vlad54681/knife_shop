import { NavLink } from "react-router-dom";
import "../../../iconsfont.css"
import "./ProductSlider.scss";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Pagination, Navigation, Autoplay } from "swiper";


const ProductSlider = ({ title, subtitle, rating, image }) => {


	useEffect(() => {
		const ratings = document.querySelectorAll(".rating");


		function initRatings() {
			let ratingActive, ratingValue;
			for (let index = 0; index < ratings.length; index++) {
				const rating = ratings[index];
				initRating(rating);
			}

			function initRating(rating) {
				initRatingVars(rating);

				setRatingActiveWidth();

				if (rating.classList.contains("rating_set")) {
					setRating(rating);
				}
			}

			function initRatingVars(rating) {
				ratingActive = rating.querySelector(".rating__active");
				ratingValue = rating.querySelector(".rating__value");
			}

			function setRatingActiveWidth(index = 3.5) {
				const ratingActiveWidth = index / 0.05;
				ratingActive.style.width = `${ratingActiveWidth}%`;
			}

			function setRating(rating) {
				const ratingItems = rating.querySelectorAll(".rating__item");
				for (let index = 0; index < ratingItems.length; index++) {
					const ratingItem = ratingItems[index];
					ratingItem.addEventListener("mouseenter", function (e) {
						initRatingVars(rating);

						setRatingActiveWidth(ratingItem.value);
					});
					ratingItem.addEventListener("mouseleave", function (e) {
						setRatingActiveWidth();
					});
					ratingItem.addEventListener("click", function (e) {
						initRatingVars(rating);

						if (rating.dataset.ajax) {
							setRatingValue(ratingItem.value, rating)
						} else {
							ratingValue.innerHTML = index + 1;
							setRatingActiveWidth();
						}

						setRatingActiveWidth(ratingItem.value);
					});

				}
			}
		}

		if (ratings.length > 0) {
			initRatings();
		}
	})

	const slides = [...Array(5)].map((item, index) =>
		<SwiperSlide key={`${item}${index}`} className="products-slider__slide">
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

	return <section className="products-slider">
		<div className="products-slider__container">
			<div className="products-slider__header">
				<h2 className="products-slider__title">{title}</h2>
				<NavLink to="" className="products-slider__more _spollerArrow">{subtitle}</NavLink>
			</div>
			<div className="products-slider__slider">
				<Swiper
					className="products-slider__swiper"
					modules={[Pagination, Navigation, Autoplay]}
					slidesPerView={4}
					observer={true}
					observeParents={true}
					spaceBetween={30}
					speed={800}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					pagination={{
						el: ".products-slider__dotts",
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
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1370: {
							slidesPerView: 4,
							spaceBetween: 30,
						}
					}
					}
				//loop={true}

				>

					{slides}

					<div className="products-slider__dotts"></div>

				</Swiper>
			</div>
		</div>

	</section >
}

export default ProductSlider;