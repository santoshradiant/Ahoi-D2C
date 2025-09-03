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
  Dimensions,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

// SVG Components for icons (replacing localhost images)
const EyeIcon = ({ color = '#ffffff' }: { color?: string }) => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Path
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CheckIcon = ({ color = '#008236' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 6L9 17l-5-5"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ClockIcon = ({ color = '#a65f00' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 6v6l4 2"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ArrowRightIcon = ({ color = '#030213' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 12h14M12 5l7 7-7 7"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Avatar placeholder component
const AvatarPlaceholder = () => (
  <View style={styles.avatarPlaceholder}>
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke="#0b8494"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="#0b8494"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

// Navigation SVG Icons
const HomeIcon = ({ color = '#ffffff' }: { color?: string }) => (
  <Svg width={23.1} height={23.1} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      stroke={color}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
    />
    <Path
      d="M9 22V12H15V22"
      stroke={color}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const RequestIcon = ({ color = '#c7cad1' }: { color?: string }) => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M10.5 19.25C15.3325 19.25 19.25 15.3325 19.25 10.5C19.25 5.66751 15.3325 1.75 10.5 1.75C5.66751 1.75 1.75 5.66751 1.75 10.5C1.75 15.3325 5.66751 19.25 10.5 19.25Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 7V14"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 10.5H14"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PaymentsIcon = ({ color = '#c7cad1' }: { color?: string }) => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M18.375 3.9375H2.625C2.17772 3.9375 1.8125 4.30272 1.8125 4.75V16.25C1.8125 16.6973 2.17772 17.0625 2.625 17.0625H18.375C18.8223 17.0625 19.1875 16.6973 19.1875 16.25V4.75C19.1875 4.30272 18.8223 3.9375 18.375 3.9375Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.8125 8.75H19.1875"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ProfileIcon = ({ color = '#c7cad1' }: { color?: string }) => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M17.5 18.375V16.625C17.5 15.7962 17.1708 15.0013 16.5847 14.4153C15.9987 13.8292 15.2038 13.5 14.375 13.5H6.625C5.79616 13.5 5.00134 13.8292 4.41529 14.4153C3.82924 15.0013 3.5 15.7962 3.5 16.625V18.375"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 10C12.2259 10 13.625 8.60089 13.625 6.875C13.625 5.14911 12.2259 3.75 10.5 3.75C8.77411 3.75 7.375 5.14911 7.375 6.875C7.375 8.60089 8.77411 10 10.5 10Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

interface HomeFilledScreenProps {
  navigation?: any;
}

const HomeFilledScreen: React.FC<HomeFilledScreenProps> = ({ navigation }) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const isSmallScreen = screenWidth < 375;
  const isTablet = screenWidth > 768;

  const handleRequestPress = () => {
    console.log('Request button pressed');
  };

  const handleViewAllPress = () => {
    console.log('View All pressed');
  };

  const handleViewDetailsPress = (requestId: string) => {
    console.log(`View Details pressed for ${requestId}`);
  };

  const handleTabPress = (tabName: string) => {
    if (tabName === 'Home' && navigation) {
      // Navigate back to the empty home screen
      navigation.navigate('Home');
    } else if (tabName === 'Request' && navigation) {
      // Navigate to ServiceDetails screen
      console.log('Navigating to ServiceDetails...');
      navigation.navigate('ServiceDetails');
    } else if (tabName === 'Payments' && navigation) {
      // Navigate to Payments screen
      navigation.navigate('Payments');
    } else if (tabName === 'Profile' && navigation) {
      // Navigate to Profile screen
      navigation.navigate('Profile');
    } else {
      console.log(`${tabName} tab pressed`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffddab" />
      
      {/* Main Container */}
      <View style={styles.mainContainer}>
        
        {/* Header Section */}
        <View style={styles.headerBackground}>
          {/* Status Bar */}
          <View style={styles.statusBar}>
            {/* <Text style={styles.timeText}>9:41</Text> */}
            <View style={styles.statusIcons}>
              {/* Status icons removed for compatibility */}
              {/* <Text style={styles.statusText}>📶 📶 🔋</Text> */}
            </View>
          </View>
          
          {/* Welcome Section */}
          <View style={styles.welcomeContainer}>
            <View style={styles.userInfo}>
              <View style={styles.avatarContainer}>
                <AvatarPlaceholder />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>Welcome back!</Text>
                <Text style={styles.helpText}>How can we help you today?</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.requestButton} onPress={handleRequestPress}>
              <Text style={styles.requestButtonText}>+ Request</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Content Section - Recent Requests */}
        <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.recentRequestsContainer}>
            {/* Section Header */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Requests</Text>
              <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAllPress}>
                <Text style={styles.viewAllText}>View All</Text>
                <ArrowRightIcon />
              </TouchableOpacity>
            </View>

            {/* Request Cards */}
            <View style={styles.requestCardsContainer}>
              {/* Deep Cleaning Request */}
              <View style={styles.requestCard}>
                <View style={styles.requestCardContent}>
                  <View style={styles.requestInfo}>
                    <View style={styles.requestHeader}>
                      <Text style={styles.requestTitle}>Deep Cleaning</Text>
                    </View>
                    <Text style={styles.requestLocation}>Conference Room A</Text>
                    <View style={styles.requestStatus}>
                      <View style={styles.completedStatusBadge}>
                        <CheckIcon />
                        <Text style={styles.completedStatusText}>Completed</Text>
                      </View>
                      <Text style={styles.requestId}>REQ-001</Text>
                    </View>
                  </View>
                  <View style={styles.requestTime}>
                    <Text style={styles.timeText2}>Today, 2:30 PM</Text>
                  </View>
                </View>
                <TouchableOpacity 
                  style={styles.viewDetailsButton} 
                  onPress={() => handleViewDetailsPress('REQ-001')}
                >
                  <EyeIcon />
                  <Text style={styles.viewDetailsText}>View Details</Text>
                </TouchableOpacity>
              </View>

              {/* AC Maintenance Request */}
              <View style={styles.requestCard}>
                <View style={styles.requestCardContent}>
                  <View style={styles.requestInfo}>
                    <View style={styles.requestHeader}>
                      <Text style={styles.requestTitle}>AC Maintenance</Text>
                    </View>
                    <Text style={styles.requestLocation}>Office Floor 3</Text>
                    <View style={styles.requestStatus}>
                      <View style={styles.completedStatusBadge}>
                        <CheckIcon />
                        <Text style={styles.completedStatusText}>Completed</Text>
                      </View>
                      <Text style={styles.requestId}>REQ-002</Text>
                    </View>
                  </View>
                  <View style={styles.requestTime}>
                    <Text style={styles.timeText2}>Today, 10:00 AM</Text>
                  </View>
                </View>
                <TouchableOpacity 
                  style={styles.viewDetailsButton} 
                  onPress={() => handleViewDetailsPress('REQ-002')}
                >
                  <EyeIcon />
                  <Text style={styles.viewDetailsText}>View Details</Text>
                </TouchableOpacity>
              </View>

              {/* Safety Inspection Request */}
              <View style={styles.requestCard}>
                <View style={styles.requestCardContent}>
                  <View style={styles.requestInfoFlex}>
                    <View style={styles.requestHeader}>
                      <Text style={styles.requestTitle}>Safety Inspection</Text>
                    </View>
                    <Text style={styles.requestLocation}>Main Lobby</Text>
                    <View style={styles.requestStatus}>
                      <View style={styles.pendingStatusBadge}>
                        <ClockIcon />
                        <Text style={styles.pendingStatusText}>Pending</Text>
                      </View>
                      <Text style={styles.requestId}>REQ-003</Text>
                    </View>
                  </View>
                  <View style={styles.requestTime}>
                    <Text style={styles.timeText2}>Yesterday, 4:15 PM</Text>
                  </View>
                </View>
                <TouchableOpacity 
                  style={styles.viewDetailsButton} 
                  onPress={() => handleViewDetailsPress('REQ-003')}
                >
                  <EyeIcon />
                  <Text style={styles.viewDetailsText}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNavigation}>
          <View style={styles.bottomNavContainer}>
            <TouchableOpacity 
              style={styles.navItem} 
              onPress={() => handleTabPress('Home')}
            >
              <HomeIcon color="#ffffff" />
              <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.navItem} 
              onPress={() => handleTabPress('Request')}
            >
              <RequestIcon color="#c7cad1" />
              <Text style={styles.navText}>Request</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.navItem} 
              onPress={() => handleTabPress('Payments')}
            >
              <PaymentsIcon color="#c7cad1" />
              <Text style={styles.navText}>Payments</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.navItem} 
              onPress={() => handleTabPress('Profile')}
            >
              <ProfileIcon color="#c7cad1" />
              <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const isSmallScreen = SCREEN_WIDTH < 375;
const isTablet = SCREEN_WIDTH > 768;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mainContainer: {
    flex: 1,
    position: 'relative',
  },
  
  // Header Styles
  headerBackground: {
    backgroundColor: '#ffddab',
    paddingHorizontal: isSmallScreen ? 12 : 14,
    paddingTop: Platform.OS === 'ios' ? 0 : 14,
    paddingBottom: 21,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    paddingTop: 14,
  },
  timeText: {
    fontFamily: Platform.OS === 'ios' ? 'Urbanist-SemiBold' : 'sans-serif-medium',
    fontSize: 16,
    fontWeight: '600',
    color: '#1f232c',
    letterSpacing: 0.2,
    lineHeight: 22.4,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusText: {
    fontSize: 12,
    color: '#1f232c',
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 16.5,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e0b8ff',
    borderRadius: 16.5,
  },
  avatarPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e0b8ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16.5,
  },
  textContainer: {
    flexDirection: 'column',
  },
  welcomeText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: isSmallScreen ? 17 : 19,
    fontWeight: '600',
    color: '#0b8494',
    lineHeight: isSmallScreen ? 22 : 25.2,
    marginBottom: 2,
  },
  helpText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: isSmallScreen ? 14 : 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: isSmallScreen ? 16 : 18,
  },
  requestButton: {
    backgroundColor: '#0b8494',
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
    color: '#ffffff',
    lineHeight: 14.3,
  },

  // Content Styles
  contentContainer: {
    flex: 1,
    paddingHorizontal: isSmallScreen ? 12 : 14,
  },
  recentRequestsContainer: {
    paddingTop: 21,
    paddingBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10.5,
  },
  sectionTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8.75,
    paddingVertical: 0,
    gap: 5.25,
    borderRadius: 6.75,
  },
  viewAllText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'sans-serif',
    fontSize: 12.3,
    fontWeight: '400',
    color: '#030213',
    lineHeight: 17.5,
    textAlign: 'center',
  },


  // Request Cards
  requestCardsContainer: {
    gap: 10.5,
  },
  requestCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12.75,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: isSmallScreen ? 12 : 14,
    paddingTop: 14,
    paddingBottom: 21,
  },
  requestCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 21,
  },
  requestInfo: {
    flex: 1,
    gap: 8,
  },
  requestInfoFlex: {
    flex: 1,
    gap: 3.5,
    paddingRight: 10.5,
  },
  requestHeader: {
    marginBottom: 0,
  },
  requestTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: isSmallScreen ? 16 : 17,
    fontWeight: '600',
    color: '#000000',
    lineHeight: isSmallScreen ? 20 : 22.1,
  },
  requestLocation: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 12,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 12,
  },
  requestStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  completedStatusBadge: {
    backgroundColor: '#eaf6eb',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4.5,
    borderRadius: 6.75,
    gap: 3.5,
  },
  pendingStatusBadge: {
    backgroundColor: '#fff085',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4.5,
    borderRadius: 6.75,
    gap: 3.5,
  },

  completedStatusText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#008236',
    lineHeight: 14.3,
  },
  pendingStatusText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'sans-serif',
    fontSize: 10.5,
    fontWeight: '400',
    color: '#a65f00',
    lineHeight: 14,
    textTransform: 'lowercase',
  },
  requestId: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 12,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 12,
  },
  requestTime: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: 5,
  },
  timeText2: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 14.3,
    textAlign: 'right',
  },
  viewDetailsButton: {
    backgroundColor: '#0b8494',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
    gap: 16,
  },

  viewDetailsText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 14.3,
  },

  // Bottom Navigation Styles
  bottomNavigation: {
    backgroundColor: '#0b8494',
    paddingHorizontal: isSmallScreen ? 12 : 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    height: isSmallScreen ? 80 : 92,
  },
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13.92,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 8.75,
    gap: 2.45,
  },
  navText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: isSmallScreen ? 13 : 15,
    fontWeight: '500',
    color: '#c7cad1',
    lineHeight: isSmallScreen ? 16 : 18,
    textAlign: 'center',
  },
  navTextActive: {
    color: '#ffffff',
  },
});

export default HomeFilledScreen;
