import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiShareBoxLine } from "react-icons/ri";
import { FaTools } from "react-icons/fa";

function ProjectCard({ title, description, category, languages, images, url, urlProjet, enDeveloppement }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div className={`max-w-lg rounded overflow-hidden shadow-lg bg-white ${images.length > 1 ? 'z-0' : ''}`}>
            <div className="max-w-lg">
                {images.length > 1 && (
                    <Slider {...settings} className="w-full">
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Projet ${index + 1}`} className="w-full" />
                            </div>
                        ))}
                    </Slider>
                )}
                {images.length === 1 && (
                    <img src={images[0]} alt={`Projet`} className="w-full" />
                )}
                <div className="px-6 py-4">
                    <div className='flex justify-between'>
                        <div className="font-bold text-xl mb-2">{title}</div>
                        {enDeveloppement && (
                            <div className="flex justify-end text-2xl text-red-500"><FaTools /></div>
                        )}
                    </div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{languages.join(', ')}</span>
                </div>
                <div className="px-6 py-4 flex justify-between items-center">
                    <a href={url} target='_blank' rel='noreferrer'><RiShareBoxLine className='bg-blue-700 text-white text-2xl' /></a>
                    <a href={urlProjet} className='underline font-semibold text-lg'>En savoir plus</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;