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


const getUserData = () =>
    new Promise((resolve) =>
        setTimeout(() => {
            const user = window.localStorage.getItem("user");
            resolve(user);
        }, 10)
    );
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={<AuthLayout />}
            loader={() => defer({ userPromise: getUserData() })}
        >
            <Route element={<ProtectedLayout />}>
                <Route index element={<MainView />} />
                <Route path="meet" element={<CreateMeetView />} />
                <Route path="place" element={<PlacesView />} />
                <Route path="task/:id" element={<TaskView />} />
            </Route>
            <Route element={<HomeLayout />}>
                <Route path="/login" element={<LoginView />} />
                <Route path="project/:id" element={<ProjectView />} />
                <Route path="place/:id" element={<PlaceView />} />
                <Route path="user/:id" element={<UserView />} />
            </Route>

        </Route>
    )
);
