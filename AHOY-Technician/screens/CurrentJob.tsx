import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  Alert,
} from 'react-native';
import {
  PlayIcon,
  CheckCircleIcon,
  MapPinIcon,
  CalendarIcon,
  UserIcon,
  NavigationIcon,
  PhoneIcon,
  ArrowLeftIcon,
  UploadIcon,
} from '../components/Icons';
import CompleteJobDetails from './CompleteJobDetails';

const { width } = Dimensions.get('window');

interface CurrentJobProps {
  navigation?: any;
}

export default function CurrentJob({ navigation }: CurrentJobProps) {
  const [jobStarted, setJobStarted] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const handleStartJob = () => {
    setJobStarted(true);
  };

  const handleCompleteJob = () => {
    if (!jobStarted) {
      Alert.alert('Error', 'Please start the job first');
      return;
    }
    setShowCompleteModal(true);
  };

  const handleJobCompletion = (completionData: any) => {
    console.log('Job completed with data:', completionData);
    setShowCompleteModal(false);
    Alert.alert('Success', 'Job completed successfully!', [
      {
        text: 'OK',
        onPress: () => navigation?.goBack(),
      },
    ]);
  };

  const handleUploadImages = () => {
    // Handle image upload logic
    console.log('Upload images');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <ArrowLeftIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Current Job</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Background Section */}
        <View style={styles.backgroundSection}>
          {/* Start/Complete Job Button */}
          <TouchableOpacity 
            style={jobStarted ? styles.completeJobButton : styles.startJobButton}
            onPress={jobStarted ? handleCompleteJob : handleStartJob}
          >
            {jobStarted ? <CheckCircleIcon /> : <PlayIcon />}
            <Text style={styles.startJobText}>{jobStarted ? 'Complete Job' : 'Start Job'}</Text>
          </TouchableOpacity>

          {/* Warning Box - Only show when job is started */}
          {jobStarted && (
            <View style={styles.warningBox}>
              <Text style={styles.warningText}>
                Please ensure to collect the total cash payment of <Text style={styles.warningBold}>$95</Text> from the customer before completing the job.
              </Text>
            </View>
          )}

          {/* Job Title and Price */}
          <View style={styles.jobTitleSection}>
            <Text style={styles.jobTitle}>Deep Office Cleaning</Text>
            <View style={styles.priceBadge}>
              <Text style={styles.priceText}>{jobStarted ? '95 $' : '120 $'}</Text>
            </View>
          </View>
        </View>

        {/* Job Details Card */}
        <View style={styles.jobCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Job Details</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{jobStarted ? 'Started' : 'Not Started'}</Text>
            </View>
          </View>

          <Text style={styles.jobDescription}>
            Complete deep cleaning of conference room including carpet cleaning and sanitization.
          </Text>

          {/* Location */}
          <View style={styles.detailRow}>
            <MapPinIcon />
            <View style={styles.detailContent}>
              <Text style={styles.detailMainText}>
                123 Business Center, Floor 3, Conference Room A
              </Text>
              <Text style={styles.detailSubText}>0.8 km away</Text>
            </View>
          </View>

          {/* Date & Time */}
          <View style={styles.detailRow}>
            <CalendarIcon />
            <Text style={styles.detailMainText}>Today, 10:00 AM • 2 hours</Text>
          </View>

          {/* Customer */}
          <View style={styles.detailRow}>
            <UserIcon />
            <Text style={styles.detailMainText}>Sarah Johnson</Text>
          </View>

          {/* Payment Details */}
          <View style={styles.paymentSection}>
            <View style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>Payment Method</Text>
              <Text style={styles.paymentValue}>Cash</Text>
            </View>
            <View style={styles.paymentRow}>
              <Text style={styles.paymentLabel}>Amount</Text>
              <Text style={styles.paymentValue}>$95</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.directionsButton}>
              <NavigationIcon />
              <Text style={styles.directionsText}>Directions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.callButton}>
              <PhoneIcon />
              <Text style={styles.callText}>Call Customer</Text>
            </TouchableOpacity>
          </View>

          {/* Upload Images Button - Only show when job is started */}
          {jobStarted && (
            <TouchableOpacity style={styles.uploadButton} onPress={handleUploadImages}>
              <UploadIcon />
              <Text style={styles.uploadText}>
                Upload Images <Text style={styles.uploadOptional}>(Optional)</Text>
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      <CompleteJobDetails
        visible={showCompleteModal}
        onClose={() => setShowCompleteModal(false)}
        onComplete={handleJobCompletion}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'System',
  },
  headerSpacer: {
    width: 28,
  },
  scrollView: {
    flex: 1,
  },
  backgroundSection: {
    backgroundColor: '#ffddab',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    alignItems: 'center',
  },
  startJobButton: {
    backgroundColor: '#0b8494',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 16,
    width: width - 32,
  },
  completeJobButton: {
    backgroundColor: '#0b8494',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 16,
    width: width - 32,
  },
  warningBox: {
    backgroundColor: '#fefce8',
    borderWidth: 1,
    borderColor: '#995d00',
    borderRadius: 8.75,
    padding: 8,
    marginBottom: 16,
    width: width - 32,
  },
  warningText: {
    fontSize: 13,
    color: '#a65f00',
    lineHeight: 17.5,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'System',
  },
  warningBold: {
    fontWeight: 'bold',
  },
  startJobText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 8,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  jobTitleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  jobTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
    flex: 1,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  priceBadge: {
    backgroundColor: '#28a138',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 99999,
    marginLeft: 8,
  },
  priceText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '400',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  jobCard: {
    backgroundColor: '#fbfbfb',
    margin: 16,
    padding: 16,
    borderRadius: 12.75,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10.5,
  },
  cardHeaderText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  statusBadge: {
    backgroundColor: '#1f232c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 99999,
  },
  statusText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '400',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  jobDescription: {
    fontSize: 12,
    color: '#717182',
    lineHeight: 12,
    marginBottom: 16,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 7,
  },
  detailContent: {
    marginLeft: 7,
    flex: 1,
  },
  detailMainText: {
    fontSize: 15,
    color: '#000000',
    lineHeight: 18,
    marginLeft: 7,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  detailSubText: {
    fontSize: 13,
    color: '#717182',
    lineHeight: 14.3,
    marginTop: 2,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  paymentSection: {
    borderTopWidth: 1,
    borderTopColor: '#abb0ba',
    paddingTop: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  paymentLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  paymentValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 7,
  },
  directionsButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e4e4e4',
  },
  directionsText: {
    color: '#1f232c',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 8,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  callButton: {
    flex: 1,
    backgroundColor: '#0b8494',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  callText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 8,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  uploadButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    marginTop: 16,
  },
  uploadText: {
    color: '#1f232c',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 8,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  uploadOptional: {
    color: '#858c9b',
    fontWeight: '400',
  },
});