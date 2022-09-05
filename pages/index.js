import Link from 'next/link';
import { getPosts } from '../lib/posts';

import Footer from '../components/Footer';

export const getStaticProps = async () => {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  <div className="heropattern-leaf-neutral-100 h-screen">
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
    <div className="fixed bottom-0 w-full">
      <Footer />
    </div>
  </div>;
}
