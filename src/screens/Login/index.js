import {Auth} from 'aws-amplify';
import React, {useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import {AuthContext} from '../../context/AuthContext';
import {RoutesType} from '../../utils/constants';

import Button from '../../components/Button';
import CaptionText from '../../components/Text/Caption';
import Container from '../../components/Container';
import FooterLink from '../../components/Footer/FooterLink';
import Input from '../../components/Input';
import TitleText from '../../components/Text/Title';

const REQUIRED_RULE = {
  required: {
    value: true,
    message: '*This is required',
  },
};

const LoginScreen = ({navigation}) => {
  const [isLogInFailed, setIsLogInFailed] = useState(false);
  // eslint-disable-next-line no-unused-vars
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
  const checkError = item =>
    item && <CaptionText style={styles.error}>{item?.message}</CaptionText>;
  const continueBtnHandler = values => {
    loginUser(values?.email, values?.password);
  };
  const loginUser = (email, password) => {
    Auth.signIn(email, password)
      .then(() => {
        dispatch({type: 'user_login', payload: true});
      })
      .catch(error => {
        setIsLogInFailed(true);
        console.error(error);
      });
  };
  const onNavigateEmail = () => navigation?.navigate(RoutesType.EMAIL_SCREEN);
  const renderEmailInput = ({field: {value, onChange, onBlur}}) => {
    return (
      <Input
        label="Email address"
        containerStyle={styles.input}
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
      />
    );
  };
  const renderPasswordInput = ({field: {value, onBlur, onChange}}) => {
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
  };

  return (
    <Container style={styles.container}>
      <TitleText style={styles.heading}>Sign in to ArriveTS</TitleText>
      {isLogInFailed && (
        <View style={styles.errorContainer}>
          <CaptionText style={styles.error}>Invalid credentials</CaptionText>
        </View>
      )}
      {checkError(errors?.email)}
      <Controller
        control={control}
        name="email"
        rules={REQUIRED_RULE}
        render={renderEmailInput}
      />
      {checkError(errors?.password)}
      <Controller
        control={control}
        name="password"
        rules={REQUIRED_RULE}
        render={renderPasswordInput}
      />
      <Button onPress={handleSubmit(continueBtnHandler)}>CONTINUE</Button>
      <FooterLink
        label="Don't have an account?"
        linkText="Create account"
        onPress={onNavigateEmail}
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
  input: {
    marginBottom: 24,
  },
});

export default LoginScreen;
