import React from 'react';
import {Route, Routes} from "react-router";
import MainView from "./view/main/MainView";
import ProjectView from "./view/project/ProjectView";
import PlaceView from "./view/place/PlaceView";

function App() {
  return (
    <Routes>
        <Route path="/">
            <Route index element={<MainView />} />
            <Route path="project/:id" element={<ProjectView />} />
            <Route path="place/:id" element={<PlaceView />} />
        </Route>
    </Routes>
  )
}

export default App
