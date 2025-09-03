import * as React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface DownloadReceiptProps {
  navigation?: any;
  route?: {
    params?: {
      requestId?: string;
    };
  };
}

const DownloadReceipt: React.FC<DownloadReceiptProps> = ({ navigation, route }) => {
  const requestId = route?.params?.requestId || 'REQ-001';
  
  // Mock data - in real app, this would come from API based on requestId
  const getRequestData = (id: string) => {
    const requests = {
      'REQ-001': {
        serviceName: 'Deep Office Cleaning',
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
  
  const requestData = getRequestData(requestId);
  
  const handleClose = () => {
    if (navigation) {
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <View style={styles.dragHandle} />
            </View>

            {/* Modal Content */}
            <View style={styles.modalContent}>
              {/* Title Section */}
              <View style={styles.titleSection}>
                <Text style={styles.title}>Request Details</Text>
                <Text style={styles.subtitle}>
                  View detailed information about your service request.
                </Text>
              </View>

              {/* Service Details */}
              <View style={styles.serviceDetails}>
                <View style={styles.serviceHeader}>
                  <View>
                    <Text style={styles.serviceName}>{requestData.serviceName}</Text>
                  </View>
                  <View style={styles.serviceHeaderRight}>
                    <View style={[styles.statusBadge, requestData.status === 'Pending' && styles.pendingStatusBadge]}>
                      <Text style={[styles.statusText, requestData.status === 'Pending' && styles.pendingStatusText]}>{requestData.status}</Text>
                    </View>
                    <Text style={styles.serviceAmount}>-{requestData.amount}</Text>
                  </View>
                </View>
              </View>

              {/* Service Description */}
              <Text style={styles.description}>
                {requestData.description}
              </Text>

              {/* Service Information */}
              <View style={styles.infoContainer}>
                {/* Requestor */}
                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Feather name="user" size={16} color="#717182" />
                    <Text style={styles.infoText}>{requestData.requestor}</Text>
                  </View>
                </View>

                {/* Date/Time */}
                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Feather name="calendar" size={16} color="#717182" />
                    <Text style={styles.infoText}>{requestData.dateTime}</Text>
                  </View>
                </View>

                {/* Location */}
                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Feather name="map-pin" size={16} color="#717182" />
                    <Text style={styles.infoText}>{requestData.location}</Text>
                  </View>
                </View>

                {/* Completion Time */}
                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Feather name="check-circle" size={16} color="#717182" />
                    <Text style={styles.infoText}>{requestData.status === 'Completed' ? 'Completed at: ' : 'Status: '}</Text>
                    <Text style={styles.completionTime}>{requestData.completionTime}</Text>
                  </View>
                </View>
              </View>

              {/* Action Buttons */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.downloadButton} onPress={() => {
                  if (navigation) {
                    navigation.navigate('Invoice', { requestId });
                  }
                }}>
                  <Text style={styles.downloadButtonText}>Download Receipt</Text>
                </TouchableOpacity>
              </View>

              {/* Home Indicator */}
              <View style={styles.homeIndicator}>
                <View style={styles.homeIndicatorBar} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  scrollView: {
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    minHeight: 200,
  },
  modalHeader: {
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
  modalContent: {
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
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
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
  homeIndicator: {
    height: 21,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 24,
  },
  homeIndicatorBar: {
    width: 139,
    height: 5,
    backgroundColor: '#1F232C',
    borderRadius: 100,
    marginBottom: 8,
  },
});

export default DownloadReceipt;
