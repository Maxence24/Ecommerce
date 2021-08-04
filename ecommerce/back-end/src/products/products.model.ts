/*
import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
});

export interface Product extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}
*/

export class ProductsModel {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}
