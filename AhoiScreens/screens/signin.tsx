import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Svg, Path, G } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const isSmallScreen = height < 700;

// SVG Icons as components
const EmailIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M2.33333 2.33333H11.6667C12.4 2.33333 13 2.93333 13 3.66667V10.3333C13 11.0667 12.4 11.6667 11.6667 11.6667H2.33333C1.6 11.6667 1 11.0667 1 10.3333V3.66667C1 2.93333 1.6 2.33333 2.33333 2.33333Z"
      stroke="#717182"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13 3.66667L7 7.66667L1 3.66667"
      stroke="#717182"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const LockIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M11.6667 6.41667H2.33333C1.59695 6.41667 1 6.98695 1 7.69444V11.7222C1 12.4297 1.59695 13 2.33333 13H11.6667C12.403 13 13 12.4297 13 11.7222V7.69444C13 6.98695 12.403 6.41667 11.6667 6.41667Z"
      stroke="#717182"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.66667 6.41667V4.08333C3.66667 3.24493 4.00089 2.44071 4.59851 1.84309C5.19613 1.24548 6.00036 0.911255 6.83875 0.911255C7.67715 0.911255 8.48137 1.24548 9.07899 1.84309C9.67661 2.44071 10.0108 3.24493 10.0108 4.08333V6.41667"
      stroke="#717182"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const EyeIcon = ({ visible }: { visible: boolean }) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    {visible ? (
      <G>
        <Path
          d="M0.583313 7.00001C0.583313 7.00001 2.91665 2.33334 6.99998 2.33334C11.0833 2.33334 13.4166 7.00001 13.4166 7.00001C13.4166 7.00001 11.0833 11.6667 6.99998 11.6667C2.91665 11.6667 0.583313 7.00001 0.583313 7.00001Z"
          stroke="#717182"
          strokeWidth={1.16667}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
          stroke="#717182"
          strokeWidth={1.16667}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    ) : (
      <G>
        <Path
          d="M8.16665 5.83334C7.93332 5.59167 7.63332 5.41667 7.29165 5.33334C6.94998 5.25001 6.59165 5.26667 6.25832 5.38334C5.92498 5.50001 5.63332 5.71667 5.41665 6.00834C5.19998 6.30001 5.08332 6.65001 5.08332 7.00834"
          stroke="#717182"
          strokeWidth={1.16667}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.89165 3.89166C2.84165 4.60833 1.99998 5.70833 1.49998 7.00833C2.91665 10.0917 4.91665 11.6667 6.99998 11.6667C8.09165 11.6667 9.09998 11.3417 9.99165 10.775"
          stroke="#717182"
          strokeWidth={1.16667}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1.16669 1.16666L12.8334 12.8333"
          stroke="#717182"
          strokeWidth={1.16667}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    )}
  </Svg>
);

const LogoIcon = () => (
  <Svg width={64} height={64} viewBox="0 0 64 64" fill="none">
    <Path
      d="M20.3418 29.7995C19.4771 28.8787 18.1294 28.9347 17.5567 30.114L3.42905 58.3015C2.86755 59.4246 3.69855 60.7386 4.93392 60.7386H24.5867C25.2379 60.7499 25.8221 60.3791 26.0916 59.7952C30.3478 51.0582 27.7873 37.7504 20.3418 29.7995Z"
      fill="#0C62DC"
    />
    <Path
      d="M30.6959 4.16124C16.9615 25.8802 29.7413 43.3092 37.9954 59.8064C38.2762 60.3792 38.8602 60.75 39.5003 60.75H59.0633C60.3212 60.75 61.1295 59.4247 60.5682 58.3129C60.5682 58.3129 34.2333 5.46386 33.5707 4.14999C32.9757 2.95949 31.4595 2.93711 30.6959 4.16124Z"
      fill="#2681FF"
    />
  </Svg>
);

interface SignInProps {
  navigation?: any; // Add proper navigation type if using react-navigation
}

export default function SignIn({ navigation }: SignInProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleSignIn = () => {
    // Handle sign in logic
    console.log('Sign in pressed', { email, password });
    // Navigate to MainTabs (which contains the tab navigation)
    navigation?.navigate('MainTabs');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic
    console.log('Forgot password pressed');
  };

  const handleSignUp = () => {
    // Handle sign up navigation
    console.log('Sign up pressed');
    navigation?.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      <KeyboardAvoidingView 
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.content}>
            {/* Logo */}
            <View style={styles.logoContainer}>
              <LogoIcon />
            </View>

            {/* Header Section */}
            <View style={styles.headerContainer}>
              <Text style={styles.welcomeTitle}>Welcome Back</Text>
              <Text style={styles.subtitle}>Sign in to manage your service requests</Text>
            </View>

            {/* Form Container */}
            <View style={styles.formContainer}>
              <View style={styles.formBackground}>
                {/* Email Field */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Email Address</Text>
                  <View style={styles.inputWrapper}>
                    <View style={[styles.input, emailFocused && styles.inputFocused]}>
                      <View style={styles.iconContainer}>
                        <EmailIcon />
                      </View>
                      <TextInput
                        style={styles.textInput}
                        placeholder="john.doe@company.com"
                        placeholderTextColor="#717182"
                        value={email}
                        onChangeText={setEmail}
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(false)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        blurOnSubmit={false}
                      />
                    </View>
                  </View>
                </View>

                {/* Password Field */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.inputWrapper}>
                    <View style={[styles.input, passwordFocused && styles.inputFocused]}>
                      <View style={styles.iconContainer}>
                        <LockIcon />
                      </View>
                      <TextInput
                        style={styles.textInput}
                        placeholder="Enter your password"
                        placeholderTextColor="#717182"
                        value={password}
                        onChangeText={setPassword}
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="done"
                        onSubmitEditing={handleSignIn}
                      />
                      <TouchableOpacity
                        style={styles.eyeIconContainer}
                        onPress={() => setShowPassword(!showPassword)}
                        activeOpacity={0.7}
                      >
                        <EyeIcon visible={showPassword} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {/* Forgot Password */}
                <View style={styles.forgotPasswordContainer}>
                  <TouchableOpacity onPress={handleForgotPassword} activeOpacity={0.7}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>

                {/* Sign In Button */}
                <TouchableOpacity 
                  style={styles.signInButton} 
                  onPress={handleSignIn}
                  activeOpacity={0.8}
                >
                  <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>
              </View>

              {/* Sign Up Link */}
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have an account? </Text>
                <TouchableOpacity onPress={handleSignUp} activeOpacity={0.7}>
                  <Text style={styles.signUpLink}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    minHeight: height,
  },
  content: {
    flex: 1,
    paddingHorizontal: Math.max(20, width * 0.05),
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: isSmallScreen ? 24 : 32,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: isSmallScreen ? 24 : 32,
    gap: 8,
    paddingHorizontal: 10,
  },
  welcomeTitle: {
    fontSize: isSmallScreen ? 17 : 19,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    lineHeight: isSmallScreen ? 22 : 25.2,
  },
  subtitle: {
    fontSize: isSmallScreen ? 14 : 15,
    fontWeight: '500',
    color: '#717182',
    textAlign: 'center',
    lineHeight: isSmallScreen ? 16 : 18,
  },
  formContainer: {
    paddingHorizontal: Math.max(16, width * 0.04),
    gap: isSmallScreen ? 24 : 32,
  },
  formBackground: {
    backgroundColor: '#ffffff',
    borderRadius: 12.75,
    paddingHorizontal: Math.max(18, width * 0.045),
    paddingVertical: isSmallScreen ? 18 : 21,
    gap: isSmallScreen ? 11 : 13,
    // Shadow for iOS
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 2,
    // Border
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  inputContainer: {
    gap: 7,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0a0a0a',
    lineHeight: 18,
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#f3f3f5',
    borderRadius: 6.75,
    height: Math.max(31.5, height * 0.04),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 36,
    position: 'relative',
    minHeight: 31.5,
  },
  inputFocused: {
    backgroundColor: '#f0f0f2',
    borderWidth: 1,
    borderColor: '#0b8494',
  },
  iconContainer: {
    position: 'absolute',
    left: 10.5,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10.5,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-start',
    paddingTop: 1,
  },
  forgotPasswordText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#858c9b',
    lineHeight: 14.3,
  },
  signInButton: {
    backgroundColor: '#0b8494',
    borderRadius: 6,
    height: Math.max(40, height * 0.05),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 40,
  },
  signInButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 14.3,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
  },
  signUpLink: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
  },
});
