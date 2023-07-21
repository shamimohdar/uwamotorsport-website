import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Slideshow = ({Image1, Image2, Image3, Image4, Image5}) => {
	//Array of Images
	const images = [
		"/assets/main/Img1.jpg",
        "/assets/main/Img2.jpg",
        "/assets/main/Img3(2).jpg",
        "/assets/main/Img4(2).jpg",
        "/assets/main/002 (2).jpg",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 5000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-20 hover:bg-gray-500 rounded-full p-2">
				<ArrowLeftIcon className="invisible md:visible h-10 w-10 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
				<div className="mr-20 hover:bg-gray-500 rounded-full p-2">
				   <ArrowRightIcon className="invisible md:visible h-10 w-10 text-white cursor-pointer" />
			    </div>
		),
	};
	return (
        <div className="w-full h-full relative">
		<div className="relative w-full h-screen">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					
                    <div key={index} className="flex justify-center md:items-center items-start w-screen h-[screen] opacity-50">
						{/* <img
							className="w-screen h-screen"
							style={{objectFit: "cover"}}
							src={each}
						/> */}
						<Image src={each} width={2000} height={2000} className='object-cover w-screen h-screen' alt='/' />
					</div>
				))}
			</Zoom>
            <div className="absolute inset-x-0 bottom-10 flex justify-center items-center z-10 mb-10">
                <div className="w-10 h-10">
                    <Link scroll={false} href="#content">
                        <FontAwesomeIcon icon={faChevronDown} className="cursor-pointer" bounce size="2xl" />
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Slideshow;