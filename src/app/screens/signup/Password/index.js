import React from 'react';
import {StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
//Components
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import Input from '../../../components/Input';
import {ROUTES} from '../../../utils/constants/RoutesIdentifier';
import {
  BottomText,
  BottomView,
  ErrorText,
  Heading,
  SignupErrorContainer,
  SignupErrorText,
} from '../styled';
import {useState} from 'react';
import {Auth} from 'aws-amplify';

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
  const createAccHandler = values => {
    createUser(email, values?.password);
  };

  const createUser = (emailAccount, password) => {
    Auth.signUp(emailAccount, password)
      .then(user => {
        navigation?.navigate(ROUTES.INFO_CAROUSEL, {user});
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
  return (
    <Container style={styles.container}>
      <Heading>Choose a password</Heading>
      {isSignupError && (
        <SignupErrorContainer>
          <SignupErrorText>{signupErrorText}</SignupErrorText>
        </SignupErrorContainer>
      )}
      {errors?.password && <ErrorText>{errors?.password?.message}</ErrorText>}
      <Controller
        control={control}
        name="password"
        rules={{
          required: {
            value: true,
            message: '*This is required',
          },
          minLength: {
            value: 6,
            message: 'Minimum password length is 6',
          },
        }}
        render={({field: {value, onChange, onBlur}}) => {
          return (
            <Input
              label="Password"
              secureTextEntry
              containerStyle={styles.input}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          );
        }}
      />
      {errors?.confirmPassword && (
        <ErrorText>{errors?.confirmPassword?.message}</ErrorText>
      )}
      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: {
            value: true,
            message: '*This is required',
          },
          validate: value => {
            return value === getValues('password') || 'Password should be same';
          },
        }}
        render={({field: {value, onChange, onBlur}}) => {
          return (
            <Input
              label="Confirm password"
              secureTextEntry
              containerStyle={styles.input}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
            />
          );
        }}
      />

      <Button onPress={handleSubmit(createAccHandler)}>CREATE ACCOUNT</Button>
      <BottomView>
        <BottomText>Already have an account?</BottomText>
        <BottomText
          suppressHighlighting
          style={styles.signInLink}
          onPress={() => navigation?.navigate(ROUTES.SIGNIN_SCREEN)}>
          SignIn
        </BottomText>
      </BottomView>
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
  signInLink: {
    textDecorationLine: 'underline',
  },
});

export default PasswordScreen;
