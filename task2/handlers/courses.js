const {
    addCourse,
    removeCourse,
    updateCourse,
    getAllCourses,
    getOneCourse,
  } = require("../pkg/courses/mongo");
  

  
  const getAll = async (req, res) => {
    try {
      const courses = await getAllCourses();
      return res.status(200).send(courses);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };
  
 
  const getOne = async (req, res) => {
    try {
      const course = await getOneCourse(req.params.id);
      return res.status(200).send(course);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };
  
  const create = async (req, res) => {
    try {
      await addCourse(req.body);
      return res.status(201).send(req.body); 
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };
  
  const update = async (req, res) => {
    try {
      await updateCourse(req.params.id, req.body);
      return res.status(204).send(""); 
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };
  
  const remove = async (req, res) => {
    try {
      await removeCourse(req.params.id);
      return res.status(204).send("");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };
  
  module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
  };