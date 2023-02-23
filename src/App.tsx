import React from 'react';
import {Route, Routes} from "react-router";
import MainView from "./view/main/MainView";
import ProjectView from "./view/project/ProjectView";
import GroupView from "./view/group/GroupView";

function App() {
  return (
    <Routes>
        <Route path="/">
            <Route index element={<MainView />} />
            <Route path="project/:id" element={<ProjectView />} />
            <Route path="group/:id" element={<GroupView />} />
        </Route>
    </Routes>
  )
}

export default App
