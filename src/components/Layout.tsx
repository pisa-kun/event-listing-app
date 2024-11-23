import { CalendarDays } from "lucide-react";
import { Outlet } from "react-router-dom";

const TWITTER_URL = "https://x.com/pisa40338570";
const GITHUB_URL = "https://github.com/pisa-kun?tab=repositories";
const HANDLE_NAME = "pisa";

const Layout = () => {
  return (
    <>
      <div className="container mx-auto py-16 space-y-8 min-h-screen">
        {/* Header */}
        <header className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <span className="inline-flex items-center justify-center bg-black h-20 w-20 rounded-full">
              <CalendarDays size={40} className="text-sky-300" />
            </span>
            <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              React イベントカレンダー
            </h1>
          </div>
          <p className="text-base text-gray-700">
            定期的に開催されるイベントをチェックして、学習と交流を加速させましょう。
            <br />
            最新情報を受け取りたい場合は、ぜひフォローしてください。
          </p>

          <a href={TWITTER_URL} className="text-sky-500 hover:underline">
            Twitter
          </a>
        </header>

        {/* Page Content */}
        <Outlet />

        {/* Footer */}
        <footer className="text-center ">
          <p className="text-gray-700">
            Created by{" "}
            <a className="text-sky-500" href={GITHUB_URL}>
              @{HANDLE_NAME}
            </a>{" "}
            &copy; 2024
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;