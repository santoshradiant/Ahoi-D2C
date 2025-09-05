import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView,
  Switch,
  Dimensions,
  Modal,
  Animated,
  TextInput,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

// SVG Icons
const PersonIcon = ({ color = '#0b8494' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const LocationIcon = ({ color = '#0b8494' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const FileTextIcon = ({ color = '#0b8494' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m14,2 6,6"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 13H8"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 17H8"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 9H8"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const MailIcon = ({ color = '#0b8494' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m22 6-10 7L2 6"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ChevronRightIcon = ({ color = '#858c9b' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="m9 18 6-6-6-6"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const LogOutIcon = ({ color = '#e7000b' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m16 17 5-5-5-5"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m21 12H9"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Bottom tab icons removed - now handled by tab navigator

interface ProfileProps {
  navigation?: any;
}

export default function Profile({ navigation }: ProfileProps) {
  const [emailUpdates, setEmailUpdates] = React.useState(true);
  const [showSignOutModal, setShowSignOutModal] = React.useState(false);
  const [showPersonalInfoModal, setShowPersonalInfoModal] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(0)).current;
  const personalInfoSlideAnim = React.useRef(new Animated.Value(0)).current;
  
  // Form state
  const [fullName, setFullName] = React.useState('Yousri Bouhamed');
  const [email, setEmail] = React.useState('yousri@bellman.media');
  const [phoneNumber, setPhoneNumber] = React.useState('+1 (555) 123-4567');
  const [defaultLocation, setDefaultLocation] = React.useState('Office Building, Floor 3');

  // Bottom tab navigation is now handled by the tab navigator

  const handleSignOutPress = () => {
    setShowSignOutModal(true);
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleDismissModal = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowSignOutModal(false);
    });
  };

  const handleConfirmSignOut = () => {
    // Handle actual sign out logic here
    handleDismissModal();
    // Navigate to sign in screen or perform sign out logic
    if (navigation) {
      navigation.navigate('SignIn');
    }
  };

  const handlePersonalInfoPress = () => {
    setShowPersonalInfoModal(true);
    Animated.timing(personalInfoSlideAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleDismissPersonalInfoModal = () => {
    Animated.timing(personalInfoSlideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowPersonalInfoModal(false);
    });
  };

  const handleSavePersonalInfo = () => {
    // Handle save logic here
    console.log('Saving personal info:', {
      fullName,
      email,
      phoneNumber,
      defaultLocation,
    });
    handleDismissPersonalInfoModal();
  };

  const handleUpdatePassword = () => {
    // Handle password update logic here
    console.log('Update password pressed');
  };

  const handleNavigation = (screenName: string) => {
    if (navigation) {
      navigation.navigate(screenName);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffddab" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <Image
                source={require('../assets/avatar.png')}
                style={styles.avatar}
                resizeMode="cover"
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>John Doe</Text>
              <Text style={styles.userEmail}>john.doe@company.com</Text>
            </View>
          </View>
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          {/* Account Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account</Text>
            <View style={styles.card}>
              <TouchableOpacity 
                style={[styles.menuItem, styles.borderBottom]} 
                onPress={handlePersonalInfoPress}
              >
                <View style={styles.menuItemLeft}>
                  <PersonIcon />
                  <Text style={styles.menuItemText}>Personal Information</Text>
                </View>
                <ChevronRightIcon />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => handleNavigation('ManageAddress')}
              >
                <View style={styles.menuItemLeft}>
                  <LocationIcon />
                  <Text style={styles.menuItemText}>Manage Addresses</Text>
                </View>
                <ChevronRightIcon />
              </TouchableOpacity>
            </View>
          </View>

          {/* Preferences Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>
            <View style={styles.card}>
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => handleNavigation('Terms')}
              >
                <View style={styles.menuItemLeft}>
                  <FileTextIcon />
                  <Text style={styles.menuItemText}>Terms & Privacy</Text>
                </View>
                <ChevronRightIcon />
              </TouchableOpacity>
            </View>
          </View>

          {/* Quick Settings Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Settings</Text>
            <View style={styles.card}>
              <View style={styles.settingItem}>
                <View style={styles.menuItemLeft}>
                  <MailIcon />
                  <View style={styles.settingTextContainer}>
                    <Text style={styles.menuItemText}>Email Updates</Text>
                    <Text style={styles.settingSubtext}>Get service confirmations via email</Text>
                  </View>
                </View>
                <Switch
                  value={emailUpdates}
                  onValueChange={setEmailUpdates}
                  trackColor={{ false: '#030213', true: '#030213' }}
                  thumbColor={emailUpdates ? '#ffffff' : '#ffffff'}
                  style={styles.switch}
                />
              </View>
            </View>
          </View>

          {/* Sign Out Button */}
          <TouchableOpacity style={styles.signOutButton} onPress={handleSignOutPress}>
            <LogOutIcon />
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation is now handled by the tab navigator */}

      {/* Sign Out Confirmation Modal */}
      <Modal
        visible={showSignOutModal}
        transparent={true}
        animationType="none"
        onRequestClose={handleDismissModal}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity 
            style={styles.modalBackground} 
            activeOpacity={1} 
            onPress={handleDismissModal}
          />
          <Animated.View
            style={[
              styles.modalContainer,
              {
                transform: [
                  {
                    translateY: slideAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [400, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            {/* Drag Handle */}
            <View style={styles.modalHeader}>
              <View style={styles.dragHandle} />
            </View>

            {/* Modal Content */}
            <View style={styles.modalContent}>
              {/* Title and Message */}
              <View style={styles.modalTextContainer}>
                <Text style={styles.modalTitle}>Sign out</Text>
                <Text style={styles.modalMessage}>
                  Are you sure that you want to sign out from your account?
                </Text>
              </View>

              {/* Buttons */}
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity 
                  style={styles.dismissButton} 
                  onPress={handleDismissModal}
                >
                  <Text style={styles.dismissButtonText}>Dismiss</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.confirmButton} 
                  onPress={handleConfirmSignOut}
                >
                  <Text style={styles.confirmButtonText}>Yes</Text>
                </TouchableOpacity>
              </View>

              {/* Home Indicator */}
              <View style={styles.homeIndicatorContainer}>
                <View style={styles.homeIndicator} />
              </View>
            </View>
          </Animated.View>
        </View>
      </Modal>

      {/* Personal Information Modal */}
      <Modal
        visible={showPersonalInfoModal}
        transparent={true}
        animationType="none"
        onRequestClose={handleDismissPersonalInfoModal}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity 
            style={styles.modalBackground} 
            activeOpacity={1} 
            onPress={handleDismissPersonalInfoModal}
          />
          <Animated.View
            style={[
              styles.personalInfoModalContainer,
              {
                transform: [
                  {
                    translateY: personalInfoSlideAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [600, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            {/* Drag Handle */}
            <View style={styles.modalHeader}>
              <View style={styles.dragHandle} />
            </View>

            {/* Modal Content */}
            <ScrollView style={styles.personalInfoModalContent} showsVerticalScrollIndicator={false}>
              {/* Title and Description */}
              <View style={styles.personalInfoHeader}>
                <Text style={styles.personalInfoTitle}>Edit Profile</Text>
                <Text style={styles.personalInfoDescription}>
                  Update your personal information and account details.
                </Text>
              </View>

              {/* Form Fields */}
              <View style={styles.formContainer}>
                {/* Full Name */}
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>Full Name</Text>
                  <TextInput
                    style={styles.textInput}
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Enter your full name"
                    placeholderTextColor="#858c9b"
                  />
                </View>

                {/* Email */}
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>Email</Text>
                  <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    placeholderTextColor="#858c9b"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                {/* Phone Number */}
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>Phone Number</Text>
                  <TextInput
                    style={styles.textInput}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholder="Enter your phone number"
                    placeholderTextColor="#858c9b"
                    keyboardType="phone-pad"
                  />
                </View>

                {/* Default Location */}
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>Default Location</Text>
                  <TextInput
                    style={styles.textInput}
                    value={defaultLocation}
                    onChangeText={setDefaultLocation}
                    placeholder="Enter your default location"
                    placeholderTextColor="#858c9b"
                  />
                </View>

                {/* Update Password Button */}
                <TouchableOpacity 
                  style={styles.updatePasswordButton}
                  onPress={handleUpdatePassword}
                >
                  <Text style={styles.updatePasswordText}>Update Password</Text>
                </TouchableOpacity>

                {/* Action Buttons */}
                <View style={styles.personalInfoButtonContainer}>
                  <TouchableOpacity 
                    style={styles.cancelButton} 
                    onPress={handleDismissPersonalInfoModal}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.saveButton} 
                    onPress={handleSavePersonalInfo}
                  >
                    <Text style={styles.saveButtonText}>Save Changes</Text>
                  </TouchableOpacity>
                </View>

                {/* Home Indicator */}
                <View style={styles.homeIndicatorContainer}>
                  <View style={styles.homeIndicator} />
                </View>
              </View>
            </ScrollView>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ffddab',
    paddingHorizontal: 14,
    paddingTop: Platform.OS === 'ios' ? 14 : 44,
    paddingBottom: 21,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 16.5,
    backgroundColor: '#e0b8ff',
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 16.5,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 19,
    fontWeight: '600',
    color: '#0b8494',
    lineHeight: 25.2,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  userEmail: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  content: {
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 63,
    gap: 21,
  },
  section: {
    gap: 10.5,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#858c9b',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12.75,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 15,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10.5,
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  settingTextContainer: {
    gap: 0.5,
  },
  settingSubtext: {
    fontSize: 12,
    fontWeight: '400',
    color: '#0b8494',
    lineHeight: 12,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  signOutButton: {
    backgroundColor: '#fbe8e8',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ffc9c9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    gap: 7,
    height: 36,
  },
  signOutText: {
    fontSize: 12.3,
    fontWeight: '400',
    color: '#e7000b',
    lineHeight: 17.5,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'System',
  },
  // Bottom navigation styles removed - now handled by tab navigator
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-end',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#171717',
    shadowOffset: {
      width: 0,
      height: -16,
    },
    shadowOpacity: 0.12,
    shadowRadius: 20.1,
    elevation: 16,
    maxWidth: 401,
    alignSelf: 'center',
    width: '100%',
  },
  modalHeader: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dragHandle: {
    width: 32,
    height: 4,
    backgroundColor: '#0b8494',
    borderRadius: 100,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 24,
    alignItems: 'center',
  },
  modalTextContainer: {
    gap: 8,
    alignItems: 'flex-start',
    width: '100%',
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: '400',
    color: '#1f232c',
    lineHeight: 31.5,
    fontFamily: Platform.OS === 'ios' ? 'Ghapter' : 'System',
  },
  modalMessage: {
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
    textAlign: 'center',
    width: '100%',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    gap: 7,
    width: '100%',
  },
  dismissButton: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dismissButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1f232c',
    lineHeight: 22.1,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#0b8494',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 22.1,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  homeIndicatorContainer: {
    backgroundColor: '#ffffff',
    height: 21,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
  homeIndicator: {
    width: 139,
    height: 5,
    backgroundColor: '#1f232c',
    borderRadius: 100,
  },
  // Personal Info Modal Styles
  personalInfoModalContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#171717',
    shadowOffset: {
      width: 0,
      height: -16,
    },
    shadowOpacity: 0.12,
    shadowRadius: 20.1,
    elevation: 16,
    maxWidth: 401,
    alignSelf: 'center',
    width: '100%',
    maxHeight: '80%',
  },
  personalInfoModalContent: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  personalInfoHeader: {
    gap: 8,
    marginBottom: 24,
  },
  personalInfoTitle: {
    fontSize: 21,
    fontWeight: '400',
    color: '#1f232c',
    lineHeight: 31.5,
    fontFamily: Platform.OS === 'ios' ? 'Ghapter' : 'System',
  },
  personalInfoDescription: {
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  formContainer: {
    gap: 13,
  },
  fieldContainer: {
    gap: 7,
  },
  fieldLabel: {
    fontSize: 15,
    fontWeight: '400',
    color: '#1f232c',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  textInput: {
    backgroundColor: '#f3f3f5',
    borderRadius: 6.75,
    paddingHorizontal: 11.5,
    paddingVertical: 7.25,
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
    height: 31.5,
  },
  updatePasswordButton: {
    backgroundColor: 'transparent',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updatePasswordText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    textDecorationLine: 'underline',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  personalInfoButtonContainer: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 8,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f232c',
    lineHeight: 14.3,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#0b8494',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 14.3,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
});
