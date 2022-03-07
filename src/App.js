import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

import Leagues from "./page/Leagues";
import LeaguesId from "./page/LeaguesId";


import Continents from "./page/Continents";
import Conid from './page/Conid';

import Countries from './page/Countries';
import Countriesid from "./page/Countriesid";
import LegInCouId from './page/LegInCouId';
import Sidebar from './components/Sidebar';
import LastFixtures from './page/fixtures/LastFixtures';
import DataFixtures from './page/fixtures/DataFixtures';
import TeamSearch from './page/Team/TeamSearch';
import Players from './page/Player/Players';
import TeamInfo from './page/Team/TeamInfo';
import PlayerStatistika from './page/Player/PlayerStatistika';
import Season from './page/Season/Season';
import SeasonSearch from './page/Season/SeasonSearch';
import SeasonTeam from './page/Season/SeasonTeam';






function App() {
  const Navbars = lazy(() => import("./components/Navbars"));


  return (
    <>
      <Suspense fallback={<div>LOADING</div>}>
        <Navbars />
        <Sidebar />




        <Routes>
          <Route path="/" element={<Leagues />} />
          <Route path="/leaguesid/:id" element={<LeaguesId />} />
          <Route path="/legincouid/:id" element={<LegInCouId />} />

          <Route path="continents" element={<Continents />} />
          <Route path="/continents/:id" element={<Conid />} />

          <Route path="countries" element={<Countries />} />
          <Route path="/countriesid/:id" element={<Countriesid />} />
          <Route path="/countriesid/:id/team/:id" element={<TeamInfo />} />
          <Route path="/countriesid/:id/players/:id" element={<Players />} />
          <Route path="/countriesid/:id/players/:id/statistike/:id" element={<PlayerStatistika />} />


          <Route path="season" element={<Season />} />
          <Route path="/seasonsearch/:id" element={<SeasonSearch />} />
          <Route path="/seasonteam/:id" element={<SeasonTeam />} />


          <Route path="lastfixtures" element={<LastFixtures />} />

          <Route path="datafixtures" element={<DataFixtures />} />

          <Route path="teamsearch" element={<TeamSearch />} />




          {/* <Route path="heroes/:hero_id" element={< />} /> */}



        </Routes>


        {/* <Footer /> */}
      </Suspense>




    </>
  );
}

export default App;
