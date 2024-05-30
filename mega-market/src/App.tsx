import Router from '@router/router'
import { UserProvider } from '@services/models/userState'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Router />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
