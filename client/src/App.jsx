import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Results from './pages/Results'
import History from './pages/History'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/results"  element={<Results />} />
            <Route path="/history"  element={<History />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App