
import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const classType = ['YOGA', 'PILATES', 'CARDIO'];

const classSchema = new Schema({
    title: { type: String, required: true, minlength: 4, maxlength: 80 },
    description: { type: String, minlength: 15, maxlength: 600 },
    maxNumberOfStudents: { type: Number, required: true, min: 1, max: 50 },
    type: { type: String, enum: classType },
    start: { required: true, type: Date },
    end: { required: true, type: Date },
})

const ClassModel = mongoose.model('class', classSchema);

export default ClassModel;