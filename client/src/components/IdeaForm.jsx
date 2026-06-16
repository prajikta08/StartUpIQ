import { useState } from 'react'

const EXAMPLE_IDEAS = [
  "An app that connects local farmers directly with urban consumers for fresh produce delivery",
  "AI-powered mental health chatbot for college students",
  "A subscription box for elderly people featuring curated tech gadgets with tutorials",
]

function IdeaForm({ onSubmit, loading }) {
  const [idea, setIdea] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (idea.trim().length < 20) return // basic validation
    onSubmit(idea.trim())
  }

  const fillExample = (text) => setIdea(text)

  const charColor = idea.length < 20
    ? '#ef4444'   // red — too short
    : idea.length < 100
    ? '#f59e0b'   // amber — ok
    : '#22c55e'   // green — great

  return (
    <div className="idea-form-wrapper">
      <form onSubmit={handleSubmit} className="idea-form">
        <label className="form-label">
          Describe your startup idea
        </label>

        <textarea
          className="idea-textarea"
          placeholder="e.g. A platform that uses AI to match freelance developers with early-stage startups based on skill fit and culture alignment..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          rows={5}
          maxLength={1000}
        />

        {/* Character counter */}
        <div className="char-counter" style={{ color: charColor }}>
          {idea.length} / 1000 characters
          {idea.length < 20 && ' (min 20)'}
        </div>

        <button
          type="submit"
          className={`submit-btn ${loading ? 'loading' : ''}`}
          disabled={loading || idea.trim().length < 20}
        >
          {loading
            ? <><span className="spinner" /> Analyzing your idea...</>
            : <> Validate My Idea →</>
          }
        </button>
      </form>

      {/* Example ideas */}
      <div className="examples-section">
        <p className="examples-label">💡 Try an example:</p>
        <div className="examples-list">
          {EXAMPLE_IDEAS.map((ex, i) => (
            <button
              key={i}
              className="example-chip"
              onClick={() => fillExample(ex)}
              type="button"
            >
              {ex.slice(0, 55)}...
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IdeaForm