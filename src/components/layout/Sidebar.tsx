import { LogOut, X } from "lucide-react";

type SidebarProps = {
    open: boolean;
    onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
    const items = [
        "Dashboard",
        "Workers",
        "Employers",
        "Availability",
        "Settings",
    ];

    return (
        <>
            {/* Overlay (mobile only) */}
            <div
                onClick={onClose}
                className={`
          fixed inset-0 bg-black/60 z-40
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
          md:hidden
        `}
            />

            {/* Sidebar */}
            <aside
                className={` h-screen
          fixed md:static z-50 w-64
          bg-[#1b1b1b] border-r border-[#2a2a2a]
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
            >
                <div className="px-6 py-5 text-2xl font-bold text-yellow-400 flex justify-between items-center">
                    GoldShift
                    <button onClick={onClose} className="md:hidden">
                        <X size={18} />
                    </button>
                </div>

                <nav className="flex-1 px-3 space-y-1">
                    {items.map((item) => (
                        <button
                            key={item}
                            className={`w-full px-4 py-3 rounded-lg text-left ${item === "Dashboard"
                                ? "bg-yellow-400 text-black"
                                : "text-gray-300 hover:bg-[#2a2a2a]"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                <button className="m-4 flex items-center justify-center gap-2 border border-red-500 text-red-500 rounded-lg py-3 hover:bg-red-500 hover:text-black">
                    <LogOut size={16} />
                    Logout
                </button>
            </aside>
        </>
    );
}
