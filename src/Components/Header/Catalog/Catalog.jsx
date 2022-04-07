import { NavLink } from "react-router-dom";
import style from "./Catalog.module.scss";
import iconSet from "../../../selection.json";
import IcomoonReact from "icomoon-react";


const Catalog = ({ isColumn1Opened, SetIsColumn1Opened, isColumn2Opened, SetIsColumn2Opened,
	isColumn3Opened, SetIsColumn3Opened, isColumn4Opened, SetIsColumn4Opened,
	isColumn5Opened, SetIsColumn5Opened, setIsCatalogMenuOpened, isCatalogMenuOpened,
	isMenuOpen, toggleColumn, isMenuForMobileSlall }) => {



	return <>
		<div className={style.catalogHeader}>
			<div className={style.catalogHeader__container}>
				<nav className={isCatalogMenuOpened && isMenuOpen ? style.catalogHeader__menu + " " + style.menuCatalog + " " + style.catalogOpen
					: style.catalogHeader__menu + " " + style.menuCatalog}>
					<button onClick={() => setIsCatalogMenuOpened(false)} className={style.subMenuCatalog__back + " " + style.backButton}>
						<span className={style.backButton__icon}>
							<IcomoonReact iconSet={iconSet} className={style.back} color="#fff" icon="back" />
						</span>
						<span className={style.backButton__body}>Назад</span>
					</button>
					<ul className={style.menuCatalog__list}>
						<li className={style.menuCatalog__item}>
							<button onClick={() => toggleColumn(1)} className={isColumn1Opened ? style.menuCatalog__link + " " + style.menuLinkActive + " " + style.arrowBottom : style.menuCatalog__link + " " + style.arrowBottom}>
								<span className={style.arrowBottom__icon}>
									<IcomoonReact iconSet={iconSet} className={style.arrowBottom} color="#fff" icon="arrowBottom" />
								</span>
								<span className={style.arrowBottom__body}>Каталог ножей</span>
							</button>
						</li>
						<li className={style.menuCatalog__item}>
							<button onClick={() => toggleColumn(2)} className={isColumn2Opened ? style.menuCatalog__link + " " + style.menuLinkActive + " " + style.arrowBottom : style.menuCatalog__link + " " + style.arrowBottom}>
								<span className={style.arrowBottom__icon}>
									<IcomoonReact iconSet={iconSet} className={style.arrowBottom} color="#fff" icon="arrowBottom" />
								</span>
								<span className={style.arrowBottom__body}>Клинковое оружие</span></button>
						</li>
						<li className={style.menuCatalog__item}>
							<button onClick={() => toggleColumn(3)} className={isColumn3Opened ? style.menuCatalog__link + " " + style.menuLinkActive + " " + style.arrowBottom : style.menuCatalog__link + " " + style.arrowBottom}>
								<span className={style.arrowBottom__icon}>
									<IcomoonReact iconSet={iconSet} className={style.arrowBottom} color="#fff" icon="arrowBottom" />
								</span>
								<span className={style.arrowBottom__body}>Сувенирные изделия</span>
							</button>
						</li>
						<li className={style.menuCatalog__item}>
							<button onClick={() => toggleColumn(4)} className={isColumn4Opened ? style.menuCatalog__link + " " + style.menuLinkActive + " " + style.arrowBottom : style.menuCatalog__link + " " + style.arrowBottom}>
								<span className={style.arrowBottom__icon}>
									<IcomoonReact iconSet={iconSet} className={style.arrowBottom} color="#fff" icon="arrowBottom" />
								</span>
								<span className={style.arrowBottom__body}>Фонари ARMYTEK</span>
							</button>
						</li>
						<li className={style.menuCatalog__item}>
							<button onClick={() => toggleColumn(5)} className={isColumn5Opened ? style.menuCatalog__link + " " + style.menuLinkActive + " " + style.arrowBottom : style.menuCatalog__link + " " + style.arrowBottom}>
								<span className={style.arrowBottom__icon}>
									<IcomoonReact iconSet={iconSet} className={style.arrowBottom} color="#fff" icon="arrowBottom" />
								</span>
								<span className={style.arrowBottom__body}>Сопутствующие товары</span>
							</button>
						</li>
					</ul>
					<div className={style.menuCatalog__subMenu + " " + style.subMenuCatalog}>

						<div className={style.subMenuCatalog__container}>

							<div hidden className={isColumn1Opened ? style.subMenuCatalog__block + " " + style.subMenuCatalog__block_5 + " " + style.subMenuOpened

								: style.subMenuCatalog__block}>
								<button onClick={() => SetIsColumn1Opened(false)} className={style.menuCatalog__back + " " + style.backButton}>
									<span className={style.backButton__icon}>
										<IcomoonReact iconSet={iconSet} className={style.back} color="#fff" icon="back" />
									</span>
									<span className={style.backButton__body}>Назад</span>
								</button>



								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Категория ножей</NavLink>
								</div>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Производство ножей</NavLink>
								</div>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Ножи по маркам стали</NavLink>
								</div>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Заточка и полировка ножей</NavLink>
								</div>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Ножевая мастерская</NavLink>
								</div>




								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Разделочные ножи</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Туристические ножи</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи охотничьи</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Булатные ножи</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи из дамаска</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Тактического назначения</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Метательные ножи</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Мачете и кукри</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи кухонные</NavLink></li>
								</ul>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи АИР</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи Зик</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи ЗЗОСС</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи РОСоружие</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи Оружейник</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Булат Сергея Баранова</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Булат Андрея Умерова</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи Златко</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи Стиль-М</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Оружейная компания</NavLink></li>
								</ul>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 40х102С2М</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 95х18</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 100х13м</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 110х18м-ШД</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали ЭИ-107 ТЦ</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 50х14МФ</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали AUS-8</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали К340</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали M390</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали ЭП-766</NavLink></li>
								</ul>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Паста ГОИ</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Алмазная паста</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Бруски и камни для заточки</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Заточные системы</NavLink></li>

								</ul>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Ножевые клинки</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Заготовки для ножей</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Литье для ножей</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Материалы для рукоятей</NavLink></li>
									<li className={style.subMenuCatalog__item}><NavLink to="" className={style.subMenuCatalog__link}>Уход за рукоятиями ножей</NavLink></li>

								</ul>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
							</div>


							<div className={isColumn2Opened ? style.subMenuCatalog__block + " " + style.subMenuCatalog__block_2 + " " + style.subMenuOpened
								: style.subMenuCatalog__block}>
								<button onClick={() => SetIsColumn2Opened(false)} className={style.menuCatalog__back + " " + style.backButton}>
									<span className={style.backButton__icon}>
										<IcomoonReact iconSet={iconSet} className={style.back} color="#fff" icon="back" />
									</span>
									<span className={style.backButton__body}>Назад</span>
								</button>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Категория ножей</NavLink>
								</div>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Производство ножей</NavLink>
								</div>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Разделочные ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Туристические ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи охотничьи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Булатные ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из дамаска</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Тактического назначения</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Метательные ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Мачете и кукри</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи кухонные</NavLink>
									</li>
								</ul>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи АИР</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи Зик</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи ЗЗОСС</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи РОСоружие</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи Оружейник</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Булат Сергея Баранова</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Булат Андрея Умерова</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи Златко</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи Стиль-М</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Оружейная компания</NavLink>
									</li>

								</ul>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
							</div>

							<div className={isColumn3Opened ? style.subMenuCatalog__block + " " + style.subMenuOpened + " " + style.subMenuCatalog__block_1
								: style.subMenuCatalog__block}>
								<button onClick={() => SetIsColumn3Opened(false)} className={style.menuCatalog__back + " " + style.backButton}>
									<span className={style.backButton__icon}>
										<IcomoonReact iconSet={iconSet} className={style.back} color="#fff" icon="back" />
									</span>
									<span className={style.backButton__body}>Назад</span>
								</button>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Категория ножей</NavLink>
								</div>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Разделочные ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Туристические ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи охотничьи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Булатные ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из дамаска</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Тактического назначения</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Метательные ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Мачете и кукри</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи кухонные</NavLink>
									</li>
								</ul>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
							</div>

							<div className={isColumn4Opened ? style.subMenuCatalog__block + " " + style.subMenuOpened + " " + style.subMenuCatalog__block_4
								: style.subMenuCatalog__block}>
								<button onClick={() => SetIsColumn4Opened(false)} className={style.menuCatalog__back + " " + style.backButton}>
									<span className={style.backButton__icon}>
										<IcomoonReact iconSet={iconSet} className={style.back} color="#fff" icon="back" />
									</span>
									<span className={style.backButton__body}>Назад</span>
								</button>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Категория ножей</NavLink>
								</div>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Производство ножей</NavLink>
								</div>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Ножи по маркам стали</NavLink>
								</div>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Заточка и полировка ножей</NavLink>
								</div>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Разделочные ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Туристические ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи охотничьи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Булатные ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из дамаска</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Тактического назначения</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Метательные ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Мачете и кукри</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи кухонные</NavLink>
									</li>
								</ul>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи АИР</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи Зик</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи ЗЗОСС</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи РОСоружие</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи Оружейник</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Булат Сергея Баранова</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Булат Андрея Умерова</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи Златко</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи Стиль-М</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Оружейная компания</NavLink>
									</li>
								</ul>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 40х102С2М</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 95х18</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 100х13м</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 110х18м-ШД</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали ЭИ-107 ТЦ</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 50х14МФ</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали AUS-8</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали К340</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали M390</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали ЭП-766</NavLink>
									</li>
								</ul>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Паста ГОИ</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Алмазная паста</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Бруски и камни для заточки</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Заточные системы</NavLink>
									</li>

								</ul>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
							</div>

							<div className={isColumn5Opened ? style.subMenuCatalog__block + " " + style.subMenuOpened + " " + style.subMenuCatalog__block_3
								: style.subMenuCatalog__block}>
								<button onClick={() => SetIsColumn5Opened(false)} className={style.menuCatalog__back + " " + style.backButton}>
									<span className={style.backButton__icon}>
										<IcomoonReact iconSet={iconSet} className={style.back} color="#fff" icon="back" />
									</span>
									<span className={style.backButton__body}>Назад</span>
								</button>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Категория ножей</NavLink>
								</div>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Производство ножей</NavLink>
								</div>
								<div className={style.subMenuCatalog__category}>
									<NavLink to="" className={style.subMenuCatalog__linkCategory}>Ножи по маркам стали</NavLink>
								</div>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Разделочные ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Туристические ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи охотничьи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Булатные ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из дамаска</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Тактического назначения</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Метательные ножи</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Мачете и кукри</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи кухонные</NavLink>
									</li>
								</ul>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи АИР</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи Зик</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи ЗЗОСС</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи РОСоружие</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи Оружейник</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Булат Сергея Баранова</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Булат Андрея Умерова</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи Златко</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи Стиль-М</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Оружейная компания</NavLink>
									</li>
								</ul>
								<ul className={style.subMenuCatalog__list}>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 40х102С2М</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 95х18</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 100х13м</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 110х18м-ШД</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали ЭИ-107 ТЦ</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали 50х14МФ</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали AUS-8</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали К340</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали M390</NavLink>
									</li>
									<li className={style.subMenuCatalog__item}>
										<NavLink to="" className={style.subMenuCatalog__link}>Ножи из стали ЭП-766</NavLink>
									</li>
								</ul>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
								<div className={style.subMenuCatalog__footer}>
									<NavLink to="" className={style.subMenuCatalog__all}>Смотреть все</NavLink>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div >
		</div >
		{isMenuForMobileSlall ? <div className={style.bodyHeader__search}>
			<form action="#" className={style.searchHeader}>
				<button className={style.searchHeader__button}>
					<IcomoonReact iconSet={iconSet} className={style.search} color="rgba(0, 0, 0, 0.5)" height="0.875rem" icon="search" />
				</button>
				<input className={style.searchHeader__input} placeholder="Поиск" />
			</form>
		</div> : null}
	</>
}

export default Catalog;