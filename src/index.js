import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {makeServer} from './server'
import './index.css';
import App from './App';
import { NoteContext } from './Context/NoteContext';
import {AuthContext} from './Context/AuthContext'

//call server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContext>
      <NoteContext>
        <App />
      </NoteContext>
      </AuthContext>
    </BrowserRouter>
);

