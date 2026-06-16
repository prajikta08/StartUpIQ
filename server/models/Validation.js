import mongoose from 'mongoose';

const ValidationSchema = new mongoose.Schema({
  idea: { type: String, required: true },
  problemStatement: String,
  targetAudience: String,
  marketOpportunity: String,
  competitors: [String],
  risks: [String],
  revenueModel: String,
  mvpRoadmap: [String],
  score: { type: Number, min: 0, max: 100 },
  scoreBreakdown: {
    marketSize: Number,
    uniqueness: Number,
    feasibility: Number,
    monetization: Number,
    timing: Number
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Validation', ValidationSchema);