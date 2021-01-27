import Layout from './containers/layout/Layout';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/" exact component={Shop}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
