import connectMongoDB from '@/libs/mongodb';
import Book from '@/models/book';
import { NextResponse } from 'next/server';

export async function PUT(request: Request, { params }: any) {
    try {
        const { id } = params;

        const { newNote: notes, rating: rating } = await request.json();
        await connectMongoDB();
        await Book.findByIdAndUpdate(id, { notes, rating });
        return NextResponse.json({ message: 'Book updated' }, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'e' }, { status: 500 });
    }
}

export async function GET(request: Request, { params }: any) {
    const { id } = params;
    await connectMongoDB();
    const book = await Book.findOne({ _id: id });
    return NextResponse.json({ book }, { status: 200 });
}
