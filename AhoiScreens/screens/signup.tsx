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
const PersonIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M11.6667 12.25V11.0833C11.6667 10.4636 11.4208 9.86904 10.9832 9.43145C10.5456 8.99386 9.95108 8.74999 9.33333 8.74999H4.66667C4.04892 8.74999 3.45434 8.99386 3.01675 9.43145C2.57916 9.86904 2.33333 10.4636 2.33333 11.0833V12.25"
      stroke="#717182"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 6.41667C8.28866 6.41667 9.33333 5.372 9.33333 4.08333C9.33333 2.79467 8.28866 1.75 7 1.75C5.71134 1.75 4.66667 2.79467 4.66667 4.08333C4.66667 5.372 5.71134 6.41667 7 6.41667Z"
      stroke="#717182"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

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

const PhoneIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M12.8333 9.91667V11.6667C12.8333 12.0203 12.693 12.3594 12.4429 12.6095C12.1928 12.8596 11.8537 13 11.5 13C8.68333 12.8167 5.98333 11.6667 3.85 9.53333C1.71667 7.4 0.566667 4.7 0.383333 1.88333C0.383333 1.52971 0.523809 1.19057 0.773905 0.940476C1.024 0.690381 1.36314 0.55 1.71667 0.55H3.46667C3.62536 0.549722 3.78036 0.604722 3.90536 0.705556C4.03036 0.806389 4.11833 0.946667 4.15 1.1C4.20667 1.40667 4.29 1.70667 4.4 2C4.46667 2.18333 4.46667 2.38333 4.4 2.56667C4.33333 2.75 4.2 2.90667 4.03333 3.01667L3.26667 3.78333C4.18333 5.85 5.81667 7.48333 7.88333 8.4L8.65 7.63333C8.76 7.46667 8.91667 7.33333 9.1 7.26667C9.28333 7.2 9.48333 7.2 9.66667 7.26667C9.96 7.37667 10.26 7.46 10.5667 7.51667C10.7233 7.54833 10.8633 7.63833 10.9633 7.76333C11.0633 7.88833 11.1183 8.04333 11.1167 8.2V9.95L12.8333 9.91667Z"
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

interface SignUpProps {
  navigation?: any;
}

export default function SignUp({ navigation }: SignUpProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  // Focus states
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const handleSignUp = () => {
    if (!agreeToTerms) {
      console.log('Please agree to terms of service');
      return;
    }
    console.log('Sign up pressed', { 
      firstName, 
      lastName, 
      email, 
      phone, 
      password, 
      confirmPassword 
    });
    // Navigate to next screen or handle signup logic
  };

  const handleSignIn = () => {
    console.log('Sign in pressed');
    navigation?.navigate('SignIn');
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
              <Text style={styles.subtitle}>Sign up to manage your service requests</Text>
            </View>

            {/* Form Container */}
            <View style={styles.formContainer}>
              <View style={styles.formBackground}>
                {/* Name Fields Row */}
                <View style={styles.nameRow}>
                  <View style={styles.nameField}>
                    <Text style={styles.label}>First Name</Text>
                    <View style={styles.inputWrapper}>
                      <View style={[styles.input, firstNameFocused && styles.inputFocused]}>
                        <View style={styles.iconContainer}>
                          <PersonIcon />
                        </View>
                        <TextInput
                          style={styles.textInput}
                          placeholder="John"
                          placeholderTextColor="#717182"
                          value={firstName}
                          onChangeText={setFirstName}
                          onFocus={() => setFirstNameFocused(true)}
                          onBlur={() => setFirstNameFocused(false)}
                          autoCapitalize="words"
                          returnKeyType="next"
                        />
                      </View>
                    </View>
                  </View>
                  
                  <View style={styles.nameField}>
                    <Text style={styles.label}>Last Name</Text>
                    <View style={styles.inputWrapper}>
                      <View style={[styles.input, lastNameFocused && styles.inputFocused]}>
                        <TextInput
                          style={[styles.textInput, styles.textInputNoIcon]}
                          placeholder="Doe"
                          placeholderTextColor="#717182"
                          value={lastName}
                          onChangeText={setLastName}
                          onFocus={() => setLastNameFocused(true)}
                          onBlur={() => setLastNameFocused(false)}
                          autoCapitalize="words"
                          returnKeyType="next"
                        />
                      </View>
                    </View>
                  </View>
                </View>

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
                      />
                    </View>
                  </View>
                </View>

                {/* Phone Field */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Phone Number</Text>
                  <View style={styles.inputWrapper}>
                    <View style={[styles.input, phoneFocused && styles.inputFocused]}>
                      <View style={styles.iconContainer}>
                        <PhoneIcon />
                      </View>
                      <TextInput
                        style={styles.textInput}
                        placeholder="+1 (555) 123-4567"
                        placeholderTextColor="#717182"
                        value={phone}
                        onChangeText={setPhone}
                        onFocus={() => setPhoneFocused(true)}
                        onBlur={() => setPhoneFocused(false)}
                        keyboardType="phone-pad"
                        returnKeyType="next"
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
                        placeholder="Create a strong password"
                        placeholderTextColor="#717182"
                        value={password}
                        onChangeText={setPassword}
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
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
                  <Text style={styles.passwordHint}>
                    Must be 8+ characters with uppercase,{'\n'}lowercase, and number
                  </Text>
                </View>

                {/* Confirm Password Field */}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Confirm Password</Text>
                  <View style={styles.inputWrapper}>
                    <View style={[styles.input, confirmPasswordFocused && styles.inputFocused]}>
                      <View style={styles.iconContainer}>
                        <LockIcon />
                      </View>
                      <TextInput
                        style={styles.textInput}
                        placeholder="Confirm your password"
                        placeholderTextColor="#717182"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        onFocus={() => setConfirmPasswordFocused(true)}
                        onBlur={() => setConfirmPasswordFocused(false)}
                        secureTextEntry={!showConfirmPassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="done"
                        onSubmitEditing={handleSignUp}
                      />
                      <TouchableOpacity
                        style={styles.eyeIconContainer}
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                        activeOpacity={0.7}
                      >
                        <EyeIcon visible={showConfirmPassword} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {/* Terms and Conditions Checkbox */}
                <View style={styles.termsContainer}>
                  <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setAgreeToTerms(!agreeToTerms)}
                    activeOpacity={0.7}
                  >
                    <View style={[styles.checkbox, agreeToTerms && styles.checkboxChecked]} />
                    <Text style={styles.termsText}>
                      I agree to the <Text style={styles.termsLink}>terms of service</Text>
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Sign Up Button */}
                <TouchableOpacity 
                  style={[styles.signUpButton, !agreeToTerms && styles.signUpButtonDisabled]} 
                  onPress={handleSignUp}
                  activeOpacity={0.8}
                  disabled={!agreeToTerms}
                >
                  <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableOpacity>
              </View>

              {/* Sign In Link */}
              <View style={styles.signInContainer}>
                <Text style={styles.signInText}>Don't have an account? </Text>
                <TouchableOpacity onPress={handleSignIn} activeOpacity={0.7}>
                  <Text style={styles.signInLink}>Sign In</Text>
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
    paddingTop: Platform.OS === 'ios' ? 20 : 40,
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: isSmallScreen ? 16 : 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: isSmallScreen ? 16 : 24,
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
    gap: isSmallScreen ? 16 : 24,
  },
  formBackground: {
    backgroundColor: '#ffffff',
    borderRadius: 12.75,
    paddingHorizontal: Math.max(18, width * 0.045),
    paddingVertical: isSmallScreen ? 16 : 21,
    gap: isSmallScreen ? 13 : 16,
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
  nameRow: {
    flexDirection: 'row',
    gap: 10.5,
  },
  nameField: {
    flex: 1,
    gap: 7,
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
  textInputNoIcon: {
    paddingLeft: 11.5,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10.5,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordHint: {
    fontSize: 10.5,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 14,
    marginTop: 7,
  },
  termsContainer: {
    marginTop: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    backgroundColor: '#fdfdfd',
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: '#0b8494',
    borderColor: '#0b8494',
  },
  termsText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0a0a0a',
    lineHeight: 16,
    flex: 1,
  },
  termsLink: {
    textDecorationLine: 'underline',
    color: '#0a0a0a',
  },
  signUpButton: {
    backgroundColor: '#0b8494',
    borderRadius: 6,
    height: Math.max(40, height * 0.05),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 40,
    marginTop: 8,
  },
  signUpButtonDisabled: {
    backgroundColor: '#a0a0a0',
  },
  signUpButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 14.3,
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
  },
  signInLink: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
  },
});
