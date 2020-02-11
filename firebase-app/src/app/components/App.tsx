import Header from '../components/organism/Header/Header';
import Head from '../components/organism/Head/Head';

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
