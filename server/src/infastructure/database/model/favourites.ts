import { Document, Schema, model } from 'mongoose';

export interface IFavourite extends Document {
  userId: string;
  favourites: number[];  
  createdAt: Date;
  updatedAt: Date;
}

const FavouriteSchema = new Schema<IFavourite>({
  userId: { type: String, required: true, unique: true },
  favourites: { type: [Number], required: true },  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

FavouriteSchema.pre<IFavourite>('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export const Favourite = model<IFavourite>('Favourite', FavouriteSchema);