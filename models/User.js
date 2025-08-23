const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  age: {
    type: Number,
    min: [0, 'Age cannot be negative']
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Pre-save middleware example (for password hashing, etc.)
userSchema.pre('save', function(next) {
  // Add any pre-save logic here (e.g., password hashing)
  next();
});

// Instance methods
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password; // Remove password from JSON output
  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
