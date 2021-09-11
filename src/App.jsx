import './styles/global.scss'
import { TeamInput } from './components/molecules/teamInput'
import { UseAppProvider } from './services/context'

function App() {
  return (
    <UseAppProvider>
      <TeamInput />
    </UseAppProvider>
  );
}

export default App;