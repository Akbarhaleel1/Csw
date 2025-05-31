// models/StudentForm.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IStudentForm extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  gender: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  emergencyContact: string;
  emergencyPhone: string;
  personalPhoto: string;
  passportCopy: string;
  academicCertificate: string;
  residencyPermit: string;
  status?: string;
  reasons?: string;
  createdAt: Date;
  updatedAt: Date;
}

const StudentFormSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  emergencyPhone: { type: String, required: true },
  personalPhoto: { type: String, required: true },
  passportCopy: { type: String, required: true },
  academicCertificate: { type: String, required: true },
  residencyPermit: { type: String, required: true },
  status: { type: String, default: "pending" }, // default value
  reasons: { type: String, default: null },     // optional
}, {
  timestamps: true
});

export default mongoose.model<IStudentForm>('StudentForm', StudentFormSchema);
