const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  faculty: String,
  professor: String,
  hours: Number,
});

const Course = mongoose.model("courses", courseSchema);

const addCourse = async (course) => {
  try {
    const newCourse = new Course(course);
    return await newCourse.save();
  } catch (err) {
    throw err;
  }
};


const removeCourse = async (id) => {
  return await Course.deleteOne({ _id: id });
};


const updateCourse = async (id, course) => {
  return await Course.updateOne({ _id: id, car });
};


const getAllCourses = async () => {
  return await Course.find({});
};


const getOneCourse = async (id) => {
  return await Course.findOne({ _id: id });
};

module.exports = {
  addCourse,
  removeCourse,
  updateCourse,
  getAllCourses,
  getOneCourse,
};