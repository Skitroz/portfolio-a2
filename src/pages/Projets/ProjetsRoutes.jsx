import React from "react";
import { Routes, Route } from "react-router-dom";
import AnnuNWS from "./AnnuNWS";
import RebelStats from "./RebelStats";
import SkyzeVinted from "./SkyzeVinted";
import Nemesis from "./Nemesis";
import CheerHope from "./CheerHope";
import CPlusDiffusion from "./CPlusDiffusion";
import DrinkEats from "./DrinkEats";

function ProjetRoutes() {
  return (
    <Routes>
      <Route path="/annuaire-nws" element={<AnnuNWS />} />
      <Route path="/rebelstats" element={<RebelStats />} />
      <Route path="/skyzevinted" element={<SkyzeVinted />} />
      <Route path="/nemesis" element={<Nemesis />} />
      <Route path="/cheer-hope" element={<CheerHope />} />
      <Route path="/c-plus-diffusion" element={<CPlusDiffusion />} />
      <Route path="/drink-eats" element={<DrinkEats />} />
    </Routes>
  );
}

export default ProjetRoutes;
