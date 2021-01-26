import Layout from './containers/layout/layout';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Layout>
        <About />
      </Layout>
    </div>
  );
}

export default App;
