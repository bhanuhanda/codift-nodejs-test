import express from 'express';
import classModel, { classType } from '../models/classModel.js';
const classRouter = express.Router();

classRouter.post('/create', async (req, res) => {
  try {
    const { title, description, maxNumberOfStudents, type, start, end } = req.body;

    // custom fields validation

    // title
    if (!title) {
      return res.status(400).json({ error: "Title is required." })
    }
    if (title.length < 4 || title.length > 80) {
      return res.status(400).json({ error: "Title must be between 4 to 80 characters." })
    }
    // description
    if (description) {
      if (description.length < 15 || description.length > 600) {
        return res.status(400).json({ error: "Description must be between 15 to 600 characters." })
      }
    }
    // max number of students
    if (!maxNumberOfStudents) {
      return res.status(400).json({ error: "Max number of students are required." })
    }
    if (maxNumberOfStudents < 1 || maxNumberOfStudents > 50) {
      return res.status(400).json({ error: "Number of students must be between 1 to 50." })
    }

    // type
    if (!type) {
      return res.status(400).json({ error: "Type is required." })
    }
    if (!classType.includes(type)) {
      return res.status(400).json({ error: "Entered Type is not valid." })
    }

    // start date
    if (!start) {
      return res.status(400).json({ error: "Start date is required." })
    }

    if (start) {
      var date = Date.parse(start);
      if (isNaN(date))
        return res.status(400).json({ error: "Start date is not valid." })
    }

    // end date
    if (!end) {
      return res.status(400).json({ error: "End date is required." })
    }

    if (end) {
      var date = Date.parse(end);
      if (isNaN(date))
        return res.status(400).json({ error: "End date is not valid." })
    }

    // creating class object for DB
    const classObject = new classModel({
      title,
      description,
      maxNumberOfStudents,
      type,
      start,
      end
    })

    // writing class to DB
    const createdClass = await classObject.save();
    res.json(createdClass);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

export default classRouter;