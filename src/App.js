import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FetchArticles from './components/FetchArticles'
import Sports from './pages/Sports'
import Books from './pages/Books'

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
      <Route path="/books">
        <Books />
      </Route>
    </BrowserRouter>
  )
}

export default App
