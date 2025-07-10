import { motion } from 'framer-motion';
import { useState } from 'react';
import { VscVscode } from 'react-icons/vsc';
const skillCategories = [
  {
    title: 'Frontend',
    seeMoreCount: 2,
    skills: [
      {
        name: 'React',
        percentage: 85,
        level: 'Expert Level',
        description: 'Advanced proficiency',
        icon: 'react-native',
        color: 'from-blue-500 to-purple-500',
      },
      {
        name: 'JavaScript',
        percentage: 90,
        level: 'Expert Level',
        description: 'Master level expertise',
        icon: 'javascript',
        color: 'from-yellow-400 to-yellow-600',
      },
      {
        name: 'Tailwind CSS',
        percentage: 88,
        level: 'Expert Level',
        description: 'Advanced proficiency',
        icon: 'tailwindcss',
        color: 'from-cyan-400 to-blue-500',
      },
      {
        name: 'Bootstrap',
        percentage: 80,
        level: 'Expert Level',
        description: 'Strong layout knowledge',
        icon: 'bootstrap',
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'HTML/CSS',
        percentage: 95,
        level: 'Expert Level',
        description: 'Solid semantic markup skills',
        icon: 'html-5',
        color: 'from-orange-500 to-red-500',
      },
    ],
  },
  {
    title: 'Backend',
    seeMoreCount: 2,
    skills: [
      {
        name: 'Node.js',
        percentage: 80,
        level: 'Expert Level',
        description: 'Advanced proficiency',
        icon: 'nodejs',
        color: 'from-green-400 to-lime-500',
      },
      {
        name: 'Express.js',
        percentage: 75,
        level: 'Expert Level',
        description: 'Strong working knowledge',
        icon: 'express',
        color: 'from-gray-400 to-gray-600',
      },
      {
        name: 'MongoDB',
        percentage: 70,
        level: 'Expert Level',
        description: 'Strong working knowledge',
        icon: 'mongodb',
        color: 'from-green-500 to-emerald-600',
      },
      {
        name: 'MySQL',
        percentage: 72,
        level: 'Advanced',
        description: 'Relational DB experience',
        icon: 'mysql-logo',
        color: 'from-blue-600 to-blue-400',
      },
    ],
  },
  {
    title: 'Tools & Others',
    seeMoreCount: 3,
    skills: [
      {
        name: 'VS Code',
        percentage: 95,
        level: 'Expert Level',
        description: 'Master level expertise',
        icon: 'visual-studio-code-2019',
        color: 'from-indigo-400 to-indigo-600',
      },
      {
        name: 'Git',
        percentage: 78,
        level: 'Expert Level',
        description: 'Strong working knowledge',
        icon: 'git',
        color: 'from-red-400 to-red-600',
      },
      {
        name: 'Coursera AI',
        percentage: 85,
        level: 'Expert Level',
        description: 'Advanced proficiency',
        icon: 'ai',
        color: 'from-pink-500 to-purple-600',
      },
      {
        name: 'Figma',
        percentage: 75,
        level: 'Intermediate',
        description: 'UI/UX design collaboration',
        icon: 'figma',
        color: 'from-pink-400 to-orange-400',
      },
    ],
  },
];

const MySkills = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = title => {
    setExpanded(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="font-[sora] min-h-screen text-white py-12 px-6" id='skill'>
      <div className="text-center mb-12">
        <motion.span
          className="text-xs font-semibold bg-gray-800 px-3 py-1 rounded-full mb-2 inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Technologies I Master
        </motion.span>
        <motion.h2
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          My Technical Skills & Expertise
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skillCategories.map((cat, i) => {
          const visibleSkills = expanded[cat.title]
            ? cat.skills
            : cat.skills.slice(0, 3);

          return (
            <motion.div
              key={i}
              className="bg-[#111] rounded-xl p-6 shadow-xl flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl text-blue-300 font-semibold mb-6 text-center">
                {cat.title}
              </h3>
              {visibleSkills.map((skill, j) => (
                <div key={j} className="mb-5 bg-[#1a1a1a] p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://img.icons8.com/color/24/${skill.icon}.png`}
                        alt={skill.name}
                        className="w-5 h-5"
                      />
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {skill.description}
                  </p>
                </div>
              ))}
              <button
                onClick={() => toggleExpand(cat.title)}
                className="mt-auto bg-purple-800 hover:bg-purple-600 text-white text-sm py-2 rounded-full"
              >
                {expanded[cat.title]
                  ? 'See Less'
                  : `See More (+${cat.seeMoreCount})`}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MySkills;
