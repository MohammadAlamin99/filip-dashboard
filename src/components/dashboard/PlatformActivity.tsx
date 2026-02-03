import Card from "./Card";

export default function PlatformActivity() {
    const metrics = [
        { label: "Completed Gigs", value: "2,890", color: "#4CAF50" },
        { label: "Success Rate", value: "98.2%", color: "#4CAF50" },
        { label: "Avg Rating", value: "4.8", color: "#FBB040" },
        { label: "Avg Fill Time", value: "2.3h", color: "#F59E0B" },
    ];

    return (
        <div>
            <h2 className="font-semibold text-base mb-4">Platform Activity</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {metrics.map((m) => (
                    <Card key={m.label} className="p-4 sm:p-5 text-center">
                        <p 
                            className="text-2xl sm:text-3xl font-bold"
                            style={{ color: m.color }}
                        >
                            {m.value}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1">{m.label}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}
