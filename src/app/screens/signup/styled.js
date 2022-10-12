import styled from '@emotion/native';
import BodyText from '../../components/Text/Body';
import CaptionText from '../../components/Text/Caption';
import TitleText from '../../components/Text/Title';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
export const Heading = styled(TitleText)`
  margin-bottom: 36px;
  text-align: center;
`;

export const BottomView = styled.View({
  position: 'absolute',
  bottom: 16,
  alignItems: 'center',
  flexDirection: 'row',
});
export const BottomText = styled(BodyText)`
  font-size: 16px;
  text-align: center;
  margin-right: 4px;
`;

export const SlideContainer = styled.View({
  width: width,
  paddingHorizontal: 16,
});

export const InfoCarouseContainer = styled.SafeAreaView({
  backgroundColor: 'white',
  flex: 1,
});

export const CarouselImage = styled.Image({
  width: '100%',
  height: '50%',
  marginBottom: 32,
  marginTop: 32,
});

export const CarouselTitle = styled(BodyText)`
  margin-bottom: 16px;
  color: black;
  font-weight: bold;
`;
export const CarouselDesc = styled(CaptionText)`
  color: black;
`;

export const CarouselBottomContainer = styled.View({
  flex: 1,
  justifyContent: 'flex-end',
});

export const ErrorText = styled(CaptionText)`
  font-weight: 300;
  color: red;
  align-self: flex-start;
`;

export const SignupErrorContainer = styled.View({
  backgroundColor: 'rgba(210, 0, 26,0.5)',
  borderWidth: 1,
  borderColor: 'rgba(210, 0, 26,0.9)',
  paddingVertical: 8,
  paddingHorizontal: 16,
  marginBottom: 32,
  borderRadius: 12,
});

export const SignupErrorText = styled(ErrorText)`
  color: white;
`;
