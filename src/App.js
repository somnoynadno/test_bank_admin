import React from 'react';
import './App.css';

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { CheckerList, CheckerCreate, CheckerEdit } from './pages/Checker';
import { TestTaskList, TestTaskCreate, TestTaskEdit } from './pages/TestTask';
import { VerdictStatusList, VerdictStatusCreate, VerdictStatusEdit } from './pages/VerdictStatus';
import { VerdictList, VerdictCreate, VerdictEdit } from './pages/Verdict';
import { ProgrammingLanguageList, ProgrammingLanguageCreate, ProgrammingLanguageEdit } from './pages/ProgrammingLanguage';
import { ConfigList, ConfigCreate, ConfigEdit } from './pages/Config';
import { TestTypeList, TestTypeCreate, TestTypeEdit } from './pages/TestType';
import { TestCaseList, TestCaseCreate, TestCaseEdit } from './pages/TestCase';
import { TaskList, TaskCreate, TaskEdit } from './pages/Task';
import { SolutionList, SolutionCreate, SolutionEdit, SolutionShow } from './pages/Solution';

import {apiAddress} from "./Options";

const dataProvider = jsonServerProvider(apiAddress);

const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="checker" list={CheckerList} create={CheckerCreate} edit={CheckerEdit} />
      <Resource name="config" list={ConfigList} create={ConfigCreate} edit={ConfigEdit} />
      <Resource name="programming_language" list={ProgrammingLanguageList} create={ProgrammingLanguageCreate} edit={ProgrammingLanguageEdit} />
      <Resource name="solution" list={SolutionList} create={SolutionCreate} edit={SolutionEdit} show={SolutionShow} />
      <Resource name="task" list={TaskList} create={TaskCreate} edit={TaskEdit} />
      <Resource name="test_case" list={TestCaseList} create={TestCaseCreate} edit={TestCaseEdit} />
      <Resource name="test_task" list={TestTaskList} create={TestTaskCreate} edit={TestTaskEdit} />
      <Resource name="test_type" list={TestTypeList} create={TestTypeCreate} edit={TestTypeEdit} />
      <Resource name="verdict" list={VerdictList} create={VerdictCreate} edit={VerdictEdit} />
      <Resource name="verdict_status" list={VerdictStatusList} create={VerdictStatusCreate} edit={VerdictStatusEdit} />
    </Admin>
);

export default App;
