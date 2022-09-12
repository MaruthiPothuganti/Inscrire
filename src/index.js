import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {makeServer} from './server'
import './index.css';
import App from './App';
import { NoteContext } from './Context/NoteContext';
import { AuthContext } from './Context/AuthContext';
import { TagsContext } from './Context/TagContext';
import { QueryClientProvider, QueryClient} from 'react-query'

//call server
makeServer();

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContext>
      <NoteContext>
        <TagsContext>
        <QueryClientProvider client={queryClient}>
          <App />
          </QueryClientProvider>
        </TagsContext>
      </NoteContext>
      </AuthContext>
    </BrowserRouter>
);

