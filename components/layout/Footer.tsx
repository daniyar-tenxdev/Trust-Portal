export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} LongevityPRO. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://longevitypro.ai" className="text-sm text-gray-400 hover:text-gray-500">
              Main Site
            </a>
            <a href="/privacy" className="text-sm text-gray-400 hover:text-gray-500">
              Privacy Policy
            </a>
            <a href="/contact" className="text-sm text-gray-400 hover:text-gray-500">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
