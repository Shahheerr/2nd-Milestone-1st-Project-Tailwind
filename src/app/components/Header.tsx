import Link from 'next/link'

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-6">
                <ul className="flex justify-center space-x-8">
                    <li><Link href="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300">Home</Link></li>
                    <li><Link href="/about" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300">About</Link></li>
                    <li><Link href="/contact" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;