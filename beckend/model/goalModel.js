const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      require: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Goal', goalSchema);
