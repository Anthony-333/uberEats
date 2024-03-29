import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import {useForm, Controller} from 'react-hook-form';

import {useNavigation} from '@react-navigation/native';

import {Ionicons} from '@expo/vector-icons';

import {Auth} from 'aws-amplify';

const RegisterScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onRegisterPress = async data => {
    const {email, password} = data;

    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const user = await Auth.signUp(email, password);
      navigation.navigate('OtpVerification', {user});
    } catch (e) {
      Alert.alert('Error', e.message);
    }
    setLoading(false);
  };
  return (
    <View>
      <Text>Register</Text>
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

      <Controller // Username input
        name="username"
        control={control}
        rules={{
          required: 'Username is required',
        }}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <>
            <View
              style={{borderColor: 'gray', borderWidth: 2, borderRadius: 10}}>
              <TextInput
                placeholder="Username"
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
        onPress={handleSubmit(onRegisterPress)}>
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
      <TouchableOpacity
        style={{backgroundColor: 'black', borderRadius: 10}}
        onPress={() => navigation.navigate('Login')}>
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
    </View>
  );
};

export default RegisterScreen;
