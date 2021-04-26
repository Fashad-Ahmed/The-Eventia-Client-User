import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ScrollToTop from './config/ScrollToTop';
import View from './components/View Details/View';
import User from './user UI/User'
import Admin from './admin/Admin'
import Wedpack from './user UI/componenets/Wedpack'
import Birthpack from './user UI/componenets/Birthpack'
import Corppack from './user UI/componenets/Corppack'
import Ratings from './user UI//componenets/Ratings'
import Booked from './user UI//componenets/Booked'
import Invoices from './user UI/componenets/Invoices'
import Custom from './user UI/componenets/Custom'
import Logout from './user UI/componenets/Logout.jsx'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/user' component={User} />
            <Route exact path='/weddingPackages' component={Wedpack} />
            <Route exact path='/birthdaypackages' component={Birthpack} />
            <Route exact path='/corporatePackages' component={Corppack} />
            <Route exact path='/userRatings' component={Ratings} />
            <Route exact path='/userBooked' component={Booked} />
            <Route exact path='/userInvoices' component={Invoices} />
            <Route exact path='/userCustom' component={Custom} />
            <Route exact path='/:name' component={View} />
            <Redirect to='/' />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
