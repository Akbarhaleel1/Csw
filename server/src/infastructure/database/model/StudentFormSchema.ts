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
  studentId: string;
  program: string;
  yearOfStudy: string;
  emergencyContact: string;
  emergencyPhone: string;
  personalPhoto: {
    data: Buffer;
    contentType: string;
  };
  passportCopy: {
    data: Buffer;
    contentType: string;
  };
  academicCertificate: {
    data: Buffer;
    contentType: string;
  };
  residencyPermit: {
    data: Buffer;
    contentType: string;
  };
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
  studentId: { type: String, required: true, unique: true },
  program: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  emergencyPhone: { type: String, required: true },
  personalPhoto: {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true }
  },
  passportCopy: {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true }
  },
  academicCertificate: {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true }
  },
  residencyPermit: {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true }
  },
}, {
  timestamps: true // This adds createdAt and updatedAt fields
});

export default mongoose.model<IStudentForm>('StudentForm', StudentFormSchema);