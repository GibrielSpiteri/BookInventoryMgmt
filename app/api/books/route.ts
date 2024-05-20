import connectMongoDB from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import Book from '@/models/book';

export async function POST(request: NextRequest) {
    try {
        const { title, names, cover, isbn, notes, rating } = await request.json();
        await connectMongoDB();
        await Book.create({ title: title, names: names, cover: cover, isbn: isbn, notes: notes, rating: rating });
        return NextResponse.json({ message: 'Book Created' }, { status: 201 });
    } catch (e) {
        console.error('Unable to save to Mongo');
        return NextResponse.json({ status: 500, error: e });
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const books = await Book.find();
        return NextResponse.json({ books }, { status: 200 });
    } catch (e) {
        console.error('Unable to reach Mongo');
        return NextResponse.json({ status: 500, error: e });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const id = request.nextUrl.searchParams.get('id');
        await connectMongoDB();
        await Book.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Book deleted' }, { status: 200 });
    } catch (e) {
        console.error('Unable to delete from Mongo');
        return NextResponse.json({ status: 500, error: e });
    }
}
