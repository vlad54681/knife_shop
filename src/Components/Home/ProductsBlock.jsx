import { NavLink } from "react-router-dom";
import "./home.scss";
import img01 from "../../assets/img/products-block/01.jpg"
import img02 from "../../assets/img/products-block/02.jpg"


export default function ProductsBlock() {
	const titles = ["Тактические фонари", "Палубные мультифонари"];

	const imgs = [img01, img02];
	const productBlockElement = [...Array(2)].map((item, index) =>
		<div key={index + imgs[index]} className="products-block__item product-block">
			<div className="product-block__body">
				<h4 className="product-block__title">
					<NavLink to="/" className="product-block__link-title">{titles[index]}</NavLink>
				</h4>
				<div className="product-block__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</div>
				<NavLink to="/" className="product-block__button button">
					Подробнее
				</NavLink>
			</div>
			<div className="product-block__image">
				<img src={imgs[index]} alt="Картинка" />
			</div>
		</div>
	)

	return (
		<div className="products-block__container">
			{productBlockElement}
		</div>
	)
}

