import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import PlaceIndex from './pviews/PlaceIndex'
import PlaceDetails from './pviews/PlaceDetails'
import Navigation from './Navigation'
import Error404 from './Error404'
import NewPlaceForm from './views/NewPlaceForm'
import EditPlaceForm from './views/EditPlaceForm'
import SignUpForm from './views/SignUpForm'
import LoginForm from './views/LoginForm'
import Default from './views/CurrentUser'

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Default />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/result/:page" component={searchResult} />
          <Route exact path="/books/:id" component={showBook} />
          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
