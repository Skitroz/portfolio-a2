import React from "react";
import ProjectCard from "./components/CardProjects";
import SkyzeVintedBOT from "./Images/skyzevinted.png";

function SkyzeVinted() {
  return (
    <>
      <ProjectCard
        title="SkyzeVinted"
        photo={SkyzeVintedBOT}
        description={
          <>
            SkyzeVinted est un bot Discord spécialisé dans la recherche et la récupération des dernières annonces sur Vinted, la plateforme de vente d'articles d'occasion. Conçu pour simplifier la recherche d'articles spécifiques, SkyzeVinted permet aux utilisateurs de regrouper les annonces d'une catégorie précise directement sur Discord. <br /><br />

            Avec SkyzeVinted, vous pouvez facilement rester à jour avec les dernières offres sans avoir à naviguer sur le site Vinted. Le bot utilise l'API de Vinted pour récupérer les annonces les plus récentes, fournissant ainsi un accès rapide et pratique à une variété d'articles. <br /><br />

            Les fonctionnalités principales de SkyzeVinted incluent : <br /><br />

            - Recherche par catégorie : Les utilisateurs peuvent spécifier la catégorie d'articles qu'ils recherchent, comme les vêtements, les accessoires, les chaussures, etc. <br />
            - Détails complets des annonces : SkyzeVinted affiche des informations détaillées sur chaque annonce, y compris l'heure de publication, la première photo de l'article, sa taille, sa marque et son état. <br />
            - Mise à jour automatique : Le bot actualise régulièrement les annonces pour garantir que les utilisateurs disposent toujours des informations les plus récentes. <br /><br />

            Que vous soyez un passionné de shopping à la recherche de bonnes affaires ou simplement curieux de voir les dernières tendances, SkyzeVinted est l'outil idéal pour rester informé des nouveautés sur Vinted, directement depuis votre serveur Discord.
          </>
        }
        url="URL du projet"
        taille={30}
      />
    </>
  );
}

export default SkyzeVinted; 