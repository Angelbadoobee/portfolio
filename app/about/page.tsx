import SocialLinks from '@/components/SocialLinks';

export default function About() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 fade-in">
          <h1 className="font-amatic text-6xl md:text-8xl font-bold text-purple-royal dark:text-gold">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            22 | Virginia Beach, VA | Computer Science Graduate
          </p>
        </div>

        {/* Bio Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-purple-royal/20 fade-in space-y-6">
          <h2 className="font-amatic text-4xl font-bold text-purple-royal dark:text-gold mb-4">
            My Journey
          </h2>
          
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Most people call me <span className="text-purple-royal dark:text-gold font-bold">Angel</span>, 
            and I'm a recent graduate from Virginia Commonwealth University where I earned my Bachelor's of Science 
            in Computer Science in 2024. Growing up poor in the 7 cities with a single mother, I always excelled 
            in schooling because I felt I had to. I also discovered I had autism which made some aspects of learning 
            and schooling easier, but the social aspects harder.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I grinded throughout all of grade school, middle school and high school and eventually got to college 
            where I got to hone my skills and receive excellent tutelage on how to think like a programmer. I also 
            learned how to come out of my shell and have fun with other people. Richmond is an amazing city with a 
            great music scene, EXCELLENT FOOD, and a diverse cast of people that I will remember and cherish always.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Fast forward to my position at ODU which gave me ample real world experience working as a professional 
            in the tech world. Now I'm honing my craft and looking for another job, ready to use my skills wherever 
            I'm needed.
          </p>
        </div>

        {/* Education Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-purple-royal/20 fade-in">
          <h2 className="font-amatic text-4xl font-bold text-purple-royal dark:text-gold mb-6">
            Education
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-purple-royal dark:text-gold">
                Virginia Commonwealth University
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Bachelor of Science in Computer Science • 2024
              </p>
            </div>

            <div className="pt-4">
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Modern Web Development',
                  'UI/UX Design',
                  'Software Engineering',
                  'Data Structures',
                  'Computer Systems',
                  'Files & Databases',
                  'Programming with C++',
                  'Theory of Computation',
                ].map((course) => (
                  <span key={course} className="tech-badge">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-purple-royal/20 fade-in">
          <h2 className="font-amatic text-4xl font-bold text-purple-royal dark:text-gold mb-6">
            Work Experience
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-purple-royal dark:text-gold">
                Interim Web Developer
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                Old Dominion University • 2025
              </p>
            </div>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">•</span>
                <span>Designed and maintained departmental websites to improve usability, accessibility, and responsiveness across devices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">•</span>
                <span>Produced wireframes and interface mockups to visualize layout updates and content changes for approval</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">•</span>
                <span>Collaborated with developers and stakeholders in Agile sprint cycles to implement and test new site features</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">•</span>
                <span>Conducted user testing and cross-browser QA to ensure consistent design performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">•</span>
                <span>Documented design standards, workflows, and deployment processes for long-term maintainability</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interests Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-purple-royal/20 fade-in">
          <h2 className="font-amatic text-4xl font-bold text-purple-royal dark:text-gold mb-6">
            Beyond Code
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Hobbies:</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Rubik\'s Cubes',
                  'Reading Books',
                  'Baking',
                  'Watching TV Shows',
                  'Taekwondo',
                  'Weightlifting',
                ].map((hobby) => (
                  <span key={hobby} className="px-4 py-2 bg-purple-royal/10 dark:bg-gold/10 text-purple-royal dark:text-gold rounded-full border border-purple-royal/30 dark:border-gold/30">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Favorite Media:</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Percy Jackson, Dragon Ball Z, Grimm, Cobra Kai, Miles Morales Spider-Man
              </p>
            </div>

            <div className="pt-4">
              <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                See some images of my hobbies below!
              </p>

              {/* Hobby Images Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: '/images/BadBunny.png', alt: 'Bad Bunny Rubik\'s Cube Mosaic' },
                  { src: '/images/LinManuel.png', alt: 'Lin Manuel Miranda Rubik\'s Cube Mosaic' },
                  { src: '/images/Emoji.png', alt: 'Emoji Rubik\'s Cube Mosaic' },
                  { src: '/images/BiscoffCake.png', alt: 'Biscoff Heart Cake' },
                  { src: '/images/TwilightCake.png', alt: 'Twilight Cake' },
                  { src: '/images/Flancocho.png', alt: 'Strawberry Shortcake FlanCocho' },
                  { src: '/images/Cookies.png', alt: 'Christmas Cookie Kits' },
                  { src: '/images/Books.png', alt: 'Bookshelves' },
                  { src: '/images/Shows.png', alt: 'TV Show Situation' },
                  { src: '/images/Rubiks.png', alt: 'Rubik\'s Cube Collection' },
                ].map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 fade-in">
          <h2 className="font-amatic text-4xl font-bold text-purple-royal dark:text-gold">
            Let's Connect
          </h2>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
