import React from 'react';
import {Route, Routes} from "react-router";
import MainView from "./views/MainView";
import ProjectView from "./views/ProjectView";
import PlaceView from "./views/PlaceView";
import UserView from "./views/UserView";
import PlacesView from "./views/PlacesView";
import TaskView from "./views/task/TaskView";
import CreateMeetView from "./views/createMeet/CreateMeetView";
import './App.css'


function App() {
    return (
      <>
          <Routes>
              <Route path="/">
                  <Route index element={<MainView />} />
                  <Route path="meet" element={<CreateMeetView />} />
                  <Route path="project/:id" element={<ProjectView />} />
                  <Route path="place" element={<PlacesView />} />
                  <Route path="place/:id" element={<PlaceView />} />
                  <Route path="user/:id" element={<UserView />} />
                  <Route path="task/:id" element={<TaskView />} />
              </Route>
          </Routes>
      </>
  )
}

export default App
