import { createContext, useState } from 'react';

import { BrowserRouter,Route } from 'react-router-dom'

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home'
import { auth, firebase } from './services/firebase';

type AuthContextType = {
  user : User | undefined;
  signInWithGoogle: () =>void;
}

type User = {
  id: string;
  name: string;
  avatar: string;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {
  const [user, setUser] = useState<User>();

  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            if(result.user){
              const { displayName, photoURL, uid } = result.user

              if(!displayName || !photoURL ){
                throw new Error('Missing information from Google Account');
              }

              setUser({
                id:uid,
                name:displayName,
                avatar:photoURL
              })
            }
        })
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Route path="/" exact component={Home}></Route>
        <Route path="/room/new" component={NewRoom}></Route>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
