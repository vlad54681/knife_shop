import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './catalog.scss';
import image from "../../assets/img/product-card/image.jpg";



export default function Catalog() {
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
	let rating = [...Array(5)].map((item, index) =>
		<input key={`${item}${index}`} type="radio" className="rating__item" name="rating" value={item} />
	)
	const [isSelectOpened, setIsSelectOpened] = useState(false);
	return (
		<main className="page page_inner">
			<div className="page__header">
				<div className="page__container">
					<h1 className="page__title title">Разделочные ножи</h1>
					<nav className="page__breadcrumbs breadcrumbs">
						<ul className="breadcrumbs__list">
							<li className="breadcrumbs__item">
								<NavLink className="breadcrumbs__link _arrowBottom" to="/">Главная</NavLink>
							</li>
							<li className="breadcrumbs__item">
								<span className="breadcrumbs__current">Разделочные ножи</span>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="catalog">
				<div className="catalog__container">
					<div className="catalog__body">
						<div className="catalog__filter"></div>
						<div className="catalog__content">
							<div className={"catalog__control _arrowBottom" + (isSelectOpened ? ` _active` : '')}>
								<select onClick={() => setIsSelectOpened(prev => prev = !prev)} onBlur={() => setIsSelectOpened(false)} name="form[]" className='control '>
									<option value="2">По популярности</option>
									<option value="2">По названию</option>
									<option value="3">По цене</option>
									<option value="4">По рейтингу</option>
								</select>
							</div>
							<div className="catalog__products">
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</main >
	)
}