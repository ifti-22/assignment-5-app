const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">

        {/* Brand */}
        <a href="#" className="flex items-center gap-2">

          {/* Brand Logo */}
          <div className="brand-gradient flex h-6 w-6 items-center justify-center rounded-md">
            <span className="text-[10px] font-bold text-white">
              DS
            </span>
          </div>

          {/* Brand Name */}
          <span className="text-base font-semibold">
            <span className="text-slate-800">
              Dev
            </span>

            <span className="brand-gradient-text">
              {" "}Stack
            </span>
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-7">

          <a
            href="#"
            className="brand-gradient-text text-sm font-medium"
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

          <button
            className="text-sm font-medium text-slate-600 transition-colors hover:text-pink-500"
          >
            Sign In
          </button>

          {/* Primary Button */}
          <button
            className="brand-gradient rounded-full px-5 py-2 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;