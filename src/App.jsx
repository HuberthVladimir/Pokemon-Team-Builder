import './styles/global.scss'
import Routes from './Routes'
import { AppProvider } from './services/context'

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;