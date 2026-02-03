import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { Upload, CreditCard } from "lucide-react";

const tabs = ["Profile", "Notification", "Security", "Billing"];

const notificationSettings = [
    { title: "New Job Applications", description: "Get Notified When Workers Apply To Your Jobs", enabled: true },
    { title: "Messages", description: "Receive Notifications For New Messages", enabled: true },
    { title: "Availability Updates", description: "Updates About Job Status Changes", enabled: true },
    { title: "Marketing Emails", description: "Receive Tips And Platform Updates", enabled: false },
    { title: "Weekly Digest", description: "Weekly Summary Of Platform Activity", enabled: false },
];

export default function SettingsPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Profile");
    const [notifications, setNotifications] = useState(notificationSettings);

    const toggleNotification = (index: number) => {
        setNotifications(prev => prev.map((n, i) => 
            i === index ? { ...n, enabled: !n.enabled } : n
        ));
    };

    return (
        <div className="flex min-h-screen bg-[#141414] text-gray-100">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col min-w-0">
                <Header onMenuClick={() => setSidebarOpen(true)} title="Settings" subtitle="Manage your account and platform settings" />
                <main className="p-4 md:p-6 space-y-5 overflow-x-hidden">
                    {/* Tabs */}
                    <div className="flex gap-1 bg-[#1f1f1f] p-1 rounded-xl w-fit">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    activeTab === tab
                                        ? "bg-[#FBB040] text-black"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Profile Tab */}
                    {activeTab === "Profile" && (
                        <div className="space-y-4">
                            {/* Profile Picture */}
                            <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-5">
                                <h3 className="font-semibold mb-1">Profile Picture</h3>
                                <p className="text-xs text-gray-400 mb-4">This Will Be Displayed On Your Public Profile</p>
                                <div className="flex items-center gap-4">
                                    <img 
                                        src="https://media.istockphoto.com/id/1448167415/photo/smiling-indian-businessman-in-suit-and-glasses-with-laptop-near-office-building.jpg?s=612x612&w=0&k=20&c=vuUgcc-IlZewhnRm7yNOIuEfAvTnyJdMsPbnvkAnZjc=" 
                                        alt="Profile" 
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <button className="flex items-center gap-2 px-4 py-2 border border-[#2a2a2a] rounded-lg text-sm hover:bg-[#2a2a2a] transition-colors">
                                            Upload New Photo <Upload size={14} />
                                        </button>
                                        <p className="text-xs text-gray-400 mt-2">JPG, PNG Or GIF. Max Size 2MB.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Personal Information */}
                            <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-5">
                                <h3 className="font-semibold mb-1">Personal Information</h3>
                                <p className="text-xs text-gray-400 mb-4">Update Your Personal Details</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs text-gray-400 block mb-2">First Name</label>
                                        <input 
                                            type="text" 
                                            defaultValue="Admin"
                                            className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-sm focus:outline-none focus:border-[#FBB040]/50"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-400 block mb-2">Last Name</label>
                                        <input 
                                            type="text" 
                                            defaultValue="User"
                                            className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-sm focus:outline-none focus:border-[#FBB040]/50"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-400 block mb-2">Email</label>
                                        <input 
                                            type="email" 
                                            defaultValue="Admin@Gigflow.Com"
                                            className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-sm focus:outline-none focus:border-[#FBB040]/50"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-400 block mb-2">Phone</label>
                                        <input 
                                            type="tel" 
                                            defaultValue="+1 (555) 123-4567"
                                            className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-sm focus:outline-none focus:border-[#FBB040]/50"
                                        />
                                    </div>
                                </div>
                                <button className="mt-5 px-5 py-2.5 bg-[#FBB040] text-black rounded-lg text-sm font-medium hover:bg-[#f5a623] transition-colors">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Notification Tab */}
                    {activeTab === "Notification" && (
                        <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-5">
                            <h3 className="font-semibold mb-1">Notification Preferences</h3>
                            <p className="text-xs text-gray-400 mb-6">Choose How You Want To Be Notified</p>
                            <div className="space-y-4">
                                {notifications.map((setting, index) => (
                                    <div key={index} className="flex items-center justify-between py-3 border-b border-[#2a2a2a] last:border-0">
                                        <div>
                                            <p className="text-sm font-medium">{setting.title}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">{setting.description}</p>
                                        </div>
                                        <button
                                            onClick={() => toggleNotification(index)}
                                            className={`w-12 h-6 rounded-full transition-colors relative ${
                                                setting.enabled ? "bg-[#4CAF50]" : "bg-[#3a3a3a]"
                                            }`}
                                        >
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                                setting.enabled ? "right-1" : "left-1"
                                            }`} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Security Tab */}
                    {activeTab === "Security" && (
                        <div className="space-y-4">
                            {/* Change Password */}
                            <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-5">
                                <h3 className="font-semibold mb-1">Change Password</h3>
                                <p className="text-xs text-gray-400 mb-4">Update Your Password To Keep Your Account Secure</p>
                                <div className="space-y-4 max-w-xl">
                                    <div>
                                        <label className="text-xs text-gray-400 block mb-2">Current Password</label>
                                        <input 
                                            type="password" 
                                            defaultValue="********"
                                            className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-sm focus:outline-none focus:border-[#FBB040]/50"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-400 block mb-2">New Password</label>
                                        <input 
                                            type="password" 
                                            defaultValue="********"
                                            className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-sm focus:outline-none focus:border-[#FBB040]/50"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-400 block mb-2">Confirm New Password</label>
                                        <input 
                                            type="password" 
                                            defaultValue="********"
                                            className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-sm focus:outline-none focus:border-[#FBB040]/50"
                                        />
                                    </div>
                                </div>
                                <button className="mt-5 px-5 py-2.5 border border-[#FBB040] text-[#FBB040] rounded-lg text-sm font-medium hover:bg-[#FBB040]/10 transition-colors">
                                    Updated Password
                                </button>
                            </div>

                            {/* Two-Factor Authentication */}
                            <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-5">
                                <h3 className="font-semibold mb-1">Two-Factor Authentication</h3>
                                <p className="text-xs text-gray-400 mb-4">Add An Extra Layer Of Security To Your Account</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs bg-[#2a2a2a] text-gray-400 px-3 py-1.5 rounded-lg">Not Enabled</span>
                                        <span className="text-sm text-gray-400">Protect Your Account With 2FA</span>
                                    </div>
                                    <button className="px-4 py-2 bg-[#FBB040] text-black rounded-lg text-sm font-medium hover:bg-[#f5a623] transition-colors">
                                        Enabled 2FA
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Billing Tab */}
                    {activeTab === "Billing" && (
                        <div className="space-y-4">
                            {/* Current Plan */}
                            <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-5">
                                <h3 className="font-semibold mb-1">Current Plan</h3>
                                <p className="text-xs text-gray-400 mb-4">Manage Your Subscription</p>
                                <div className="bg-[#FBB040] rounded-xl p-5 flex items-center justify-between">
                                    <div>
                                        <span className="text-xs bg-black/20 text-black px-2 py-1 rounded">Admin</span>
                                        <h4 className="text-lg font-bold text-black mt-2">Enterprise Plan</h4>
                                        <p className="text-xs text-black/70">Unlimited Access To All Features</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-3xl font-bold text-black">€25</span>
                                        <span className="text-black/70">/Hr</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-5">
                                <h3 className="font-semibold mb-1">Payment Method</h3>
                                <p className="text-xs text-gray-400 mb-4">Manage Your Payment Details</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[#FBB040]/20 rounded-lg">
                                            <CreditCard size={20} className="text-[#FBB040]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                                            <p className="text-xs text-gray-400">Expires 12/25</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-[#FBB040] text-black rounded-lg text-sm font-medium hover:bg-[#f5a623] transition-colors">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
