import RemoveBtn from '@/components/RemoveBtn';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';
import StarRating from '@/components/StarRating';
import Image from 'next/image';

const getBooks = async () => {
    try {
        const res = await fetch(`${process.env.VERCEL_URI}/api/books`, {});
        if (!res.ok) {
            throw new Error('Failed to fetch books');
        }
        return res.json();
    } catch (e) {
        console.log('Error loading books', e);
        // alert('Encountered an error loading the books list, refresh and try again');
    }
};
export default async function BooksList() {
    const { books } = await getBooks();
    return (
        <>
            {books.map((t: { title: string; names: string; cover: string; rating: number; isbn: string; notes: string; _id: string }) => (
                <div
                    key={t._id}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                    <Image
                        src={t.cover}
                        alt="Book Cover"
                        className="w-24 h-auto"
                    />
                    <div>
                        <h2 className="font-bold text-3xl">{t.title}</h2>
                        <div>By: {t.names}</div>
                        <div>ISBN: {t.isbn}</div>
                        {t.notes && <div>Notes: {t.notes}</div>}
                    </div>

                    <div className="flex gap-2">
                        <StarRating
                            disabled={true}
                            savedRating={t.rating}
                        />
                    </div>
                    <div className="flex gap-2">
                        <RemoveBtn id={t._id} />
                        <Link href={`/editBook/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
