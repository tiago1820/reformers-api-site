import Sidebar from "../components/Sidebar";
import Introduction from "../components/Introduction";
import Reformers from "../components/Reformers";

function Documentation() {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar />
                <main className="flex-1 p-8 bg-gray-100 overflow-auto">
                    <h1 className="text-2xl font-bold mb-6">Documentation</h1>
                    <Introduction />
                    <Reformers />

                </main>
            </div>
        </>
    )
}

export default Documentation;