import React from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import IconButton from '../Button/IconButton';
import TextButton from '../Button/TextButton';
import {
  AnimatedStyledList,
  Container,
  Controls,
  DotsContainer,
  DotsView,
} from './styled';

const {width} = Dimensions.get('window');

export const Carousel = ({
  dotsStyle,
  data,
  renderItem,
  contentContainerStyle,
  handleEnd,
}) => {
  const scrollX = new Animated.Value(0);

  const position = Animated.divide(scrollX, width);

  return (
    <Container>
      <AnimatedStyledList
        keyExtractor={(_, i) => i.toString()}
        style={{}}
        data={data}
        horizontal
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate="fast"
        contentContainerStyle={contentContainerStyle}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        snapToInterval={width}
        pagingEnabled
      />
      <DotsContainer>
        {data?.map((_, i) => {
          const opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.2, 1, 0.2],
            extrapolate: 'clamp',
          });
          return <DotsView key={i} style={[{opacity}, dotsStyle]} />;
        })}
      </DotsContainer>
      <Controls>
        <TextButton labelStyle={styles.skipButton} onPress={handleEnd}>
          Skip
        </TextButton>
        <IconButton icon={'arrow-right-circle'} onPress={handleEnd} />
      </Controls>
    </Container>
  );
};

const styles = StyleSheet.create({
  skipButton: {color: '#2a7ca1', fontSize: 16},
});
