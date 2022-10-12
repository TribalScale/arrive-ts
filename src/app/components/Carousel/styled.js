import styled from '@emotion/native';
import {Animated} from 'react-native';

export const Container = styled.View({
  marginBottom: 16,
  flex: 1,
});

export const AnimatedStyledList = styled(Animated.FlatList)``;

export const DotsContainer = styled.View({
  flexDirection: 'row',
  marginTop: 16,
  justifyContent: 'flex-start',
  paddingVertical: 16,
  paddingHorizontal: 16,
});

export const DotsView = styled(Animated.View)({
  backgroundColor: '#2a7ca1',
  width: 8,
  height: 8,
  borderRadius: 4,
  marginRight: 16,
});

export const Controls = styled.View({
  flexDirection: 'row',
  marginTop: 16,
  justifyContent: 'space-between',
  paddingVertical: 16,
  alignItems: 'center',
});
