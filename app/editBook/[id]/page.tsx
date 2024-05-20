import EditBookForm from '@/components/EditBookForm';

const getBookById = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/books/${id}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error('Failed to fetch book');
        }

        return res.json();
    } catch (e) {
        console.error(e);
        alert('Encountered an error while updating your book, refresh and try again');
    }
};

export default async function EditBook({ params }: any) {
    const { id }: { id: string } = params;
    const { book }: { book: { rating: number; notes: string } } = await getBookById(id);
    const { rating, notes }: { rating: number; notes: string } = book;

    return (
        <EditBookForm
            id={id}
            oldrating={rating}
            notes={notes}
        />
    );
}
