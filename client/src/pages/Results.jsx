import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScoreGauge    from '../components/ScoreGauge'
import ResultCard    from '../components/ResultCard'

// Icon map for each section
const SECTION_META = {
  problemStatement:  { icon: '🎯', title: 'Problem Statement',   color: '#6366f1' },
  targetAudience:    { icon: '👥', title: 'Target Audience',     color: '#8b5cf6' },
  marketOpportunity: { icon: '📈', title: 'Market Opportunity',  color: '#06b6d4' },
  competitors:       { icon: '⚔️',  title: 'Competitors',         color: '#f59e0b' },
  risks:             { icon: '⚠️',  title: 'Key Risks',           color: '#ef4444' },
  revenueModel:      { icon: '💰', title: 'Revenue Model',       color: '#22c55e' },
  mvpRoadmap:        { icon: '🗺️',  title: 'MVP Roadmap',         color: '#ec4899' },
}

function Results() {
  const [data, setData]   = useState(null)
  const navigate          = useNavigate()

  useEffect(() => {
    const stored = sessionStorage.getItem('validationResult')
    if (!stored) {
      navigate('/') // no data? send home
      return
    }
    setData(JSON.parse(stored))
  }, [])

  if (!data) return null

  return (
    <div className="results-page">

      {/* Header */}
      <div className="results-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Validate Another Idea
        </button>
        <h2 className="results-title">Validation Report</h2>
        <p className="results-idea">"{data.idea}"</p>
      </div>

      {/* Score Section */}
      <section className="score-section">
        <ScoreGauge score={data.score} breakdown={data.scoreBreakdown} />
      </section>

      {/* Analysis Cards Grid */}
      <section className="cards-grid">
        {Object.entries(SECTION_META).map(([key, meta]) => (
          <ResultCard
            key={key}
            icon={meta.icon}
            title={meta.title}
            color={meta.color}
            content={data[key]}
          />
        ))}
      </section>

      {/* Footer CTA */}
      <div className="results-footer">
        <p>Want to explore another idea?</p>
        <button className="submit-btn" onClick={() => navigate('/')}>
          Start New Validation
        </button>
      </div>

    </div>
  )
}

export default Results