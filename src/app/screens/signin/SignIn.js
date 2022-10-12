/* eslint-disable no-unused-vars */
import React, {useState, useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
//Utils
import {ROUTES} from '../../utils/constants/RoutesIdentifier';
//Components
import {
  BottomText,
  BottomView,
  ErrorText,
  Heading,
  SignupErrorContainer,
  SignupErrorText,
} from '../signup/styled';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Auth} from 'aws-amplify';

const SignInScreen = ({navigation}) => {
  const [isLogInFailed, setIsLogInFailed] = useState(false);
  const [_, dispatch] = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const continueBtnHandler = values => {
    login(values?.email, values?.password);
  };
  const login = (email, password) => {
    Auth.signIn(email, password)
      .then(success => {
        console.log(success);
        dispatch({type: 'user_login', payload: true});
      })
      .catch(error => {
        setIsLogInFailed(true);
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <Container style={styles.container}>
      <Heading>Sign in to ArriveTS</Heading>
      {isLogInFailed && (
        <SignupErrorContainer>
          <SignupErrorText>Invalid credentials</SignupErrorText>
        </SignupErrorContainer>
      )}
      {errors?.email && <ErrorText>{errors?.email?.message}</ErrorText>}
      <Controller
        control={control}
        name="email"
        rules={{
          required: {
            value: true,
            message: '*This is required',
          },
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

      {errors?.password && (
        <ErrorText>{errors?.confirmEmail?.message}</ErrorText>
      )}
      <Controller
        control={control}
        name="password"
        rules={{
          required: {
            value: true,
            message: '*This is required',
          },
        }}
        render={({field: {value, onBlur, onChange}}) => {
          return (
            <Input
              label="Password"
              secureTextEntry
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
        <BottomText>Dont't have an account?</BottomText>
        <BottomText
          suppressHighlighting
          style={styles.signupLink}
          onPress={() => navigation?.navigate(ROUTES.EMAIL_SCREEN)}>
          Create account
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
  signupLink: {
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
