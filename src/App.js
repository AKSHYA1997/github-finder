import React from "react";
import "./App.css";

function App() {
  const name = "Joe Blue";
  const foo = () => "Blue Joe";
  const loading = false;

  return (
    <React.Fragment>
      {/* start of JXS  */}
      <div className="App">
        <h1>Hello From The Other Side!</h1>
        <h1>Hello {name}</h1>
        <h1>Hello {1 + 2}</h1>
        <h1>Hello {foo()}</h1>
        {loading ? <h1>loading...</h1> : <h1>Hi There😎</h1>}
      </div>
      {/* end of JXS */}
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
