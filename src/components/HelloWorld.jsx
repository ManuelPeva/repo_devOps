import React, { useState } from 'react';

function HelloWorld(props) {
  const [count, setCount] = useState(2);

  return (
    <div>
      <h1>{props.msg}</h1>

      <div className="card">
        <button type="button" onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>
          Edit
          <code>modificación para verficar</code> edición en devOps
        </p>
      </div>

      <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" rel="noopener noreferrer">
          create-vue
        </a>, aqui no dice nada
      </p>
      <p>
        Install
        <a href="https://github.com/vuejs/language-tools" target="_blank" rel="noopener noreferrer">
          Volar
        </a> IDE MEX
      </p>
      <p className="read-the-docs">Click on the Vite and Vue logos to learn more</p>
    </div>
  );
}

export default HelloWorld;
