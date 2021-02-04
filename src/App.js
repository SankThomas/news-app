import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FetchArticles from './components/FetchArticles'
import Sports from './pages/Sports'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Route path="/" exact>
        <FetchArticles />
      </Route>
      <Route path="/sports">
        <Sports />
      </Route>
    </BrowserRouter>
  )
}

export default App
