import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      // start of JXS
      <div className='App'>
        <h1>Hello From The Other Side!</h1>
      </div>
      // end of JXS
    </React.Fragment>
  );
}

// other way to code
// class App extends React.Component {
//   render() {
//     return React.createElement(
//       'div',
//       { className: 'App' },
//       React.createElement('h1', null, 'Hello From The Other Side!')
//     );
//   }
// }

export default App;
