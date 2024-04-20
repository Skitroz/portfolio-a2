import React, { useState } from "react";

function ProjectCard({ title, description, photo, alt, url }) {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const toggleImageSize = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  return (
    <>
      <div className="pt-36 pb-[72px] bg-[#27292b] text-white">
        <h1 className="text-4xl underline ml-[100px] mb-10 font-semibold">{title}</h1>
        <div className="h-64 overflow-hidden mx-[200px]" onClick={toggleImageSize}>
          <img src={photo} alt={alt} className="w-full h-auto object-cover cursor-pointer" />
        </div>
        {isImageExpanded && (
          <div className="fixed top-0 left-0 w-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="flex flex-col">
              <button
                className="text-3xl my-2 border-4 border-red-700 ml-[700px]"
                onClick={toggleImageSize}
              >
                ❌
              </button>
              <img src={photo} alt={alt} className="pb-10" />
            </div>
          </div>
        )}
        <div className="mx-[100px] mt-24 flex justify-between gap-[250px]">
          <p className="text-xl">{description}</p>
          <a
            href={url}
            target="_blank"
            className="h-10 w-[285px] bg-blue-700 px-4 py-2 rounded-full"
          >
            {url}
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
