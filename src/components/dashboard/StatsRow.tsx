import { Users, Briefcase, Euro, TrendingUp } from "lucide-react";
import Card from "./Card";

export default function StatsRow() {
    const stats = [
        {
            title: "Total Users",
            value: "2,847",
            change: "+12% from last month",
            changeColor: "#F59E0B",
            icon: Users,
            iconColor: "#F59E0B",
            bgColor: "rgba(251, 176, 64, 0.15)",
        },
        {
            title: "Active Workers",
            value: "1,532",
            change: "+8% from last month",
            changeColor: "#4CAF50",
            icon: Users,
            iconColor: "#4CAF50",
            bgColor: "rgba(76, 175, 80, 0.15)",
        },
        {
            title: "Open Jobs",
            value: "156",
            change: "23 new this week",
            changeColor: "#9CA3AF",
            icon: Briefcase,
            iconColor: "#F59E0B",
            bgColor: "rgba(251, 176, 64, 0.15)",
        },
        {
            title: "Revenue",
            value: "$126K",
            change: "+12.5% growth",
            changeColor: "#4CAF50",
            icon: Euro,
            iconColor: "#000",
            bgColor: "#9CA3AF",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <Card key={stat.title} className="p-4 sm:p-5">
                        <div className="flex justify-between items-start">
                            <p className="text-sm text-gray-400">
                                {stat.title}
                            </p>

                            <div
                                className="p-2 rounded-lg"
                                style={{ backgroundColor: stat.bgColor }}
                            >
                                <Icon
                                    size={18}
                                    style={{ color: stat.iconColor }}
                                />
                            </div>
                        </div>

                        <p className="text-2xl sm:text-3xl font-bold mt-1">
                            {stat.value}
                        </p>

                        <p 
                            className="text-xs mt-2 flex items-center gap-1"
                            style={{ color: stat.changeColor }}
                        >
                            {stat.changeColor === "#4CAF50" || stat.changeColor === "#F59E0B" ? (
                                <TrendingUp size={12} />
                            ) : null}
                            {stat.change}
                        </p>
                    </Card>
                );
            })}
        </div>
    );
}
