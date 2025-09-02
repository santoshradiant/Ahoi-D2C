import * as React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

const DownloadReceipt: React.FC = () => {
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
                    <Text style={styles.serviceName}>Deep Office Cleaning</Text>
                  </View>
                  <View style={styles.serviceHeaderRight}>
                    <View style={styles.statusBadge}>
                      <Text style={styles.statusText}>Completed</Text>
                    </View>
                    <Text style={styles.serviceAmount}>-$150</Text>
                  </View>
                </View>
              </View>

              {/* Service Description */}
              <Text style={styles.description}>
                Complete deep cleaning of conference room including carpet cleaning and sanitization.
              </Text>

              {/* Service Information */}
              <View style={styles.infoContainer}>
                {/* Requestor */}
                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Feather name="user" size={16} color="#717182" />
                    <Text style={styles.infoText}>James Gold</Text>
                  </View>
                </View>

                {/* Date/Time */}
                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Feather name="calendar" size={16} color="#717182" />
                    <Text style={styles.infoText}>Today, 2:30 PM</Text>
                  </View>
                </View>

                {/* Location */}
                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Feather name="map-pin" size={16} color="#717182" />
                    <Text style={styles.infoText}>Conference Room A</Text>
                  </View>
                </View>

                {/* Completion Time */}
                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Feather name="check-circle" size={16} color="#717182" />
                    <Text style={styles.infoText}>Completed at: </Text>
                    <Text style={styles.completionTime}>2:45 PM</Text>
                  </View>
                </View>
              </View>

              {/* Action Buttons */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.downloadButton}>
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
  statusText: {
    color: '#008236',
    fontSize: 10.5,
    fontFamily: 'SF Pro Text',
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
