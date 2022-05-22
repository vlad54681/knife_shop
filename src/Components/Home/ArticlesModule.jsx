import { NavLink } from "react-router-dom";
import "./home.scss";
import img01 from "../../assets/img/articles-module/01.jpg"
import img02 from "../../assets/img/articles-module/02.jpg"
import img03 from "../../assets/img/articles-module/03.jpg"
import img04 from "../../assets/img/articles-module/04.jpg"



export default function ArticlesModule({ }) {
	let imgs = [img01, img02, img03, img04];
	let articlesTitles = ['Все о ножах: как правильно выбрать', 'Как правильно выбрать фонарь', 'Кухонные ножи для хозяек', 'Кухонные ножи для хозяек'];
	let articlesElement = [...Array(4)].map((item, index) => {
		return <article key={index + imgs[index].toString()} className="articles-module__item item-article">
			<NavLink to="/" className="item-article__image-ibg">
				<img src={imgs[index]} alt="Картинка" />
			</NavLink>
			<div className="item-article__body">
				<h4 className="item-article__title">
					<NavLink to="/" className="item-article__link-title">{articlesTitles[index]}</NavLink>
				</h4>
				<div className="item-article__date">24.07.2019</div>
			</div>
		</article>
	})

	return (
		<div className="articles-module__container">
			<h2 className="articles-module__title">Наши статьи</h2>
			<div className="articles-module__items">
				{articlesElement}
			</div>
		</div>
	)
}