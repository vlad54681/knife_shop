import style from './App.scss';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {

	//https://www.figma.com/file/VsTxE2FudUz3Svb23sEFZm/zlatmax?node-id=39%3A33
	//https://www.npmjs.com/package/icomoon-react
	//https://swiperjs.com/demos
	//https://icomoon.io/app/#/select/font
	return <div className={style.app}>
		<div className={style.wrapper}>
			<Routes>
				<Route path='*' element={<Header />} />
			</Routes>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Routes>
				<Route path='*' element={<Footer />} />
			</Routes>

		</div>
	</div >

}

export default App;
