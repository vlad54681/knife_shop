import { NavLink } from "react-router-dom";
import "./Home/Home.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";
import { useState } from "react";

const Slider = () => {

	const [allSlides, setAllSlides] = useState();
	const [currentSlide, setCurrentSlide] = useState();

	return <>
		<Swiper
			className="main-block__slider"
			modules={[Autoplay, Parallax, Pagination, Navigation]}
			slidesPerView={1}
			observer={true}
			observeParents={true}
			spaceBetween={50}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			speed={800}
			pagination={{
				el: ".controll-main-block__dotts",
				clickable: true,
				//	type: "fraction",
			}}
			parallax={true}
			onSwiper={(swiper) => {
				setAllSlides(swiper.slides.length - 2)
				setCurrentSlide(swiper.realIndex + 1);
			}}
			onSlideChange={(swiper) => {
				setCurrentSlide(swiper.realIndex + 1);
			}}
			loop={true}
		>

			<div className="main-block__swiper">

				<SwiperSlide className="main-block__slide slide-main-block">
					<div className="slide-main-block__content">
						<h2 data-swiper-parallax="-100" className="slide-main-block__title">Интернет магазин сертифицированных</h2>
						<div data-swiper-parallax="-150" className="slide-main-block__sub-title">златоустовских ножей</div>
						<div data-swiper-parallax="-200" className="slide-main-block__text">Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
							представлен наиболее широкий выбор Златоустовских ножей от Златоустовских
							Оружейных Фабрик и компаний, мы являемся официальными поставщиками.
						</div>
					</div>
					<NavLink to="/" className="slide-main-block__button button ">
						Подробнее</NavLink>
				</SwiperSlide>
				<SwiperSlide className="main-block__slide slide-main-block">
					<div className="slide-main-block__content">
						<h2 data-swiper-parallax="-100" className="slide-main-block__title">Интернет магазин сертифицированных</h2>
						<div data-swiper-parallax="-150" className="slide-main-block__sub-title">златоустовских ножей</div>
						<div data-swiper-parallax="-200" className="slide-main-block__text">Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
							представлен наиболее широкий выбор Златоустовских ножей от Златоустовских
							Оружейных Фабрик и компаний, мы являемся официальными поставщиками.
						</div>
					</div>
					<NavLink to="/" className="slide-main-block__button button ">
						Подробнее</NavLink>
				</SwiperSlide>
				<SwiperSlide className="main-block__slide slide-main-block">
					<div className="slide-main-block__content">
						<h2 data-swiper-parallax="-100" className="slide-main-block__title">Интернет магазин сертифицированных</h2>
						<div data-swiper-parallax="-150" className="slide-main-block__sub-title">златоустовских ножей</div>
						<div data-swiper-parallax="-200" className="slide-main-block__text">Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
							представлен наиболее широкий выбор Златоустовских ножей от Златоустовских
							Оружейных Фабрик и компаний, мы являемся официальными поставщиками.
						</div>
					</div>
					<NavLink to="/" className="slide-main-block__button button ">
						Подробнее</NavLink>
				</SwiperSlide>




			</div>

			<div className="main-block__controll controll-main-block">
				<div className="controll-main-block__dotts">

				</div>
				<div className="controll-main-block__fraction fraction-controll">
					<span className="fraction-controll__current">{currentSlide < 10 ? "0" + currentSlide : currentSlide}</span> / <span className="fraction-controll__all">{allSlides < 10 ? "0" + allSlides : allSlides}</span>
				</div>

			</div>
		</Swiper>
	</>


}


export default Slider;