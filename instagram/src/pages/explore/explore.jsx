import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/navigation/search';
import { PostGrid } from '../../components/post/post-grid';
import {
 NavTemplate,
 SearchTemplate
} from '../../components/template/template';
import { api } from '../../api/axios';

export const ExplorePage = () => {
 // const posts = [
 //   {
 //     image_url:
 //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
 //   },
 //   {
 //     image_url:
 //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
 //   },
 //   {
 //     image_url:
 //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
 //   },
 //   {
 //     image_url:
 //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
 //   },
 //   {
 //     image_url:
 //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
 //   },
 //   {
 //     image_url:
 //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
 //   },
 //   {
 //     image_url:
 //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
 //   },
 //   {
 //     image_url:
 //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
 //   },
 //   {
 //     image_url:
 //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
 //   },
 //   {
 //     image_url:
 //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
 //   },
 //   {
 //     image_url:
 //       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
 //   },
 // ];
 const [posts, setPosts] = useState([]);
 const fetchPost = () => {
  api
   .get('/posts')
   .then((res) => setPosts(res.data))
   .catch((err) => console.log(err));
 };
 useEffect(() => {
  fetchPost();
 }, []);

 return (
  <>
   <SearchTemplate>
    <PostGrid posts={posts} />
   </SearchTemplate>
  </>
 );
};
