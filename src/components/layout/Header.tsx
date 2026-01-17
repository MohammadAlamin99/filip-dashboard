import { Menu, Search } from "lucide-react";

type HeaderProps = {
    onMenuClick: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
    return (
        <header className="px-4 md:px-6 py-4 border-b border-[#2a2a2a]">
            <div className="flex items-center justify-between">
                {/* Left */}
                <div className="flex items-center gap-3">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        className="md:hidden p-2 bg-[#1f1f1f] border border-[#2a2a2a] rounded-lg"
                    >
                        <Menu size={18} />
                    </button>

                    <div>
                        <h1 className="text-lg md:text-xl font-semibold">
                            Dashboard
                        </h1>
                        <p className="text-sm text-gray-400 hidden sm:block">
                            Welcome back! Here's what's happening.
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <div className="relative hidden sm:block">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            placeholder="Search..."
                            className="pl-9 pr-3 py-2 bg-[#1f1f1f] border border-[#2a2a2a] rounded-lg text-sm focus:outline-none"
                        />
                    </div>

                    <div className="text-right">
                        <div className="font-medium">Admin User</div>
                        <div className="text-xs text-gray-400 hidden sm:block">
                            Administrator
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
