// lib/utils.js
export function generateSlug(title) {
    if (typeof title !== 'string') {
      return ''; // Handle non-string input
    }
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
      .replace(/^-+|-+$/g, '');   // Remove leading/trailing hyphens
  }