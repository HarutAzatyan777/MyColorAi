import { Document, Schema, model, models } from "mongoose";

export interface  IImage  extends Document{
    title: string;
    transformationType: string;
    publicId: string;
    srcureUrl: string;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
        _id: string;
        firstName?: string;
        lastName?: string;
    }; 
    createdAt?: string;
    updatedAt?: Date;
}


const ImageSchema =  new Schema({
    title:{type: String, required: true},
    transformationType:{type: String, required:true},
    publicId:{type: String, required:true},
    srcureUrl:{type: URL, required:true},
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: String },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Image = models?.Image || model('Image', ImageSchema);

export default Image;