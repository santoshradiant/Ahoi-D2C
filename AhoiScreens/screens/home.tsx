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
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Svg, Path, G } from 'react-native-svg';

// Note: Using SVG components instead of localhost images for better compatibility

// Navigation SVG Icons
const HomeIcon = ({ color = '#ffffff' }: { color?: string }) => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M2.625 7.875L10.5 2.625L18.375 7.875V17.5C18.375 17.9473 18.1973 18.3763 17.8839 18.6897C17.5705 19.0031 17.1415 19.1808 16.6942 19.1808H4.30583C3.85854 19.1808 3.42951 19.0031 3.11612 18.6897C2.80272 18.3763 2.625 17.9473 2.625 17.5V7.875Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.875 19.1808V10.5H13.125V19.1808"
      stroke={color}
      strokeWidth={1.5}
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

interface HomeScreenProps {
  navigation?: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleRequestPress = () => {
    navigation.navigate('AllRequests');
  };

  const handleViewFilledHome = () => {
    // Navigate to homefilled screen
    if (navigation) {
      navigation.navigate('HomeFilled');
    }
  };

  const handleViewReceipt = () => {
    navigation.navigate('DownloadReceipt');
  };

  const handleViewInvoice = () => {
    navigation.navigate('Invoice');
  };

  const handleTabPress = (tabName: string) => {
    // Handle tab navigation
    console.log(`${tabName} tab pressed`);
    console.log('Navigation object:', navigation);
    if (tabName === 'Payments') {
      if (navigation) {
        console.log('Navigating to Payments...');
        navigation.navigate('Payments');
      } else {
        console.log('Navigation object is undefined');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffddab" />
      
      {/* Main Container */}
      <View style={styles.mainContainer}>
        
        {/* Header Section */}
        <View style={styles.headerBackground}>
          {/* Status Bar - Removed images for compatibility */}
          
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

        {/* Content Section - Empty State */}
        <View style={styles.contentContainer}>
          <View style={styles.emptyStateContainer}>
            <View style={styles.emptyStateTextContainer}>
              <Text style={styles.emptyStateTitle}>No requests created yet</Text>
              <Text style={styles.emptyStateSubtitle}>
                When you create a request, it will appear here.
              </Text>
            </View>
            <TouchableOpacity style={styles.createRequestButton} onPress={handleRequestPress}>
              <Text style={styles.createRequestButtonText}>+ Request</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewFilledButton} onPress={handleViewFilledHome}>
              <Text style={styles.viewFilledButtonText}>View Filled Home</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.viewFilledButton, { marginTop: 10 }]} 
              onPress={() => navigation.navigate('DownloadReceipt')}
            >
              <Text style={styles.viewFilledButtonText}>View Receipt</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.viewFilledButton, { marginTop: 10 }]} 
              onPress={() => navigation.navigate('Invoice')}
            >
              <Text style={styles.viewFilledButtonText}>View Invoice</Text>
            </TouchableOpacity>
          </View>
        </View>

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
    paddingHorizontal: 14,
    paddingTop: Platform.OS === 'ios' ? 14 : 44, // Account for status bar
    paddingBottom: 21,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  timeText: {
    fontFamily: Platform.OS === 'ios' ? 'Urbanist-SemiBold' : 'sans-serif',
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
  cellularIcon: {
    width: 15.273,
    height: 10.966,
  },
  wifiIcon: {
    width: 18,
    height: 10,
  },
  batteryIcon: {
    width: 26.978,
    height: 13,
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
    fontSize: 19,
    fontWeight: '600',
    color: '#0b8494',
    lineHeight: 25.2,
    marginBottom: 2,
  },
  helpText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  emptyStateContainer: {
    alignItems: 'center',
    width: 294,
    gap: 16,
  },
  emptyStateTextContainer: {
    alignItems: 'center',
    gap: 8,
    minHeight: 50,
    marginBottom: 8,
  },
  emptyStateTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 19,
    fontWeight: '600',
    color: '#000000',
    lineHeight: 25.2,
    textAlign: 'center',
  },
  emptyStateSubtitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
    textAlign: 'center',
  },
  createRequestButton: {
    backgroundColor: '#0b8494',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createRequestButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 14.3,
  },
  viewFilledButton: {
    backgroundColor: '#717182',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  viewFilledButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 11,
    fontWeight: '500',
    color: '#ffffff',
    lineHeight: 12,
  },

  // Bottom Navigation Styles
  bottomNavigation: {
    backgroundColor: '#0b8494',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    height: 92,
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
    fontSize: 15,
    fontWeight: '500',
    color: '#c7cad1',
    lineHeight: 18,
    textAlign: 'center',
  },
  navTextActive: {
    color: '#ffffff',
  },
});

export default HomeScreen;
