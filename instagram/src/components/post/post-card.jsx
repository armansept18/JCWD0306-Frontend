import { Avatar, Icon, useToast } from '@chakra-ui/react';
import {
 Comment,
 FilledLove,
 Love,
 Opt_Group,
 Saved,
 Share
} from '../../assets/icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalPost } from './post-modal';
import { api } from '../../api/axios';

export const PostCard = ({ user, image_url, caption, id }) => {
 const [liked, setLiked] = useState(false);
 const userSelector = useSelector((state) => state.auth);
 const [isOpen, setIsOpen] = useState(false);
 const [isEdit, setIsEdit] = useState(false);
 const toast = useToast();
 const deletePost = () => {
  const token = localStorage.getItem('auth');
  api
   .delete(`/posts/${id}`, {
    params: { token, user_id: userSelector.id }
   })
   .then((result) => {
    toast({
     title: 'Your post has been deleted',
     status: 'success',
     description: 'successfully deleted the post',
     isClosable: true,
     position: 'top',
     duration: 1500
    });
    window.location.reload();
   })
   .catch((err) => {
    toast({
     title: 'Delete post failed',
     description: err?.response?.data,
     status: 'error',
     position: 'top',
     isClosable: true,
     duration: 1500
    });
   });
 };

 useEffect(() => {
  console.log(userSelector.id);
 }, []);

 return (
  <>
   <ModalPost
    isOpen={isEdit}
    onClose={() => setIsEdit(false)}
    edit={{ image_url, caption, id }}
   />

   <div
    className="flex justify-between w-full "
    bg-white
    style={{ padding: '8px 16px' }}
   >
    <div className="flex items-center gap-[5px]">
     <div style={{ padding: '3px', borderRadius: '50%', border: 'none' }}>
      <Avatar
       maxW="34px"
       maxH="34px"
       objectFit={'cover'}
       className="cursor-pointer"
       src={user?.image_url}
      />
     </div>
     <b>{user?.username}</b>
    </div>

    <div className="flex justify-center items-center">
     <div className={userSelector.id != user.id ? 'hidden' : null}>
      <Opt_Group onClick={() => setIsOpen(!isOpen)} />
      <div
       className={`absolute bg-white  ml-[-40px] w-20 text-center text-sm  ${
        isOpen ? '' : 'hidden'
       }`}
      >
       <div
        className="border p-1 cursor-pointer"
        onClick={() => setIsEdit(true)}
       >
        edit
       </div>
       <div className="border  p-1 cursor-pointer" onClick={deletePost}>
        delete
       </div>
       <div
        className="border  p-1 cursor-pointer"
        onClick={() => setIsOpen(false)}
       >
        cancel
       </div>
      </div>
     </div>
    </div>
   </div>
   <img src={image_url} style={{ aspectRatio: '1' }} />
   <div
    className="flex justify-between w-full items-center icons"
    style={{ padding: '8px 15px' }}
   >
    <div className="flex gap-[15px]">
     <Icon
      as={liked ? FilledLove : Love}
      onClick={() => setLiked(!liked)}
     ></Icon>

     <Comment />
     <Share />
    </div>
    <div className="flex justify-center items-center">
     <Saved />
    </div>
   </div>
   <div className="w-full " style={{ padding: '0px 15px 5px 15px' }}>
    Liked by <b>thekamraan</b> and <b>905,235</b> others
   </div>
   <div
    className="w-full flex flex-wrap"
    style={{
     padding: '0px 15px 5px 15px'
    }}
   >
    <span className="w-full ">
     <b>{user?.username}</b> {caption}
     {/* <span className=" text-gray-400 flex items-end">
      <span className="cursor-pointer">more</span>
     </span> */}
    </span>
   </div>

   <div
    className="w-full text-gray-400 cursor-pointer"
    style={{ padding: '0px 15px 5px 15px' }}
   >
    View all 103 comments
   </div>
   <div
    className="w-full text-gray-400"
    style={{
     padding: '0px 15px 5px 15px'
    }}
   >
    <input
     style={{
      borderBottom: '1px solid #E4E4E4',
      paddingBottom: '15px'
     }}
     placeholder="Add a comment..."
     className="w-full text-black"
    />
   </div>
  </>
 );
};
