import style from './TopHeader.module.scss';
import iconSet from "../../../selection.json";
import IcomoonReact from "icomoon-react";
import { NavLink } from "react-router-dom";
import Phones from '../Phones/Phones';

const TopHeader = ({ isMenuAdaptive, isMenuForMobileSlall, toggleMenu, isMenuOpen, setIsCatalogMenuOpened }) => {


	return <div className={style.header__top + " " + style.topHeader}><div className={style.topHeader__container}>
		{isMenuAdaptive ? <>
			<Phones isAdaptive={isMenuForMobileSlall} />
			<NavLink to="" className={style.actionsHeader__favourite}>
				<span className={style.actionsHeader__favouriteIcon} >
					<IcomoonReact iconSet={iconSet} className={style.favourite} color="#fff" icon="favourite" />
				</span>
			</NavLink>
			<NavLink to="" className={style.actionsHeader__cart + " " + style.cartHeader}>

				<div className={style.cartHeader__icon + " " + style.cartIcon}>
					<span className={style.cartIcon__icon}><IcomoonReact iconSet={iconSet} className={style.cart} color="#fff" icon="cart" /></span>
					<span className={style.cartIcon__body}>0</span>
				</div>
				<div className={style.cartHeader__body}>
					<div className={style.cartHeader__summ}>0 р.</div>
					<div className={style.cartHeader__link}>Оформить заказ</div>
				</div>
			</NavLink>
		</> : null
		}


		<nav className={style.topHeader__menu + " " + style.menuTopHeader}>

			{!isMenuAdaptive ?
				<ul className={style.menuTopHeader__list}>
					<li className={style.menuTopHeader__item + " " + style.menuTopHeader__item_catalog}>
						<NavLink to="" className={style.menuTopHeader__link + " " + style.menuTopHeader__link_catalog}>
							<IcomoonReact iconSet={iconSet} className={style.menuTopHeader__arrowBottom} color="#ecf1f2" height="0.625rem" icon="arrowBottom" />
							Каталог товаров
						</NavLink>

					</li>
					<li className={style.menuTopHeader__item}><NavLink to="" className={style.menuTopHeader__link}>О нас</NavLink></li>
					<li className={style.menuTopHeader__item}><NavLink to="" className={style.menuTopHeader__link}>Оплата и доставка</NavLink></li>
					<li className={style.menuTopHeader__item}><NavLink to="" className={style.menuTopHeader__link}>Новости</NavLink></li>
					<li className={style.menuTopHeader__item}><NavLink to="" className={style.menuTopHeader__link}>Контакты</NavLink></li>
				</ul> : null}

		</nav>
		<NavLink to="" className={style.topHeader__user}><span className={style.topHeader__userIcon}><IcomoonReact iconSet={iconSet} className={style.user} color="#fff"
			height="2.1875rem" icon="user" /></span><span className={style.topHeader__userBody}>Личный кабинет</span></NavLink>
		<nav hidden="hidden" className={style.menu}>
			<button onClick={toggleMenu} className={isMenuOpen ? style.menu__icon + " " + style.iconMenu + " " + style.menuOpen : style.menu__icon + " " + style.iconMenu}><span></span></button>
			<div className={isMenuOpen ? style.menu__body + " " + style.menuOpen : style.menu__body}>

				{isMenuOpen ?
					<ul className={style.menuTopHeader__list}>
						<li className={style.menuTopHeader__item + " " + style.menuTopHeader__item_catalog}>
							<NavLink to="" onClick={() => setIsCatalogMenuOpened(prev => !prev)} className={style.menuTopHeader__link + " " + style.menuTopHeader__link_catalog}>
								<IcomoonReact iconSet={iconSet} className={style.menuTopHeader__arrowBottom} color="#ecf1f2" icon="arrowBottom" />
								Каталог товаров</NavLink>
						</li>
						<li className={style.menuTopHeader__item}><NavLink to="" className={style.menuTopHeader__link}>О нас</NavLink></li>
						<li className={style.menuTopHeader__item}><NavLink to="" className={style.menuTopHeader__link}>Оплата и доставка</NavLink></li>
						<li className={style.menuTopHeader__item}><NavLink to="" className={style.menuTopHeader__link}>Новости</NavLink></li>
						<li className={style.menuTopHeader__item}><NavLink to="" className={style.menuTopHeader__link}>Контакты</NavLink></li>
					</ul>
					: null}
			</div>
		</nav>
	</div>
	</div>
}



export default TopHeader;