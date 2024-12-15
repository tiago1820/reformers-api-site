

const Location = () => {
    return (
        <section>
            <h2 id="location" className="text-xl font-semibold mb-4">Location</h2>
            <p>There is a total of 100 locations sorted by id.</p>
            <br />

            <h2 id="location-schema" className="text-xl font-semibold mb-4">Location schema</h2>

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
                        <td className="px-4 py-2 border-b border-gray-300">id</td>
                        <td className="px-4 py-2 border-b border-gray-300">int</td>
                        <td className="px-4 py-2 border-b border-gray-300">The id of the location.
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">name</td>
                        <td className="px-4 py-2 border-b border-gray-300">string</td>
                        <td className="px-4 py-2 border-b border-gray-300">The name of the location.</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">reformersBornHere</td>
                        <td className="px-4 py-2 border-b border-gray-300">array</td>
                        <td className="px-4 py-2 border-b border-gray-300">List of reformers who were born in the location.</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">reformersDiedHere</td>
                        <td className="px-4 py-2 border-b border-gray-300">array</td>
                        <td className="px-4 py-2 border-b border-gray-300">List of reformers who were died in the location.</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">url</td>
                        <td className="px-4 py-2 border-b border-gray-300">string (url)</td>
                        <td className="px-4 py-2 border-b border-gray-300">Link to the location's own URL endpoint.</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">created</td>
                        <td className="px-4 py-2 border-b border-gray-300">string</td>
                        <td className="px-4 py-2 border-b border-gray-300">Time at which the location was created in the database.</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <h2 id="getall-locations" className="text-xl font-semibold mb-4">Get all locations</h2>

            <p>You can access the list of reformers by using the /location endpoint.</p>
            <br />

            <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                <div className="pb-2 border-b border-gray-500">
                    <code>
                        <span className="text-green-500">GET</span> http://localhost:3001/api/location
                    </code>
                </div>
                <div className="pt-2">
                    <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                        <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                            <code>
                                {`{\n`}
                                &nbsp;&nbsp;<span className="text-pink-400">"info"</span>: {`{\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"count"</span>: 100,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"pages"</span>: 5,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"next"</span>: <span className="text-green-400">"http://localhost:3001/api/location/?page=2"</span>,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"prev"</span>: <span className="text-green-400">null</span>{`\n`}
                    &nbsp;&nbsp;},{`\n`}
                                &nbsp;&nbsp;<span className="text-pink-400">"results"</span>: [{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;{`{\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"id"</span>: 1,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"name"</span>: <span className="text-green-400">"Noyon, France"</span>,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"reformersBornHere"</span>: {`[\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/1"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/2"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">// ...</span>{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"reformersDiedHere"</span>: {`[\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/13"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/21"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"url"</span>: <span className="text-green-400">"http://localhost:3001/api/location/1"</span>,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"created"</span>: <span className="text-green-400">"2024-11-10T18:20:41"</span>{`\n`}
                    &nbsp;&nbsp;&nbsp;&nbsp;}{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;// ...{`\n`}
                                &nbsp;&nbsp;]{`\n`}
                                {`}`}
                            </code>
                        </pre>
                    </pre>
                </div>
            </pre>
            <br />

            <h2 id="getasingle-location" className="text-xl font-semibold mb-4">Get a single location</h2>

            <p>You can get a single location by adding the id as a parameter: /location/2</p>
            <br />

            <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                <div className="pb-2 border-b border-gray-500">
                    <code>
                        <span className="text-green-500">GET</span> http://localhost:3001/api/location/2
                    </code>
                </div>
                <div className="pt-2">
                    <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                        <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                            <code>
                                &nbsp;&nbsp;&nbsp;&nbsp;{`{\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"id"</span>: 2,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"name"</span>: <span className="text-green-400">"Noyon, France"</span>,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"reformersBornHere"</span>: {`[\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/1"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/2"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">// ...</span>{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"reformersDiedHere"</span>: {`[\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/13"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/21"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">// ...</span>{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"url"</span>: <span className="text-green-400">"http://localhost:3001/api/location/1"</span>,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"created"</span>: <span className="text-green-400">"2024-11-10T18:20:41"</span>{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;}{`\n`}
                            </code>
                        </pre>
                    </pre>
                </div>
            </pre>
            <br />

            <h2 id="getmultiple-locations" className="text-xl font-semibold mb-4">Get multiple locations</h2>

            <p>You can get multiple locations by adding an array of ids as parameter: /location/[1,2,3] or /location/1,2,3</p>
            <br />

            <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                <div className="pb-2 border-b border-gray-500">
                    <code>
                        <span className="text-green-500">GET</span> http://localhost:3001/api/reformer/1,43
                    </code>
                </div>
                <div className="pt-2">
                    <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                        <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                            <code>
                                &nbsp;&nbsp;{`[\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;{`{\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"id"</span>: 2,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"name"</span>: <span className="text-green-400">"Noyon, France"</span>,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"reformersBornHere"</span>: {`[\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/1"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/2"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">// ...</span>{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"reformersDiedHere"</span>: {`[\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/13"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/21"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">// ...</span>{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"url"</span>: <span className="text-green-400">"http://localhost:3001/api/location/1"</span>,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"created"</span>: <span className="text-green-400">"2024-11-10T18:20:41"</span>{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;},{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;{`{\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"id"</span>: 3,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"name"</span>: <span className="text-green-400">"Vézelay, France"</span>,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"reformersBornHere"</span>: {`[\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/8"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/10"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">// ...</span>{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"reformersDiedHere"</span>: {`[\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/8"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"http://localhost:3001/api/reformer/15"</span>{`,\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">// ...</span>{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"url"</span>: <span className="text-green-400">"http://localhost:3001/api/location/1"</span>,{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"created"</span>: <span className="text-green-400">"2024-11-10T18:20:41"</span>{`\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;}{`\n`}
                                &nbsp;&nbsp;]
                            </code>
                        </pre>
                    </pre>
                </div>
            </pre>
            <br />

            <h2 id="filter-locations" className="text-xl font-semibold mb-4">Filter locations</h2>

            <p>Available parameters:</p>
            <ul className="list-disc list-inside pl-4">
                <li>name: filter by the given name.</li>
            </ul>
            <br />

            <p>If you want to know how to use queries, check <a href="#filter-reformers">here</a></p>
        </section>

        
    );
}

export default Location;