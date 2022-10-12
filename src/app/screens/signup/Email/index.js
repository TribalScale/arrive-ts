import React from 'react';
import {StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
//Components
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Input from '../../../components/Input';
import {BottomText, BottomView, ErrorText, Heading} from '../styled';
//Utils
import {ROUTES} from '../../../utils/constants/RoutesIdentifier';

const EMAIL_REGEX = new RegExp(
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

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
  const continueBtnHandler = values => {
    navigation?.navigate(ROUTES.PASSWORD_SCREEN, {email: values?.email});
  };

  return (
    <Container style={styles.container}>
      <Heading>What's your email address?</Heading>
      {errors?.email && <ErrorText>{errors?.email?.message}</ErrorText>}
      <Controller
        control={control}
        name="email"
        rules={{
          required: {
            value: true,
            message: '*This is required',
          },
          pattern: {value: EMAIL_REGEX, message: 'This is not a valid email'},
        }}
        render={({field: {value, onChange, onBlur}}) => {
          return (
            <Input
              label="Email address"
              containerStyle={styles.input}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          );
        }}
      />

      {errors?.confirmEmail && (
        <ErrorText>{errors?.confirmEmail?.message}</ErrorText>
      )}
      <Controller
        control={control}
        name="confirmEmail"
        rules={{
          required: {
            value: true,
            message: '*This is required',
          },
          validate: value => {
            return value === getValues('email') || 'Both values should be same';
          },
        }}
        render={({field: {value, onBlur, onChange}}) => {
          return (
            <Input
              label="Confirm email address"
              containerStyle={styles.input}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          );
        }}
      />

      <Button onPress={handleSubmit(continueBtnHandler)}>CONTINUE</Button>
      <BottomView>
        <BottomText>Already have an account?</BottomText>
        <BottomText
          suppressHighlighting
          style={styles.signInLink}
          onPress={() => {
            navigation?.navigate(ROUTES.SIGNIN_SCREEN);
          }}>
          SignIn
        </BottomText>
      </BottomView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 24,
  },
  signInLink: {
    textDecorationLine: 'underline',
  },
});

export default EmailScreen;
