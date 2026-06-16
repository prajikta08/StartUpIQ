function Hero() {
  return (
    <section className="hero">

      {/* Top Badge */}
      <div className="hero-badge">✨ AI-Powered Analysis</div>

      {/* Main Headline */}
      <h1 className="hero-title">
        Validate Your{' '}
        <span className="gradient-text">Startup Idea</span>
        <br />
        in 30 Seconds
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle">
        Get a full market analysis, competitor insights, revenue model,
        MVP roadmap, and a validation score — all powered by AI.
      </p>

      {/* Stats Row */}
      <div className="hero-stats">
        <div className="stat">
          <strong>8</strong>
          <span>Analysis Sections</span>
        </div>
        <div className="stat">
          <strong>100</strong>
          <span>Point Score</span>
        </div>
        <div className="stat">
          <strong>30s</strong>
          <span>Avg. Response</span>
        </div>
      </div>

      {/* Feature Pills */}
      <div className="hero-features">
        {[
          '🎯 Problem Statement',
          '👥 Target Audience',
          '📈 Market Opportunity',
          '⚔️ Competitor Analysis',
          '⚠️ Risk Assessment',
          '💰 Revenue Model',
          '🗺️ MVP Roadmap',
          '🏆 Validation Score',
        ].map((f) => (
          <span key={f} className="feature-pill">{f}</span>
        ))}
      </div>

    </section>
  )
}

export default Hero