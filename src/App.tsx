import React from 'react';
import {Route, Routes} from "react-router";
import MeetsView from "./views/MeetsView";
import ProjectView from "./views/ProjectView";
import PlaceView from "./views/PlaceView";
import UserView from "./views/UserView";
import PlacesView from "./views/PlacesView";
import MeetCreateView from "./views/MeetCreateView";
import './App.css'


function App() {
    return (
      <>
          <Routes>
              <Route path="/">
                  <Route index element={<MeetsView />} />
                  <Route path="meet" element={<MeetCreateView />} />
                  <Route path="project/:id" element={<ProjectView />} />
                  <Route path="place" element={<PlacesView />} />
                  <Route path="place/:id" element={<PlaceView />} />
                  <Route path="user/:id" element={<UserView />} />
              </Route>
          </Routes>
      </>
  )
}

export default App
