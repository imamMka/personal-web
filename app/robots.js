export default function robots() {
  const baseUrl = 'https://imammka.my.id'; // Replace with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
