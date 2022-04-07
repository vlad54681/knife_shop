import style from './Bodyheader.module.scss';
import iconSet from "../../../selection.json";
import IcomoonReact from "icomoon-react";
import { NavLink } from "react-router-dom";
import Phones from '../Phones/Phones';



const Bodyheader = ({ isMenuForMobileSlall, isMenuAdaptive }) => {


	return <div className={style.header__body + " " + style.bodyHeader}>
		<div className={style.bodyHeader__container}>
			<a className={style.bodyHeader__logo}>
				<IcomoonReact iconSet={iconSet} className={style.logo} color="#141414" height=" 2.625rem" icon="logo" />
			</a>

			{!isMenuForMobileSlall ? <div className={style.bodyHeader__search}>
				<form action="#" className={style.searchHeader}>
					<button className={style.searchHeader__button}>
						<IcomoonReact iconSet={iconSet} className={style.search} color="rgba(0, 0, 0, 0.5)" height="0.875rem" icon="search" />
					</button>
					<input className={style.searchHeader__input} placeholder="Поиск" />
				</form>
			</div> : null}

			<div className={style.bodyHeader__actions + " " + style.actionsHeader}>
				<NavLink to="" className={style.actionsHeader__location}>
					<IcomoonReact iconSet={iconSet} className={style.location} color="#141414" height="1.5rem" icon="location" />
					<span>Москва</span></NavLink>
				{!isMenuAdaptive ? <>
					<Phones isAdaptive={isMenuForMobileSlall} />
					<NavLink to="" className={style.actionsHeader__favourite}>
						<IcomoonReact iconSet={iconSet} className={style.favourite} color="#141414" height="1.6875rem" icon="favourite" />
					</NavLink>
					<NavLink to="" className={style.actionsHeader__cart + " " + style.cartHeader}>
						<div className={style.cartHeader__icon + " " + style.cartIcon}>
							<span className={style.cartIcon__icon}><IcomoonReact iconSet={iconSet} className={style.cart} color="#141414" icon="cart" /></span>
							<span className={style.cartIcon__body}>0</span>
						</div>
						<div className={style.cartHeader__body}>
							<div className={style.cartHeader__summ}>0 р.</div>
							<div className={style.cartHeader__link}>Оформить заказ</div>
						</div>
					</NavLink> </> : null}
			</div>
		</div>
	</div>

}

export default Bodyheader;