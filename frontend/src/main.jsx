import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { GlobalStateProvider } from './utils/GlobalStateProvider';

import { routers } from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <RouterProvider router={routers} />
    </GlobalStateProvider>
  </React.StrictMode>,
)