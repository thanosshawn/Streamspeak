// lib/mockData.js

// Let's define some mock movie/show data.
// Using full image URLs from a placeholder service for simplicity.
// Replace with your actual image paths if needed (e.g., '/images/poster1.jpg' if stored in public/images)

export const trendingItemsMock = [
    {
      id: 1,
      title: "Anime Adventure X", // Use 'title' for movies
      poster_path: "/images/imgplace.jpg", // Placeholder pink bg
      overview: "An epic adventure in a world filled with magic and stylish heroes.",
      type: "movie",
    },
    {
      id: 2,
      name: "Cyber Samurai Chronicles", // Use 'name' for TV shows
      poster_path: "/images/imgplace.jpg", // Placeholder blue bg
      overview: "In a futuristic city, a lone samurai fights against robotic overlords.",
      type: "tv",
    },
    {
      id: 3,
      title: "Galactic High School",
      poster_path: "/images/imgplace.jpg", // Placeholder purple bg
      overview: "Slice-of-life comedy set in a high school attended by aliens.",
      type: "movie",
    },
    {
      id: 4,
      name: "Mystic Cafe",
      poster_path: "/images/imgplace.jpg", // Placeholder red bg
      overview: "A cozy cafe where magical beings gather for coffee and secrets.",
      type: "tv",
    },
    {
      id: 5,
      title: "Neon Racers",
      poster_path: "/images/imgplace.jpg", // Placeholder green bg
      overview: "High-speed racing with futuristic vehicles and intense rivalries.",
      type: "movie",
    },
     {
      id: 6,
      name: "Idol Stage Dream",
      poster_path: "/images/imgplace.jpg", // Placeholder yellow bg
      overview: "Aspiring idols strive for stardom in this musical drama.",
      type: "tv",
    },
  ];
  
  // You can add more items here following the same structure.