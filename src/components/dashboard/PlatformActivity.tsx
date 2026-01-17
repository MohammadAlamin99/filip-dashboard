import Card from "./Card";


export default function PlatformActivity() {
    const metrics = [
        { label: "Completed Gigs", value: "2,890" },
        { label: "Success Rate", value: "98.2%" },
        { label: "Avg Rating", value: "4.8" },
        { label: "Avg Fill Time", value: "2.3h" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m) => (
                <Card key={m.label} className="p-4 text-center">
                    <p className="text-2xl font-semibold text-yellow-400">
                        {m.value}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">{m.label}</p>
                </Card>
            ))}
        </div>
    );
}
