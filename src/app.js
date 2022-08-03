import './app.css';
import { createRoot } from 'react-dom/client';
import React from 'react';
import compose from './compose.mjs';

const start = async () => {
    const menu = await fetch('./menu.json').then(res => res.json());
    const compositionName = 'Caffe Stazione Simulation';
    const composition = compose({ compositionName, configs: [{ menu }] });
    const { modules, config } = composition;
    modules.mixpanel.init(config.mixpanelToken, { debug: config.isTest });
    const container = document.getElementById('app');
    const root = createRoot(container);
    root.render(<React.StrictMode><modules.components.App /></React.StrictMode>);
};

start();
