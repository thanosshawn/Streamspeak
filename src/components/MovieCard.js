// components/MovieCard.jsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const MovieCard = ({ title, imageUrl, overview }) => {
  // Fallback if imageUrl is somehow null/undefined, though our mock data provides it.
  const placeholderImage = "public\images\imgplace.jpg";

  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-700/50 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(168, 85, 247, 0.4)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-60 w-full">
        <Image
          // No custom loader needed for full URLs
          src={imageUrl || placeholderImage}
          alt={title || 'Movie poster'}
          layout="fill"
          objectFit="cover"
           // Important: If using external URLs not configured in next.config.js,
           // you might need unoptimized={true} OR configure the domain.
           // For placeholder services, unoptimized is often easiest.
           // If using *local* images from /public, remove unoptimized.
           unoptimized={true}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-pink-300 mb-1 truncate">{title || 'Untitled'}</h3>
        {/* <p className="text-sm text-gray-400 line-clamp-2">{overview}</p> */}
      </div>
    </motion.div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string, // Now expects a full URL or path
  overview: PropTypes.string.isRequired,
};

export default MovieCard;