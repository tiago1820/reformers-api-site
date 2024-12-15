
const Reformer = () => {
    return (
        <section>
            <h2 id="reformers" className="text-xl font-semibold mb-4">Reformer</h2>

            <p>There is a total of 759 reformers sorted by id.</p>
            <br />

            <h2 id="reformer-schema" className="text-xl font-semibold mb-4">Reformer schema</h2>

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
                        <td className="px-4 py-2 border-b border-gray-300">The id of the reformer.
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">name</td>
                        <td className="px-4 py-2 border-b border-gray-300">string</td>
                        <td className="px-4 py-2 border-b border-gray-300">The name of the reformer.</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">born</td>
                        <td className="px-4 py-2 border-b border-gray-300">string</td>
                        <td className="px-4 py-2 border-b border-gray-300">fecha de nacimiento</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">died</td>
                        <td className="px-4 py-2 border-b border-gray-300">string</td>
                        <td className="px-4 py-2 border-b border-gray-300">fecha de fallecimiento</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">placeOfBirth</td>
                        <td className="px-4 py-2 border-b border-gray-300">object</td>
                        <td className="px-4 py-2 border-b border-gray-300">Name and link to the reformer's ....</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">placeOfDead</td>
                        <td className="px-4 py-2 border-b border-gray-300">object</td>
                        <td className="px-4 py-2 border-b border-gray-300">Name and link to the reformer's ....</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">image</td>
                        <td className="px-4 py-2 border-b border-gray-300">string (url)</td>
                        <td className="px-4 py-2 border-b border-gray-300">Link to the reformer's image. </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">url</td>
                        <td className="px-4 py-2 border-b border-gray-300">string (url)</td>
                        <td className="px-4 py-2 border-b border-gray-300">Link to the reformer's own URL endpoint.</td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="px-4 py-2 border-b border-gray-300">created</td>
                        <td className="px-4 py-2 border-b border-gray-300">string</td>
                        <td className="px-4 py-2 border-b border-gray-300">Time at which the reformer was created in the database.</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <h2 id="getall-reformers" className="text-xl font-semibold mb-4">Get all reformers</h2>

            <p>You can access the list of reformers by using the /reformer endpoint.</p>
            <br />

            <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                <div className="pb-2 border-b border-gray-500">
                    <code>
                        <span className="text-green-500">GET</span> http://localhost:3001/api/reformer
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
            <br />

            <h2 id="getasingle-reformer" className="text-xl font-semibold mb-4">Get a single reformer</h2>

            <p>You can get a single reformer by adding the id as a parameter: /reformer/2</p>
            <br />

            <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                <div className="pb-2 border-b border-gray-500">
                    <code>
                        <span className="text-green-500">GET</span> http://localhost:3001/api/reformer/2
                    </code>
                </div>
                <div className="pt-2">
                    <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                        <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                            <code>
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
                    &nbsp;&nbsp;&nbsp;&nbsp;}
                            </code>
                        </pre>
                    </pre>
                </div>
            </pre>
            <br />

            <h2 id="getmultiple-reformers" className="text-xl font-semibold mb-4">Get multiple reformers</h2>

            <p>You can get multiple reformers by adding an array of ids as parameter: /reformer/[1,2,3] or /reformer/1,2,3</p>
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
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"id"</span>: 1,{`\n`}
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
                                &nbsp;&nbsp;&nbsp;&nbsp;{`},\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;{`{\n`}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">"id"</span>: 48,{`\n`}
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
                                &nbsp;&nbsp;&nbsp;&nbsp;{`}\n`}
                                &nbsp;&nbsp;]
                            </code>
                        </pre>
                    </pre>
                </div>
            </pre>
            <br />

            <h2 id="filter-reformers" className="text-xl font-semibold mb-4">Filter reformers</h2>

            <p>
                You can also include filters in the URL by including additional query parameters.
                To start filtering add a <code>?</code> followed by the query <code>&lt;query&gt;=&lt;value&gt;</code>.
                If you want to chain several queries in the same call, use <code>&amp;</code> followed by the query.
            </p>
            <br />

            <p>
                For example, if you want to check how many Johns born on 1509-07-10 exist, simply add
                <code>?name=john&amp;born=1509-07-10</code> to the URL.
            </p>
            <br />

            <p>Available parameters:</p>
            <ul className="list-disc list-inside pl-4">
                <li>name: filter by the given name.</li>
                <li>born: filter by the given date of birth.</li>
                <li>died: filter by the given date of death.</li>
                <li>placeOfBirth: filter by the city of birth.</li>
                <li>placeOfDead: filter by the city of death.</li>
            </ul>
            <br />

            <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-md overflow-auto">
                <div className="pb-2 border-b border-gray-500">
                    <code>
                        <span className="text-green-500">GET</span> http://localhost:3001/api/reformers/?name=john&born=1509-07-10
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
            <br />
            <br />
        </section>
    )

}

export default Reformer;