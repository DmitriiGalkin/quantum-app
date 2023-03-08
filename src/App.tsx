import React from 'react';
import {Route} from "react-router";
import Project from "./pages/project";
import Map from "./pages/map";
import User from "./pages/user";
import Task from "./pages/task";
import Login from "./pages/login";
import CreateMeet from "./pages/createMeet";
import CreateUser from "./pages/createUser";
import CreateProject from "./pages/createProject";
import CreatePlace from "./pages/createPlace";
import Meets from "./pages/meets";
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";
import Uniques from "./pages/uniques";

import Place from "./pages/place";

import './App.css'
import {ProtectedLayout} from "./modules/login/ProtectedLayout";
import {createBrowserRouter, createRoutesFromElements, defer} from "react-router-dom";
import {AuthLayout} from "./modules/login/AuthLayout";
import {HomeLayout} from "./modules/login/HomeLayout";
import MainLayout from './layouts/MainLayout'

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
                <Route element={<MainLayout />}>
                    <Route path="meets" element={<Meets />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="tasks" element={<Tasks />} />
                    <Route path="uniques" element={<Uniques />} />
                </Route>
                <Route path="meet" element={<CreateMeet />} />
                <Route path="map" element={<Map />} />
                <Route path="project" element={<CreateProject />} />
                <Route path="project/:id/edit" element={<CreateProject isEdit />} />
                <Route path="project/:id" element={<Project />} />
                <Route path="user" element={<CreateUser />} />
                <Route path="place" element={<CreatePlace />} />
                <Route path="task/:id" element={<Task />} />
                <Route path="place/:id" element={<Place />} />
                <Route path="user/:id" element={<User />} />
            </Route>
            <Route element={<HomeLayout />}>
                <Route path="/login" element={<Login />} />
            </Route>
        </Route>
    )
);
