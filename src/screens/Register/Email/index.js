import React from 'react';
import {StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Input from '../../../components/Input';
import {RoutesType} from '../../../utils/constants';

import {EmailRegex} from '../../../utils/constants';
import FooterLink from '../../../components/Footer/FooterLink';
import CaptionText from '../../../components/Text/Caption';
import TitleText from '../../../components/Text/Title';

const emailRules = {
  required: {
    value: true,
    message: '*This is required',
  },
  pattern: {value: EmailRegex, message: 'This is not a valid email'},
};

const EmailScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm({
    defaultValues: {
      email: '',
      confirmEmail: '',
    },
  });

  const checkError = item =>
    item && <CaptionText style={styles.error}>{item?.message}</CaptionText>;
  const onNavigateContinue = values => {
    navigation?.navigate(RoutesType.PASSWORD_SCREEN, {email: values?.email});
  };
  const onNavigateLogin = () => {
    navigation?.navigate(RoutesType.LOGIN_SCREEN);
  };
  const renderInput = label => {
    return ({field: {value, onChange, onBlur}}) => (
      <Input
        label={label}
        containerStyle={styles.input}
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
      />
    );
  };
  const validateEmail = value => {
    return value === getValues('email') || 'Both values should be same';
  };

  return (
    <Container style={styles.container}>
      <TitleText style={styles.heading}>What's your email address?</TitleText>
      {checkError(errors?.email)}
      <Controller
        control={control}
        name="email"
        rules={emailRules}
        render={renderInput('Email address')}
      />
      {checkError(errors?.confirmEmail)}
      <Controller
        control={control}
        name="confirmEmail"
        rules={{...emailRules, validate: validateEmail}}
        render={renderInput('Confirm Email address')}
      />
      <Button onPress={handleSubmit(onNavigateContinue)}>CONTINUE</Button>
      <FooterLink
        label="Already have an account?"
        linkText="Sign In"
        onPress={onNavigateLogin}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
  },
  error: {
    fontWeight: '300',
    alignSelf: 'flex-start',
  },
  heading: {
    marginBottom: 36,
    textAlign: 'center',
  },
  input: {
    marginBottom: 24,
  },
});

export default EmailScreen;
