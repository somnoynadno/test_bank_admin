import React from 'react';
import './App.css';

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { CheckerList, CheckerCreate, CheckerEdit } from './pages/Checker';
import { TestTaskList, TestTaskCreate, TestTaskEdit } from './pages/TestTask';
import { VerdictStatusList, VerdictStatusCreate, VerdictStatusEdit } from './pages/VerdictStatus';
import { VerdictList, VerdictCreate, VerdictEdit } from './pages/Verdict';
import { ProgrammingLanguageList, ProgrammingLanguageCreate, ProgrammingLanguageEdit } from './pages/ProgrammingLanguage';
import { ConfigList, ConfigCreate, ConfigEdit} from './pages/Config';


import {apiAddress} from "./Options";

const dataProvider = jsonServerProvider(apiAddress);

const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="checker" list={CheckerList} create={CheckerCreate} edit={CheckerEdit} />
        <Resource name="test_task" list={TestTaskList} create={TestTaskCreate} edit={TestTaskEdit} />
        <Resource name="verdict_status" list={VerdictStatusList} create={VerdictStatusCreate} edit={VerdictStatusEdit} />
        <Resource name="verdict" list={VerdictList} create={VerdictCreate} edit={VerdictEdit} />
        <Resource name="programming_language" list={ProgrammingLanguageList} create={ProgrammingLanguageCreate} edit={ProgrammingLanguageEdit} />
        <Resource name="config" list={ConfigList} create={ConfigCreate} edit={ConfigEdit} />
    </Admin>
);

export default App;
