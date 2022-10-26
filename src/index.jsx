import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

function Hello({ name }) {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Warld" />, root);
}
