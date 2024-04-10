import ProjectCard from "./components/Projets/Card";
import Competences from "./components/Compétences/Competences";
import Contact from "./components/Contact/Contact";

function Index() {
    return (
        <>
            <div className="bg-[#27292b] pt-36 text-white flex-col items-center z-0">
                <header>
                    <div className="justify-center flex-col items-center text-center">
                        <h1 className="text-6xl mb-3">Mathéo BATELIER</h1>
                        <p className="font-thin text-xl mb-10">Actuellement en 2ème année d'étude<br />
                            de développement web à la Normandie Web School</p>
                        <a href="/cv" className="cursor-pointer"><button className="bg-blue-700 rounded-full px-10 py-2">Mon CV</button></a>
                    </div>
                </header>
                <main className="mt-36 pb-36">
                    <div className="flex justify-between px-24">
                        <h2 className="text-2xl font-semibold">Mes projets Web</h2>
                        <h2 className="text-2xl"><a href="/" className="underline">Voir plus</a></h2>
                    </div>
                    <div className="mt-12 flex flex-wrap justify-evenly">
                        <ProjectCard
                            langage="php | JavaScript | Tailwind | MySQL"
                            categorie="Dashboard"
                            titre="Annuaire NWS"
                            description="Projet permettant d'inscrire des élèves"
                            description2="souhaitant rejoindre la NWS."
                        />
                        <div className="bg-blue-700">
                            <ProjectCard
                                langage="php | JavaScript | Tailwind | MySQL"
                                categorie="Statistique"
                                titre="RebelStats"
                                description="Projet regroupant les statistiques des joueurs"
                                description2="sur League Of Legends."
                            />
                        </div>
                        <ProjectCard
                            langage="WordPress | JavaScript"
                            categorie="Site vitrine"
                            titre="C-Plus Diffusion"
                            description="Site réalisé pour une entrerpise proposant des"
                            description2="aménagements professionnels."
                        />
                    </div>
                </main>
                <section className="mb-36">
                    <div className="bg-black py-8 mb-10">
                        <h2 className="text-center text-2xl">Finir 2ème c'est finir 1er des perdants<br />~ Anonyme</h2>
                    </div>
                </section>
                <section className="z-10 mb-36">
                    <div>
                        <div>
                            <h2 className="text-2xl font-semibold mx-24">Mes compétences</h2>
                        </div>
                        <div className="flex justify-center ">
                            <Competences />
                        </div>
                    </div>
                </section>
                <section id="Contact">
                    <div>
                        <h2 className="text-2xl text-center font-semibold pb-12">Contact</h2>
                        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Une envie de réaliser un projet ? Besoin d'un conseil ou vous souhaitez discuter de l'une de mes création ? N'hésitez plus, contactez-moi !</p>
                    </div>
                    <Contact />
                </section>
            </div>
        </>
    )
}

export default Index;