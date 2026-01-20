import {
    LogOut,
    X,
    LayoutDashboard,
    Users,
    Briefcase,
    CalendarCheck,
    Settings
} from "lucide-react";
import logo from "../../assets/images/logo.png";

type SidebarProps = {
    open: boolean;
    onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
    const items = [
        { label: "Dashboard", icon: LayoutDashboard },
        { label: "Workers", icon: Users },
        { label: "Employers", icon: Briefcase },
        { label: "Availability", icon: CalendarCheck },
        { label: "Settings", icon: Settings },
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
                className={`
                    h-screen fixed md:static z-50 w-64
                    bg-[#1b1b1b] border-r border-[#2a2a2a]
                    transform transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0
                `}
            >
                <div className="px-6 py-5 flex justify-between items-center">
                    <img src={logo} className="w-10" alt="Logo" />
                    <button onClick={onClose} className="md:hidden text-gray-300">
                        <X size={18} />
                    </button>
                </div>

                <nav className="flex-1 px-3 space-y-1">
                    {items.map(({ label, icon: Icon }) => {
                        const active = label === "Dashboard";

                        return (
                            <button
                                key={label}
                                className={`
                                    w-full px-4 py-3 rounded-lg flex items-center gap-3 text-left font-medium
                                    ${active
                                        ? "bg-[#FBB040] text-[#030712]"
                                        : "text-gray-300 hover:bg-[#2a2a2a]"
                                    }
                                `}
                            >
                                <Icon size={18} />
                                <span>{label}</span>
                            </button>
                        );
                    })}
                </nav>

                <button className="m-4 flex items-center justify-center gap-2 border border-red-500 text-red-500 rounded-lg py-3 hover:bg-red-500 hover:text-black">
                    <LogOut size={16} />
                    Logout
                </button>
            </aside>
        </>
    );
}
