function ScoreGauge({ score, breakdown }) {

  const getScoreColor = (s) => {
    if (s >= 75) return '#16a34a'  // green
    if (s >= 50) return '#d97706'  // amber
    return '#dc2626'               // red
  }

  const getVerdict = (s) => {
    if (s >= 80) return { label: 'Strong Idea 🚀', desc: 'High potential. Consider moving forward.' }
    if (s >= 65) return { label: 'Promising 💡',   desc: 'Good foundation. Address key risks first.' }
    if (s >= 50) return { label: 'Needs Work 🔧',  desc: 'Interesting but significant gaps exist.' }
    return              { label: 'High Risk ⚠️',   desc: 'Major challenges. Rethink core assumptions.' }
  }

  const verdict    = getVerdict(score)
  const scoreColor = getScoreColor(score)

  const radius     = 70
  const stroke     = 10
  const circumf    = 2 * Math.PI * radius
  const dashOffset = circumf - (score / 100) * circumf

  return (
    <div className="score-gauge-wrapper">

      <div className="gauge-circle-area">
        <svg width="180" height="180" viewBox="0 0 180 180">

          {/* Background track — light grey */}
          <circle
            cx="90" cy="90" r={radius}
            fill="none"
            stroke="#e2e2e2"
            strokeWidth={stroke}
          />

          {/* Colored arc */}
          <circle
            cx="90" cy="90" r={radius}
            fill="none"
            stroke={scoreColor}
            strokeWidth={stroke}
            strokeDasharray={circumf}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            transform="rotate(-90 90 90)"
            style={{ transition: 'stroke-dashoffset 1.2s ease' }}
          />

          {/* Score number */}
          <text
            x="90" y="85"
            textAnchor="middle"
            fill="#111111"
            fontSize="32"
            fontWeight="bold"
          >
            {score}
          </text>

          {/* "out of 100" label */}
          <text
            x="90" y="108"
            textAnchor="middle"
            fill="#999999"
            fontSize="12"
          >
            out of 100
          </text>

        </svg>

        <div className="verdict-label" style={{ color: scoreColor }}>
          {verdict.label}
        </div>
        <p className="verdict-desc">{verdict.desc}</p>
      </div>

      {breakdown && (
        <div className="breakdown-bars">
          <h4 className="breakdown-title">Score Breakdown</h4>
          {Object.entries(breakdown).map(([key, val]) => (
            <div className="breakdown-row" key={key}>
              <span className="breakdown-label">
                {key.replace(/([A-Z])/g, ' $1')}
              </span>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{
                    width: `${val}%`,
                    backgroundColor: getScoreColor(val)
                  }}
                />
              </div>
              <span className="breakdown-val">{val}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default ScoreGauge