import React from 'react';
import {Route, Routes} from "react-router";
import MainView from "./views/MainView";
import ProjectView from "./views/ProjectView";
import PlaceView from "./views/PlaceView";
import UserView from "./views/UserView";

function App() {
  return (
    <Routes>
        <Route path="/">
            <Route index element={<MainView />} />
            <Route path="project/:id" element={<ProjectView />} />
            <Route path="place/:id" element={<PlaceView />} />
            <Route path="user/:id" element={<UserView />} />
        </Route>
    </Routes>
  )
}

export default App
