const { readData, writeData } = require("../files");
const DATA_SOURCE = `${__dirname}/../../data`;


const addCourse = async (course) => {
  try {
    const data = await readData(DATA_SOURCE);
    data.push(course);
    await writeData(data, DATA_SOURCE);
  } catch (err) {
    throw err;
  }
};



const removeCourse = async (index) => {
  try {
    const data = await readData(DATA_SOURCE);
    const out = data.filter((_, courseIndex) => courseIndex !== index);
    await writeData(out, DATA_SOURCE);
  } catch (err) {
    throw err;
  }
};


const updateCourse= async (index, course) => {
  try {
    const data = await readData(DATA_SOURCE);
    const out = data.map((c, i) => {
      if (index === i) c = course;
      return c;
    });
    await writeData(out, DATA_SOURCE);
  } catch (err) {
    throw err;
  }
};


const getAllCourses = async () => {
  try {
    const data = await readData(DATA_SOURCE);
    return data;
  } catch (err) {
    throw err;
  }
};


const getCourseByIndex = async (index) => {
  try {
    const data = await readData(DATA_SOURCE);
    if (index > data.length - 1) console.log("Index does not exist in data");
    return data[index];
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addCourse,
  removeCourse,
  updateCourse,
  getAllCourses,
  getCourseByIndex,
};