import Header from '../components/organism/Header/Header';

const App = ({ children }: { children?: any }) => (
  <main>
    <Header />
    {children}
  </main>
);

export default App;
