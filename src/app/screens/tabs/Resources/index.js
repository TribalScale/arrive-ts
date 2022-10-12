import styled, {css} from '@emotion/native';
import React from 'react';
import {Divider} from 'react-native-paper';
import Link from '../../../components/Text/Link';
import {informationLinks, legalLinks, travelPreparation} from './mock';

const ResourcesContainer = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 300;
  margin: 20px 0 10px 0;
`;

const TitleText = styled.Text`
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 400;
`;

const resourcesContentContainerStyle = css`
  padding: 10px 20px;
`;

const linkStyle = css`
  margin: 10px 0;
  max-width: 80%;
`;

const Resources = () => {
  return (
    <ResourcesContainer contentContainerStyle={resourcesContentContainerStyle}>
      <TitleText>Information Links</TitleText>
      {informationLinks.map(item => (
        <Link title={item.title} href={item.url} style={linkStyle} external />
      ))}

      <SectionTitle>Travel preparation</SectionTitle>
      {travelPreparation.map(item => (
        <Link title={item.title} href={item.url} style={linkStyle} external />
      ))}

      <Divider
        style={css`
          margin: 20px 0;
        `}
      />
      <SectionTitle>Legal</SectionTitle>
      {legalLinks.map(item => (
        <Link title={item.title} href={item.page} style={linkStyle} />
      ))}

      <Divider
        style={css`
          margin: 20px 0;
        `}
      />
    </ResourcesContainer>
  );
};

export default Resources;
