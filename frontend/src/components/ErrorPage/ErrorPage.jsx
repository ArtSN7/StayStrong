import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ErrorPage() {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900">
            <div className="container mx-auto text-center px-6 py-8">
                <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                    Something went wrong
                </h1>
                <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
                    Please try again later or contact support if the problem persists.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors mb-6"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}