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

const EmailVerificationScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onConfirmPressed = async data => {};

  return (
    <View>
      <Text>Email Verification</Text>
      <Controller // Email input
        name="code"
        control={control}
        rules={{
          required: 'Verification code is required',
        }}
        render={({field: {value, onChange}, fieldState: {error}}) => (
          <>
            <View
              style={{borderColor: 'gray', borderWidth: 2, borderRadius: 10}}>
              <TextInput
                placeholder="Code"
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
        onPress={handleSubmit(onConfirmPressed)}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            padding: 10,
            fontSize: 20,
          }}>
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailVerificationScreen;
