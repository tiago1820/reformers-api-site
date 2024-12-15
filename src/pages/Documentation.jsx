import Sidebar from "../components/Sidebar";
import Introduction from "../components/Introduction";
import Reformer from "../components/Reformer";
import Location from "../components/Location";
import Footer from "../components/Footer";

function Documentation() {
    return (
        <>
            <div className="flex flex-col h-screen">
                <div className="flex flex-1">
                    <div className="w-64 flex-shrink-0 bg-gray-800 text-white sticky top-0 h-screen">
                        <Sidebar />
                    </div>

                    <main className="flex-1 p-8 bg-gray-100">
                        <h1 className="text-2xl font-bold mb-6">Documentation</h1>
                        <Introduction />
                        <Reformer />
                        <Location />
                    </main>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Documentation;