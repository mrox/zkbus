const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const deviceSchema = mongoose.Schema(
  {
    SN: {
      type: String,
      index: true,
      required: true,
      unique: true,
    },
    FW: String,
    enrolledUser: String,
    enrolledFinger: String,
    attendanceRecord: String,
    IP: {
      type: String,
      index: true,
      required: true
    },
    fingerprintVersion: String,
    faceVersion: String,
    facesRequire: String,
    enrolledFace: String,
    supported: String
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
deviceSchema.plugin(toJSON);
deviceSchema.plugin(paginate);


deviceSchema.statics.isDeviceTaken = async function (SN) {
  const device = await this.findOne({ SN});
  return !!device;
};


/**
 * @typedef Device
 */
const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
