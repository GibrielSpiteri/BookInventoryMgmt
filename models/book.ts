import mongoose, { Schema } from 'mongoose';



const bookSchema = new Schema(
    {
        title: String,
        names: String,
        cover: String,
        isbn: String,
        notes: String,
        rating: Number
    },
    {
        timestamps: true,
    }
);

const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

export default Book;
