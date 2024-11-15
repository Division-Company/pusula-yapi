import React from 'react';
import { useRoutes} from 'react-router-dom';
import routes from './routes/route';
import { Toaster } from 'react-hot-toast';

function App() {
  const showRoutes = useRoutes(routes);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />  
      {showRoutes}
    </>
    
  );
}
export default App;
