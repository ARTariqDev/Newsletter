import * as React from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = () => {
    if (email) {
      Alert.alert('Subscription', `You have subscribed with the email: ${email}`);
    } else {
      Alert.alert('Error', 'Please enter a valid email address');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscribe to our Newsletter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Pressable style={styles.button} onPress={handleSubscribe}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default SubscribeScreen;
