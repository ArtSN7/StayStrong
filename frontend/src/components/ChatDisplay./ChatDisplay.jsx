
export default function ChatDisplay() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900">
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                    Chat Display
                </h1>
                <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
                    This is where the chat will be displayed.
                </p>
            </div>
        </div>
    );
}