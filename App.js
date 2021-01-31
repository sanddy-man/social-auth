/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
  NativeModules,
  LayoutAnimation,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const App = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [useEmailPassword, setUseEmailPassword] = React.useState(false);

  const signInWithEmailAndPassword = () => {};

  const signInWithGoogle = () => {};

  const signInWithFB = () => {};

  const signInWithApple = () => {};

  const toggleEmailPasswordLogin = () => {
    LayoutAnimation.spring();
    setUseEmailPassword(!useEmailPassword);
  };

  const isAndroid = Platform.OS === 'android';

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.googleButtonContainer}
                onPress={signInWithGoogle}>
                <Image
                  style={styles.loginIcon}
                  source={require('./assets/g-logo.png')}
                />
                <Text style={styles.googleText}>Sign in with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.fbButtonContainer}
                onPress={signInWithFB}>
                <Image
                  style={styles.loginIcon}
                  source={require('./assets/f-logo.png')}
                />
                <Text style={styles.fbText}>Continue with Facebook</Text>
              </TouchableOpacity>
              {!isAndroid && (
                <TouchableOpacity
                  style={styles.appleButtonContainer}
                  onPress={signInWithApple}>
                  <Image
                    style={styles.appleIcon}
                    source={require('./assets/a-logo.png')}
                  />
                  <Text style={styles.appleText}>Sign in with Apple</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.footer}>
              {useEmailPassword ? (
                <>
                  <TouchableOpacity
                    style={styles.closeButtonContainer}
                    onPress={toggleEmailPasswordLogin}>
                    <Text style={styles.emailText}>X</Text>
                  </TouchableOpacity>
                  <TextInput
                    style={styles.inputContainer}
                    placeholder="email"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                  />
                  <TextInput
                    style={styles.inputContainer}
                    placeholder="password"
                    autoCapitalize="none"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                  />
                  <TouchableOpacity
                    style={styles.emailButtonContainer}
                    onPress={signInWithEmailAndPassword}>
                    <Text style={styles.emailText}>
                      Sign in with email and password
                    </Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <Text style={styles.orText}>Or</Text>
                  <TouchableOpacity
                    style={styles.emailButtonContainer}
                    onPress={toggleEmailPasswordLogin}>
                    <Text style={styles.emailText}>Use email and password</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 0 : 40,
  },
  googleButtonContainer: {
    width: 240,
    minHeight: 40,
    backgroundColor: Colors.white,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
    overflow: 'visible',
    padding: 8,
    height: 40,
    marginBottom: 10,
    marginTop: 40,
  },
  fbButtonContainer: {
    width: 240,
    minHeight: 40,
    backgroundColor: '#1877f2',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
    overflow: 'visible',
    padding: 8,
    height: 40,
    marginVertical: 10,
  },
  appleButtonContainer: {
    width: 240,
    minHeight: 40,
    backgroundColor: Colors.black,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
    overflow: 'visible',
    padding: 8,
    height: 40,
    marginVertical: 10,
  },
  closeButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
    overflow: 'visible',
    marginVertical: 10,
  },
  emailButtonContainer: {
    width: 240,
    minHeight: 40,
    backgroundColor: Colors.white,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
    overflow: 'visible',
    padding: 8,
    height: 40,
    marginVertical: 10,
  },
  googleText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 24,
    color: 'rgba(0,0,0,0.54)',
  },
  fbText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 14,
    color: Colors.white,
  },
  appleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
  },
  emailText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.54)',
  },
  loginIcon: {
    width: 18,
    height: 18,
    marginLeft: 20,
  },
  appleIcon: {
    width: 44,
    height: 44,
    marginLeft: 8,
    marginRight: 12,
  },
  orText: {
    fontSize: 16,
    marginVertical: 20,
  },
  emailOptionText: {
    fontSize: 16,
    marginVertical: 20,
    fontWeight: '600',
    color: 'blue',
    width: '80%',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.54)',
    width: Dimensions.get('window').width * 0.8,
    height: 44,
    borderRadius: 8,
    padding: 8,
    fontSize: 14,
    marginVertical: 10,
  },
});

export default App;
