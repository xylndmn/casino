'use client';


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import useWindowSize from './useWindowSize.js';

import 'swiper/css/bundle';

const basePath = '/images/'

function RenderImage ({ slide, windowSize }) {
	if(windowSize.width <= 1023){
		return <Image priority className="card-image" height={146} width={205} src={`${basePath}${slide.imageSmall}`} alt={slide.title}/>
	} else {
		return <Image priority className="card-image" height={190} width={264} src={`${basePath}${slide.imageLarge}`} alt={slide.title}/>
	}
}

export const Slider = ({ slides }) => {
	const windowSize = useWindowSize();

	return (
		<>
			<div className="d-flex main-wrapper">
        <h1>CASINO</h1>
				<div className="ml-auto">
    			<span className="pagination"></span>
					<span className='arrow-nav'>
						<span className="arrow-left arrow"></span>
						<span role="button" className="arrow-right arrow"></span>
					</span>
					
					<span role="button" className="see-all-link"><Link href="/games"> SEE ALL GAMES <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} /> </Link></span>
				</div>
        
      </div>
			<Swiper
				slidesPerView={'auto'}
				modules={[ Navigation, Pagination ]}
				navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
				centerInsufficientSlides={true}
				pagination={{ el: '.pagination', clickable: true }}
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.title}>
					<RenderImage slide={slide} windowSize={windowSize}/>
					
					<div className='container-end d-flex'>
						<span>
							<Image height={20} width={20} src={`${basePath}${slide.icon}`} alt={slide.title}/>
						</span>
						<span className="card-title">{slide.title}</span>
					</div>
				</SwiperSlide>
					
				))}
			</Swiper>
		</>
	)
}