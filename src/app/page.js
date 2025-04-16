// app/page.jsx
import Link from 'next/link';
import MovieCard from '@/components/MovieCard'; // Assuming components are in src/components
import { generateSlug } from '@/lib/utils';     // Assuming utils are in src/lib
import { trendingItemsMock } from '@/lib/mockData'; // Import the mock data

// No need for async function here anymore as we are using local data
export default function HomePage() {
  // Use the imported mock data directly
  const trendingItems = trendingItemsMock;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-300">
        Trending Movies & Shows (Mock Data)
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {trendingItems.map((item) => {
          // Use movie title (item.title) or TV show name (item.name)
          const title = item.title || item.name || 'Untitled';
          const slug = generateSlug(title); // Generate a URL-friendly slug

          // Basic check for necessary properties
          if (!item.id || !item.poster_path) {
              console.warn("Skipping item due to missing id or poster_path:", item);
              return null; // Skip rendering this item if essential data is missing
          }

          return (
            <Link key={item.id}  href={`/chat/${slug}`}>
              <a>
                <MovieCard
                  title={title}
                  // Pass the full URL from mock data
                  imageUrl={item.poster_path}
                  overview={item.overview || ''}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </main>
  );
}