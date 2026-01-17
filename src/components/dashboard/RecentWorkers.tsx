import { Star } from "lucide-react";
import Card from "./Card";


export default function RecentWorkers() {
    const workers = [
        { name: "Esra Zakaria", role: "Bartending", rating: 4.9 },
        { name: "Dina Nia", role: "Event Service", rating: 4.9 },
        { name: "Marco Aurora", role: "Fine Dining", rating: 4.9 },
    ];

    return (
        <Card className="p-5">
            <div className="flex justify-between mb-4">
                <h2 className="font-semibold">Recent Workers</h2>
                <button className="text-yellow-400 text-sm">View All</button>
            </div>

            <div className="space-y-4">
                {workers.map((w) => (
                    <div key={w.name} className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">{w.name}</p>
                            <p className="text-xs text-gray-400">{w.role}</p>
                        </div>

                        <span className="flex items-center gap-1 text-yellow-400">
                            <Star size={14} />
                            {w.rating}
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
