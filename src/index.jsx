import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import App from "./App";
import { render } from 'react-dom';
import untestedDependency from './untestedDependency';

untestedDependency();

render(<App/>, document.querySelector("#app"));
