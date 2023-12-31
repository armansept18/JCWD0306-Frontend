import { Avatar } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const Stories = () => {
 const avatar_url = process.env.REACT_APP_API_IMAGE_AVATAR_URL;

 const userSelector = useSelector((state) => state.auth);
 return (
  <div className="story-frame">
   <StoryCard image_url={avatar_url + userSelector.image_url} add={true} />
   <StoryCard />
   <StoryCard />
   <StoryCard />
   <StoryCard />
   <StoryCard />
   <StoryCard />
   <StoryCard />
   <StoryCard />
   <StoryCard />
   <StoryCard />
  </div>
 );
};

export const ProfileStories = () => {
 return (
  <div className="story-frame py-2">
   <StoryCard profile={true} />
   <StoryCard profile={true} />
   <StoryCard profile={true} />
   <StoryCard profile={true} />
   <StoryCard profile={true} />
   <StoryCard profile={true} />
   <StoryCard profile={true} />
   <StoryCard profile={true} />
   <StoryCard profile={true} />
   <StoryCard profile={true} />
   <StoryAdd />
  </div>
 );
};

export const StoryCard = ({
 add = false,
 profile = false,
 image_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtULOC4udgo4v_wp7qH2byAZvz54GHGJ8Qxw&usqp=CAU'
}) => {
 return (
  <div className="story-card cursor-pointer">
   <div className="w-full text-center">
    <Avatar
     src={image_url}
     alt=""
     aspectRatio={1}
     style={{
      width: '50px',
      height: '50px'
     }}
    />
    <span className={`w-full ${profile ? '' : 'hidden'} text-sm`}>test</span>
   </div>

   <div className="add-story" style={{ display: add ? 'flex' : 'none' }}>
    <span style={{ marginTop: '-4px' }}>+</span>
   </div>
  </div>
 );
};

export const StoryAdd = () => {
 return (
  <div
   className="story-card cursor-pointer"
   style={{ alignItems: 'flex-start' }}
  >
   <div className="story-add">
    <span style={{ marginTop: '-8px' }}>+</span>
   </div>
  </div>
 );
};
