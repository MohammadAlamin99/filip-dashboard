import { Menu, Search, Bell } from "lucide-react";

type HeaderProps = {
    onMenuClick: () => void;
    title?: string;
    subtitle?: string;
};

export default function Header({ onMenuClick, title = "Dashboard", subtitle = "Welcome back! Here's what's happening." }: HeaderProps) {
    return (
        <header className="px-4 md:px-6 py-4 border-b border-[#2a2a2a]">
            <div className="flex items-center justify-between gap-4">
                {/* Left */}
                <div className="flex items-center gap-3 min-w-0">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        className="md:hidden p-2 bg-[#1f1f1f] border border-[#2a2a2a] rounded-lg flex-shrink-0"
                    >
                        <Menu size={18} />
                    </button>

                    <div className="min-w-0">
                        <h1 className="text-xl md:text-2xl font-bold leading-tight">
                            {title}
                        </h1>
                        <p className="text-sm text-[#9CA3AF] hidden sm:block truncate">
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <div className="relative flex-1 md:flex-none">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                            placeholder="Search..."
                            className="pl-9 pr-4 py-2 bg-[#1f1f1f] border border-[#2a2a2a] rounded-full text-sm focus:outline-none w-34 md:w-40 lg:w-48"
                        />
                    </div>

                    {/* Notification Icon */}
                    <button className="relative flex-shrink-0 hover:opacity-80 transition-opacity">
                        <Bell size={20} className="text-gray-300" />
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="text-right hidden sm:block">
                            <div className="font-medium text-sm">Admin User</div>
                            <div className="text-xs text-gray-400">
                                Administrator
                            </div>
                        </div>
                        <img 
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" 
                            src="https://media.istockphoto.com/id/1448167415/photo/smiling-indian-businessman-in-suit-and-glasses-with-laptop-near-office-building.jpg?s=612x612&w=0&k=20&c=vuUgcc-IlZewhnRm7yNOIuEfAvTnyJdMsPbnvkAnZjc=" 
                            alt="Admin avatar" 
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
