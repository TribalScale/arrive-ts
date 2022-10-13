import React from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {colors} from '../../utils/design';
import IconButton from '../Button/IconButton';
import TextButton from '../Button/TextButton';

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

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );
  const renderDots = (_, i) => {
    const opacity = position.interpolate({
      inputRange: [i - 1, i, i + 1],
      outputRange: [0.2, 1, 0.2],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View key={i} style={[{opacity}, styles.dotsView, dotsStyle]} />
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
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
        onScroll={onScroll}
        snapToInterval={width}
        pagingEnabled
      />
      <View style={styles.dotsContainer}>{data?.map(renderDots)}</View>
      <View style={styles.controls}>
        <TextButton labelStyle={styles.skipButton} onPress={handleEnd}>
          Skip
        </TextButton>
        <IconButton icon={'arrow-right-circle'} onPress={handleEnd} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flex: 1,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    paddingVertical: 16,
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'flex-start',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  dotsView: {
    backgroundColor: '#2a7ca1',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 16,
  },
  skipButton: {color: colors.BLUE, fontSize: 16},
});
