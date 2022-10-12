import styled, {css} from '@emotion/native';
import React, {useState} from 'react';
import {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {Divider, Switch} from 'react-native-paper';
import Container from '../../../components/Container';
import {Link} from '../../../components/Text';
import {AuthContext} from '../../../context/AuthContext';

const InfoText = styled.Text`
  font-size: ${props => props.fontSize ?? '14px'};
  font-weight: 300;
  margin: ${props => props.margin ?? '0'};
`;

const Label = styled(InfoText)`
  color: rgba(32, 52, 73, 1);
  font-weight: 500;
`;

const SettingsButton = ({onPress = () => {}, title = '', ...rest}) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <Label>{title}</Label>
    </TouchableOpacity>
  );
};

const SectionContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  min-height: 50px;
`;

const InfoContainer = styled.View`
  width: 70%;
`;

const ActionContainer = styled.View`
  width: 30%;
  min-height: 17px;
  align-items: flex-end;
`;

const Section = ({
  children,
  title = '',
  onPress = null,
  action = null,
  showDivider = false,
}) => {
  return (
    <>
      <SectionContainer>
        <InfoContainer>
          <SettingsButton title={title} onPress={onPress} disabled={!onPress} />
          {children}
        </InfoContainer>
        <ActionContainer>{action}</ActionContainer>
      </SectionContainer>
      {showDivider && (
        <Divider
          bold
          style={css`
            margin: 5px 0;
            width: 90%;
            align-self: center;
          `}
        />
      )}
    </>
  );
};

const Settings = () => {
  const [saveTravellers, setSaveTravellers] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useContext(AuthContext);

  const handleSwitchToggle = () => {
    setSaveTravellers(prev => !prev);
  };

  return (
    <Container
      style={css`
        background-color: white;
        padding: 20px 0 0 0;
      `}>
      <Section
        title="Saved travellers"
        showDivider
        action={
          <Switch
            value={saveTravellers}
            onValueChange={handleSwitchToggle}
            trackColor={{
              true: 'rgba(32, 52, 73, 1)',
            }}
          />
        }>
        <InfoText margin="10px 0">
          Save my travel document for future trips (optional)
        </InfoText>
        <Link
          title="Privacy Notice - Saved traveller"
          href="TermsPage"
          style={css`
            font-size: 14px;
          `}
        />
      </Section>
      <Section
        title="Delete Account"
        // eslint-disable-next-line no-alert
        onPress={() => alert('Delete account')}
        showDivider
      />
      <Section
        title="Sign out"
        onPress={() => dispatch({type: 'user_logout', payload: false})}
      />
      <InfoText fontSize="12px" margin="0 20px">
        v1.0.0 TribalScale
      </InfoText>
    </Container>
  );
};

export default Settings;
