import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

// Avatar component
const Avatar = ({ size = 48 }: { size?: number }) => (
  <Image
    source={require('../assets/avatar.png')}
    style={[styles.avatar, { width: size, height: size }]}
    resizeMode="cover"
  />
);

// SVG Icons
const CalendarIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M11.0833 2.33333H2.91667C2.22631 2.33333 1.66667 2.89298 1.66667 3.58333V11.75C1.66667 12.4404 2.22631 13 2.91667 13H11.0833C11.7737 13 12.3333 12.4404 12.3333 11.75V3.58333C12.3333 2.89298 11.7737 2.33333 11.0833 2.33333Z"
      stroke="#717182"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.33333 1.16667V3.5"
      stroke="#717182"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.66667 1.16667V3.5"
      stroke="#717182"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.66667 5.83333H12.3333"
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
      stroke="#1F232C"
      strokeWidth={1.75}
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
      strokeWidth={1.75}
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

interface ServiceDetailsScheduleProps {
  navigation?: any;
}

export default function ServiceDetailsSchedule({ navigation }: ServiceDetailsScheduleProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM',
    '11:00 AM', '12:00 PM', '1:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM'
  ];

  const handleBack = () => {
    console.log('Back pressed');
    navigation?.goBack();
  };

  const handleNext = () => {
    console.log('Next pressed');
    navigation?.navigate('ServiceDetailPayment');
  };

  const handleRequest = () => {
    navigation?.navigate('ServiceDetails');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFDDAB" />
      
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
              <Text style={styles.stepText}>Step 2 of 4</Text>
            </View>
          </View>

          {/* Step Progress */}
          <View style={styles.stepContainer}>
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Image
                  source={{ uri: "http://localhost:3845/assets/5c5a52f5f3638bec44c5aa43fbd9ee49a0cc7d6e.svg" }}
                  style={styles.stepIcon}
                />
              </View>
              <Text style={styles.stepLabel}>Service Details</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={[styles.stepCircle, styles.stepCircleActive]}>
                <Text style={styles.stepNumberActive}>2</Text>
              </View>
              <Text style={styles.stepLabel}>Schedule</Text>
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
            <Text style={styles.formTitle}>Schedule Service</Text>
            <Text style={styles.formSubtitle}>When would you like us to help?</Text>
          </View>

          <View style={styles.formFields}>
            {/* Preferred Date */}
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Preferred Date</Text>
              <View style={styles.dateInputContainer}>
                <View style={styles.dateIconContainer}>
                  <CalendarIcon />
                </View>
                <View style={styles.dateInput}>
                  <Text style={styles.datePlaceholder}>dd/mm/yyyy</Text>
                </View>
                <TouchableOpacity style={styles.calendarButton}>
                  <Image
                    source={{ uri: "http://localhost:3845/assets/128ec7b23035654077fa1c5fe25a68ba52552863.svg" }}
                    style={styles.calendarIcon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.dateHint}>Leave blank if you're flexible with timing</Text>
            </View>

            {/* Preferred Time */}
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Preferred Time</Text>
              <View style={styles.timeGrid}>
                {timeSlots.map((time, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.timeSlot,
                      selectedTime === time && styles.timeSlotSelected
                    ]}
                    onPress={() => handleTimeSelect(time)}
                  >
                    <Text style={[
                      styles.timeSlotText,
                      selectedTime === time && styles.timeSlotTextSelected
                    ]}>
                      {time}
                    </Text>
                  </TouchableOpacity>
                ))}
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

      {/* Bottom Navigation is now handled by the tab navigator */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    borderRadius: 16.5,
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
  stepIcon: {
    width: 21,
    height: 21,
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
    width: '50%', // 50% for step 2 of 4
    backgroundColor: '#030213',
  },
  formContainer: {
    flex: 1,
    padding: 14,
  },
  formHeader: {
    marginBottom: 21,
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
  dateInputContainer: {
    backgroundColor: '#F4F4F4',
    height: 31.5,
    borderRadius: 6.75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 36,
    paddingRight: 11.5,
    position: 'relative',
  },
  dateIconContainer: {
    position: 'absolute',
    left: 10.5,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateInput: {
    flex: 1,
    paddingVertical: 4.5,
  },
  datePlaceholder: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
  },
  calendarButton: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarIcon: {
    width: 14,
    height: 13.125,
  },
  dateHint: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 12,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 12,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
    marginTop: 7,
  },
  timeSlot: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 6.75,
    height: 35,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '30%',
    flexGrow: 1,
    maxWidth: '32%',
  },
  timeSlotSelected: {
    backgroundColor: '#0B8494',
    borderColor: '#0B8494',
  },
  timeSlotText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#0A0A0A',
    lineHeight: 14.3,
    textAlign: 'center',
  },
  timeSlotTextSelected: {
    color: '#FFFFFF',
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
    fontSize: 17,
    fontWeight: '600',
    color: '#1F232C',
    lineHeight: 22.1,
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
  // Bottom navigation styles removed - now handled by tab navigator
});
