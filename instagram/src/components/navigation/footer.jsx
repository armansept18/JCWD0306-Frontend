import { Avatar } from '@chakra-ui/react';
import { Add, Home, Search, Shop, Video } from '../../assets/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ModalPost } from '../post/post-modal';
import { useState } from 'react';
export const Footer = () => {
 const userSelector = useSelector((state) => state.auth);
 const [isOpen, setIsOpen] = useState(false);
 const avatar_url = process.env.REACT_APP_API_IMAGE_AVATAR_URL;

 const nav = useNavigate();
 return (
  <div
   className="navigation-container footer "
   style={{ borderTop: '1px solid #c9c9c9' }}
  >
   <ModalPost isOpen={isOpen} onClose={() => setIsOpen(false)} />

   <div className="navigation ">
    <div
     className="flex justify-between w-full gap-[15px] items-center icons"
     style={{ padding: '8px 16px' }}
    >
     <Home onClick={() => nav('/home')} />
     <Search onClick={() => nav('/explore')} />
     <Add onClick={() => setIsOpen(true)} />

     <Video onClick={() => nav('/search')} />
     <a href={`/username/${userSelector.username}`}>
      <Avatar
       className="cursor-pointer"
       src={avatar_url + userSelector.image_url}
       maxW={'24px'}
       maxH={'24px'}
      />
     </a>
    </div>
   </div>
  </div>
 );
};
