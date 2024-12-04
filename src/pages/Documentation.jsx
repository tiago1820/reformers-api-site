

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
                                        Get a single reformer
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                                        Get multiple reformers
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

                    <br />

                    <h2 id="rest" className="text-xl font-semibold mb-4">REST</h2>
                    <p><strong>Base url:</strong> http://localhost:3001/api</p>
                    <p className="text-gray-700">
                        The base url contains information about all available API's resources. All responses will return data in json.
                    </p>
                    <br />

                    <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                        <div className="pb-2 border-b border-gray-500">
                            <code>
                                <span className="text-green-500">GET</span> http://localhost:3001/api
                            </code>
                        </div>
                        <div className="pt-2">
                            <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                                <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                                    <code>
                                        {`{\n`}
                                        &nbsp;&nbsp;<span className="text-pink-400">"reformers"</span>: "http://localhost:3001/api/reformer",{`\n`}
                                        &nbsp;&nbsp;<span className="text-pink-400">"locations"</span>: "http://localhost:3001/api/location"{`\n`}
                                        {`}`}
                                    </code>
                                </pre>
                            </pre>
                        </div>
                    </pre>
                    <br />

                    <p>There are currently three available resources:</p>
                    <ul className="list-disc list-inside pl-4">
                        <li>Reformer: used to get all the reformers.</li>
                        <li>Location: used to get all the locations.</li>
                    </ul>
                    <br />


                    <h2 id="info" className="text-xl font-semibold mb-4">Info and Pagination</h2>
                    <p className="text-gray-700">
                        The API will automatically paginate the responses. You will receive up to 20 documents per page.
                    </p>
                    <br />
                    <p className="text-gray-700">
                        Each resource contains an info object with information about the response.
                    </p>
                    <br />

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

                    <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                        <div className="pb-2 border-b border-gray-500">
                            <code>
                                <span className="text-green-500">GET</span> http://localhost:3001/api/reformers
                            </code>
                        </div>
                        <div className="pt-2">
                            <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                                <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                                    <code>
                                        {`{\n`}
                                        &nbsp;&nbsp;<span className="text-pink-400">"info"</span>: {`{\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"count"</span>: 510,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"pages"</span>: 32,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"next"</span>: <span className="text-green-400">"http://localhost:3001/api/reformers/?page=2"</span>,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"prev"</span>: null{`\n`}
  &nbsp;&nbsp;},{`\n`}
                                        &nbsp;&nbsp;<span className="text-pink-400">"results"</span>: [{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;// ...{`\n`}
                                        &nbsp;&nbsp;]{`\n`}
                                        {`}`}
                                    </code>

                                </pre>
                            </pre>
                        </div>
                    </pre>

                    <p>You can access different pages with the page parameter. If you don't specify any page, the first page will be shown. For example, in order to access page 2, add ?page=2 to the end of the URL.</p>
                    <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                        <div className="pb-2 border-b border-gray-500">
                            <code>
                                <span className="text-green-500">GET</span> http://localhost:3001/api/reformers/?page=19
                            </code>
                        </div>
                        <div className="pt-2">
                            <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                                <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                                    <code>
                                        {`{\n`}
                                        &nbsp;&nbsp;<span className="text-pink-400">"info"</span>: {`{\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"count"</span>: 510,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"pages"</span>: 32,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"next"</span>: <span className="text-green-400">"http://localhost:3001/api/reformers/?page=20"</span>,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"prev"</span>: <span className="text-green-400">"http://localhost:3001/api/reformers/?page=18"</span>{`\n`}
  &nbsp;&nbsp;},{`\n`}
                                        &nbsp;&nbsp;<span className="text-pink-400">"results"</span>: [{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;{`{\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"id"</span>: 361,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"name"</span>: <span className="text-green-400">"John Calvin"</span>,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"born"</span>: <span className="text-green-400">"1509-07-10"</span>,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"died"</span>: <span className="text-green-400">"1564-05-27"</span>,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"placeOfBirth"</span>: {`{\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"name"</span>: <span className="text-green-400">"Noyon, France"</span>,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"url"</span>: <span className="text-green-400">"http://localhost:3001/api/location/12"</span>{`\n`}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"placeOfDead"</span>: {`{\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"name"</span>: <span className="text-green-400">"Geneva, Switzerland"</span>,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"url"</span>: <span className="text-green-400">"http://localhost:3001/api/location/18"</span>{`\n`}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"image"</span>: <span className="text-green-400">"http://localhost:3001/api/reformer/12/avatar/01.jpeg"</span>,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"url"</span>: <span className="text-green-400">"http://localhost:3001/api/reformer/01"</span>,{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"created"</span>: <span className="text-green-400">"2024-11-10T18:20:41"</span>{`\n`}
  &nbsp;&nbsp;&nbsp;&nbsp;},{`\n`}
                                        &nbsp;&nbsp;&nbsp;&nbsp;// ...{`\n`}
                                        &nbsp;&nbsp;]{`\n`}
                                        {`}`}
                                    </code>


                                </pre>
                            </pre>
                        </div>
                    </pre>

                    <h2 id="reformers" className="text-xl font-semibold mb-4">Reformers</h2>



                </main>
            </div>


        </>



    )
}

export default Documentation;