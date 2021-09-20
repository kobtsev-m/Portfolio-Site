import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Router } from 'components/templates';

ReactDOM.render(
  <Suspense fallback='Loading...'>
    <Layout>
      <Router />
    </Layout>
  </Suspense>,
  document.getElementById('root')
);
