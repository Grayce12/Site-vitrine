// Données par défaut pour l'équipe
const defaultTeamMembers = [
    {
        name: "Gary Elliott",
        role: "Co-Founder and CEO",
        image: "/images/team-1.jpg",
    },
    {
        name: "Jeffrey Allen",
        role: "Co-Founder and CTO",
        image: "/images/team-2.jpg",
    },
    {
        name: "Sara Mendez",
        role: "Lead Developer, Hacker",
        image: "/images/team-3.jpg",
    },
    {
        name: "Albert Castro",
        role: "3D Designer & Prototyper",
        image: "/images/team-4.jpg",
    },
];

const TeamMember = ({ name, role, image }) => (
    <div className="flex flex-col items-center text-center bg-white overflow-hidden mb-30">
        <img
            src={image}
            alt={name}
            className="w-full h-70 object-cover mb-8"
        />
        <h4 className="text-xl font-semibold text-gray-700">{name}</h4>
        <h5 className="text-gray-400 pb-5">{role}</h5>
    </div>
);

export default function Team({ members = defaultTeamMembers }) {
    return (
        <section className="py-30 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-700 mb-4">Meet the Team</h2>
                    <p 
                        id="description"
                    className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-30">
                        We are a small group of inventors, hackers and designers from the different parts of the world on a mission.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
}

