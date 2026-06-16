const errorHandler = (err, req, res, next) => {
  console.error('❌ Error:', err.message)

  // Gemini JSON parse failed
  if (err instanceof SyntaxError) {
    return res.status(502).json({
      message: 'AI returned invalid response. Try again.'
    })
  }

  // Gemini API key error
  if (err.response?.status === 400 || err.response?.status === 403) {
    return res.status(401).json({
      message: 'Invalid Gemini API key. Check your .env file.'
    })
  }

  res.status(500).json({
    message: err.message || 'Internal server error'
  })
}

export default errorHandler