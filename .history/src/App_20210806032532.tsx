import { createContext } from 'react';

import { BrowserRouter,Route } from 'react-router-dom'

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home'

const TestContext = createContext('');

function App() {
  return (
    <BrowserRouter>
      <TestContext.Provider value={'Teste'}>
        <Route path="/" exact component={Home}></Route>
        <Route path="/room/new" component={NewRoom}></Route>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
