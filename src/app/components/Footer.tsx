const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2023 Your Name. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="hover:text-blue-400 transition duration-300">Twitter</a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">LinkedIn</a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">GitHub</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

