import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Head>
        <title>UWA Motorsport</title>
        <meta name="description" content="UWA Motorsport - Student racing team from the University of Western Australia" />
      </Head>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-70">
          <Image
            src="/assets/hero-background.jpg" // Replace with your actual image path
            alt="UWA Motorsport Car"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-motorsport-yellow">UWA MOTORSPORT</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Pushing the limits of engineering and performance since 2001
          </p>
          <Link href="#about">
            <button className="bg-motorsport-yellow text-black px-8 py-3 rounded-md font-bold hover:bg-yellow-600 transition">
              LEARN MORE
            </button>
          </Link>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-black bg-opacity-90 z-50 border-b border-motorsport-yellow">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-motorsport-yellow">
              UWA MOTORSPORT
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-motorsport-yellow transition">Home</Link>
              <Link href="/team" className="hover:text-motorsport-yellow transition">Team</Link>
              <Link href="/cars" className="hover:text-motorsport-yellow transition">Cars</Link>
              <Link href="/fsae" className="hover:text-motorsport-yellow transition">Formula SAE</Link>
              <Link href="/gallery" className="hover:text-motorsport-yellow transition">Gallery</Link>
              <Link href="/sponsors" className="hover:text-motorsport-yellow transition">Sponsors</Link>
              <Link href="/get-involved" className="hover:text-motorsport-yellow transition">Get Involved</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-motorsport-yellow">ABOUT US</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/assets/team-photo.jpg" // Replace with your actual image path
                alt="UWA Motorsport Team"
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg mb-6">
                UWA Motorsport is a project run entirely by students at the University of Western Australia. 
                The team consists of 55 students from a variety of faculties, including Engineering, Commerce, 
                Economics and Law. Of the students, 21 are in their final year and will receive academic 
                credit for their contribution to the project.
              </p>
              <p className="text-lg">
                The car is a small, open wheel formula style racecar designed for the weekend autocross market. 
                The rules and restrictions of the competition are designed to challenge the knowledge, 
                creativity and imagination of the students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-motorsport-yellow">OUR HISTORY</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-motorsport-yellow">2001 - The Beginning</h3>
              <p className="text-lg">
                2001 saw the birth of UWA Motorsport. After a year of much hard work, the team was rewarded 
                with 4th place among the Australian competitors in the Formula SAE competition - a great 
                result for a first year team.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-motorsport-yellow">2002 - Building on Success</h3>
              <p className="text-lg">
                In 2002, the team is committed to building upon its success. This will involve a progression 
                to more professional design and manufacturing techniques. Reorganization of the team has 
                already taken place and work for the 2002 competition has begun.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-900 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-motorsport-yellow">Our Vision</h3>
            <p className="text-lg">
              In the long term, UWA Motorsport intends to develop cutting edge engineering technology coupled 
              with advanced project management, marketing and financial administration techniques. The team 
              aims to establish a solid profile and increase awareness among the student body and wider community.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-motorsport-yellow">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-motorsport-yellow">UWA MOTORSPORT</h3>
              <p className="mt-2">University of Western Australia</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-motorsport-yellow transition">Instagram</a>
              <a href="#" className="hover:text-motorsport-yellow transition">Facebook</a>
              <a href="#" className="hover:text-motorsport-yellow transition">LinkedIn</a>
              <a href="#" className="hover:text-motorsport-yellow transition">YouTube</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} UWA Motorsport. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}