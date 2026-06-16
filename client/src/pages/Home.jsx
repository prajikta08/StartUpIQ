import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IdeaForm from '../components/IdeaForm'
import Hero from '../components/Hero'          // ← add this

function Home() {
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const navigate              = useNavigate()

  const handleSubmit = async (idea) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/validate`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ idea })
      })
      if (!res.ok) throw new Error('Validation failed')
      const data = await res.json()
      sessionStorage.setItem('validationResult', JSON.stringify(data))
      navigate('/results')
    } catch (err) {
      setError('Something went wrong. Check your API keys and server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="home-page">
      <Hero />                              {/* ← replaces the old inline hero */}
      <section className="form-section">
        <IdeaForm onSubmit={handleSubmit} loading={loading} />
        {error && <p className="error-msg">⚠️ {error}</p>}
      </section>
    </div>
  )
}

export default Home