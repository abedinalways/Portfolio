import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'M.Sc. in Farm Structure and Environmental Engineering',
    institution:
      'Bangladesh Agricultural University (BAU), Mymensingh',
    year: '2017 - 2019',
    details: [
      'Completed advanced coursework in agricultural engineering with a focus on environmental sustainability.',
      'Conducted research on innovative farm structures and their impact on agricultural productivity.',
      'Developed expertise in modern irrigation systems, soil and water conservation, and smart farming technologies.',
      'Pursuing advanced studies in smart farming technologies and AI integration in agriculture.',
      'Research focus on sustainable agricultural engineering and modern irrigation systems.',
      'Involved in collaborative projects with faculty and industry experts on technology-driven farming.',
    ],
    badge: '📚',
  },
  {
    degree: 'B.Sc. in Agricultural Engineering & Technology',
    institution:
      'Bangladesh Agricultural University (BAU), Mymensingh',
    year: '2012-16',
    details: [
      'Graduated with strong academic performance and practical research experience.',
      'Focused on data analysis, technology integration, and sustainable agriculture solutions.',
      'Developed a solid foundation in analytical thinking, problem-solving, and engineering concepts.',
      'Participated in various workshops and seminars on agricultural technology and innovation.',
      'Engaged in hands-on projects related to farm machinery, irrigation systems, and environmental engineering',
      'Collaborated with peers and faculty on research projects aimed at improving agricultural practices.',
      
    ],
    badge: '🎓',
  },
];

const Education = () => {
  return (
    <section className=" text-white py-16 px-4 md:px-10 font-[sora]" id='education'>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-12 text-white bg-clip-text"
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-gray-400 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">
                  {edu.badge} {edu.degree}
                </h3>
                <span className="text-sm text-gray-400">{edu.year}</span>
              </div>
              <h4 className="text-md text-blue-400 mb-2">{edu.institution}</h4>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-300">
                {edu.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
