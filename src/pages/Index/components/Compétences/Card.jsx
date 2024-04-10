import React from 'react';

function SkillCard({ nom, pourcentage }) {
    return (
        <div className="rounded-lg overflow-hidden p-6 flex flex-col items-center">
            <div className="w-32 h-32 mb-4">
                <svg className="w-full h-full">
                    <circle cx="50%" cy="50%" r="45%" className="stroke-current text-gray-200" strokeWidth="8" />
                    <circle cx="50%" cy="50%" r="45%" className="stroke-current text-blue-500" strokeWidth="8" style={{ strokeDasharray: '283', strokeDashoffset: `calc(283 - (283 * ${pourcentage}) / 100)` }} />
                </svg>
                <div className="mt-[-80px] flex justify-center items-center text-white text-xl font-bold">
                    <span>{pourcentage}%</span>
                </div>
            </div>
            <h2 className="text-lg font-semibold">{nom}</h2>
        </div>
    );
}

export default SkillCard;
