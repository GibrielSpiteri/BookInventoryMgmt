import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: any) {
    const { isbn } = params;
    try {
        const libResponse = await fetch(`https://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`);
        const data = await libResponse.json();
        if (data.length === 0) {
            throw new Error('Invalid ISBN');
        }

        // Get the keys of the records object
        const recordKeys = Object.keys(data.records);
        // Access the key dynamically
        const firstRecordKey = recordKeys[0];
        // Access the record object using the dynamic key
        const record = data.records[firstRecordKey];
        const book = record.data;
        const title: string = book.title;
        const authors: [{ url: string; name: string }] = book.authors;
        const names = authors.map((author) => author.name).join(', ');
        const cover: string = book.cover.medium;
        return NextResponse.json({ title, names, cover }, { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
