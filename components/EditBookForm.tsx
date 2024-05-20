'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import StarRating from './StarRating';

export default function EditBookForm({ id, oldrating, notes }: { id: string; oldrating: number; notes: string }) {
    const [rating, setNewRating] = useState(oldrating);
    const [newNote, setNewNote] = useState(notes);
    const router = useRouter();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/books/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newNote, rating }),
            });
            if (!res.ok) {
                throw new Error('Failed to update');
            }

            router.push('/');
            router.refresh();
        } catch (e) {
            console.log(e);
        }
    };
    // Callback function to handle rating change
    const handleRatingChange = (newRating: number) => {
        setNewRating(newRating); // Update the state with the new rating
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-2">
            <div className="flex">
                <label> Set a Rating: </label>
                <StarRating
                    disabled={false}
                    savedRating={rating}
                    onRatingChange={handleRatingChange}
                />
            </div>
            <div>
                <input
                    onChange={(e) => setNewNote(e.target.value)}
                    value={newNote}
                    type="text"
                    className="text-black border border-slate-500 px-8 py-2 flex-gap"
                    placeholder="Any notes on your read?"
                />
                <button
                    type="submit"
                    className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                    Update Book
                </button>
            </div>
        </form>
    );
}
