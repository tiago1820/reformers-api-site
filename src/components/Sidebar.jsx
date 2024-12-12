
const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white flex-shrink flex flex-col">
            <div className="p-4 pb-0 text-lg font-bold border-gray-700">
                <a href="#intro">Introduction</a>
            </div>
            <nav className="p-4 space-y-4">
                <div>
                    <ul className="space-y-2">
                        <li>
                            <a href="#rest" className="block p-2 hover:bg-gray-700 rounded">
                                REST
                            </a>
                        </li>
                        <li>
                            <a href="#info" className="block p-2 hover:bg-gray-700 rounded">
                                Info and Pagination
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="p-4 pb-0 text-lg font-bold border-gray-700">
                <a href="#reformers">Reformers</a>
            </div>
            <nav className="p-4 space-y-4">
                <div>
                    <ul className="space-y-2">
                        <li>
                            <a href="#reformer-schema" className="block p-2 hover:bg-gray-700 rounded">
                                Reformer schema
                            </a>
                        </li>
                        <li>
                            <a href="#getall-reformers" className="block p-2 hover:bg-gray-700 rounded">
                                Get all reformers
                            </a>
                        </li>
                        <li>
                            <a href="#getasingle-reformer" className="block p-2 hover:bg-gray-700 rounded">
                                Get a single reformer
                            </a>
                        </li>
                        <li>
                            <a href="#getmultiple-reformers" className="block p-2 hover:bg-gray-700 rounded">
                                Get multiple reformers
                            </a>
                        </li>
                        <li>
                            <a href="#filter-reformers" className="block p-2 hover:bg-gray-700 rounded">
                                Filter reformers
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar;