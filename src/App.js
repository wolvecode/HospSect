import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
<<<<<<< HEAD
=======

>>>>>>> master
import HospSect from "./HospSect";
const Loading = ({ children }) => {
  return (
      <React.Suspense fallback={() => <h2>Loading...</h2>}>
        { children }
      </React.Suspense>
  )
}

const Login = React.lazy(() => import('./Login'))

class App extends React.Component{
  render() {
    return(
        <BrowserRouter>
          <Switch>
            <Route path='/login' exact render={() => <Loading>
              <Login />
            </Loading>} />
            <Route path='/' component={HospSect} />
          </Switch>
        </BrowserRouter>
    )
  }
}
export default App;
