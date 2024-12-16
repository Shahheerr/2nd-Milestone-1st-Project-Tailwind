import Image from 'next/image'
import Link from 'next/link'
import ProfilePic from "./assets/WhatsApp Image 2024-07-13 at 15.39.55_175dd8d0.jpg"
import Project1 from "./assets/656fd8e82c30ce198c7ce903_311d636a04afb3c85577b24d2608ac69.webp"
import Project2 from "./assets/ecom.jpg"
import Project3 from "./assets/frankandoak-landing-page-1024x499.webp"

export default function Home() {
  const ImageData = [
    {
      imageSrc: Project1,
      title: 1,
    },
    {
      imageSrc: Project2,
      title: 2,
    },
    {
      imageSrc: Project3,
      title: 3,
    },
  ]
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <Image
            src={ProfilePic}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-8"
          />
          <h1 className="text-5xl font-bold mb-4">Rana Shaheer</h1>
          <p className="text-2xl mb-8">Web Developer & Designer</p>
          <Link href="/contact" className="btn">Get in Touch</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ImageData.map((project, index) => (
              <div key={index} className="card">
                <Image
                  src={project.imageSrc}
                  alt={`Project ${project.title}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">Project {project.title}</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="text-blue-600 hover:underline">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

