import React, {Component} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './modules/store';

// function App() {
//   return (
//     <MainContainer />
//   );
// }

// export default App;

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <MainContainer />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;
