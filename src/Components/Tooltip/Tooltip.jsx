import style from './Tooltip.module.scss'


const Tooltip = ({ children }) => {
	return <div className={style.tooltip}>
		{children}
	</div>
}

export default Tooltip;