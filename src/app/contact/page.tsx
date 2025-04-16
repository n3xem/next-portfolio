import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-24 min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-2xl w-full backdrop-blur-sm bg-white/20 dark:bg-black/30 p-8 rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            お問い合わせ
          </h1>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 bg-white/50 dark:bg-black/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <div className="flex justify-between items-center pt-4">
              <Link
                href="/"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                ← ホームに戻る
              </Link>

              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:shadow-lg transition-shadow"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
