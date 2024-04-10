import React from "react";
import Logo from "./Images/logo.png"
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className="bg-black">
                <div className="flex justify-center">
                    <div className="flex flex-col items-center gap-2">
                        <a href="/"><img src={Logo} alt="Logo de Mathéo BATELIER" width={100} /></a>
                        <div className="flex gap-4 items-center">
                            <a href="https://www.linkedin.com/in/matheobtl/" target="_blank"><FaLinkedin className="text-white text-6xl" /></a>
                            <a href="https://github.com/Skitroz" target="_blank"><FaGithub className="text-white text-6xl" /></a>
                        </div>
                        <div className="border-b-2 w-[500px] my-4"></div>
                        <p className="text-white font-thin mb-8">Copyright © 2024 Mathéo BATELIER </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;