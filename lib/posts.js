import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: process.env.BLOG_URL,
  key: process.env.API_KEY,
  version: 'v5.2.2',
});

export async function getPosts() {
  let posts = await api.posts
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });

  return posts;
}
