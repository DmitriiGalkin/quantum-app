import React from 'react';
import {Route, Routes} from "react-router";
import Main from "./pages/main";
import Project from "./pages/project";
import Map from "./pages/map";
import User from "./pages/user";
import Task from "./pages/task";
import Login from "./pages/login";
import CreateMeet from "./pages/createMeet";
import CreateUser from "./pages/createUser";
import CreateProject from "./pages/createProject";
import CreatePlace from "./pages/createPlace";

import Place from "./pages/place";

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
                <Route index element={<Main />} />
                <Route path="meet" element={<CreateMeet />} />
                <Route path="map" element={<Map />} />
                <Route path="project" element={<CreateProject />} />
                <Route path="user" element={<CreateUser />} />
                <Route path="place" element={<CreatePlace />} />
                <Route path="task/:id" element={<Task />} />
                <Route path="project/:id" element={<Project />} />
                <Route path="place/:id" element={<Place />} />
                <Route path="user/:id" element={<User />} />
            </Route>
            <Route element={<HomeLayout />}>
                <Route path="/login" element={<Login />} />
            </Route>
        </Route>
    )
);
