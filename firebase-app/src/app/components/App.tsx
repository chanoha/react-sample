import Head from '../components/organism/Head/Head';
import Header from '../components/organism/Header/Header';

const App = ({ children }: { children?: any }) => (
  <>
  <Head />
    <main>
      <Header />
      {children}
    </main>
  </>
);

export default App;
