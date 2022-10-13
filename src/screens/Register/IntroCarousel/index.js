import React, {useContext} from 'react';
import {useRoute} from '@react-navigation/native';

import {INTRO_CAROUSEL_DATA} from '../../../assets/uiText';
import {AuthContext} from '../../../context/AuthContext';
import IconButton from '../../../components/Button/IconButton';
import {Carousel} from '../../../components/Carousel';
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import BodyText from '../../../components/Text/Body';
import CaptionText from '../../../components/Text/Caption';

const {width} = Dimensions.get('window');

const InfoCarouselScreen = () => {
  const user = params?.user || {};
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useContext(AuthContext);
  const {params} = useRoute();

  const handleEnd = () => {
    dispatch({type: 'user_login', payload: user});
  };

  return (
    <SafeAreaView style={styles.infoContainer}>
      <Carousel
        handleEnd={handleEnd}
        data={INTRO_CAROUSEL_DATA}
        renderItem={({item, index}) => (
          <CarouselItem item={item} index={index} />
        )}
      />
    </SafeAreaView>
  );
};

const CarouselItem = ({item, index}) => {
  return (
    <View style={styles.slideContainer} key={`carousel-${index}`}>
      <IconButton icon={'arrow-left'} />
      <Image style={styles.carouselImage} source={{uri: item?.imgUri}} />
      <View style={styles.carouselBottomContainer}>
        <BodyText style={styles.carouselTitle}>{item?.title}</BodyText>
        <CaptionText style={styles.carouselDescription}>
          {item?.desc}
        </CaptionText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselBottomContainer: {flex: 1, justifyContent: 'flex-end'},
  carouselDescription: {},
  carouselImage: {
    width: '100%',
    height: '50%',
    marginBottom: 32,
    marginTop: 32,
  },
  carouselTitle: {
    marginBottom: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  slideContainer: {width, paddingHorizontal: 16},
});

export default InfoCarouselScreen;
