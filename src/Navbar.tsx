const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#" className="flex shrink-0 items-center gap-2">
          {/* Logo */}
          <div className="brand-gradient flex h-7 w-7 items-center justify-center rounded-md">
            <span className="text-[10px] font-bold text-white">DS</span>
          </div>

          {/* Brand Name */}
          <span className="text-base font-semibold tracking-tight">
            <span className="text-slate-800">Dev</span>
            <span className="brand-gradient-text"> Stack</span>
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#"
            className="brand-gradient-text text-xs font-medium"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-xs font-medium text-slate-500 transition-colors hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-xs font-medium text-slate-500 transition-colors hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-xs font-medium text-slate-500 transition-colors hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-xs font-medium text-slate-500 transition-colors hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Authentication */}
        <div className="hidden items-center gap-4 sm:flex">
          <button
            type="button"
            className="text-xs font-medium text-slate-600 transition-colors hover:text-pink-500"
          >
            Sign In
          </button>

          <button
            type="button"
            className="brand-gradient rounded-full px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:opacity-90"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          className="rounded-md p-2 text-slate-600 sm:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;