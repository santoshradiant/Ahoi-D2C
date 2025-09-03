import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  ServiceDetails: { requestId: string };
  
  AllRequests: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

import { Svg, Path, G } from 'react-native-svg';

// SVG Icons as components
const CheckIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M11.6667 3.5L5.25 9.91667L2.33333 7"
      stroke="#008236"
      strokeWidth={1.5}
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

const BackIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 18L9 12L15 6"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
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
                <CheckIcon />
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
                // Handle navigation to request details
                navigation.navigate('ServiceDetails', { requestId: request.requestId });
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
    backgroundColor: 'white',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#E4E4E4',
  },
  filterText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#1F232C',
  },
});
