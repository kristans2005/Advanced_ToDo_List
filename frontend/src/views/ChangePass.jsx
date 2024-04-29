import Footer from '../components/Footer';

function Change() {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="bg-gray-200 flex w-full h-16 gap-4 items-center justify-center ">
                <a href="/home">
                    <button>Back</button>
                </a>
            </nav>

            <div className="flex-1 flex">
                <div className="grid h-auto w-full justify-center place-items-center">
                    <div>
                        <h1 className="text-3xl font-bold mb-5">
                            Change password
                        </h1>
                        <form className="w-full max-w-sm">
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="username"
                                >
                                    Old password:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="oldpass"
                                    type="password"
                                    placeholder="old password"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    new password:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="newpass"
                                    type="password"
                                    placeholder="new password"
                                />
                            </div>
                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
                                type="button"
                            >
                                Change password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Change;
