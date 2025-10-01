export default function Footer() {
    return (
      <footer className="mt-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-6 text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} Shubham Chaudhari</p>
          <p>Built with Next.js + Tailwind CSS</p>
        </div>
      </footer>
    );
  }