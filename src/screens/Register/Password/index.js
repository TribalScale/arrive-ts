import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
//Components
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Input from '../../../components/Input';
import {RoutesType} from '../../../utils/constants';

import {useState} from 'react';
import {Auth} from 'aws-amplify';
import FooterLink from '../../../components/Footer/FooterLink';
import TitleText from '../../../components/Text/Title';
import CaptionText from '../../../components/Text/Caption';

const requiredRule = {
  required: {
    value: true,
    message: '*This is required',
  },
};

const PasswordScreen = ({navigation, route}) => {
  const email = route?.params?.email;
  const [isSignupError, setIsSignupError] = useState(false);
  const [signupErrorText, setSignupErrorText] = useState();
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  const checkError = item =>
    item && <CaptionText style={styles.error}>{item?.message}</CaptionText>;
  const createAccHandler = values => {
    createUser(email, values?.password);
  };
  const onNavigateLogin = () => navigation?.navigate(RoutesType.LOGIN_SCREEN);
  const createUser = (emailAccount, password) => {
    Auth.signUp(emailAccount, password)
      .then(user => {
        navigation?.navigate(RoutesType.INFO_CAROUSEL, {user});
        console.log('User account created & signed in!');
      })
      .catch(error => {
        setIsSignupError(true);
        if (error.code === 'auth/email-already-in-use') {
          setSignupErrorText('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          setSignupErrorText('That email address is invalid!');
        }
        if (error.code === 'auth/week-password') {
          setSignupErrorText('Password is not strong enough!');
        }

        console.error(error);
      });
  };
  const renderInput = label => {
    return ({field: {value, onChange, onBlur}}) => {
      return (
        <Input
          label={label}
          secureTextEntry
          containerStyle={styles.input}
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
        />
      );
    };
  };

  return (
    <Container style={styles.container}>
      <TitleText style={styles.heading}>Choose a password</TitleText>
      {isSignupError && (
        <View style={styles.errorContainer}>
          <CaptionText style={styles.error}>{signupErrorText}</CaptionText>
        </View>
      )}
      {checkError(errors?.password)}
      <Controller
        control={control}
        name="password"
        rules={{
          ...requiredRule,
          minLength: {
            value: 6,
            message: 'Minimum password length is 6',
          },
        }}
        render={renderInput('Password')}
      />
      {checkError(errors?.confirmPassword)}
      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          ...requiredRule,
          validate: value => {
            return value === getValues('password') || 'Password should be same';
          },
        }}
        render={renderInput('Confirm password')}
      />
      <Button onPress={handleSubmit(createAccHandler)}>CREATE ACCOUNT</Button>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 24,
  },
  error: {
    fontWeight: '300',
    alignSelf: 'flex-start',
  },
  errorContainer: {
    backgroundColor: 'rgba(210, 0, 26,0.5)',
    borderWidth: 1,
    borderColor: 'rgba(210, 0, 26,0.9)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 32,
    borderRadius: 12,
  },
  heading: {
    marginBottom: 36,
    textAlign: 'center',
  },
});

export default PasswordScreen;
