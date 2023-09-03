import { ArrowLeftIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { Close } from '../../assets/icons';
import { Template } from '../../components/template/template';
import { useSelector } from 'react-redux';
import { api } from '../../api/axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Avatar } from '@chakra-ui/react';

export const MessagePage = () => {
 const userSelector = useSelector((state) => state.auth);
 const [user, setUser] = useState({});
 const params = useParams();

 const fetchUser = () => {
  api
   .get('/auth/username/' + params.username)
   .then((res) => {
    console.log(res.data);
    setUser(res.data);
   })
   .catch((err) => console.log(err));
 };
 useEffect(() => {
  fetchUser();
 }, []);
 return (
  <>
   <Template>
    <div className="w-full h-screen bg-white ">
     <div className="w-full ">
      <div className=" flex items-center m-3 ">
       <a href="/">
        {' '}
        <ChevronLeftIcon boxSize={'10'} />
       </a>
       <span className="font-semibold text-xl">{user?.username}</span>
      </div>
     </div>
     <div className="p-3 flex gap-2 flex-col">
      <div className=" flex justify-start">
       <div className="flex gap-1 bg-gray-300 w-full max-w-[80%] py-2 px-1 rounded-lg">
        <Avatar width={'24px'} height={'24px'}></Avatar>
        <span>hello</span>
       </div>
      </div>

      <div className=" flex justify-end">
       <div className="flex gap-1 max-w-[80%] w-full bg-blue-300  py-2 px-1 rounded-lg">
        <Avatar width={'24px'} height={'24px'}></Avatar>
        <span>hello</span>
       </div>
      </div>
     </div>
    </div>
   </Template>
  </>
 );
};
