import React from 'react'

const About = () => {

    return (
        <div className="min-h-screen bg-[#00081C] text-white px-8 md:px-4">
            <section className="flex flex-col items-center justify-center text-center px-6 py-20">
                <div className='flex justify-center items-center gap-4'>
                    <h1 className="chai-text text-4xl md:text-5xl font-bold mb-5 
                        bg-linear-to-br from-pink-600 to-blue-500 
                            hover:bg-linear-to-bl 
                                bg-clip-text text-transparent 
                                transition-all duration-300">
                        About Get Me A Chai
                    </h1>
                    <img
                        className="chai-img invertImg mb-6"
                        src="/tea.gif"
                        alt="Tea"
                        width={77}
                    />
                </div>
                <p className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
                    Get Me A Chai is a platform where creators can receive support
                    from their fans and followers. If you enjoy someone's work,
                    you can buy them a chai and show your appreciation.
                </p>
            </section>
            <section className="max-w-5xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-5">
                    What is Get Me A Chai?
                </h2>
                <p className="text-gray-300 text-lg leading-8">
                    Get Me A Chai allows creators to create their own profile and
                    receive financial support directly from their supporters.
                    Whether you are a developer, YouTuber, designer, writer,
                    artist, or any other creator, your audience can support you
                    with a simple chai donation.
                </p>
            </section>
            <section className="max-w-5xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-8">
                    How It Works
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#07142F] p-6 rounded-xl border border-gray-700">
                        <div className="mb-4">
                            <img
                                className="invertImg"
                                src="/avatar.gif"
                                alt="Tea"
                                width={45}
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            Create Your Profile
                        </h3>
                        <p className="text-gray-400">
                            Create your profile and share your personal page with
                            your supporters.
                        </p>
                    </div>
                    <div className="bg-[#07142F] p-6 rounded-xl border border-gray-700">
                        <div className="mb-4">
                            <img
                                className="invertImg"
                                src="/tea.gif"
                                alt="Tea"
                                width={45}
                            />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            Receive Chai
                        </h3>
                        <p className="text-gray-400">
                            Your supporters can send you a chai along with a
                            personal message.
                        </p>
                    </div>
                    <div className="bg-[#07142F] p-6 rounded-xl border border-gray-700">
                        <div className="mb-4">
                            <span className="text-4xl">❤️</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            Keep Creating
                        </h3>
                        <p className="text-gray-400">
                            Use the support to continue creating useful and
                            meaningful content.
                        </p>
                    </div>
                </div>
            </section>
            <section className="max-w-5xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-5">
                    Why Get Me A Chai?
                </h2>
                <p className="text-gray-300 text-lg leading-8">
                    Creating content takes time, effort, and dedication. Get Me
                    A Chai provides a simple way for your audience to say
                    "Thank You" and support the work you do.
                </p>
            </section>
            <section className="flex flex-col items-center text-center px-6 py-20">
                <div className='flex justify-center items-center gap-4'>
                    <h2 className="text-3xl font-bold mb-4">
                        Support Creators. Keep Creating.
                    </h2>
                    <img
                        className="invertImg mb-5"
                        src="/tea.gif"
                        alt="Tea"
                        width={55}
                    />
                </div>
                <p className="text-gray-400">
                    Every chai makes a difference.
                </p>
            </section>
        </div>
    )
}

export default About

export const metadata = {
    title: "About - Get Me A Chai",
    description: '...',
}