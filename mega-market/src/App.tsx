import Router from '@router/router'
import './App.css'
import { AppProviders } from '@AppProvider'

function App() {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  )
}

export default App
