import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Router } from 'components/templates';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Router />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
