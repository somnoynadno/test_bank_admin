import React from 'react';
import './App.css';

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { CheckerList, CheckerCreate, CheckerEdit } from './pages/Checker';
import { TestTaskList, TestTaskCreate, TestTaskEdit } from './pages/TestTask';

import {apiAddress} from "./Options";

const dataProvider = jsonServerProvider(apiAddress);

const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="checker" list={CheckerList} create={CheckerCreate} edit={CheckerEdit} />
      <Resource name="test_task" list={TestTaskList} create={TestTaskCreate} edit={TestTaskEdit} />
    </Admin>
);

export default App;
