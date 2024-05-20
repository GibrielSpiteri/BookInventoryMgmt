import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link
                className="text-white font-bold"
                href={'/'}>
                Gibriel Spiteri
            </Link>
            <Link
                className="text-white font-bold"
                href={'/'}>
                My Reading List
            </Link>
            <Link
                className="bg-white text-black p-2"
                href={'/addBook'}>
                Add New Book
            </Link>
        </nav>
    );
}
