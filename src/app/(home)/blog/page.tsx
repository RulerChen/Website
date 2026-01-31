import { Suspense } from 'react';
import { blog } from '@/lib/source';
import { BlogList } from './BlogList';

export default function BlogPage() {
  const posts = blog.getPages().sort((a, b) => {
    const dateA = new Date(a.data.date as string);
    const dateB = new Date(b.data.date as string);
    return dateB.getTime() - dateA.getTime();
  });

  const serializedPosts = posts.map((post) => ({
    url: post.url,
    title: post.data.title,
    description: post.data.description,
    author: post.data.author,
    date: post.data.date as string,
  }));

  return (
    <Suspense>
      <BlogList posts={serializedPosts} />
    </Suspense>
  );
}

export function generateMetadata() {
  return {
    title: 'Blog',
    description: 'Articles and thoughts on software engineering and technology.',
  };
}
