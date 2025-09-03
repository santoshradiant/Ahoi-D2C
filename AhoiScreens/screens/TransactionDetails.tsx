import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Dimensions,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

// SVG Components
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

interface TransactionDetailsProps {
  visible: boolean;
  onClose: () => void;
  transaction: {
    id: string;
    service: string;
    amount: number;
    status: string;
    paymentMethod: string;
    date: string;
  };
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({
  visible,
  onClose,
  transaction,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Drag Handle */}
          <View style={styles.dragHandleContainer}>
            <View style={styles.dragHandle} />
          </View>

          {/* Content */}
          <View style={styles.content}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Transaction Details</Text>
              <Text style={styles.subtitle}>
                View detailed information about this transaction.
              </Text>
            </View>

            {/* Service Details */}
            <View style={styles.serviceContainer}>
              <View style={styles.serviceHeader}>
                <View>
                  <Text style={styles.serviceName}>{transaction.service}</Text>
                </View>
                <View style={styles.rightContent}>
                  <View style={styles.statusContainer}>
                    <CheckIcon />
                    <Text style={styles.statusText}>Completed</Text>
                  </View>
                  <Text style={styles.amount}>-${Math.abs(transaction.amount)}</Text>
                </View>
              </View>
            </View>

            {/* Transaction Info */}
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Request ID:</Text>
                <Text style={styles.infoValue}>{transaction.id}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Payment Method:</Text>
                <Text style={styles.infoValue}>{transaction.paymentMethod}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Date:</Text>
                <Text style={styles.infoValue}>{transaction.date}</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.closeButton]}
                onPress={onClose}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.downloadButton]}
                onPress={() => {
                  // Handle download receipt
                }}
              >
                <Text style={styles.downloadButtonText}>Download Receipt</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: '100%',
    maxHeight: '80%',
  },
  dragHandleContainer: {
    alignItems: 'center',
    padding: 10,
  },
  dragHandle: {
    width: 32,
    height: 4,
    backgroundColor: '#0b8494',
    borderRadius: 100,
  },
  content: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 21,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontWeight: '600',
    color: '#1f232c',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontWeight: '500',
    color: '#717182',
  },
  serviceContainer: {
    marginBottom: 24,
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  serviceName: {
    fontSize: 17,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontWeight: '600',
    color: '#1f232c',
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaf6eb',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6.75,
    marginBottom: 8,
  },
  statusText: {
    fontSize: 10.5,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    color: '#008236',
    marginLeft: 4,
    textTransform: 'capitalize',
  },
  amount: {
    fontSize: 17,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontWeight: '600',
    color: '#1f232c',
  },
  infoContainer: {
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  infoLabel: {
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontWeight: '500',
    color: '#717182',
  },
  infoValue: {
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontWeight: '500',
    color: '#1f232c',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 7,
  },
  button: {
    flex: 1,
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    backgroundColor: '#f4f4f4',
  },
  downloadButton: {
    backgroundColor: '#0b8494',
  },
  closeButtonText: {
    fontSize: 17,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontWeight: '600',
    color: '#1f232c',
  },
  downloadButtonText: {
    fontSize: 17,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default TransactionDetails;
