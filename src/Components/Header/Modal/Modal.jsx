import style from "./Modal.module.scss";


const Modal = ({ active, setActive, children }) => {



	return <div onClick={() => { setActive(false) }} className={active ? style.modal + ' ' + style.active : style.modal}>
		<div onClick={e => e.stopPropagation()} className={active ? style.modal__container + ' ' + style.active : style.modal__container}>
			{children}
		</div>
	</div>
}

export default Modal;