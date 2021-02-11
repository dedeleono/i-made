import Layout from './containers/layout/Layout';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/about" component={}/>
          <Route path="/contact" component={}/>
          <Route path="/" exact component={}/>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
