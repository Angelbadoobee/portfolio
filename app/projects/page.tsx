import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  
  const projects = [
    {
      title: 'My Personal Portfolio',
      description: 'This website you\'re on of course!',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'App Router'],
      url: 'https://tahshonholmes.vercel.app/', 
      imageUrl: '/images/PortfolioSite.png', 
    },
    {
      title: 'Local Baker Commercial Website',
      description: 'A responsive, single page bakery website built for a local bakery in the 757 southeastern Virginia. Built with React to showcase their products, their story, and contact information in a clean approachable layout. Emphasizes clarity, visual appeal, and easy navigation to reflect a small business that is focused on handcrafted baked goods.',
      techStack: ['Next.js', 'HTML', 'CSS', 'React.js'],
      url: 'https://sweetsonias.netlify.app/', 
      imageUrl: '/images/CakeSite.png', 
    },    
    {
      title: 'Spotify Behavioral Analytics Dashboard',
      description: 'Built a privacy-first analytics dashboard that transforms Spotify Extended Streaming History JSON files into behaviorallistening insights. Engineered a client-side data pipeline supporting multi-file uploads, session merging, and feature extraction (repeat rates, genre diversity entropy, artist loyalty). Integrated Spotify Web API enrichment with intelligent fallbacks to classify listener archetypes and visualize genre evolution, heatmaps, and geographic artist trends. Designed interactive, image-rich dashboards using Recharts and map visualizations for exploratory analysis.',
      techStack: ['Next.js', 'TypeScript', 'React', 'Recharts', 'Spotify Web API'],
      url: 'https://angelsspotifywrapped.vercel.app/', 
      imageUrl: '/images/SpotiSite.png', 
    }, 
    {
      title: 'Smith Tech - Old Dominion Center for Education Innovation and Opportunity',
      description: 'SmithTech School of Computer Science, Innovation & Design is dedicated to seamlessly integrating computer science into the curriculum through a human-centered design thinking framework. This collaborative initiative between Chesapeake City Public Schools (CPS) and Old Dominion University (ODU) emphasizes the importance of early academic preparation for underrepresented students in the technology talent pipeline.',
      techStack: ['WordPress', 'HTML', 'CSS', 'CDN'],
      url: 'https://smithtech.oduceio.org/', 
      imageUrl: '/images/SmithTechSite.png', 
    },
    {
      title: 'MEESA - Old Dominion Center for Education Innovation and Opportunity',
      description: 'The Maritime Engineering and Environmental Studies Academy (MEESA) is a specialized lab school focused on preparing students for successful futures in the maritime industry through hands-on, experiential learning. By integrating STEM concepts with Career and Technical Education, the Academy provides a dynamic and engaging learning environment where students can explore both traditional and emerging maritime careers. Through partnerships with local industries, students have access to internships, job shadowing opportunities, and cutting-edge resources that equip them with the skills and knowledge needed for college and career success in the maritime field.',
      techStack: ['WordPress', 'HTML', 'CSS', 'CDN'],
      url: 'https://meesa.oduceio.org/', 
      imageUrl: '/images/MEESASite.png', 
    },
    {
      title: 'SABTW - Old Dominion Center for Education Innovation and Opportunity',
      description: 'To cultivate a generation of productive young citizens who are prepared for the world with awareness, creative capacity, understanding, skills, and knowledge needed for success throughout their educational experiences, college and STEM careers, contributing to societal advancement and to the narrowing of educational disparities.',
      techStack: ['WordPress', 'HTML', 'CSS', 'CDN'],
      url: 'https://sabtw.oduceio.org/', 
      imageUrl: '/images/SABTWSite.png', 
    },
    {
      title: 'AAES - Old Dominion Center for Education Innovation and Opportunity',
      description: ' The Aerospace Academy of the Eastern Shore (AAES) is a College Partnership Lab School for students interested in aerospace-specific courses in engineering and data sciences throughout high school. Come launch the future of learning with us at the Aerospace Academy of the Eastern Shore!',
      techStack: ['WordPress', 'HTML', 'CSS', 'CDN'],
      url: 'https://aaes.oduceio.org/', 
      imageUrl: '/images/AAESSite.png', 
    },
    {
      title: 'Personal Music Analytics Dashboard',
      description: 'Built a fully client-side analytics platform to dissect personal music ratings, combining numeric scores, written reviews, and rich metadata to explore listening behavior beyond standard streaming metrics. Designed interactive visualizations including genre heatmaps, demographic comparisons, geographic origin maps, sentiment–rating gap analyses, and time-based rating trends using 	Plotly.js. Engineered custom parsing and aggregation logic to analyze subjective bias, expectation mismatches, rating consistency, and hidden preferences across genres, languages, and 	artist attributes. Implemented lightweight sentiment analysis on free-text reviews to surface discrepancies between emotional tone and numerical ratings, treating subjectivity as a first-	class data signal. Developed a Spotify-inspired, multi-page UI with dynamic uploads, interactive charts, downloadable reports, and responsive layouts, emphasizing exploratory analysis over 	recommendation algorithms. Ensured privacy-first design by processing all CSV data locally in-browser with zero backend or external API dependencies.', 
      techStack: ['JavaScript', 'HTML', 'CSS', 'Plotly.js', 'CSV/Excel'],
      url: 'https://angelbadoobee.github.io/Playlist-Rating-Analysis/', 
      imageUrl: '/images/SpotifySite.png', 
    },
    {
      title: 'Interactive Rubik\'s Cube Dashboard',
      description: ' Engineered a neon-themed, client-side dashboard that transforms raw solve data into actionable performance insights. Visualized trends with live charts, rolling averages, session comparisons, and heatmaps, highlighting consistency, improvement, and outliers. Built dynamic filters for cube type, date ranges, and sessions, letting users explore their solving patterns at a glance. Integrated automated analytics that generate personalized insights on peak performance, trajectory, and skill plateaus. Designed a responsive, cyberpunk-inspired UI with hover tooltips and glowing stats, making data exploration both intuitive and visually.',
      techStack: ['JavaScript', 'HTML', 'CSS', 'Plotly.js', 'PapaParse', 'CSV/Excel'],
      url: 'https://angelbadoobee.github.io/Rubik-s-Cube-Analysis/', 
      imageUrl: '/images/CubeAnalyticsSite.png', 
    },
    {
      title: 'Keyboard-Driven Speedcube Timer',
      description: ' Built a competition-style Rubik’s Cube timer with spacebar controls, visual ready/steady/go states, and millisecond-accurate timing modeled after official speedcubing standards. Implemented dynamic scramble generation for 2×2 through 7×7 cubes, ensuring realistic, non-redundant move sequences across multiple cube types. Engineered a session analytics system that computes best/worst times, averages, medians, standard deviation, Ao5, Ao12, and best-of subsets in real time. Added solve management features including +2 and DNF penalties, individual solve deletion, full session resets, and exportable TXT session logs. Designed a neon, nerd-forward Rubik’s Cube aesthetic with dark mode support, animated UI states, and responsive layout for extended practice sessions. Focused on low-latency interaction, clear visual feedback, and data transparency to mirror real-world speedcubing workflows while remaining fully client-side.',
      techStack: ['Vanilla JavaScript', 'HTML', 'CSS'],
      url: 'https://angelbadoobee.github.io/Rubik-s-Cube-Timer/', 
      imageUrl: '/images/TimerSite.png', 
    },
    {
      title: 'Reading Analytics Dashboard',
      description: 'Built a client-side analytics dashboard to ingest, process, and visualize personal reading data from CSV and Excel files. Implemented interactive charts and tables to analyze completion status, genre distribution, rating behavior, book length trends, and series-level performance. Designed dynamic filtering and aggregation logic to surface insights such as rating consistency across series and correlations between book length and user ratings. Developed a responsive, tab-based UI with hover tooltips and contextual summaries to support exploratory data analysis.',
      techStack: ['JavaScript', 'HTML', 'CSS', 'Chart.js', 'PapaParse', 'CSV/Excel'],
      url: 'https://angelbadoobee.github.io/Personal-Library-Project/', 
      imageUrl: '/images/BookSite.png', 
    },
    {
      title: 'Music Data Analysis & Visualization',
      description: 'Developed a browser-based analytics tool that transforms raw Spotify library exports into a visual timeline of personal music taste. Analyzed artist trends, era clusters, and library growth patterns to surface how childhood media and internet culture shaped listening habits. Wrote custom client-side parsing and aggregation logic to process unstructured JSON data without a backend or framework. Prioritized accessibility, performance, and clarity by using vanilla JavaScript and Chart.js over framework abstractions',
      techStack: ['JavaScript', 'HTML', 'CSS', 'Chart.js'],
      url: 'https://angelbadoobee.github.io/Music-Taste-Timeline/', 
      imageUrl: '/images/MusicSite.png', 
    },

  ];
  

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 fade-in">
          <h1 className="font-amatic text-6xl md:text-8xl font-bold text-purple-royal dark:text-gold">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A showcase of my work and passion projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
