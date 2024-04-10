import React from "react";
import SkillCard from "./Card";

function Competences() {
    return (
        <>
            <div className="mx-auto grid grid-cols-4">
                <SkillCard nom="HTML" pourcentage={100} />
                <SkillCard nom="CSS" pourcentage={90} />
                <SkillCard nom="JS" pourcentage={60} />
                <SkillCard nom="PHP" pourcentage={70} />
                <SkillCard nom="SQL" pourcentage={80} />
                <SkillCard nom="REACT" pourcentage={60} />
                <SkillCard nom="LINUX" pourcentage={75} />
                <SkillCard nom="WINDOWS" pourcentage={90} />
            </div>
        </>
    );
}

export default Competences;