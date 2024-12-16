import Image from 'next/image'
import ProfilePic from "../assets/WhatsApp Image 2024-07-13 at 15.39.55_175dd8d0.jpg"

export default function About() {
    return (
        <div className="section">
            <div className="container">
                <h1 className="section-title">About Me</h1>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image
                            src={ProfilePic}
                            alt="John Doe"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Hi, I'm Rana Shaheer</h2>
                        <p className="text-gray-600 mb-6">
                            I'm a passionate web developer with over 5 years of experience in creating beautiful and functional websites. My expertise includes React, Next.js, and modern CSS techniques.
                        </p>
                        <h3 className="text-2xl font-semibold mb-3">My Skills</h3>
                        <ul className="list-disc list-inside mb-6 text-gray-600">
                            <li>React & Next.js</li>
                            <li>JavaScript (ES6+)</li>
                            <li>HTML5 & CSS3</li>
                            <li>Responsive Web Design</li>
                            <li>UI/UX Design</li>
                            <li>Version Control (Git)</li>
                        </ul>
                        <a href="/John_Doe_Resume.pdf" download className="btn">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

