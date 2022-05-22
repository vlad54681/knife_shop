import style from './Header.module.scss'
import { useEffect, useState } from 'react';
import Catalog from './Catalog/Catalog';
import TopHeader from './TopHeader/TopHeader';
import Bodyheader from './BodyHeader/Bodyheader';
const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMenuAdaptive, setIsMenuAdaptive] = useState(false);
	const [isMenuForMobileSlall, setIsMenuForMobileSlall] = useState(false);
	const [isCatalogMenuOpened, setIsCatalogMenuOpened] = useState(false);
	const [isColumn1Opened, SetIsColumn1Opened] = useState(false);
	const [isColumn2Opened, SetIsColumn2Opened] = useState(false);
	const [isColumn3Opened, SetIsColumn3Opened] = useState(false);
	const [isColumn4Opened, SetIsColumn4Opened] = useState(false);
	const [isColumn5Opened, SetIsColumn5Opened] = useState(false);



	let toggleColumn = (order) => {
		SetIsColumn1Opened(prev => order == 1 ? prev = !prev : prev = false)
		SetIsColumn2Opened(prev => order == 2 ? prev = !prev : prev = false)
		SetIsColumn3Opened(prev => order == 3 ? prev = !prev : prev = false)
		SetIsColumn4Opened(prev => order == 4 ? prev = !prev : prev = false)
		SetIsColumn5Opened(prev => order == 5 ? prev = !prev : prev = false)
	}
	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			let windowSize = entries[0].contentBoxSize[0].inlineSize;
			if (windowSize < 991.98) {
				setIsMenuAdaptive(true);
			}
			if (windowSize >= 991.98) {
				setIsMenuAdaptive(false)
			}
			if (windowSize < 479.98) {
				setIsMenuForMobileSlall(true)
			}
			if (windowSize >= 479.98) {
				setIsMenuForMobileSlall(false)
			}
		})
		resizeObserver.observe(document.body)
	}, [])



	let toggleMenu = () => {
		setIsCatalogMenuOpened(false);
		setIsMenuOpen(prev => !prev);
		SetIsColumn1Opened(false);
		SetIsColumn2Opened(false);
		SetIsColumn3Opened(false);
		SetIsColumn4Opened(false);
		SetIsColumn5Opened(false);
	}

	useEffect(() => {
		isMenuOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
	}, [isMenuOpen])


	return <header className={style.header}>

		<TopHeader isMenuAdaptive={isMenuAdaptive} isMenuForMobileSlall={isMenuForMobileSlall} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} setIsCatalogMenuOpened={setIsCatalogMenuOpened} />

		<Bodyheader isMenuForMobileSlall={isMenuForMobileSlall} isMenuAdaptive={isMenuAdaptive} />

		<Catalog isMenuForMobileSlall={isMenuForMobileSlall} isColumn1Opened={isColumn1Opened} SetIsColumn1Opened={SetIsColumn1Opened} isColumn2Opened={isColumn2Opened}
			SetIsColumn2Opened={SetIsColumn2Opened} isColumn3Opened={isColumn3Opened}
			SetIsColumn3Opened={SetIsColumn3Opened} isColumn4Opened={isColumn4Opened}
			SetIsColumn4Opened={SetIsColumn4Opened} isColumn5Opened={isColumn5Opened}
			SetIsColumn5Opened={SetIsColumn5Opened} isMenuAdaptive={isMenuAdaptive}
			isMenuOpen={isMenuOpen} setIsCatalogMenuOpened={setIsCatalogMenuOpened}
			isCatalogMenuOpened={isCatalogMenuOpened} toggleColumn={toggleColumn} />

	</header>
}

export default Header;