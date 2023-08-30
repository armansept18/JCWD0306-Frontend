import { useState } from 'react';
import { ModalDetailPost } from './post-detail-modal';

export const PostGrid = ({ posts = [] }) => {
 return (
  <div className="post-grid grid grid-cols-3">
   {posts?.map((post, key) => (
    <PostGridCard post={post} key={key} />
   ))}
  </div>
 );
};

const PostGridCard = ({ post }) => {
 const [isOpen, setIsOpen] = useState(false);
 return (
  <>
   <img src={post.image_url} alt="" onClick={() => setIsOpen(true)} />
  </>
 );
};
