import ProjectCard from "./components/Card";
import Annu1 from "./Images/accueil annuaire.png"
import Annu2 from "./Images/annuaire.png"
import CheerHope from "./Images/CheerHope.png"
import RebelStats from "./Images/RebelStats.png"
import CPD from "./Images/CPD.png"
import DrinkE from "./Images/DrinkE.png"
import Nemesis from "./Images/Nemesis.png"

function Projects() {
    const projects = [
        {
            title: "Annuaire",
            description: "Annuaire dans le but d'avoir une gestion des nouveaux élèves arrivant à la Normandie Web School.",
            category: "Répertoire",
            languages: ["php", "SQL", "Tailwind"],
            images: [Annu1],
            url: "https://www.example.com/project1",
            urlProjet: "https://google.com/",
            enDeveloppement: false
        },
        {
            title: "CheerHope",
            description: "Site dans le but de promouvoir l'évènement associative en octobre 2023.",
            category: "Association",
            languages: ["Wordpress", "php"],
            images: [CheerHope],
            url: "https://cheerhope.com/",
            urlProjet: "https://google.com/",
            enDeveloppement: false
        },
        {
            title: "RebelStats",
            description: "Site permettant d'analyser les statistiques des joeurs de League Of Legends.",
            category: "Statistique",
            languages: ["php", "SQL", "CSS"],
            images: [RebelStats],
            url: "https://www.example.com/project1",
            urlProjet: "https://google.com/",
            enDeveloppement: true
        },
        {
            title: "C-Plus diffusion",
            description: "Site pour les aménagements d'espaces professionnels.",
            category: "Vitrine",
            languages: ["WordPress", "php", "CSS"],
            images: [CPD],
            url: "https://c-plus-diffusion.fr/",
            urlProjet: "https://google.com/",
            enDeveloppement: false
        },
        {
            title: "Nemesis Energie",
            description: "Site pour promouvoir l'électrique tel que les bornes de recharge ou encore les panneaux voltaïques.",
            category: "Vitrine",
            languages: ["WordPress", "php", "CSS"],
            images: [Nemesis],
            url: "https://nemesis-energie.com/",
            urlProjet: "https://google.com/",
            enDeveloppement: false
        },
        {
            title: "Drink",
            description: "Site pour promouvoir 2 bars de Rouen mais aussi leurs évènements.",
            category: "Vitrine",
            languages: ["WordPress", "php", "CSS"],
            images: [DrinkE],
            url: "https://drink-eat.fr/",
            urlProjet: "https://google.com/",
            enDeveloppement: false
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-36 mx-10">
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    category={project.category}
                    languages={project.languages}
                    images={project.images}
                    url={project.url}
                    urlProjet={project.urlProjet}
                    enDeveloppement={project.enDeveloppement}
                />
            ))}
        </div>
    );
}

export default Projects;