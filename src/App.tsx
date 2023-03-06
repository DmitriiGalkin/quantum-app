import React from 'react';
import {Route, Routes} from "react-router";
import MainView from "./views/MainView";
import ProjectView from "./views/ProjectView";
import PlaceView from "./views/PlaceView";
import UserView from "./views/UserView";
import PlacesView from "./views/PlacesView";
import TaskView from "./views/task/TaskView";
import LoginView from "./views/LoginView";
import CreateMeetView from "./views/createMeet/CreateMeetView";
import './App.css'
import { ProtectedLayout } from "./modules/login/ProtectedLayout";
import {createBrowserRouter, createRoutesFromElements, defer} from "react-router-dom";
import {AuthLayout} from "./modules/login/AuthLayout";
import {HomeLayout} from "./modules/login/HomeLayout";

// function App() {
//     return (
//       <>
//           <Routes>
//               <Route path="/">
//                   <Route index element={<MainView />} />
//                   <Route path="login" element={<LoginView />} />
//                   <Route path="meet" element={<CreateMeetView />} />
//                   <Route path="project/:id" element={<ProjectView />} />
//                   <Route path="place" element={<PlacesView />} />
//                   <Route path="place/:id" element={<PlaceView />} />
//                   <Route path="user/:id" element={<UserView />} />
//                   <Route path="task/:id" element={<TaskView />} />
//               </Route>
//           </Routes>
//           <Routes>
//               <Route element={<HomeLayout />}>
//                   <Route path="/" element={<HomePage />} />
//                   <Route path="/login" element={<LoginPage />} />
//               </Route>
//
//               <Route path="/dashboard" element={<ProtectedLayout />}>
//                   <Route path="profile" element={<ProfilePage />} />
//                   <Route path="settings" element={<SettingsPage />} />
//               </Route>
//           </Routes>
//       </>
//   )
// }
const getUserData = () =>
    new Promise((resolve) =>
        setTimeout(() => {
            const user = window.localStorage.getItem("user");
            resolve(user);
        }, 3000)
    );
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={<AuthLayout />}
            loader={() => defer({ userPromise: getUserData() })}
        >
            <Route element={<HomeLayout />}>
                <Route path="/" element={<div />} />
                <Route path="/login" element={<LoginView />} />
                <Route path="project/:id" element={<ProjectView />} />
                <Route path="place/:id" element={<PlaceView />} />
                <Route path="user/:id" element={<UserView />} />
            </Route>
            <Route element={<ProtectedLayout />}>
                <Route index element={<MainView />} />
                <Route path="meet" element={<CreateMeetView />} />
                <Route path="place" element={<PlacesView />} />
                <Route path="task/:id" element={<TaskView />} />
            </Route>
        </Route>
    )
);
