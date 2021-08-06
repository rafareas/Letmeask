import { createContext, useState } from 'react';

import { BrowserRouter,Route } from 'react-router-dom'

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home'

export const AuthContext = createContext({} as any);

function App() {
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{value, setValue}}>
        <Route path="/" exact component={Home}></Route>
        <Route path="/room/new" component={NewRoom}></Route>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
