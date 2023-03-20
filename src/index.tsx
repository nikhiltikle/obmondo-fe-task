import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { UsersList } from './components/UsersList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UsersList />
  </React.StrictMode>
);

