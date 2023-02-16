import React from 'react';
import { Routes, Route } from "react-router-dom";
import MainView from "./view/main/MainView";
import ProjectView from "./view/project/ProjectView";
import GroupView from "./view/group/GroupView";

function App() {
  return (
    <Routes>
        <Route path="/">
            <Route index element={<MainView />} />
            <Route path="project" element={<ProjectView />} />
            <Route path="group" element={<GroupView />} />
        </Route>
    </Routes>
  )
}

export default App
