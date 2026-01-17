type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl ${className}`}
        >
            {children}
        </div>
    );
}
