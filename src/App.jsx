import React from 'react';
import HelloWorld from './components/HelloWorld.jsx'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" className="logo vue" alt="Vue logo" />
      </a>
      <HelloWorld msg="Vite + Vue" />
    </div>
  );
}

export default App;
