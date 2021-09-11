import './styles/global.scss'
import Routes from './Routes'
import { UseAppProvider } from './services/context'

function App() {
  return (
    <UseAppProvider>
      <Routes />
    </UseAppProvider>
  );
}

export default App;