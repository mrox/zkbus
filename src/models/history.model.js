const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const historySchema = mongoose.Schema(
  {
    SN: {
      type: String,
      index: true,
      required: true
    },
    personId: String,
    time: Date,
    lat: String,
    long: String,
    status: String,
    verify: String,
    workCode: String,
    reversed: String
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
historySchema.plugin(toJSON);
historySchema.plugin(paginate);



/**
 * @typedef History
 */
const History = mongoose.model('History', historySchema);

module.exports = History;
