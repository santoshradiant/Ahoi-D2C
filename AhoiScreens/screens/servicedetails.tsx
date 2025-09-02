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
  ScrollView,
  Image,
} from 'react-native';
import { Svg, Path, G } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const isSmallScreen = height < 700;

// Avatar component
const Avatar = ({ size = 48 }: { size?: number }) => (
  <View style={[styles.avatar, { width: size, height: size }]}>
    <Image
      source={{ uri: "http://localhost:3845/assets/18e01e2a8ee181c23b1a83841d2dd01e220d6520.png" }}
      style={styles.avatarImage}
      resizeMode="cover"
    />
  </View>
);

// SVG Icons
const ChevronDownIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M3.5 5.25L7 8.75L10.5 5.25"
      stroke="#717182"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const LocationIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M7 7.58333C7.96649 7.58333 8.75 6.79982 8.75 5.83333C8.75 4.86684 7.96649 4.08333 7 4.08333C6.03351 4.08333 5.25 4.86684 5.25 5.83333C5.25 6.79982 6.03351 7.58333 7 7.58333Z"
      stroke="#717182"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 1.16667C5.67392 1.16667 4.40215 1.69375 3.46447 2.63143C2.52678 3.56912 2 4.84089 2 6.16667C2 7.49244 2.52678 8.76421 3.46447 9.70189L7 13.2375L10.5355 9.70189C11.4732 8.76421 12 7.49244 12 6.16667C12 4.84089 11.4732 3.56912 10.5355 2.63143C9.59785 1.69375 8.32608 1.16667 7 1.16667Z"
      stroke="#717182"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ArrowLeftIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M10 12L6 8L10 4"
      stroke="#ABB0BA"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ArrowRightIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M6 4L10 8L6 12"
      stroke="#FFFFFF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CameraIcon = () => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M19.25 15.75C19.25 16.2141 19.0656 16.6592 18.7374 16.9874C18.4092 17.3156 17.9641 17.5 17.5 17.5H3.5C3.03587 17.5 2.59075 17.3156 2.26256 16.9874C1.93437 16.6592 1.75 16.2141 1.75 15.75V7C1.75 6.53587 1.93437 6.09075 2.26256 5.76256C2.59075 5.43437 3.03587 5.25 3.5 5.25H6.125L7.875 3.5H13.125L14.875 5.25H17.5C17.9641 5.25 18.4092 5.43437 18.7374 5.76256C19.0656 6.09075 19.25 6.53587 19.25 7V15.75Z"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 14C12.5711 14 14.25 12.3211 14.25 10.25C14.25 8.17893 12.5711 6.5 10.5 6.5C8.42893 6.5 6.75 8.17893 6.75 10.25C6.75 12.3211 8.42893 14 10.5 14Z"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Bottom Navigation Icons
const HomeIcon = () => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M8.75 17.5V11.375H12.25V17.5M2.625 8.75L10.5 2.625L18.375 8.75V16.625C18.375 17.0891 18.1906 17.5342 17.8624 17.8624C17.5342 18.1906 17.0891 18.375 16.625 18.375H4.375C3.91087 18.375 3.46575 18.1906 3.13756 17.8624C2.80937 17.5342 2.625 17.0891 2.625 16.625V8.75Z"
      stroke="#C7CAD1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const RequestIcon = () => (
  <Svg width={23.1} height={23.1} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 8V16"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 12H16"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PaymentsIcon = () => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M18.375 4.375H2.625C1.93464 4.375 1.375 4.93464 1.375 5.625V15.375C1.375 16.0654 1.93464 16.625 2.625 16.625H18.375C19.0654 16.625 19.625 16.0654 19.625 15.375V5.625C19.625 4.93464 19.0654 4.375 18.375 4.375Z"
      stroke="#C7CAD1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.375 8.75H19.625"
      stroke="#C7CAD1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ProfileIcon = () => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M17.5 18.375V16.625C17.5 15.7299 17.1444 14.8715 16.5115 14.2385C15.8785 13.6056 15.0201 13.25 14.125 13.25H6.875C5.97989 13.25 5.12145 13.6056 4.48851 14.2385C3.85558 14.8715 3.5 15.7299 3.5 16.625V18.375"
      stroke="#C7CAD1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 9.625C12.5711 9.625 14.25 7.94607 14.25 5.875C14.25 3.80393 12.5711 2.125 10.5 2.125C8.42893 2.125 6.75 3.80393 6.75 5.875C6.75 7.94607 8.42893 9.625 10.5 9.625Z"
      stroke="#C7CAD1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

interface ServiceDetailsProps {
  navigation?: any;
}

export default function ServiceDetails({ navigation }: ServiceDetailsProps) {
  const [serviceType, setServiceType] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  const handleBack = () => {
    console.log('Back pressed');
    navigation?.goBack();
  };

  const handleNext = () => {
    console.log('Next pressed');
    // navigation?.navigate('Schedule');
  };

  const handleRequest = () => {
    console.log('Request pressed');
  };

  const handleChooseFiles = () => {
    console.log('Choose Files pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFDDAB" />
      
      {/* Status Bar */}
   

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.headerBackground}>
          <View style={styles.headerContainer}>
            <View style={styles.userSection}>
              <Avatar size={48} />
              <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeTitle}>Welcome back!</Text>
                <Text style={styles.welcomeSubtitle}>How can we help you today?</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.requestButton} onPress={handleRequest}>
              <Text style={styles.requestButtonText}>+ Request</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Progress Section */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.createRequestText}>Create Request</Text>
            <View style={styles.stepIndicator}>
              <Text style={styles.stepText}>Step 1 of 4</Text>
            </View>
          </View>

          {/* Step Progress */}
          <View style={styles.stepContainer}>
            <View style={styles.stepItem}>
              <View style={[styles.stepCircle, styles.stepCircleActive]}>
                <Text style={styles.stepNumberActive}>1</Text>
              </View>
              <Text style={styles.stepLabel}>Service Details</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumber}>2</Text>
              </View>
              <Text style={styles.stepLabelInactive}>Schedule</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumber}>3</Text>
              </View>
              <Text style={styles.stepLabelInactive}>Payment</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumber}>4</Text>
              </View>
              <Text style={styles.stepLabelInactive}>Review & Submit</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Form Content */}
        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>Service Request</Text>
            <Text style={styles.formSubtitle}>Tell us what service you need and where</Text>
          </View>

          <View style={styles.formFields}>
            {/* Service Type */}
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Service Type</Text>
              <TouchableOpacity 
                style={styles.dropdown}
                onPress={() => setShowServiceDropdown(!showServiceDropdown)}
              >
                <Text style={styles.dropdownPlaceholder}>Choose a service type</Text>
                <ChevronDownIcon />
              </TouchableOpacity>
            </View>

            {/* Location */}
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Location</Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputIconContainer}>
                  <LocationIcon />
                </View>
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g., Conference Room A, Floor 3"
                  placeholderTextColor="#717182"
                  value={location}
                  onChangeText={setLocation}
                />
              </View>
            </View>

            {/* Description */}
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Description</Text>
              <TextInput
                style={styles.textArea}
                placeholder="Please describe the issue or service needed..."
                placeholderTextColor="#717182"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>

            {/* Attachments */}
            <View style={styles.attachmentsContainer}>
              <Text style={styles.fieldLabel}>Attachments (Optional)</Text>
              <View style={styles.uploadArea}>
                <Text style={styles.uploadText}>Add photos or documents (max 5 files, 10MB each)</Text>
                <TouchableOpacity style={styles.chooseFilesButton} onPress={handleChooseFiles}>
                  <CameraIcon />
                  <Text style={styles.chooseFilesText}>Choose Files</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Buttons */}
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <ArrowLeftIcon />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
          <ArrowRightIcon />
        </TouchableOpacity>
      </View>

      {/* Bottom Tab Navigation */}
      <View style={styles.bottomTabContainer}>
        <TouchableOpacity style={styles.tabItem}>
          <HomeIcon />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, styles.tabItemActive]}>
          <RequestIcon />
          <Text style={styles.tabLabelActive}>Request</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <PaymentsIcon />
          <Text style={styles.tabLabel}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <ProfileIcon />
          <Text style={styles.tabLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 23,
    height: 44,
    backgroundColor: '#FFFFFF',
  },
  timeText: {
    fontFamily: Platform.OS === 'ios' ? 'Urbanist-SemiBold' : 'sans-serif',
    fontSize: 16,
    fontWeight: '600',
    color: '#1F232C',
    letterSpacing: 0.2,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  headerBackground: {
    backgroundColor: '#FFDDAB',
    paddingTop: 14,
    paddingBottom: 21,
    paddingHorizontal: 14,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    backgroundColor: '#E0B8FF',
    borderRadius: 16.5,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  welcomeContainer: {
    gap: 0,
  },
  welcomeTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 19,
    fontWeight: '600',
    color: '#0B8494',
    lineHeight: 25.2,
  },
  welcomeSubtitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#1F232C',
    lineHeight: 18,
  },
  requestButton: {
    backgroundColor: '#0B8494',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  requestButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 14.3,
  },
  progressSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 21,
  },
  createRequestText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#0A0A0A',
    lineHeight: 14.3,
  },
  stepIndicator: {
    backgroundColor: '#ECEEF2',
    paddingHorizontal: 11.5,
    paddingVertical: 2.75,
    borderRadius: 6.75,
  },
  stepText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#0A0A0A',
    lineHeight: 14.3,
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  stepItem: {
    alignItems: 'center',
    flex: 1,
  },
  stepCircle: {
    width: 21,
    height: 21,
    borderRadius: 21,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3.5,
  },
  stepCircleActive: {
    backgroundColor: '#030213',
  },
  stepNumber: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 14.3,
  },
  stepNumberActive: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 14.3,
  },
  stepLabel: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#0A0A0A',
    lineHeight: 14.3,
    textAlign: 'center',
  },
  stepLabelInactive: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#858C9B',
    lineHeight: 14.3,
    textAlign: 'center',
  },
  progressBar: {
    height: 7,
    backgroundColor: 'rgba(3,2,19,0.2)',
    borderRadius: 7,
    marginBottom: 14,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '25%',
    backgroundColor: '#030213',
  },
  formContainer: {
    flex: 1,
    padding: 14,
  },
  formHeader: {
    marginBottom: 32,
    gap: 7,
  },
  formTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 17,
    fontWeight: '600',
    color: '#0A0A0A',
    lineHeight: 22.1,
  },
  formSubtitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#0B8494',
    lineHeight: 18,
  },
  formFields: {
    gap: 13,
  },
  fieldContainer: {
    gap: 7,
  },
  fieldLabel: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#0A0A0A',
    lineHeight: 18,
  },
  dropdown: {
    backgroundColor: '#F4F4F4',
    height: 31.5,
    borderRadius: 6.75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 11.5,
    paddingVertical: 8,
  },
  dropdownPlaceholder: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
  },
  inputContainer: {
    backgroundColor: '#F4F4F4',
    height: 31.5,
    borderRadius: 6.75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 36,
    paddingRight: 11.5,
    position: 'relative',
  },
  inputIconContainer: {
    position: 'absolute',
    left: 10.5,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18,
    paddingVertical: 0,
  },
  textArea: {
    backgroundColor: '#F4F4F4',
    height: 58,
    borderRadius: 6.75,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18,
    paddingHorizontal: 11.5,
    paddingTop: 8,
    paddingBottom: 8,
  },
  attachmentsContainer: {
    gap: 7,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  uploadArea: {
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.1)',
    borderStyle: 'dashed',
    borderRadius: 8.75,
    height: 107,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 16,
  },
  uploadText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 14.3,
    textAlign: 'center',
  },
  chooseFilesButton: {
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 32,
  },
  chooseFilesText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 12,
    fontWeight: '400',
    color: '#1F232C',
    lineHeight: 12,
  },
  bottomButtonsContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingTop: 15,
    paddingBottom: 14,
    gap: 7,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  backButton: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
  },
  backButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '600',
    color: '#ABB0BA',
    lineHeight: 14.3,
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#0B8494',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
  },
  nextButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 22.1,
  },
  bottomTabContainer: {
    backgroundColor: '#0B8494',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 92,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3.5,
    paddingHorizontal: 7,
    paddingVertical: 7,
    borderRadius: 8.75,
  },
  tabItemActive: {
    gap: 2.45,
  },
  tabLabel: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#C7CAD1',
    lineHeight: 18,
    textAlign: 'center',
  },
  tabLabelActive: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: 18,
    textAlign: 'center',
  },
});
