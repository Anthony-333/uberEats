import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {useForm, Controller} from 'react-hook-form';

import {useNavigation} from '@react-navigation/native';

import {Ionicons} from '@expo/vector-icons';

import {Auth} from 'aws-amplify';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onLogInPress = async data => {
    const {email, password} = data;

    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const user = await Auth.signIn(email, password);
      navigation.navigate('OtpVerification', {user});
    } catch (e) {
      Alert.alert('Error', e.message);
    }
    setLoading(false);
  };
  return (
    <View>
      <Text> Login</Text>
      <Controller // Email input
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
        }}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <>
            <View
              style={{borderColor: 'gray', borderWidth: 2, borderRadius: 10}}>
              <TextInput
                placeholder="Email"
                value={value}
                onChangeText={value => onChange(value)}
              />
            </View>

            {error && (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="alert-circle-outline" size={24} color="red" />

                <Text style={{color: 'red'}}>{error.message || 'Error'}</Text>
              </View>
            )}
          </>
        )}
      />

      <Controller // Password Input
        name="password"
        control={control}
        rules={{
          required: 'Password is required',
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
        }}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <>
            <View
              style={{borderColor: 'gray', borderWidth: 2, borderRadius: 10}}>
              <TextInput
                secureTextEntry={true}
                placeholder="Password"
                value={value}
                onChangeText={value => onChange(value)}
              />
            </View>

            {error && (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="alert-circle-outline" size={24} color="red" />

                <Text style={{color: 'red'}}>{error.message || 'Error'}</Text>
              </View>
            )}
          </>
        )}
      />

      <TouchableOpacity
        style={{backgroundColor: 'black', borderRadius: 10}}
        onPress={handleSubmit(onLogInPress)}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            padding: 10,
            fontSize: 20,
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'black', borderRadius: 10}}
        onPress={() => navigation.navigate('Register')}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            padding: 10,
            fontSize: 20,
          }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
