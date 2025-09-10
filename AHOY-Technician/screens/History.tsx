import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import { historyIcons, statusBarIcons } from '../assets/history-icons';
import {
  CheckIcon,
  UserIcon,
  LocationIcon,
  CalendarIcon,
  CameraIcon,
  AlertIcon,
} from '../components/HistoryIcons';
import HistoryDetails from './HistoryDetails';

interface JobCardProps {
  title: string;
  price: string;
  customerName: string;
  location: string;
  date: string;
  status: 'Completed';
  photos: number;
  onViewPress: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  price,
  customerName,
  location,
  date,
  status,
  photos,
  onViewPress,
}) => {
  return (
    <View style={styles.jobCard}>
      <View style={styles.jobHeader}>
        <View style={styles.titleRow}>
          <Text style={styles.jobTitle}>{title}</Text>
          <View style={styles.priceBadge}>
            <Text style={styles.priceText}>{price}</Text>
          </View>
        </View>
      </View>

      <View style={styles.jobDetails}>
        <View style={styles.detailRow}>
          <View style={styles.iconContainer}>
            <UserIcon size={10.5} color="#858c9b" />
          </View>
          <Text style={styles.detailText}>{customerName}</Text>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.iconContainer}>
            <LocationIcon size={10.5} color="#858c9b" />
          </View>
          <Text style={styles.detailText}>{location}</Text>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.iconContainer}>
            <CalendarIcon size={10.5} color="#858c9b" />
          </View>
          <Text style={styles.detailText}>{date}</Text>
        </View>
      </View>

      <View style={styles.jobFooter}>
        <View style={styles.statusContainer}>
          <View style={styles.statusRow}>
            <View style={styles.iconContainer}>
              <CheckIcon size={10.5} color="#28a138" />
            </View>
            <Text style={styles.statusText}>{status}</Text>
          </View>

          <View style={styles.statusRow}>
            <View style={styles.iconContainer}>
              <CameraIcon size={10.5} color="#717182" />
            </View>
            <Text style={styles.detailText}>{photos} photos</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.viewButton} onPress={onViewPress}>
          <Text style={styles.viewButtonText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const History: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const handleViewPress = (job: any) => {
    setSelectedJob({
      id: 'JOB-001',
      title: job.title,
      description: 'Complete deep cleaning of conference room including carpet cleaning and sanitization.',
      customer: job.customerName,
      completedDate: job.date,
      photos: job.photos,
      location: job.location,
    });
    setModalVisible(true);
  };

  const jobsData = [
    {
      title: 'Office Deep Cleaning',
      price: '120 $',
      customerName: 'Sarah Johnson',
      location: '123 Business Center, Floor 3',
      date: 'Aug 12, 5:30 PM',
      status: 'Completed' as const,
      photos: 4,
    },
    {
      title: 'HVAC Filter Replacement',
      price: '120 $',
      customerName: 'Mike Chen',
      location: '456 Corporate Plaza, Building B',
      date: 'Aug 12, 3:45 PM',
      status: 'Completed' as const,
      photos: 2,
    },
    {
      title: 'Emergency Plumbing Repair',
      price: '180 $',
      customerName: 'Lisa Rodriguez',
      location: '789 Downtown Tower, Floor 15',
      date: 'Aug 11, 12:20 PM',
      status: 'Completed' as const,
      photos: 3,
    },
    {
      title: 'Window Cleaning Service',
      price: '95 $',
      customerName: 'David Wilson',
      location: '321 Office Complex, Suite 200',
      date: 'Aug 10, 2:15 PM',
      status: 'Completed' as const,
      photos: 2,
    },
    {
      title: 'Carpet Deep Clean',
      price: '150 $',
      customerName: 'Maria Garcia',
      location: '654 Business Park, Floor 8',
      date: 'Aug 9, 10:30 AM',
      status: 'Completed' as const,
      photos: 5,
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffddab" />
      
      {/* Header Section */}
      <View style={styles.header}>
        {/* Status Bar */}
        {/* <View style={styles.statusBar}>
          <Text style={styles.timeText}>9:41</Text>
          <View style={styles.statusIcons}>
            <Image source={statusBarIcons.signal} style={styles.statusIcon} />
            <Image source={statusBarIcons.wifi} style={styles.statusIcon} />
            <Image source={statusBarIcons.battery} style={styles.statusIcon} />
          </View>
        </View> */}

        {/* Main Header */}
        <View style={styles.mainHeader}>
          <View style={styles.userInfo}>
            <Image source={historyIcons.avatar} style={styles.avatar} />
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>Good morning, Alex!</Text>
              <Text style={styles.subGreeting}>Ready to help customers today?</Text>
            </View>
          </View>
          
          <View style={styles.alertBadge}>
            <AlertIcon size={16} color="#ffd799" />
          </View>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        {/* Total Jobs Header */}
        <View style={styles.totalJobsHeader}>
          <Text style={styles.totalJobsText}>Total Jobs</Text>
          <View style={styles.totalJobsBadge}>
            <Text style={styles.totalJobsCount}>{jobsData.length}</Text>
          </View>
        </View>

        {/* Jobs List */}
        <ScrollView 
          style={styles.jobsList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.jobsListContent}
        >
          {jobsData.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              price={job.price}
              customerName={job.customerName}
              location={job.location}
              date={job.date}
              status={job.status}
              photos={job.photos}
              onViewPress={() => handleViewPress(job)}
            />
          ))}
        </ScrollView>
      </View>

      {/* History Details Modal */}
      {selectedJob && (
        <HistoryDetails
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          jobData={selectedJob}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#ffddab',
    paddingTop: Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 0,
    paddingBottom: 21,
    paddingHorizontal: 14,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f232c',
    letterSpacing: 0.2,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusIcon: {
    width: 18,
    height: 10,
    resizeMode: 'contain',
  },
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16.5,
  },
  greetingContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 19,
    fontWeight: '600',
    color: '#0b8494',
    lineHeight: 25.2,
  },
  subGreeting: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
  },
  alertBadge: {
    backgroundColor: '#cc7c00',
    padding: 8,
    borderRadius: 8,
  },

  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 16,
  },
  totalJobsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10.5,
  },
  totalJobsText: {
    fontSize: 15,
    color: '#1f232c',
    lineHeight: 18,
  },
  totalJobsBadge: {
    backgroundColor: '#1f232c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 99999,
  },
  totalJobsCount: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: '400',
    lineHeight: 14.3,
  },
  jobsList: {
    flex: 1,
  },
  jobsListContent: {
    gap: 10.5,
    paddingBottom: 100, // Space for bottom navigation
  },
  jobCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12.75,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    padding: 8,
  },
  jobHeader: {
    marginBottom: 10.5,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    flexWrap: 'wrap',
  },
  jobTitle: {
    fontSize: 15,
    color: '#1f232c',
    lineHeight: 18,
    flex: 1,
  },
  priceBadge: {
    backgroundColor: '#28a138',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 99999,
  },
  priceText: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: '400',
    lineHeight: 14.3,
  },
  jobDetails: {
    gap: 8,
    marginBottom: 10.5,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3.5,
  },
  iconContainer: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  detailText: {
    fontSize: 12,
    color: '#717182',
    lineHeight: 12,
    flex: 1,
  },
  jobFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 10.5,
    flex: 1,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3.5,
  },
  statusText: {
    fontSize: 12,
    color: '#28a138',
    lineHeight: 12,
  },
  viewButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e4e4e4',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  viewButtonText: {
    fontSize: 13,
    color: '#1f232c',
    fontWeight: '600',
    lineHeight: 14.3,
  },
});

export default History;