import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function History() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/validate/history`)
      .then(r => r.json())
      .then(data => { setHistory(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const getScoreColor = (s) =>
    s >= 75 ? '#22c55e' : s >= 50 ? '#f59e0b' : '#ef4444'

  const loadResult = (item) => {
    sessionStorage.setItem('validationResult', JSON.stringify(item))
    navigate('/results')
  }

  return (
    <div className="history-page">
      <div className="history-header">
        <h2>Validation History</h2>
        <p>Your last 10 validated startup ideas</p>
      </div>

      {loading && <p className="loading-text">Loading history...</p>}

      {!loading && history.length === 0 && (
        <div className="empty-state">
          <p>🗂️ No validations yet.</p>
          <button className="submit-btn" onClick={() => navigate('/')}>
            Validate Your First Idea
          </button>
        </div>
      )}

      <div className="history-grid">
        {history.map((item) => (
          <div
            key={item._id}
            className="history-card"
            onClick={() => loadResult(item)}
          >
            <div className="history-score"
              style={{ color: getScoreColor(item.score) }}>
              {item.score}<span>/100</span>
            </div>
            <p className="history-idea">"{item.idea.slice(0, 100)}..."</p>
            <p className="history-date">
              {new Date(item.createdAt).toLocaleDateString('en-IN', {
                day: 'numeric', month: 'short', year: 'numeric'
              })}
            </p>
            <span className="history-cta">View Report →</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History