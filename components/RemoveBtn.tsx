'use client';
import { HiOutlineTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

export default function RemoveBtn({ id }: { id: string }) {
    const router = useRouter();
    const removeBook = async () => {
        const confirmed = confirm('Are you sure you wish to delete?');

        if (confirmed) {
            const res = await fetch(`/api/books?id=${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                router.refresh();
            }
        }
    };
    return (
        <button
            onClick={removeBook}
            className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
}
