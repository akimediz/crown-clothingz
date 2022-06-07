import { Switch, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatPage = ()=>{
  return (
   <div>
      Hats Page ...

   </div>
  )
}

function App() {
  return (
    <div >
      <Switch>
        <Route  exact path="/" component={Homepage}/>
        <Route  exact path="/shop/hats" component={HatPage}/>

      </Switch>
    </div>
  );
}


export default App;
