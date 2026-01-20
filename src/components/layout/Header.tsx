import { Bell, Menu, Search } from "lucide-react";


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
                        <h1 className="text-[24px] md:text-xl font-bold leading-8 mb-1">
                            Dashboard
                        </h1>
                        <p className="text-[14px] font-inter font-normal text-[#9CA3AF] hidden sm:block">
                            Welcome back! Here's what's happening.
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <div className="relative hidden sm:block">
                        <Search
                            size={20}
                            color="#fff"
                            className="absolute left-3 top-1/2 -translate-y-1/2"
                        />
                        <input
                            placeholder="Search..."
                            className="pl-9 pr-3 py-2 bg-[#1f1f1f] border border-[#2a2a2a] rounded-lg text-sm focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <Bell />
                        <div>
                            <div className="font-medium">Admin User</div>
                            <div className="text-xs text-gray-400 hidden sm:block">
                                Administrator
                            </div>
                        </div>
                        <img className="w-11 h-11 rounded-full object-cover" src="https://media.istockphoto.com/id/1448167415/photo/smiling-indian-businessman-in-suit-and-glasses-with-laptop-near-office-building.jpg?s=612x612&w=0&k=20&c=vuUgcc-IlZewhnRm7yNOIuEfAvTnyJdMsPbnvkAnZjc=" alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
}
