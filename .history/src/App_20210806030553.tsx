import { BrowserRouter,Route } from 'react-router-dom'

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}></Route>
      <Route path="/room/new" component={NewRoom}></Route>
    </BrowserRouter>
  );
}

export default App;
