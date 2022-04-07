import { NavLink } from "react-router-dom";
import "./Home.scss";
import image from "../../assets/img/mainpage/main-block/image.png";
import icon01 from "../../assets/img/mainpage/main-block/icons/01.svg";
import icon02 from "../../assets/img/mainpage/main-block/icons/02.svg";
import icon03 from "../../assets/img/mainpage/main-block/icons/03.svg";
import icon04 from "../../assets/img/mainpage/main-block/icons/04.svg";
import knife01 from "../../assets/img/mainpage/catalog-cards/01.jpg";
import knife02 from "../../assets/img/mainpage/catalog-cards/02.jpg";
import knife03 from "../../assets/img/mainpage/catalog-cards/03.jpg";
import knife04 from "../../assets/img/mainpage/catalog-cards/04.jpg";
import knife05 from "../../assets/img/mainpage/catalog-cards/05.jpg";
import knife06 from "../../assets/img/mainpage/catalog-cards/06.jpg";
import Tooltip from "../Tooltip/Tooltip";
import { useState } from "react";
import Slider from "../Slider";
import "../../iconsfont.css"
import ProductSlider from "./ProductSlider/ProductSlider";



const Home = () => {
	const [isTip1Hovered, setIsTip1Hovered] = useState(false);
	const [isTip2Hovered, setIsTip2Hovered] = useState(false);
	const [isTip3Hovered, setIsTip3Hovered] = useState(false);



	return <main className="page page_home">
		<section className="page__main-block main-block">
			<div className="main-block__container">
				<div className="main-block__body">

					<Slider />

					<div className="main-block__media media-main-block">
						<div className="media-main-block__body">
							<div className="media-main-block__image">
								<img src={image} alt="Картинка" />
							</div>
							<div className="media-main-block__tips">
								<div className="media-main-block__tip tip-block media-main-block__tip_1">
									<div className={isTip1Hovered ? "tip-block__tooltip tip-block__tooltip_hovered" : "tip-block__tooltip"}>
										<Tooltip>Подсказка 1</Tooltip>
									</div>
									<button type="button"
										onMouseEnter={() => setIsTip1Hovered(true)}
										onMouseLeave={() => setIsTip1Hovered(false)}

										className="tip-block__icon ">
										<span>+</span>
									</button>
								</div>
								<div className="media-main-block__tip tip-block media-main-block__tip_2">
									<div className={isTip2Hovered ? "tip-block__tooltip tip-block__tooltip_hovered" : "tip-block__tooltip"}>
										<Tooltip>Подсказка 2</Tooltip>
									</div>
									<button type="button"
										onMouseEnter={() => setIsTip2Hovered(true)}
										onMouseLeave={() => setIsTip2Hovered(false)}

										className="tip-block__icon ">
										<span>+</span>
									</button>
								</div>

								<div className="media-main-block__tip tip-block media-main-block__tip_3">
									<div className={isTip3Hovered ? "tip-block__tooltip tip-block__tooltip_hovered" : "tip-block__tooltip"}>
										<Tooltip>Подсказка 3</Tooltip>
									</div>
									<button type="button"
										onMouseEnter={() => setIsTip3Hovered(true)}
										onMouseLeave={() => setIsTip3Hovered(false)}

										className="tip-block__icon">
										<span>+</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="main-block__advantages advantages-main">
					<div className="advantages-main__item">
						<div className="advantages-main__icon">
							<img src={icon01} alt="Иконка" />
						</div>
						<div className="advantages-main__text">Гарантия 100% возврата
							денежных средств</div>
					</div>
					<div className="advantages-main__item">
						<div className="advantages-main__icon">
							<img src={icon02} alt="Иконка" />
						</div>
						<div className="advantages-main__text">Доставка по России,
							Казахстану и Белоруссии</div>
					</div>
					<div className="advantages-main__item">
						<div className="advantages-main__icon">
							<img src={icon03} alt="Иконка" />
						</div>
						<div className="advantages-main__text">Возможность оформление
							заказа без регистрации.</div>
					</div>
					<div className="advantages-main__item">
						<div className="advantages-main__icon">
							<img src={icon04} alt="Иконка" />
						</div>
						<div className="advantages-main__text">Скидки постоянным
							покупателям.</div>
					</div>
				</div>
			</div>
		</section>

		<section className="page__catalog-cards catalog-cards">
			<div className="catalog-cards__container">
				<div className="catalog-cards__item item-catalog-cards">
					<div className="item-catalog-cards__body">
						<h3 className="item-catalog-cards__title">
							<NavLink to="" className="item-catalog-cards__link-title">Каталог ножей</NavLink>
						</h3>
						<ul className="item-catalog-cards__list">
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Разделочные</NavLink>
							</li>
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Туристические</NavLink>
							</li>
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Охотничьи</NavLink>
							</li>
						</ul>
					</div>
					<div className="item-catalog-cards__image">
						<img src={knife01} alt="Картинка" />
					</div>
				</div>
				<div className="catalog-cards__item item-catalog-cards">
					<div className="item-catalog-cards__body">
						<h3 className="item-catalog-cards__title">
							<NavLink to="" className="item-catalog-cards__link-title">Средневековое оружие</NavLink>
						</h3>
						<ul className="item-catalog-cards__list">
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Разделочные</NavLink>
							</li>
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Туристические</NavLink>
							</li>
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Охотничьи</NavLink>
							</li>
						</ul>
					</div>
					<div className="item-catalog-cards__image">
						<img src={knife02} alt="Картинка" />
					</div>
				</div>
				<div className="catalog-cards__item item-catalog-cards">
					<div className="item-catalog-cards__body">
						<h3 className="item-catalog-cards__title">
							<NavLink to="" className="item-catalog-cards__link-title">Длинноклиновое оружие</NavLink>
						</h3>
						<ul className="item-catalog-cards__list">
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Разделочные</NavLink>
							</li>
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Туристические</NavLink>
							</li>
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Охотничьи</NavLink>
							</li>
						</ul>
					</div>
					<div className="item-catalog-cards__image">
						<img src={knife03} alt="Картинка" />
					</div>
				</div>
				<div className="catalog-cards__item item-catalog-cards">
					<div className="item-catalog-cards__body">
						<h3 className="item-catalog-cards__title">
							<NavLink to="" className="item-catalog-cards__link-title">Сувенирные изделия</NavLink>
						</h3>
						<ul className="item-catalog-cards__list">
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Разделочные</NavLink>
							</li>
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Туристические</NavLink>
							</li>
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Охотничьи</NavLink>
							</li>
						</ul>
					</div>
					<div className="item-catalog-cards__image">
						<img src={knife04} alt="Картинка" />
					</div>
				</div>
				<div className="catalog-cards__item item-catalog-cards">
					<div className="item-catalog-cards__body">
						<h3 className="item-catalog-cards__title">
							<NavLink to="" className="item-catalog-cards__link-title">Сопутствующие товары</NavLink>
						</h3>
						<ul className="item-catalog-cards__list">
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Разделочные</NavLink>
							</li>
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Туристические</NavLink>
							</li>
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Охотничьи</NavLink>
							</li>
						</ul>
					</div>
					<div className="item-catalog-cards__image">
						<img src={knife05} alt="Картинка" />
					</div>
				</div>
				<div className="catalog-cards__item item-catalog-cards">
					<div className="item-catalog-cards__body">
						<h3 className="item-catalog-cards__title">
							<NavLink to="" className="item-catalog-cards__link-title">Ножевая мастерская</NavLink>
						</h3>
						<ul className="item-catalog-cards__list">
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Разделочные</NavLink>
							</li>
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Туристические</NavLink>
							</li>
							<li className="item-catalog-cards__item">
								<NavLink to="" className="item-catalog-cards__link">Охотничьи</NavLink>
							</li>
						</ul>
					</div>
					<div className="item-catalog-cards__image">
						<img src={knife06} alt="Картинка" />
					</div>
				</div>
			</div>
		</section>

		<ProductSlider title={"Хиты продаж"} />

	</main>
}


export default Home;