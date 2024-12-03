

function Documentation() {
    return (
        <>
            <div className="flex h-screen">
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
                                    <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                                        Reformer schema
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                                        Get all reformers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                                        Get a single character
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                                        Get multiple characters
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </aside>
                <main className="flex-1 p-8 bg-gray-100 overflow-auto">
                    <h1 className="text-2xl font-bold mb-6">Documentation</h1>
                    <h2 id="intro" className="text-xl font-semibold mb-4">Introduction</h2>
                    <p className="text-gray-700">
                        This documentation will help you get familiar with the resources of the Reformers API and show
                        you how to make different queries, so that you can get the most out of it.
                    </p>
                    <br />

                    <h2 id="rest" className="text-xl font-semibold mb-4">REST</h2>
                    <p><strong>Base url:</strong> http://localhost:/3001/api</p>
                    <p className="text-gray-700">
                        The base url contains information about all available API's resources. All responses will return data in json.
                    </p>
                    <br />


                    <h2 id="info" className="text-xl font-semibold mb-4">Info and Pagination</h2>
                    <p className="text-gray-700">
                        The API will automatically paginate the responses. You will receive up to 20 documents per page.
                    </p>
                    <br/>
                    <p className="text-gray-700">
                        Each resource contains an info object with information about the response.
                    </p>
                    <br/>

                    <table className="table-auto border-collapse w-full bg-white rounded-lg shadow">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700 text-left">
                                <th className="px-4 py-2 border-b border-gray-300 font-semibold">Key</th>
                                <th className="px-4 py-2 border-b border-gray-300 font-semibold">Type</th>
                                <th className="px-4 py-2 border-b border-gray-300 font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-100">
                                 <td className="px-4 py-2 border-b border-gray-300">count</td>
                                 <td className="px-4 py-2 border-b border-gray-300">int</td>
                                 <td className="px-4 py-2 border-b border-gray-300">The length of the response</td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="px-4 py-2 border-b border-gray-300">pages</td>
                                <td className="px-4 py-2 border-b border-gray-300">int</td>
                                <td className="px-4 py-2 border-b border-gray-300">The amount of pages</td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="px-4 py-2 border-b border-gray-300">next</td>
                                <td className="px-4 py-2 border-b border-gray-300">string (url)</td>
                                <td className="px-4 py-2 border-b border-gray-300">Link to the next page (if it exists)</td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="px-4 py-2 border-b border-gray-300">prev</td>
                                <td className="px-4 py-2 border-b border-gray-300">string (url)</td>
                                <td className="px-4 py-2 border-b border-gray-300">Link to the previous page (if it exists)</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />

                    <h2 id="reformers" className="text-xl font-semibold mb-4">Reformers</h2>

                </main>
            </div>


        </>



    )
}

export default Documentation;