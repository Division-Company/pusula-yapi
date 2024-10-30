import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes/route';

function App() {
  const showRoutes = useRoutes(routes);
  return (
    <>
      {showRoutes}
    </>
  );
}

export default App;
