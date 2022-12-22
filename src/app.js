import React from 'react';
import { createRoot } from 'react-dom/client';
import IndecisionApp from './components/IndecisionApp';
import 'sanitize.css';
import './styles/styles.scss';


const root = createRoot(document.getElementById('app'));
root.render(<IndecisionApp />);