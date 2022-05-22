import "./footer.scss";
import "../../iconsfont.css"
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import facebook from '../../assets/img/social/facebook.png'
import viber from '../../assets/img/social/viber.png'
import telegram from '../../assets/img/social/telegram.png'
import whatsapp from '../../assets/img/social/whatsapp.png'


export default function Footer({ }) {

	// spollers
	useEffect(() => {
		const spollersArray = document.querySelectorAll('[data-spollers]');
		if (spollersArray.length > 0) {
			const spollersRegular = Array.from(spollersArray).filter(item => !item.dataset.spollers.split(',')[0]
			)

			if (spollersRegular.length > 0) {
				initSpollers(spollersRegular);
			}

			const spollersMedia = Array.from(spollersArray).filter(item => item.dataset.spollers.split(",")[0]
			)

			if (spollersMedia.length > 0) {
				const breakpointsArray = [];
				spollersMedia.forEach(item => {
					const params = item.dataset.spollers;
					const breakpoint = {};
					const paramsArray = params.split(",");
					breakpoint.value = paramsArray[0];
					breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
					breakpoint.item = item;
					breakpointsArray.push(breakpoint);
				})

				let mediaQueries = breakpointsArray.map(item =>
					'(' + item.type + "-width: " + item.value + 'px),' + item.value + "," + item.type
				)

				mediaQueries = mediaQueries.filter((item, index, self) => self.indexOf(item) === index)
				mediaQueries.forEach(breakpoint => {
					const paramsArray = breakpoint.split(",");
					const mediaBreakpoint = paramsArray[1];
					const mediaType = paramsArray[2];
					const matchMedia = window.matchMedia(paramsArray[0]);

					const spollersArray = breakpointsArray.filter(item => {
						if (item.value === mediaBreakpoint && item.type === mediaType) {
							return true;
						}
					});

					matchMedia.addEventListener("change", () => initSpollers(spollersArray, matchMedia)
					)

					initSpollers(spollersArray, matchMedia)
				})
			}



			function initSpollers(spollersArray, matchMedia = false) {
				spollersArray.forEach(spollersBlock => {
					spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
					if (matchMedia.matches || !matchMedia) {
						spollersBlock.classList.add("_init");
						initSpollerBody(spollersBlock);
						spollersBlock.addEventListener("click", setSpollerAction);
					} else {
						spollersBlock.classList.remove('_init');
						initSpollerBody(spollersBlock, false);
						spollersBlock.removeEventListener("click", setSpollerAction);
					}
				})
			}

			function initSpollerBody(spollersBlock, hideSpollerBody = true) {
				const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
				if (spollerTitles.length > 0) {
					spollerTitles.forEach(spollerTitle => {
						if (hideSpollerBody) {
							spollerTitle.removeAttribute('tabindex');
							if (!spollerTitle.classList.contains('_active')) {
								spollerTitle.nextElementSibling.hidden = true;
							}
						} else {
							spollerTitle.setAttribute('tabindex', '-1');
							spollerTitle.nextElementSibling.hidden = false;
						}
					})
				}
			}

			function setSpollerAction(e) {
				const el = e.target;
				if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
					const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
					const spollersBlock = spollerTitle.closest('[data-spollers]');
					const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
					if (!spollersBlock.querySelectorAll('._slide').length) {
						if (oneSpoller && !spollerTitle.classlist.contains('_active')) {
							hideSpollersBody(spollersBlock);
						}
						spollerTitle.classList.toggle('_active');
						_slideToggle(spollerTitle.nextElementSibling, 500)
					}
					e.preventDefault();
				}
			}
			function hideSpollersBody(spollersBlock) {
				const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
				if (spollerActiveTitle) {
					spollerActiveTitle.classList.remove('_active');
					_slideUp(spollerActiveTitle.nextElementSibling, 500)
				}
			}
		}
		let _slideUp = (target, duration = 500) => {
			if (!target.classList.contains('_slide')) {
				target.classList.add('_slide');
				target.style.transitionProperty = 'height, margin, padding';
				target.style.transitionDuration = duration + 'ms';
				target.style.height = target.offsetHeight + 'px';
				target.offsetHeight;
				target.style.overflow = 'hidden';
				target.style.height = 0;
				target.style.paddingTop = 0;
				target.style.paddingBottom = 0;
				target.style.marginTop = 0;
				target.style.marginBottom = 0;
				window.setTimeout(() => {
					target.hidden = true;
					target.style.removeProperty('height');
					target.style.removeProperty('padding-top');
					target.style.removeProperty('padding-bottom');
					target.style.removeProperty('margin-top');
					target.style.removeProperty('margin-bottom');
					target.style.removeProperty('transition-property');
					target.style.removeProperty('transition-duration');
					target.style.removeProperty('overflow');
					target.classList.remove('_slide');
				}, duration);
			}
		}

		let _slideDown = (target, duration = 500) => {
			if (!target.classList.contains('_slide')) {
				target.classList.add('_slide');
				if (target.hidden) {
					target.hidden = false;
				}

				let height = target.offsetHeight;
				target.style.overflow = 'hidden';
				target.style.height = 0;
				target.style.paddingTop = 0;
				target.style.paddingBottom = 0;
				target.style.marginTop = 0;
				target.style.marginBottom = 0;
				target.offsetHeight;
				target.style.transitionProperty = 'height, margin, padding';
				target.style.transitionDuration = duration + 'ms';
				target.style.height = height + 'px';
				target.style.removeProperty('padding-top');
				target.style.removeProperty('padding-bottom');
				target.style.removeProperty('margin-top');
				target.style.removeProperty('margin-bottom');

				window.setTimeout(() => {
					target.style.removeProperty('height');
					target.style.removeProperty('overflow');
					target.style.removeProperty('transition-duration');
					target.style.removeProperty('transition-property');
					target.classList.remove('_slide');
				}, duration);
			}
		}

		let _slideToggle = (target, duration = 500) => {
			if (target.hidden) {
				return _slideDown(target, duration);
			} else {
				return _slideUp(target, duration);
			}
		}


	}, [])


	let socials = [facebook, viber, telegram, whatsapp];
	const titles = ["ИНФОРМАЦИЯ", "СЛУЖБА ПОДДЕРЖКИ", "ДОПОЛНИТЕЛЬНО", "ЛИЧНЫЙ КАБИНЕТ"];
	const links = [["Златоустовские ножи в Москве и Московской области", "Ножевые стали",
		"О нас", "Условия оплаты и доставки", "Политика конфиденциальности"],
	["Контактная информация", "Возврат товара", "Карта сайта"],
	["Подарочные сертификаты", "Партнеры", "Товары со скидкой"], ["Личный кабинет",
		"История заказов", "Мои закладки", "Рассылка новостей"]];
	const spollerItemsElement = [...titles].map((title, index) =>
		<div key={title + index} className="body-footer__item item-footer">
			<div data-spollers="767.98" className="item-footer__spoller spoller-item-footer">
				<div className="spoller-item-footer__item">
					<button type="button" data-spoller className="spoller-item-footer__title _arrowBottom">{title}</button>
					<div className="spoller-item-footer__body">
						<nav className="menu-footer">
							<ul className="menu-footer__list">
								{links[index].map(link =>
									<li key={link + index} className="menu-footer__item">
										<NavLink to={"/"} className="menu-footer__link">{link}</NavLink>
									</li>
								)}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	)


	return (
		<div className="footer">
			<section className="footer__text text-footer">
				<div className="text-footer__container">
					<h1 className="text-footer__title">
						Златоустовские ножи интернет-магазин "ЗЛАТМАКС"
					</h1>
					<div className="text-footer__text">
						Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам
						ножи очень высокого качества из города оружейников -
						Златоуста. Златоустовские ножи известны и популярны
						среди потребителей как на российским рынке, так и за
						рубежом: ножи охотничьи, хозяйственные, туристические,
						рыбацкие, складные и метательные. Нож Златоуста -
						это идеальный друг и товарищ в повседневной жизни и в
						экстремальных ситуациях. На многую продукцию
						распространяется гарантия до 10 лет - это один из
						главных показателей качества. Для Вас на нашем сайте
						"zlatmax" предложен огромный ассортимент Златоустовских
						ножей. Наши менеджеры помогут определиться и подобрать
						самый лучший Златоустовский нож, ориентируясь на Ваши
						пожелания.</div>
				</div>
			</section>
			<div className="footer__container">
				<div className="footer__body body-footer">
					<div className="body-footer__row">
						{spollerItemsElement}
					</div>
					<div className="body-footer__row">
						<div data-spollers="767.98" className="item-footer__spoller spoller-item-footer">
							<div className="spoller-item-footer__item">
								<button type="button" data-spoller className="spoller-item-footer__title _arrowBottom">КОНТАКТЫ</button>
								<div className="spoller-item-footer__body">
									<nav className="menu-footer">
										<ul className="menu-footer__list">

											<li className="menu-footer__item">
												<a href="tel:88007774967" className="menu-footer__link _footerPhone">8 (800) 777-49-67</a>
											</li>
											<li className="menu-footer__item _footerClock">
												<div >
													<p>Пн-Пт</p>
													<p>7:00 - 16:00 (МСК)</p>
												</div>
											</li>
											<li className="menu-footer__item _footerLocation">
												<div >
													<p>Златоуст,</p>
													<p>ул. Шоссейная,</p>
													<p>д. 1, офис «6Б»</p>
												</div>
											</li>
											<li className="menu-footer__item">
												<a className="menu-footer__link _footerEmail" href="mailto:info@zlatmax.ru">info@zlatmax.ru</a>
											</li>

										</ul>
									</nav>
									<ul className="social-footer">
										{socials.map((item, index) =>
											<li key={index} className="social-footer__item">
												<NavLink className='social-footer__link' to={'/'}>
													<img src={item} alt="Картинка" />
												</NavLink>
											</li>)}
									</ul>
								</div>
							</div>
						</div>
						<div data-spollers="767.98" className="item-footer__spoller spoller-item-footer">
							<div className="spoller-item-footer__item">
								<button type="button" data-spoller className="spoller-item-footer__title _arrowBottom">ПОЛЕЗНЫЕ ССЫЛКИ</button>
								<div className="spoller-item-footer__body">
									<div className="spoller-item-footer__text">
										<p>Способы оплаты и доставки</p>
									</div>
								</div>
							</div>
						</div>
						<div data-spollers="767.98" className="item-footer__spoller spoller-item-footer">
							<div className="spoller-item-footer__item">
								<button type="button" data-spoller className="spoller-item-footer__title _arrowBottom">НАША ГАРАНТИЯ</button>
								<div className="spoller-item-footer__body">
									<div className="spoller-item-footer__text">
										Недовольны своей покупкой?
										Вы можете вернуть ее в течении
										30 дней с даты получения,
										согласно <NavLink to={"/"}>нашим правилам</NavLink>
									</div>
								</div>
							</div>
						</div>
						<div data-spollers="767.98" className="item-footer__spoller spoller-item-footer">
							<div className="spoller-item-footer__item">
								<button type="button" data-spoller className="spoller-item-footer__title _arrowBottom">НОВОСТНАЯ РАССЫЛКА</button>
								<form action="#" className="spoller-item-footer__body footer-subscribe">
									<label htmlFor="subscribe-input" className="footer-subscribe__label">Подпишитесь прямо сейчас!</label>
									<div className="footer-subscribe__line">
										<input id="subscribe-input" type="text" placeholder="example@gmail.com" className="footer-subscribe__input" />
										<button type="submit" className="footer-subscribe__button _arrowBottom"></button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="body-footer__bottom">
						<div className="body-footer__rules">
							Все материалы, размещенные на сайте, носят справочный характер и не являются
							публичной офертой, определяемойположениями Статьи 437 Гражданского кодекса Российской Федерации.
							При копировании материалов гиперссылка на www.zlatmax.ru обязательна!
						</div>
						<div className="body-footer__copy">
							Златоустовские ножи <span>www.zlatmax.ru ©</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}