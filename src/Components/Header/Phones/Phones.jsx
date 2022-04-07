import IcomoonReact from "icomoon-react";
import { useRef, useState } from "react";
import Modal from "../Modal/Modal";
import style from "./Phones.module.scss";
import iconSet from "../../../selection.json";





const Phones = ({ isAdaptive }) => {

	let [modalActive, setModalActive] = useState(false);
	let numbers = useRef();
	let downArrow = useRef();
	let toggleSpoiler = () => {
		numbers.current.classList.toggle(style.isSpoilerOpen);
		downArrow.current.classList.toggle(style.rotateArrow);
	}



	return <>
		{isAdaptive ? <>
			<a href="tel:88007774968" ref={downArrow} onClick={toggleSpoiler} className={style.phonesHeader__phone}>
				<IcomoonReact iconSet={iconSet} className={style.footerPhone} color="#fff" icon="footerPhone" />
			</a>

			<ul ref={numbers} className={style.phonesHeader__list}>
				<li><a href="tel:88007774968" className={style.phonesHeader__phone}>8-800-777-49-68</a></li>
				<li><a href="tel:88007774969" className={style.phonesHeader__phone}>8-800-777-49-69</a></li>
				<li><a href="tel:88007774970" className={style.phonesHeader__phone}>8-800-777-49-70</a></li>
			</ul>
		</>
			: <> <div className={style.actionsHeader__phones + " " + style.phonesHeader}>


				<div data-spollers className={style.phonesHeader__items}>
					<div className={style.phonesHeader__item}>

						<a href="tel:88007774967" className={style.phonesHeader__phone}><span></span>8-800-777-49-67</a>
						<button ref={downArrow} onClick={toggleSpoiler} className={style.phonesHeader__arrow}>
							<IcomoonReact iconSet={iconSet} className={style.arrowBottom} color="#e8aa31" height="0.625rem" icon="arrowBottom" />
						</button>

						<ul ref={numbers} className={style.phonesHeader__list}>
							<li><a href="tel:88007774968" className={style.phonesHeader__phone}>8-800-777-49-68</a></li>
							<li><a href="tel:88007774969" className={style.phonesHeader__phone}>8-800-777-49-69</a></li>
							<li><a href="tel:88007774970" className={style.phonesHeader__phone}>8-800-777-49-70</a></li>
						</ul>

					</div>
				</div>

				<button onClick={() => setModalActive(true)} className={style.phonesHeader__callback}>Заказать звонок</button>
				<Modal active={modalActive} setActive={setModalActive} >
					<p>
						Вам позвонят в течение часа, оставьте телефон для связи в окне ниже:
					</p>
					<form action="#" className={style.leaveNumber}>
						<button className={style.leaveNumber__button}></button>
						<input className={style.searchHeader__input} placeholder="Введите номер " />
					</form>
				</Modal>
			</div>
			</>
		}


	</>



}

export default Phones;