import React, { useState } from 'react';
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
  Modal,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

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

// Navigation icons are now handled by the tab navigator

interface HomeFilledScreenProps {
  navigation?: any;
}

const HomeFilledScreen: React.FC<HomeFilledScreenProps> = ({ navigation }) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const isSmallScreen = screenWidth < 375;
  const isTablet = screenWidth > 768;
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);

  const getRequestData = (id: string) => {
    const requests: { [key: string]: any } = {
      'REQ-001': {
        serviceName: 'Deep Cleaning',
        description: 'Complete deep cleaning of conference room including carpet cleaning and sanitization.',
        requestor: 'James Gold',
        dateTime: 'Today, 2:30 PM',
        location: 'Conference Room A',
        completionTime: '2:45 PM',
        amount: '$150',
        status: 'Completed'
      },
      'REQ-002': {
        serviceName: 'AC Maintenance',
        description: 'Regular maintenance and inspection of air conditioning system.',
        requestor: 'Sarah Johnson',
        dateTime: 'Today, 10:00 AM',
        location: 'Office Floor 3',
        completionTime: '11:30 AM',
        amount: '$200',
        status: 'Completed'
      },
      'REQ-003': {
        serviceName: 'Safety Inspection',
        description: 'Comprehensive safety inspection of main lobby area.',
        requestor: 'Mike Wilson',
        dateTime: 'Yesterday, 4:15 PM',
        location: 'Main Lobby',
        completionTime: 'Pending',
        amount: '$100',
        status: 'Pending'
      }
    };
    return requests[id] || requests['REQ-001'];
  };

  const handleRequestPress = () => {
    if (navigation) {
      navigation.navigate('ServiceRequestStack');
    }
  };

  const handleViewAllPress = () => {
    if (navigation) {
      navigation.navigate('AllRequests');
    }
  };

  const handleViewDetailsPress = (requestId: string) => {
    setSelectedRequest(requestId);
  };

  // Tab navigation is now handled by the tab navigator
  // Individual tab press handlers are no longer needed

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

        {/* Bottom Navigation is now handled by the tab navigator */}
      </View>

      {/* Request Details Modal */}
      <Modal
        visible={selectedRequest !== null}
        animationType="slide"
        transparent
        onRequestClose={() => setSelectedRequest(null)}
      >
        <View style={modalStyles.overlay}>
          <View style={modalStyles.modal}>
            <View style={modalStyles.dragHandleContainer}>
              <View style={modalStyles.dragHandle} />
            </View>
            <ScrollView style={modalStyles.content}>
              {selectedRequest && (() => {
                const requestData = getRequestData(selectedRequest);
                return (
                  <>
                    <View style={modalStyles.titleSection}>
                      <Text style={modalStyles.title}>Request Details</Text>
                      <Text style={modalStyles.subtitle}>
                        View detailed information about your service request.
                      </Text>
                    </View>
                    <View style={modalStyles.serviceDetails}>
                      <View style={modalStyles.serviceHeader}>
                        <Text style={modalStyles.serviceName}>{requestData.serviceName}</Text>
                        <View style={modalStyles.serviceHeaderRight}>
                          <View style={[modalStyles.statusBadge, requestData.status === 'Pending' && modalStyles.pendingStatusBadge]}>
                            <Text style={[modalStyles.statusText, requestData.status === 'Pending' && modalStyles.pendingStatusText]}>{requestData.status}</Text>
                          </View>
                          <Text style={modalStyles.serviceAmount}>-{requestData.amount}</Text>
                        </View>
                      </View>
                    </View>
                    <Text style={modalStyles.description}>{requestData.description}</Text>
                    <View style={modalStyles.infoContainer}>
                      <View style={modalStyles.infoRow}>
                        <Feather name="user" size={16} color="#717182" />
                        <Text style={modalStyles.infoText}>{requestData.requestor}</Text>
                      </View>
                      <View style={modalStyles.infoRow}>
                        <Feather name="calendar" size={16} color="#717182" />
                        <Text style={modalStyles.infoText}>{requestData.dateTime}</Text>
                      </View>
                      <View style={modalStyles.infoRow}>
                        <Feather name="map-pin" size={16} color="#717182" />
                        <Text style={modalStyles.infoText}>{requestData.location}</Text>
                      </View>
                      <View style={modalStyles.infoRow}>
                        <Feather name="check-circle" size={16} color="#717182" />
                        <Text style={modalStyles.infoText}>{requestData.status === 'Completed' ? 'Completed at: ' : 'Status: '}</Text>
                        <Text style={modalStyles.completionTime}>{requestData.completionTime}</Text>
                      </View>
                    </View>
                    <View style={modalStyles.buttonContainer}>
                      <TouchableOpacity style={modalStyles.closeButton} onPress={() => setSelectedRequest(null)}>
                        <Text style={modalStyles.closeButtonText}>Close</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={modalStyles.downloadButton} onPress={() => {
                        if (navigation) {
                          navigation.navigate('Invoice', { requestId: selectedRequest });
                          setSelectedRequest(null);
                        }
                      }}>
                        <Text style={modalStyles.downloadButtonText}>Download Receipt</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                );
              })()}
            </ScrollView>
          </View>
        </View>
      </Modal>
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

  // Bottom Navigation styles removed - now handled by tab navigator
});

const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    maxHeight: '80%',
  },
  dragHandleContainer: {
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
  },
  dragHandle: {
    width: 32,
    height: 4,
    backgroundColor: '#0B8494',
    borderRadius: 100,
  },
  content: {
    padding: 16,
  },
  titleSection: {
    marginBottom: 24,
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: '#1F232C',
    marginBottom: 8,
    fontFamily: 'SF Pro Display',
  },
  subtitle: {
    fontSize: 15,
    color: '#717182',
    fontFamily: 'SF Pro Display',
  },
  serviceDetails: {
    marginBottom: 16,
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  serviceName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1F232C',
    fontFamily: 'SF Pro Display',
  },
  serviceHeaderRight: {
    alignItems: 'flex-end',
  },
  statusBadge: {
    backgroundColor: '#EAF6EB',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 8,
  },
  pendingStatusBadge: {
    backgroundColor: '#fff085',
  },
  statusText: {
    color: '#008236',
    fontSize: 10.5,
    fontFamily: 'SF Pro Text',
  },
  pendingStatusText: {
    color: '#a65f00',
  },
  serviceAmount: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1F232C',
  },
  description: {
    fontSize: 15,
    color: '#717182',
    marginBottom: 24,
    fontFamily: 'SF Pro Display',
  },
  infoContainer: {
    gap: 7,
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
    gap: 8,
  },
  infoText: {
    fontSize: 15,
    color: '#1F232C',
    fontFamily: 'SF Pro Display',
  },
  completionTime: {
    fontSize: 15,
    color: '#1F232C',
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 7,
    marginBottom: 20,
  },
  closeButton: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1F232C',
    fontFamily: 'SF Pro Display',
  },
  downloadButton: {
    flex: 1,
    backgroundColor: '#0B8494',
    height: 40,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'SF Pro Display',
  },
});

export default HomeFilledScreen;
