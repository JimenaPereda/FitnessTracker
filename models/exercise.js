const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter the name of the exercise"
  },
  type: {
    type: String,
    trim: true,
    required: "Enter the type of the exercise"
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  }
  
});

const exercise = mongoose.model("exercise", exercisesSchema);

module.exports = exercise;