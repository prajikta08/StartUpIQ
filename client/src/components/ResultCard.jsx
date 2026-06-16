function ResultCard({ icon, title, color, content }) {

  // content can be a string OR an array (competitors, risks, roadmap)
  const isArray = Array.isArray(content)

  return (
    <div className="result-card" style={{ '--card-accent': color }}>
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <h3 className="card-title">{title}</h3>
      </div>

      <div className="card-body">
        {isArray ? (
          <ul className="card-list">
            {content.map((item, i) => (
              <li key={i} className="card-list-item">
                <span className="list-dot" style={{ background: color }} />
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="card-text">{content}</p>
        )}
      </div>
    </div>
  )
}

export default ResultCard