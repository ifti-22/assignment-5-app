const Footer = () => {
    return (
        <footer className="mt-16 border-t border-slate-100 bg-white">
            <div className="mx-auto max-w-6xl px-6">

                {/* Footer Main */}
                <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-4">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500">
                                <span className="text-[9px] font-bold text-white">
                                    DS
                                </span>
                            </div>

                            <span className="text-base font-bold text-slate-900">
                                Dev <span className="text-pink-600">Stack</span>
                            </span>
                        </div>

                        <p className="mt-3 max-w-xs text-xs leading-5 text-slate-400">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="mt-5 flex gap-4">
                            <a
                                href="#"
                                className="text-[11px] text-slate-600 transition hover:text-pink-600"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-[11px] text-slate-600 transition hover:text-pink-600"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-[11px] text-slate-600 transition hover:text-pink-600"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="mb-4 text-[10px] font-bold tracking-wide text-slate-800">
                            PRODUCT
                        </h3>

                        <div className="flex flex-col gap-2.5">
                            <a
                                href="#"
                                className="text-[11px] text-slate-400 transition hover:text-pink-600"
                            >
                                Home
                            </a>

                            <a
                                href="#"
                                className="text-[11px] text-slate-400 transition hover:text-pink-600"
                            >
                                Technologies
                            </a>

                            <a
                                href="#"
                                className="text-[11px] text-slate-400 transition hover:text-pink-600"
                            >
                                Projects
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-4 text-[10px] font-bold tracking-wide text-slate-800">
                            COMPANY
                        </h3>

                        <div className="flex flex-col gap-2.5">
                            <a
                                href="#"
                                className="text-[11px] text-slate-400 transition hover:text-pink-600"
                            >
                                About
                            </a>

                            <a
                                href="#"
                                className="text-[11px] text-slate-400 transition hover:text-pink-600"
                            >
                                Contact
                            </a>

                            <a
                                href="#"
                                className="text-[11px] text-slate-400 transition hover:text-pink-600"
                            >
                                Careers
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-4 text-[10px] font-bold tracking-wide text-slate-800">
                            LEGAL
                        </h3>

                        <div className="flex flex-col gap-2.5">
                            <a
                                href="#"
                                className="text-[11px] text-slate-400 transition hover:text-pink-600"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#"
                                className="text-[11px] text-slate-400 transition hover:text-pink-600"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-4 border-t border-slate-100 py-5 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-[10px] text-slate-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-[10px] text-slate-400 transition hover:text-pink-600"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="text-[10px] text-slate-400 transition hover:text-pink-600"
                        >
                            Terms
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;