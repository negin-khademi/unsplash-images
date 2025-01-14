import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import { AppProvider } from './context';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </AppProvider>
  </React.StrictMode>
);
