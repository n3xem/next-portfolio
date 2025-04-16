import Peacock from "@/components/Peacock";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Peacock Animation Background */}
      <Peacock />

      {/* Content */}
      <div className="container mx-auto px-4 py-24 min-h-screen flex flex-col justify-center items-center relative z-10">
        <div className="max-w-3xl w-full backdrop-blur-sm bg-white/20 dark:bg-black/30 p-8 rounded-2xl shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            yukyan
          </h1>

          <p className="text-xl md:text-2xl text-center mb-8 text-gray-800 dark:text-gray-200">
            Webアプリケーションエンジニア
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <Link
              href="https://twitter.com/yukyan_p"
              target="_blank"
              className="text-2xl hover:text-blue-500 transition-colors"
              aria-label="Twitter Profile"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://github.com/n3xem"
              target="_blank"
              className="text-2xl hover:text-purple-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </Link>
          </div>

          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-white/30 dark:bg-black/40">
              <h2 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-400">
                About Me
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Webアプリケーション開発に特化したエンジニアとして活動しています。
                モダンなフロントエンド技術とバックエンド開発の両方に精通しており、
                美しいUIと優れたUXを持つWebアプリケーションの構築に情熱を注いでいます。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/30 dark:bg-black/40">
              <h2 className="text-2xl font-bold mb-3 text-blue-700 dark:text-blue-400">
                Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-center">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-center">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-center">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-center">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-center">
                  CSS/SCSS
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-center">
                  Tailwind
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:shadow-lg transition-shadow"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} yukyan. All rights reserved.
        </footer>
      </div>

      {/* Additional content to enable scrolling */}
      <div className="container mx-auto px-4 py-24 min-h-screen flex flex-col items-center">
        <div className="max-w-3xl w-full backdrop-blur-sm bg-white/20 dark:bg-black/30 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            プロジェクト
          </h2>

          <div className="space-y-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="p-6 rounded-xl bg-white/30 dark:bg-black/40"
              >
                <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">
                  プロジェクト {num}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  これはサンプルプロジェクトの説明です。実際のプロジェクト内容や技術スタック、
                  課題と解決策などを詳細に記載することができます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 rounded-full">
                    React
                  </span>
                  <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 rounded-full">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 rounded-full">
                    Tailwind
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extra space for scrolling to see the full peacock animation */}
      <div className="container mx-auto px-4 py-24 min-h-screen flex flex-col items-center">
        <div className="max-w-3xl w-full backdrop-blur-sm bg-white/20 dark:bg-black/30 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            ブログ
          </h2>

          <div className="space-y-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="p-6 rounded-xl bg-white/30 dark:bg-black/40"
              >
                <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">
                  ブログ記事 {num}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {new Date().toLocaleDateString("ja-JP")}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  これはサンプルブログ記事の説明です。技術的な内容や、
                  日々の開発で学んだことなどを記載できます。
                </p>
                <Link
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  続きを読む →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="#"
              className="px-8 py-3 bg-white/40 dark:bg-black/40 text-gray-800 dark:text-gray-200 rounded-full hover:shadow-lg transition-shadow"
            >
              全ての記事を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
