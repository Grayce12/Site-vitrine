export default function Timeline() {
    return (
        <section id="timeline" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                {/* Section Header */}
                <div className="section-header mb-10">
                    <h2 className="text-4xl font-semibold mb-4">Timeline</h2>
                    <p className="text-lg text-gray-600">
                        Here’s a roadmap of our product to highlight the milestones from the initial phase to delivery and future updates.
                    </p>
                </div>

                {/* Timeline Content */}
                <div className="relative">
                    <div className="timeline-post">
                        <div className="bar-content">
                            <div className="inner">Now</div>
                        </div>
                    </div>

                    {/* Post 1 */}
                    <div className="timeline-post has-content">
                        <div className="timeline-date col-sm-6">
                            <p className="text-gray-500">23 Jan 2014</p>
                        </div>
                        <div className="timeline-content col-sm-6">
                            <h4 className="title">Mass Production</h4>
                            <p className="text-gray-600">Details about this milestone and its significance for the product’s growth.</p>
                        </div>
                    </div>

                    {/* Post 2 */}
                    <div className="timeline-post has-content odd">
                        <div className="timeline-date col-sm-6">
                            <p className="text-gray-500">23 Jan 2014</p>
                        </div>
                        <div className="timeline-content col-sm-6">
                            <h4 className="title">Testing Pre-Production Samples</h4>
                            <p className="text-gray-600">Details about testing and validation steps for the product.</p>
                        </div>
                    </div>

                    {/* Post 3 */}
                    <div className="timeline-post has-content">
                        <div className="timeline-date col-sm-6">
                            <p className="text-gray-500">23 Jan 2014</p>
                        </div>
                        <div className="timeline-content col-sm-6">
                            <h4 className="title">Crowdfunding Campaign</h4>
                            <p className="text-gray-600">Details about the crowdfunding campaign and its impact.</p>
                        </div>
                    </div>

                    {/* Post 4 */}
                    <div className="timeline-post has-content odd">
                        <div className="timeline-date col-sm-6">
                            <p className="text-gray-500">23 Jan 2014</p>
                        </div>
                        <div className="timeline-content col-sm-6">
                            <h4 className="title">Preview at CES</h4>
                            <p className="text-gray-600">Details about the product preview at CES and the initial response.</p>
                        </div>
                    </div>

                    {/* Bar for 2015 */}
                    <div className="timeline-post">
                        <div className="bar-content">
                            <div className="inner">2015</div>
                        </div>
                    </div>

                    {/* Post 5 */}
                    <div className="timeline-post has-content">
                        <div className="timeline-date col-sm-6">
                            <p className="text-gray-500">23 Jan 2014</p>
                        </div>
                        <div className="timeline-content col-sm-6">
                            <h4 className="title">3D Prototype & Testing</h4>
                        </div>
                    </div>

                    {/* Post 6 */}
                    <div className="timeline-post has-content odd">
                        <div className="timeline-date col-sm-6">
                            <p className="text-gray-500">23 Jan 2014</p>
                        </div>
                        <div className="timeline-content col-sm-6">
                            <h4 className="title">Research and Development</h4>
                        </div>
                    </div>

                    {/* Bar for Idea */}
                    <div className="timeline-post">
                        <div className="bar-content">
                            <div className="inner">Idea</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
