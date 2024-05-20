'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function AddBook() {
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    const [isbn, setISBN] = useState('');
    const router = useRouter();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!isbn) {
            alert('ISBN is required.');
            return;
        }

        try {
            // console.log(`http://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`);
            const libResponse = await fetch(`http://localhost:3000/api/library/${isbn}`, { method: 'GET', cache: 'no-store' });
            console.log(libResponse);
            if (libResponse.status === 500) {
                alert('Invalid ISBN');
                throw new Error('Couldnt find book');
            }
            const { title, names, cover } = await libResponse.json(),
                notes = '',
                rating = 0,
                res = await fetch('http://localhost:3000/api/books', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, names, cover, isbn, notes, rating }),
                });

            if (!res.ok) {
                throw new Error('Failed to add book');
            }
            router.push('/');
        } catch (e) {
            console.log(e);
            alert('Encountered an error while fetching your book, refresh and try again');
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex-col gap-3">
            <input
                onChange={(e) => setISBN(e.target.value)}
                value={isbn}
                type="text"
                className="text-black border border-slate-500 px-8 py-2 "
                placeholder="ISBN"
            />
            <div>
                <button
                    type="submit"
                    className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                    Add Book
                </button>
            </div>
        </form>
    );
}
