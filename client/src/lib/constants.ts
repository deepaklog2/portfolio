import { ProjectType, BlogPostType, ExperienceType, EducationType, AwardType, SkillType } from './types';

// Skills
export const skills = {
  frontend: [
    { name: 'HTML5/CSS3', level: 92 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Vue.js', level: 75 },
    { name: 'Tailwind CSS', level: 88 },
  ],
  mobile: [
    { name: 'React Native', level: 78 },
    { name: 'Flutter', level: 72 },
  ],
  backend: [
    { name: 'Node.js', level: 83 },
    { name: 'Python', level: 90 },
    { name: 'Express.js', level: 81 },
    { name: 'MongoDB', level: 75 },
  ],
  ai: [
    { name: 'TensorFlow', level: 87 },
    { name: 'PyTorch', level: 80 },
    { name: 'NLP', level: 83 },
  ],
};

export const otherSkills = [
  'Git', 'Docker', 'AWS', 'Firebase', 'GraphQL', 'REST APIs', 
  'SQL', 'TypeScript', 'Figma', 'UI/UX Design', 'Responsive Design', 'Agile/Scrum'
];

// Projects
export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'AeroGenius',
    description: 'A powerful AI-driven web application designed to enhance human life across multiple sectors through intelligent automation and insights.',
    image: 'https://media-hosting.imagekit.io/34a7cc807dde4276/aerogenuis.png?Expires=1838016909&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=llmRli9ydCcCrpRbyPLoo2up5Dr4bEft4t6O3a-0ho0GAHETcxLnp6mXssY8vuEKhKGXoRsVtbiDLJq1TsBZexpHuzrZ4HGXJBTAnYEbbFc-7wFkxWSH0lz79uhsPC-Qiizb1eyv2DrQwnDPW6Eapz~li-sRbrdMDG6kUZPwMHFCF6~J356GQEYFrQZrJfA8n2eN~Y5oB7IJ6i9SpMtjleWIV6iECV-K4cwWhilsbafZOAbp5w0727mhuhni~xaMGnMULp7naE6HYJMqIcn6US9y~m~pCl~0ouDa52zegO0d75-VyDHgxY-1Eg9jCK0QgYXINLwzctAnZvpyKIRNDA__',
    categories: ['web', 'ai'],
    technologies: ['AI', 'Web Development', 'Machine Learning', 'Cloud'],
    detailsLink: 'https://youtu.be/vjOxwr8FeBI?si=m0ULIeB5uHZa9KY0',
    githubLink: 'https://github.com/deepaklog2?tab=repositories',
    liveLink: 'https://youtu.be/vjOxwr8FeBI?si=m0ULIeB5uHZa9KY0'
  },
  {
    id: 2,
    title: 'Floctet Technologies',
    description: 'A freelancing platform offering affordable IT services including web development, mobile apps, and security audits with a focus on quality and client satisfaction.',
    image: 'https://media-hosting.imagekit.io/9cda140431664550/logo.jpg?Expires=1838016909&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EEWBYndIA0TjRe3Kls~RaZb2~TR0~Prlm2JzkY8thZ0t9nvE6UEVOlWiV8dlIwPygXQ87zVT7f6x9y3bqE6PO1xXuSFEArewro6frCGFuPNZAtfg1RfBGDKJ9xLiOKOjclPB5MkSplOgE97JkT6uSDVa3yQ3SIIVcmKLkLtcd3ocE4MvBL1-aRlbl~bR1V0nU05BakzarjZBB16hqR2OZnGFLWY9Ez4Md0arl29wz9kaWhqzfUxAdytUuFtO7MMCpMzs3Cgpd8JqKY3tl04mJiAJaPRta3dY6Pc1gw9pd~7WWi8xpATkdKs9uMJr2vp6xNiiHqTwyFKblfatDSajvA__',
    categories: ['web', 'mobile', 'security'],
    technologies: ['Web Development', 'Mobile Apps', 'Cybersecurity', 'Full-Stack'],
    detailsLink: 'https://floctet.tech',
    githubLink: 'https://github.com/deepaklog2?tab=repositories',
    liveLink: 'https://floctet.tech'
  },
  {
    id: 3,
    title: 'Doctor Availability System',
    description: 'A comprehensive healthcare platform that streamlines doctor-patient interactions through efficient appointment scheduling and availability management.',
    image: 'https://media-hosting.imagekit.io/e6ea8aac5fab4667/kamal_amma2-removebg-preview.png?Expires=1837628433&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aemohFPS0iZg7qhEZvO-4z0EZ6bc6YKpZn7dBmCZfJx4We3iRU2krBiMxY-H5Fgg3Bvzqhw9pNCfvZS2AdKDJEot3wfEfZiJOUtN~DAIvOacs9Qh-A4H9TtNIeB8dIn544mDrWkVVuECPSzSZqsxct01cIekQlhbDwf8-FWFNWX3ZFWrkz4IAQbFezwyhAHctlre9a0V05nJdSfOY0LCz4JtvKo7M6AOh1qfGUT-Cx0SDcJNz~oRGF7i7bXouOkL9K3Q4oK-tKsrOUF5QFXzl2v4ImaEOqylIOwkzA0~iWuAEhgOqN~Zk4htNVaaJ3Qmt40aBGV1vxEhDP81mF9j8A__',
    categories: ['web', 'healthcare'],
    technologies: ['Web Development', 'Database', 'User Interface', 'Scheduling'],
    detailsLink: 'https://drive.google.com/file/d/1bjRYVAV3NJ-05RkqsafRwwCagVZDxaI2/view?usp=sharing',
    githubLink: 'https://github.com/deepaklog2?tab=repositories',
    liveLink: 'https://drive.google.com/file/d/1bjRYVAV3NJ-05RkqsafRwwCagVZDxaI2/view?usp=sharing'
  },
  {
    id: 4,
    title: 'AI Finance Tracker',
    description: 'An intelligent financial management tool that leverages AI for trend analysis, expense tracking, and personalized financial insights and recommendations.',
    image: 'https://media-hosting.imagekit.io/ee9269cd565648aa/generated-icon.png?Expires=1838017306&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ApZoy2mdEpyi3iaZgfTi0Bryybs6jn5cI0kEXnDRFPg~3Lfvfs4ZouzHZOzZ3ReNAOkniTWsEQ5Qju9FKlcD-4t--VTZZQzm1LoFOicJILsqwS7TFY9peQerAeBUJq~gnIXNbcZMPxvlGwoSTag6JBnlqw0nVoKdmjW8pEZfh1BxQZI4qJ5q7SXNZ~5IJhPmGnRRyP658-~IxLZLeLFEpXxN8-NvvG3hBC5cinKmXh35WJgXXSAEieasdR0-vgE93VPAEjLKUITpkvfyOnMy1LeWTmkOKUQYIkjgXKSQ3UrIs-qroFds50yRNthAI2FU32N32yEMTNW6-sbkdk4JWQ__',
    categories: ['ai', 'finance', 'web'],
    technologies: ['Streamlit', 'Fetch.ai', 'Pathway', 'AI Models'],
    detailsLink: 'https://www.youtube.com/watch?v=vjOxwr8FeBI',
    githubLink: 'https://github.com/deepaklog2/FINANCEFLOW-FINANCE-TRACKER-TEAM-FLICKS-IIT-MANDI-HACKATHON-.git',
    liveLink: 'https://youtu.be/WTv71_Aq6Aw'
  },
  {
    id: 5,
    title: 'Flick It',
    description: 'A revolutionary all-in-one AI platform integrating services across healthcare, agriculture, environment, entertainment, research, and more for comprehensive smart solutions.',
    image: 'https://media-hosting.imagekit.io/facc123f06d9405f/WhatsApp%20Image%202025-03-19%20at%2021.39.15_77a5d8b1.jpg?Expires=1838017357&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EKUBtmzfjs~7O6XqK3zkgA4Tlo8hAap5UJ69GQw9kmfbKolexWE8Pj9ulNPBizK36ZcwRVsk3NgI5c5wvx1z1em5kg2zMkdCapS8IN7av9QgWgHdNJN0zGeyxeV9u-YLADpwPnlA0cuoW7yaXq~Ok8U328-g5yIfzAnoIMXlpjQbBX3Gau3BbWG1kVvyXHafKIB3pSztROz5c9mdsT2Jw5tzfEeUh-B299cwKce2aX1uAS-jKS3xLfYVLUYwJyAyLimCpE906qEd6SguTY3Dp5O71arxkMO8eRCuC5sy-WkhcOhKM8ifjYyvJ0InyFFt3jAd7ECCi4iK0q3C-pMsHQ__',
    categories: ['ai', 'web', 'healthcare'],
    technologies: ['AI', 'Cloud', 'Data Analysis', 'Web Development'],
    detailsLink: 'https://drive.google.com/file/d/1QQotWRh9euMXK3nLj11SYvigLFES9AOq/view?usp=sharing',
    githubLink: 'https://github.com/deepakraj-sys/flick-it-web-app.git',
    liveLink: 'https://drive.google.com/file/d/1QQotWRh9euMXK3nLj11SYvigLFES9AOq/view?usp=sharing'
  },
  {
    id: 6,
    title: 'Restaurant Website',
    description: 'An elegant, user-friendly website for restaurants featuring online menu, booking system, and promotional content with stunning visuals and seamless navigation.',
    image: 'https://media-hosting.imagekit.io/eac48ca7da4743d2/WhatsApp%20Image%202024-10-04%20at%203.59.32%20PM.jpeg?Expires=1838017403&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GJDuitxqIWqmSkGrWFu2aX-GacPFel~2PGYBzIejlGeXOkpbM0cv65AGmTUpQfB973MgHY5tproSgeO0ffblDQOeShipowAvSpbt85hbnIerRU0lhluzNlbEF-Hj5BrPY-6UqdlzD4iUCIW6gqVqcNCyjXjNxgYPekCa6mIW-ZO4E3HRMFsrb1R3FYkp29u4yIL9di1iNjwSOy4AKWCoNvOFsM8elsCRH~pV7hkz~5Lprh5Q8g2PTgA8bT~sqeKZvOP3OAD8KdyScQoJzJFs3NfyICrjmtyP3i9CiQHVDCuytnrNkG67BlMIur6ThjE27scSf6yGSdlJFdySR0L6rA__',
    categories: ['web'],
    technologies: ['Web Design', 'Responsive Design', 'UI/UX'],
    detailsLink: 'https://drive.google.com/file/d/1D6Hum2uA41fWpAdI7tkDcgHjC7akaj4p/view?usp=sharing',
    githubLink: 'https://github.com/deepaklog2/likeablez',
    liveLink: 'https://www.instagram.com/likeablezindia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
  },
  {
    id: 7,
    title: 'HireGenius',
    description: 'An advanced recruitment platform using AI to match candidates with ideal job opportunities through smart resume analysis and personalized recommendations.',
    image: 'https://media-hosting.imagekit.io/44df15d4511f4882/generated-icon.png?Expires=1838017474&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Nco8TGWdKU7o08TXK8zpuZEjhzv4oDcXfZ-GO9x-6C7z~6Tik3wHgu-6hvto8lptrGeUU67pA0hITTe6UB0vH5dUxy7ZZIxeQ5k44NyPDL-ypD2tUV~whbjiiwmcpQLr5dLURscg6XV0TjLgs4QijeYpAiAVw8vW~oetGAU7PCHnfXctoKMkF~lRaExxG4bS0UT9LGOPzshvYdI47zEIxZdyMjA9Lc2B-EXfcMnNR~dtW7iUITSOlcvNKui48Qza4sXruesdifKesQY7n6k0TlqdWWYwMnTNkASxgZdl7NKJHxldN64ioVL0BaRg7Nv-IXvsbAvdqQcorSPeZRVrnw__',
    categories: ['web', 'ai'],
    technologies: ['AI', 'Web Development', 'Machine Learning', 'Natural Language Processing'],
    detailsLink: 'https://drive.google.com/file/d/1Vj8qyhssyPJ-o_Lkwg57AGYJrzTnV_Wg/view?usp=sharing',
    githubLink: 'https://github.com/deepaklog2?tab=repositories',
    liveLink: 'https://drive.google.com/file/d/1Vj8qyhssyPJ-o_Lkwg57AGYJrzTnV_Wg/view?usp=sharing'
  },
  {
    id: 8,
    title: 'Diabetes Prediction App',
    description: 'A healthcare application that uses machine learning to predict diabetes risk and provide tailored medication recommendations based on patient data.',
    image: 'https://miro.medium.com/v2/resize:fit:1200/0*LTPHl30jk03MK6GS.png',
    categories: ['web', 'healthcare', 'ai'],
    technologies: ['Streamlit', 'Machine Learning', 'Python', 'Healthcare'],
    detailsLink: 'https://makeitsimple.streamlit.app/',
    githubLink: 'https://github.com/deepaklog2/makeitsimple.git',
    liveLink: 'https://makeitsimple.streamlit.app/'
  }
];

// Blog Posts
export const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: 'The Making of HireGenius: AI for Smarter Recruitment',
    excerpt: 'How we built an AI system An advanced recruitment platform using AI to match candidates with ideal job opportunities through smart resume analysis and personalized recommendations.',
    image: 'https://media-hosting.imagekit.io/44df15d4511f4882/generated-icon.png?Expires=1838017474&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Nco8TGWdKU7o08TXK8zpuZEjhzv4oDcXfZ-GO9x-6C7z~6Tik3wHgu-6hvto8lptrGeUU67pA0hITTe6UB0vH5dUxy7ZZIxeQ5k44NyPDL-ypD2tUV~whbjiiwmcpQLr5dLURscg6XV0TjLgs4QijeYpAiAVw8vW~oetGAU7PCHnfXctoKMkF~lRaExxG4bS0UT9LGOPzshvYdI47zEIxZdyMjA9Lc2B-EXfcMnNR~dtW7iUITSOlcvNKui48Qza4sXruesdifKesQY7n6k0TlqdWWYwMnTNkASxgZdl7NKJHxldN64ioVL0BaRg7Nv-IXvsbAvdqQcorSPeZRVrnw__',
    date: 'March 25, 2025',
    category: 'AI & Job Sector',
    link: '#aerogenius-blog'
  },
  {
    id: 2,
    title: 'Revolutionizing Healthcare: My Diabetes Prediction App',
    excerpt: 'The journey of creating a machine learning application that predicts diabetes risk with 92% accuracy and provides personalized recommendations. A healthcare application that uses machine learning to predict diabetes risk and provide tailored medication recommendations based on patient data.',
    image: 'https://miro.medium.com/v2/resize:fit:1200/0*LTPHl30jk03MK6GS.png',
    date: 'August 20, 2024',
    category: 'Healthcare & AI & Python',
    link: '#diabetes-prediction-blog'
  },
  {
    id: 3,
    title: 'AeroGenius: AI-Powered Web App',
    excerpt: 'A powerful AI-driven web application designed to enhance human life across multiple sectors through intelligent automation and insights.',
    image: 'https://media-hosting.imagekit.io/34a7cc807dde4276/aerogenuis.png?Expires=1838016909&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=llmRli9ydCcCrpRbyPLoo2up5Dr4bEft4t6O3a-0ho0GAHETcxLnp6mXssY8vuEKhKGXoRsVtbiDLJq1TsBZexpHuzrZ4HGXJBTAnYEbbFc-7wFkxWSH0lz79uhsPC-Qiizb1eyv2DrQwnDPW6Eapz~li-sRbrdMDG6kUZPwMHFCF6~J356GQEYFrQZrJfA8n2eN~Y5oB7IJ6i9SpMtjleWIV6iECV-K4cwWhilsbafZOAbp5w0727mhuhni~xaMGnMULp7naE6HYJMqIcn6US9y~m~pCl~0ouDa52zegO0d75-VyDHgxY-1Eg9jCK0QgYXINLwzctAnZvpyKIRNDA__',
    date: 'January 15, 2024',
    category: 'AI & Career & Environment & Sustainability',
    link: '#hiregenius-blog'
  },
  {
    id: 4,
    title: 'AI Finance Tracker: Building Smart Financial Management',
    excerpt: 'How I developed an intuitive expense tracking application that uses AI to analyze spending patterns and provide personalized financial advice.',
    image: 'https://media-hosting.imagekit.io/ee9269cd565648aa/generated-icon.png?Expires=1838017306&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ApZoy2mdEpyi3iaZgfTi0Bryybs6jn5cI0kEXnDRFPg~3Lfvfs4ZouzHZOzZ3ReNAOkniTWsEQ5Qju9FKlcD-4t--VTZZQzm1LoFOicJILsqwS7TFY9peQerAeBUJq~gnIXNbcZMPxvlGwoSTag6JBnlqw0nVoKdmjW8pEZfh1BxQZI4qJ5q7SXNZ~5IJhPmGnRRyP658-~IxLZLeLFEpXxN8-NvvG3hBC5cinKmXh35WJgXXSAEieasdR0-vgE93VPAEjLKUITpkvfyOnMy1LeWTmkOKUQYIkjgXKSQ3UrIs-qroFds50yRNthAI2FU32N32yEMTNW6-sbkdk4JWQ__',
    date: 'March 31 2025',
    category: 'Finance & AI',
    link: '#finance-tracker-blog'
  },
  {
    id: 5,
    title: 'Creating a Doctor Availability System.',
    excerpt: 'A comprehensive healthcare platform that streamlines doctor-patient interactions through efficient appointment scheduling and availability management.',
    image: 'https://media-hosting.imagekit.io/e6ea8aac5fab4667/kamal_amma2-removebg-preview.png?Expires=1837628433&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aemohFPS0iZg7qhEZvO-4z0EZ6bc6YKpZn7dBmCZfJx4We3iRU2krBiMxY-H5Fgg3Bvzqhw9pNCfvZS2AdKDJEot3wfEfZiJOUtN~DAIvOacs9Qh-A4H9TtNIeB8dIn544mDrWkVVuECPSzSZqsxct01cIekQlhbDwf8-FWFNWX3ZFWrkz4IAQbFezwyhAHctlre9a0V05nJdSfOY0LCz4JtvKo7M6AOh1qfGUT-Cx0SDcJNz~oRGF7i7bXouOkL9K3Q4oK-tKsrOUF5QFXzl2v4ImaEOqylIOwkzA0~iWuAEhgOqN~Zk4htNVaaJ3Qmt40aBGV1vxEhDP81mF9j8A__',
    date: 'Maarch 20, 2025',
    category: 'Healthcare & Website',
    link: '#doctor-availability-blog'
  },
  {
    id: 6,
    title: 'Flick It: Building a Movie Recommendation Platform',
    excerpt: 'A revolutionary all-in-one AI platform integrating services across healthcare, agriculture, environment, entertainment, research, and more for comprehensive smart solutions, upgraded version of AeroGenius.',
    image: 'https://media-hosting.imagekit.io/facc123f06d9405f/WhatsApp%20Image%202025-03-19%20at%2021.39.15_77a5d8b1.jpg?Expires=1838017357&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EKUBtmzfjs~7O6XqK3zkgA4Tlo8hAap5UJ69GQw9kmfbKolexWE8Pj9ulNPBizK36ZcwRVsk3NgI5c5wvx1z1em5kg2zMkdCapS8IN7av9QgWgHdNJN0zGeyxeV9u-YLADpwPnlA0cuoW7yaXq~Ok8U328-g5yIfzAnoIMXlpjQbBX3Gau3BbWG1kVvyXHafKIB3pSztROz5c9mdsT2Jw5tzfEeUh-B299cwKce2aX1uAS-jKS3xLfYVLUYwJyAyLimCpE906qEd6SguTY3Dp5O71arxkMO8eRCuC5sy-WkhcOhKM8ifjYyvJ0InyFFt3jAd7ECCi4iK0q3C-pMsHQ__',
    date: 'March 15, 2025',
    category: 'Entertainment & AI & Web App & All-in-one-sector',
    link: '#flick-it-blog'
  }
];

// Experience
export const experiences: ExperienceType[] = [
  {
    id: 1,
    title: 'School Jarvis Team Coordinator & Technical Lead',
    period: '2024 - 2025',
    description: 'Spearheaded various technical projects and team operations, leading development initiatives and coordinating cross-functional teams.'
  },
  {
    id: 2,
    title: 'School Darvis Team',
    period: '2024 - 2025',
    description: 'Managed the school website, implemented new features, and ensured smooth performance and security updates.'
  },
  {
    id: 3,
    title: 'Founder, Flocktet Technologies',
    period: 'Present',
    description: 'Founded and led a tech company offering affordable IT services, including web development, mobile apps, and digital marketing solutions.',
    link: 'https://www.floctet.tech/',
    linkText: 'www.floctet.tech'
  }
];

// Education
export const education: EducationType[] = [
  {
    id: 1,
    degree: 'Class 12 (CBSE)',
    institution: 'DAV BOYS SENIOR SECONDARY SCHOOL, Gopalapuram',
    description: 'Graduation: 2025'
  },
  {
    id: 2,
    degree: 'Self-Taught Programming',
    institution: 'Started at age 13',
    description: 'Learned multiple programming languages, frameworks, and development methodologies through self-study and practical projects.'
  }
];

// Awards
export const awards: AwardType[] = [
  {
    id: 1,
    title: 'SV SCIENTIFICA\'24',
    description: '3rd Place In AI Development. Recognized for innovative AI solution for environmental applications, pushing the boundaries of what\'s possible with machine learning.',
    icon: 'leaf'
  },
  {
    id: 2,
    title: 'ATL TINKER FEST',
    description: '1st Place in AI App Development. Won first place at the prestigious competition conducted by Sneh International School for groundbreaking AI application.',
    icon: 'trophy'
  },
  {
    id: 7,
    title: 'IIT Mandi Hackathon - FrostHack 2025',
    description: 'Participated in AI intergrated Streamlit web app devlopment (Finance Tracker) competition, showcasing skills in Intergrating Fetech.ai and Pathway and development.',
    icon: 'graduation-cap'
  },
  {
    id: 8,
    title: 'NIT Hackathon - Roboweek 3.0 2025',
    description: 'Participated and qualified for final round in NIT Roboweek 3.0 for App development - AI intergrated ALL-IN-ONE WEB/MOBILE APP, FLICK-IT.',
    icon: 'trophy'
  },
  {
    id: 9,
    title: 'ITM GWALIOR SINGLETHON 2025',
    description: 'Participated and qualified for final round in ITM GWALIOR SINGLETHON 2025 for App development - AI intergrated AI RESUME SCREENING & JOB RELATED AI FEATURES INTERGRATED WEB/MOBILE APP, HIREGENIUS.',
    icon: 'trophy'
  },
  {
    id: 3,
    title: 'CODESSEY 24',
    description: '1st Prize In CodeFusion. Secured the top position in this competitive coding challenge, demonstrating technical excellence and problem-solving capabilities.',
    icon: 'code'
  },
  {
    id: 4,
    title: 'Culturals Hackathon',
    description: '3rd Place at Chettinad Vidyashram. Received recognition at this Chennai-based hackathon for innovative approach to solving real-world problems with technology.',
    icon: 'lightbulb'
  },
  {
    id: 5,
    title: 'Geek Out Trivia',
    description: '2nd Prize at Anna University. Runner-up in this competitive technical knowledge contest conducted by the Computer Department of Anna University, Chennai.',
    icon: 'graduation-cap'
  },
  {
    id: 6,
    title: 'Vidya Mandir Culturals',
    description: 'Won 2nd prize in App Development competition, showcasing skills in mobile application design and development.',
    icon: 'mobile'
  }
];
