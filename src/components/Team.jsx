export default function Team() {
    return (
        <section id="team" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                {/* Section Header */}
                <div className="section-header mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Meet the Team</h2>
                    <p className="text-lg text-gray-600">
                        We are a small group of inventors, hackers, and designers from different parts of the world on a mission.
                    </p>
                </div>

                {/* Team Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Member 1 */}
                    <div className="team-member text-center">
                        <div className="member-image mb-4">
                            <img src="/images/team-1.jpg" alt="Gary Elliott" className="rounded-full w-32 h-32 mx-auto" />
                        </div>
                        <h4 className="text-xl font-semibold">Gary Elliott</h4>
                        <h5 className="text-gray-500">Co-Founder and CEO</h5>
                    </div>

                    {/* Member 2 */}
                    <div className="team-member text-center">
                        <div className="member-image mb-4">
                            <img src="/images/team-2.jpg" alt="Jeffrey Allen" className="rounded-full w-32 h-32 mx-auto" />
                        </div>
                        <h4 className="text-xl font-semibold">Jeffrey Allen</h4>
                        <h5 className="text-gray-500">Co-Founder and CTO</h5>
                    </div>

                    {/* Member 3 */}
                    <div className="team-member text-center">
                        <div className="member-image mb-4">
                            <img src="/images/team-3.jpg" alt="Sara Mendez" className="rounded-full w-32 h-32 mx-auto" />
                        </div>
                        <h4 className="text-xl font-semibold">Sara Mendez</h4>
                        <h5 className="text-gray-500">Lead Developer, Hacker</h5>
                    </div>

                    {/* Member 4 */}
                    <div className="team-member text-center">
                        <div className="member-image mb-4">
                            <img src="/images/team-4.jpg" alt="Albert Castro" className="rounded-full w-32 h-32 mx-auto" />
                        </div>
                        <h4 className="text-xl font-semibold">Albert Castro</h4>
                        <h5 className="text-gray-500">3D Designer & Prototyper</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}
