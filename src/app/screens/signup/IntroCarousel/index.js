/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import {faker} from '@faker-js/faker';
//Compoenents
import {Carousel} from '../../../components/Carousel';
import {
  CarouselBottomContainer,
  SlideContainer,
  CarouselDesc,
  CarouselImage,
  CarouselTitle,
  InfoCarouseContainer,
} from '../styled';
import IconButton from '../../../components/Button/IconButton';
import {AuthContext} from '../../../context/AuthContext';
import {useRoute} from '@react-navigation/native';

const DATA = [
  {
    title: "Let's get started",
    desc: 'This tool is designated to help Air Travelers arriving in Canada have a better border experience by completing their Advance Declaration',
    imgUri: faker.image.transport(),
  },
  {
    title: 'Finish as you go',
    desc: 'Traveler can store Traveler document information for this and future trips, and prepare their declaration up to 72 hours ahead of arrival',
    imgUri: faker.image.transport(),
  },
  {
    title: 'Submit your form',
    desc: 'To submit your form, you need to enter your travel information, along with answering our Advance declaration questionnaire',
    imgUri: faker.image.transport(),
  },
];

const InfoCarouselScreen = () => {
  const [_, dispatch] = useContext(AuthContext);
  const {params} = useRoute();
  const user = params?.user || {};
  const handleEnd = () => {
    dispatch({type: 'user_login', payload: user});
  };

  return (
    <InfoCarouseContainer>
      <Carousel
        handleEnd={handleEnd}
        data={DATA}
        renderItem={({item, index}) => (
          <CarouselItem item={item} index={index} />
        )}
      />
    </InfoCarouseContainer>
  );
};

const CarouselItem = ({item, index}) => {
  return (
    <SlideContainer key={`carousel-${index}`}>
      <IconButton icon={'arrow-left'} />
      <CarouselImage source={{uri: item?.imgUri}} />
      <CarouselBottomContainer>
        <CarouselTitle>{item?.title}</CarouselTitle>
        <CarouselDesc>{item?.desc}</CarouselDesc>
      </CarouselBottomContainer>
    </SlideContainer>
  );
};

export default InfoCarouselScreen;
