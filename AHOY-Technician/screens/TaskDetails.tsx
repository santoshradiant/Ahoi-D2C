import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

// SVG Icons
const MapPinIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 1C10.7614 1 13 3.23858 13 6C13 10 8 15 8 15C8 15 3 10 3 6C3 3.23858 5.23858 1 8 1Z"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CalendarIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M12 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V4C14 2.89543 13.1046 2 12 2Z"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 1V3"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5 1V3"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 6H14"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const UserIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M0 16V14C0 11.7909 1.79086 10 4 10H12C14.2091 10 16 11.7909 16 14V16"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const NavigationIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M8 1L15 8L8 15L1 8L8 1Z"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PhoneIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M15.05 10.94L13.05 8.94C12.66 8.55 12.03 8.55 11.64 8.94L10.64 9.94C10.25 10.33 9.62 10.33 9.23 9.94L6.06 6.77C5.67 6.38 5.67 5.75 6.06 5.36L7.06 4.36C7.45 3.97 7.45 3.34 7.06 2.95L5.06 0.95C4.67 0.56 4.04 0.56 3.65 0.95L1.65 2.95C0.87 3.73 0.87 5.02 1.65 5.8L10.2 14.35C10.98 15.13 12.27 15.13 13.05 14.35L15.05 12.35C15.44 11.96 15.44 11.33 15.05 10.94Z"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PlayIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M3 2L13 8L3 14V2Z"
      stroke="#FFFFFF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

interface TaskDetailsProps {
  visible: boolean;
  onClose: () => void;
  task?: {
    id: string;
    title: string;
    price: string;
    location: string;
    time: string;
    customer: string;
    distance?: string;
    description?: string;
    paymentMethod?: string;
    amount?: string;
  } | null;
}

export default function TaskDetails({ visible, onClose, task }: TaskDetailsProps) {
  if (!task) return null;

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

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Task Details</Text>
              <Text style={styles.subtitle}>Complete task information and customer details.</Text>
            </View>

            {/* Task Info */}
            <View style={styles.section}>
              <View style={styles.taskIdContainer}>
                <Text style={styles.taskId}>{task.id}</Text>
              </View>
              
              <View style={styles.taskTitleRow}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <View style={styles.priceBadge}>
                  <Text style={styles.priceText}>{task.price}</Text>
                </View>
              </View>

              {task.description && (
                <Text style={styles.description}>{task.description}</Text>
              )}
            </View>

            {/* Location, Time, Customer */}
            <View style={styles.section}>
              <View style={styles.detailRow}>
                <MapPinIcon />
                <View style={styles.detailContent}>
                  <Text style={styles.detailText}>{task.location}</Text>
                  <Text style={styles.distanceText}>0.8 km away</Text>
                </View>
              </View>

              <View style={styles.detailRow}>
                <CalendarIcon />
                <Text style={styles.detailText}>{task.time}</Text>
              </View>

              <View style={styles.detailRow}>
                <UserIcon />
                <Text style={styles.detailText}>{task.customer}</Text>
              </View>
            </View>

            {/* Payment Info */}
            <View style={styles.paymentSection}>
              <View style={styles.paymentRow}>
                <Text style={styles.paymentLabel}>Payment Method</Text>
                <Text style={styles.paymentValue}>{task.paymentMethod || 'Cash'}</Text>
              </View>
              <View style={styles.paymentRow}>
                <Text style={styles.paymentLabel}>Amount</Text>
                <Text style={styles.paymentValue}>{task.amount || task.price}</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.secondaryButton}>
                <NavigationIcon />
                <Text style={styles.secondaryButtonText}>Directions</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.secondaryButton}>
                <PhoneIcon />
                <Text style={styles.secondaryButtonText}>Call Customer</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.primaryButton}>
              <PlayIcon />
              <Text style={styles.primaryButtonText}>Start Job</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

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
    maxHeight: '90%',
    width: width,
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
    color: '#000000',
    lineHeight: 31.5,
    marginBottom: 8,
    fontFamily: Platform.OS === 'ios' ? 'Ghapter' : 'System',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  section: {
    marginBottom: 14,
    paddingHorizontal: 16,
  },
  taskIdContainer: {
    marginBottom: 7,
  },
  taskId: {
    fontSize: 15,
    fontWeight: '400',
    color: '#858C9B',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  taskTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 7,
  },
  taskTitle: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 22.1,
    flex: 1,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  priceBadge: {
    backgroundColor: '#28A138',
    borderRadius: 99999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  priceText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: 14.3,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 12,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 7,
    marginBottom: 7,
  },
  detailContent: {
    flex: 1,
    gap: 8,
  },
  detailText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  distanceText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 14.3,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  paymentSection: {
    borderTopWidth: 1,
    borderTopColor: '#ABB0BA',
    paddingTop: 16,
    paddingHorizontal: 16,
    marginBottom: 14,
    gap: 8,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  paymentValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 7,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#E4E4E4',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  secondaryButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F232C',
    lineHeight: 14.3,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  primaryButton: {
    backgroundColor: '#0b8494',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginHorizontal: 16,
  },
  primaryButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
});