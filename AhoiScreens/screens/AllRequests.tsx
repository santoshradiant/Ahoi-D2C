import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Modal,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { Svg, Path, G } from 'react-native-svg';

type RootStackParamList = {
  ServiceDetails: { requestId: string };
  Invoice: { requestId: string };
  AllRequests: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// SVG Icons as components
const CheckIcon = () => (
  <Svg width={14} height={15} viewBox="0 0 14 15" fill="none">
    <Path
      d="M12.7172 6.33333C12.9837 7.64075 12.7938 8.99999 12.1793 10.1844C11.5649 11.3688 10.5629 12.3067 9.34063 12.8418C8.11833 13.3768 6.74953 13.4767 5.4625 13.1247C4.17548 12.7727 3.04803 11.9901 2.26816 10.9075C1.48829 9.82484 1.10315 8.50755 1.17697 7.1753C1.25078 5.84306 1.77909 4.57638 2.67379 3.58651C3.56849 2.59664 4.7755 1.94341 6.09354 1.73576C7.41157 1.5281 8.76095 1.77858 9.91666 2.44541"
      stroke="#00A63E"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.25 6.91668L7 8.66668L12.8333 2.83334"
      stroke="#00A63E"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ClockIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M7.00002 12.8334C10.2217 12.8334 12.8334 10.2217 12.8334 7.00002C12.8334 3.77836 10.2217 1.16669 7.00002 1.16669C3.77836 1.16669 1.16669 3.77836 1.16669 7.00002C1.16669 10.2217 3.77836 12.8334 7.00002 12.8334Z"
      stroke="#D08700"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 4.66669V7.00002"
      stroke="#D08700"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 9.33331H7.00583"
      stroke="#D08700"
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const EyeIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M8 3.33333C3.33333 3.33333 1.33333 8 1.33333 8C1.33333 8 3.33333 12.6667 8 12.6667C12.6667 12.6667 14.6667 8 14.6667 8C14.6667 8 12.6667 3.33333 8 3.33333Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const BackIcon = ({ color = 'black' }: { color?: string }) => (
  <Svg width={20} height={16} viewBox="0 0 20 16" fill="none">
    <Path
      d="M20.0002 8.00028C20.0002 8.55328 19.5532 9.00028 19.0002 9.00028H3.41422L8.70719 14.2933C9.09819 14.6842 9.09819 15.3163 8.70719 15.7073C8.51219 15.9023 8.25622 16.0003 8.00022 16.0003C7.74422 16.0003 7.48825 15.9023 7.29325 15.7073L0.29325 8.70731C-0.09775 8.31631 -0.09775 7.68425 0.29325 7.29325L7.29325 0.29325C7.68425 -0.09775 8.31619 -0.09775 8.70719 0.29325C9.09819 0.68425 9.09819 1.31631 8.70719 1.70731L3.41422 7.00028H19.0002C19.5532 7.00028 20.0002 7.44728 20.0002 8.00028Z"
      fill={color}
    />
  </Svg>
);

const FilterIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M14.6667 2H1.33333L6.66667 8.30667V12.6667L9.33333 14V8.30667L14.6667 2Z"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const SortIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M2.66667 4.66667H13.3333"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 8H12"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.66667 11.3333H9.33333"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

interface RequestCardProps {
  title: string;
  location: string;
  status: 'completed' | 'pending';
  requestId: string;
  dateTime: string;
  onPress: () => void;
}

const RequestCard: React.FC<RequestCardProps> = ({
  title,
  location,
  status,
  requestId,
  dateTime,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.locationText}>{location}</Text>
            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.statusBadge,
                  status === 'completed'
                    ? styles.completedBadge
                    : styles.pendingBadge,
                ]}
              >
                {status === 'completed' ? <CheckIcon /> : <ClockIcon />}
                <Text
                  style={[
                    styles.statusText,
                    status === 'completed'
                      ? styles.completedText
                      : styles.pendingText,
                  ]}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Text>
              </View>
              <Text style={styles.requestId}>{requestId}</Text>
            </View>
          </View>
          <Text style={styles.dateTime}>{dateTime}</Text>
        </View>
        <TouchableOpacity style={styles.viewButton} onPress={onPress}>
          <EyeIcon />
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function AllRequests() {
  const navigation = useNavigation<NavigationProp>();
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

  const requests = [
    {
      title: 'Deep Cleaning',
      location: 'Conference Room A',
      status: 'completed',
      requestId: 'REQ-001',
      dateTime: 'Today, 2:30 PM',
    },
    {
      title: 'AC Maintenance',
      location: 'Office Floor 3',
      status: 'completed',
      requestId: 'REQ-002',
      dateTime: 'Today, 10:00 AM',
    },
    {
      title: 'AC Maintenance',
      location: 'Office Floor 3',
      status: 'completed',
      requestId: 'REQ-002',
      dateTime: 'Today, 10:00 AM',
    },
    {
      title: 'AC Maintenance',
      location: 'Office Floor 3',
      status: 'completed',
      requestId: 'REQ-002',
      dateTime: 'Today, 10:00 AM',
    },
    {
      title: 'Safety Inspection',
      location: 'Main Lobby',
      status: 'pending',
      requestId: 'REQ-003',
      dateTime: 'Yesterday, 4:15 PM',
    },
  ] as const;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>All Requests</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {requests.map((request, index) => (
            <RequestCard
              key={index}
              {...request}
              onPress={() => {
                setSelectedRequest(request.requestId);
              }}
            />
          ))}
        </ScrollView>
      </View>

      {/* Bottom Filter Bar */}
      <View style={styles.filterBar}>
        <TouchableOpacity style={styles.filterButton}>
          <SortIcon />
          <Text style={styles.filterText}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <FilterIcon />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: '#FFDDAB',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 24, // To offset the back button and center the title
  },
  content: {
    flex: 1,
    backgroundColor: '#FFDDAB',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 14,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  cardContent: {
    padding: 14,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 21,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1F232C',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 12,
    color: '#717182',
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 3.5,
  },
  completedBadge: {
    backgroundColor: '#EAF6EB',
  },
  pendingBadge: {
    backgroundColor: '#FEFCE8',
  },
  statusText: {
    fontSize: 13,
  },
  completedText: {
    color: '#008236',
  },
  pendingText: {
    color: '#A65F00',
  },
  requestId: {
    fontSize: 12,
    color: '#717182',
  },
  dateTime: {
    fontSize: 13,
    color: '#717182',
  },
  viewButton: {
    backgroundColor: '#0B8494',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 6,
    gap: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  filterText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#1F232C',
  },
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
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
  },
  subtitle: {
    fontSize: 15,
    color: '#717182',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
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
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
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
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'sans-serif',
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
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
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
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
  },
  completionTime: {
    fontSize: 15,
    color: '#1F232C',
    fontWeight: '500',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
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
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
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
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
  },
});
