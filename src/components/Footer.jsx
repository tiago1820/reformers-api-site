

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <ul className="flex justify-center space-x-8 mb-6">
                    <li>
                        <a href="#" className="hover:text-blue-400">
                            <span className="uppercase">reformers: 957</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-400">
                            <span className="uppercase">locations: 125</span>
                        </a>
                    </li>
                </ul>
                <div className="text-center mb-6">
                    <a href="#" className="hover:text-blue-400">
                        <span className="uppercase">server status</span>
                    </a>
                    <span className="inline-block w-3 h-3 ml-2 bg-green-500 rounded-full"></span>
                </div>
                <ul className="flex justify-center space-x-6 mb-6">
                    <li>
                        <a href="#" className="text-gray-400 hover:text-blue-400">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-blue-400">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-blue-400">❤️</a>
                    </li>
                </ul>
                <div className="text-center text-gray-400">
                    <span>
                        by
                        <a href="#" className="hover:text-blue-400"> Tiago de Oliveira </a>
                    </span>
                    <span className="ml-2">
                        2024
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;