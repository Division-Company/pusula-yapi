import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Content from './components/content';
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
