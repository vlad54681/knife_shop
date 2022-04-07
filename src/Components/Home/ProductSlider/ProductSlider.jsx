import { NavLink } from "react-router-dom";
import Slider from "../../Slider";
import "../../../iconsfont.css"
import image from "../../../assets/img/product-card/image.jpg";
import "./ProductSlider.scss";
import { useEffect, useRef } from "react";




const ProductSlider = ({ title }) => {
	let ratingItemsElement = [1, 2, 3, 4, 5].map(item =>
		<input key={item} type="radio" className="rating__item" name="rating" value={item} />
	)
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








	return <section className="page__products-slider products-slider">
		<div className="products-slider__container">
			<div className="products-slider__header">
				<h2 className="products-slider__title">{title}</h2>
				<NavLink to="" className="products-slider__more _spollerArrow">Все акции</NavLink>
			</div>
			<div className="products-slider__slider">
				<div className="products-slider__swiper">
					<div className="products-slider__slide">
						<article className="products-card">
							<NavLink to="" className="products-card__image-ibg products-card__image-ibg_contain">
								<img src={image} alt="Картинка" />
							</NavLink>
							<div className="products-card__body">
								<h4 className="products-card__title">
									<NavLink to="" className="products-card__link-title">Нож лиса</NavLink>
								</h4>
								<div className="products-card__info info-products-card">
									<div className="info-products-card__size">95х18</div>
									<div className="info-products-card__materials">Орех, Алюминий</div>
								</div>

								<div className="products-card__rating rating rating_set">
									<div className="rating__body">
										<div className="rating__active"></div>
										<div className="rating__items">
											{ratingItemsElement}

											{/* <input type="radio" className="rating__item" name="rating" value="1" />
											<input type="radio" className="rating__item" name="rating" value="2" />
											<input type="radio" className="rating__item" name="rating" value="3" />
											<input type="radio" className="rating__item" name="rating" value="4" />
											<input type="radio" className="rating__item" name="rating" value="5" /> */}

										</div>
									</div>
									<div className="rating__value">3.6</div>
									<div className="rating__info">12 отзывов</div>
								</div>
								<div className="products-card__footer">
									<div className="products-card__price">2 719 р.</div>
									<NavLink to="" className="products-card__compare _compare"></NavLink>
									<NavLink to="" className="products-card__favourite _favourite"></NavLink>
								</div>
								<button type="button" className="products-card__cart button">
									<span className="_cart">В корзину</span>
								</button>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</section>
}

export default ProductSlider;