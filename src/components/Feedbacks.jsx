import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { articles } from "../constants"; // Assuming you have an articles array in constants
import mediumLogo from "../assets/medium-logo.png"; // Import the Medium logo

const ArticleCard = ({
  index,
  title,
  excerpt,
  author,
  image,
  readMoreLink,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[350px] w-full flex flex-col justify-between glassmorphic'
  >
    <div className='flex flex-col h-full'> {/* Set height to full */}
      <img
        src={image}
        alt={`article_image-${title}`}
        className='w-full h-60 rounded-md object-cover'
      />
      <div className='flex flex-col flex-grow mt-4'> {/* Use flex-grow to take remaining space */}
        <h3 className='text-white font-semibold text-[20px]'>{title}</h3>
        <p className='text-white font-light tracking-wider text-[16px] mt-2 h-[100px] overflow-hidden'> {/* Set fixed height and overflow-hidden */}
          {excerpt}
        </p>
      </div>
    </div>

    <div className='mt-4 flex justify-between items-center w-full'>
      <a href={readMoreLink} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>
        Read More
      </a>
    </div>
  </motion.div>
);

const Articles = () => {
  return (
    <div className="mt-12 mb-8 bg-black-100 rounded-[20px]"> {/* Added mb-8 */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Latest Writing</p>
          <div className="flex items-center justify-between">
            <h2 className={styles.sectionHeadText}>Articles.</h2>
            <a href="https://medium.com/@blackdoffly" target="_blank" rel="noopener noreferrer">
              <img src={mediumLogo} alt="Medium Logo" className="w-12 h-12" />
            </a>
          </div>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}> {/* Removed justify-center */}
        {articles.map((article, index) => (
          <ArticleCard key={article.title} index={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Articles, "");