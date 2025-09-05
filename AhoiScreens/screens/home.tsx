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

// Navigation icons are now handled by the tab navigator

// Avatar placeholder component
const AvatarPlaceholder = () => (
  <Image 
    source={require('../assets/avatar.png')} 
    style={styles.avatarPlaceholder}
    resizeMode="cover"
  />
);

interface HomeScreenProps {
  navigation?: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleRequestPress = () => {
    navigation.navigate('ServiceRequestStack');
  };

  const handleViewFilledHome = () => {
    // Navigate to home filled screen
    if (navigation) {
      navigation.navigate('HomeFilled');
    }
  };

  // Removed unused handlers for view receipt and view invoice

  // Tab navigation is now handled by the tab navigator
  // Individual tab press handlers are no longer needed

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
          </View>
        </View>

        {/* Bottom Navigation is now handled by the tab navigator */}
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

  // Bottom Navigation styles removed - now handled by tab navigator
});

export default HomeScreen;
