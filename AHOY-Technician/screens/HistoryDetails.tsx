import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  StatusBar,
  Platform,
  ScrollView,
} from 'react-native';

interface HistoryDetailsProps {
  visible: boolean;
  onClose: () => void;
  jobData?: {
    id: string;
    title: string;
    description: string;
    customer: string;
    completedDate: string;
    photos: number;
    location: string;
  };
}

const HistoryDetails: React.FC<HistoryDetailsProps> = ({
  visible,
  onClose,
  jobData = {
    id: 'JOB-001',
    title: 'Office Deep Cleaning',
    description: 'Complete deep cleaning of conference room including carpet cleaning and sanitization.',
    customer: 'Sarah Johnson',
    completedDate: 'Aug 12, 5:30 PM',
    photos: 4,
    location: '123 Business Center, Floor 3',
  },
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Drag Handle */}
          <View style={styles.dragHandleContainer}>
            <View style={styles.dragHandle} />
          </View>

          {/* Content */}
          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Job Details</Text>
              <Text style={styles.subtitle}>
                Complete job information and customer feedback.
              </Text>
            </View>

            {/* Job Information */}
            <View style={styles.section}>
              {/* Job Title */}
              <View style={styles.jobTitleSection}>
                <Text style={styles.jobTitle}>{jobData.title}</Text>
                <Text style={styles.jobDescription}>{jobData.description}</Text>
              </View>

              {/* Job Summary */}
              <View style={styles.summarySection}>
                <Text style={styles.sectionTitle}>Job Summary</Text>
                
                <View style={styles.summaryItem}>
                  <Text style={styles.summaryLabel}>ID:</Text>
                  <Text style={styles.summaryValue}>{jobData.id}</Text>
                </View>

                <View style={styles.summaryItem}>
                  <Text style={styles.summaryLabel}>Customer:</Text>
                  <Text style={styles.summaryValue}>{jobData.customer}</Text>
                </View>

                <View style={styles.summaryItem}>
                  <Text style={styles.summaryLabel}>Completed:</Text>
                  <Text style={styles.summaryValue}>{jobData.completedDate}</Text>
                </View>

                <View style={styles.summaryItem}>
                  <Text style={styles.summaryLabel}>Photos:</Text>
                  <Text style={styles.summaryValue}>{jobData.photos} uploaded</Text>
                </View>

                <View style={styles.summaryItem}>
                  <Text style={styles.summaryLabel}>Location:</Text>
                  <Text style={styles.summaryValue}>{jobData.location}</Text>
                </View>
              </View>
            </View>

            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>

            {/* Home Indicator Space */}
            <View style={styles.homeIndicatorSpace} />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -16,
    },
    shadowOpacity: 0.12,
    shadowRadius: 20.1,
    elevation: 20,
  },
  dragHandleContainer: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  dragHandle: {
    width: 32,
    height: 4,
    backgroundColor: '#0b8494',
    borderRadius: 100,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 21,
    fontWeight: '400',
    color: '#1f232c',
    lineHeight: 31.5,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  jobTitleSection: {
    marginBottom: 14,
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    marginBottom: 7,
  },
  jobDescription: {
    fontSize: 12,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 12,
  },
  summarySection: {
    marginTop: 10.5,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    marginBottom: 7,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
  },
  summaryLabel: {
    fontSize: 15,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 18,
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: '400',
    color: '#1f232c',
    lineHeight: 18,
  },
  closeButton: {
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  closeButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f232c',
    lineHeight: 14.3,
  },
  homeIndicatorSpace: {
    height: 21,
  },
});

export default HistoryDetails;