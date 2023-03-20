import React from 'react';

import router from './router/app-router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
