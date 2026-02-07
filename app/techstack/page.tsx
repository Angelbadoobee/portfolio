import { RiTailwindCssFill } from "react-icons/ri";

export default function TechStack() {
  const techCategories = [
    {
      category: 'Design & UX Tools',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Canva'],
    },
    {
      category: 'Web Development',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'React', 'PHP', 'WordPress', 'TypeScript', 'TailwindCss'],
    },
    {
      category: 'Programming Languages',
      skills: ['C++', 'Java', 'Python'],
    },
    {
      category: 'Frameworks & Tools',
      skills: ['VS Code', 'Node.js', 'React.js', 'Flask', 'Git/GitLab', 'Jira', 'Docker'],
    },
    {
      category: 'Design Principles',
      skills: [
        'Responsive Design',
        'Accessibility (WCAG)',
        'User Flows',
        'Wireframing',
        'Prototyping',
        'Usability Testing',
      ],
    },
    {
      category: 'Data Analytics',
      skills: ['Python', 'Tableau', 'Power BI', 'SQL'],
    },
    {
      category: 'Database & Backend',
      skills: ['MySQL', 'SQLite', 'Firebase'],
    },
    {
      category: 'Other',
      skills: ['Microsoft Office Suite'],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 fade-in">
          <h1 className="font-amatic text-6xl md:text-8xl font-bold text-purple-royal dark:text-gold">
            Tech Stack
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Tools and technologies I work with
          </p>
        </div>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={category.category}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-purple-royal/20 hover:border-gold/50 transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="font-amatic text-3xl font-bold text-purple-royal dark:text-gold mb-6">
                {category.category}
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-badge text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-br from-purple-royal/10 to-gold/10 dark:from-purple-royal/20 dark:to-gold/20 rounded-2xl p-8 md:p-12 border border-purple-royal/30 dark:border-gold/30 fade-in">
          <h2 className="font-amatic text-4xl font-bold text-purple-royal dark:text-gold mb-4">
            Continuous Learning
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I recently took a liking to data analytics and have been working with Python, Tableau, 
            Power BI, and SQL. You'll see this reflected in some of my projects. I'm always eager 
            to learn new technologies and expand my skill set to tackle diverse challenges in web 
            development, design, and data analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
