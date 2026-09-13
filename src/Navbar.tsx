const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">

        {/* Brand */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500">
            <span className="text-[10px] font-bold text-white">DS</span>
          </div>

          <span className="text-base font-semibold">
            <span className="text-slate-800">Dev</span>
            <span className="text-pink-500"> Stack</span>
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-7">
          <a
            href="#"
            className="text-sm font-medium text-pink-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-5">
          <button className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-pink-600">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;