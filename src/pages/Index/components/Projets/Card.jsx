import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

function ProjectCard({ langage, categorie, titre, description, description2 }) {
    return (
        <div className="border-[1px] rounded p-8 w-[450px]">
            <div>
                <div className='flex items-center justify-between gap-4'>
                    <p>{langage}</p>
                    <p className='underline'>{categorie}</p>
                </div>
                <h3 className='text-xl font-bold mt-6 mb-2'>{titre}</h3>
                <p className='text-sm'>{description}</p>
                <p className='text-sm mb-6'>{description2}</p>
                <a href="/"><span className='flex items-center gap-2 underline'>En savoir plus <FaArrowRight /></span></a>    
            </div>
        </div>
    );
}

export default ProjectCard;
