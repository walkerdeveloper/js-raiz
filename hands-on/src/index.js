import React from 'react';
import ReactDOM from 'react-dom';

import FatherComponent from './Components/Father';
import TechsComponent from './Components/Techs';

ReactDOM.render(
    React.createElement(TechsComponent),
    document.getElementById('app')
);