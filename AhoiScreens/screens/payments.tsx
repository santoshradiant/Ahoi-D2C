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
import PaymentMethods from './PaymentMethods';
import TransactionDetails from './TransactionDetails';

const { width, height } = Dimensions.get('window');

// SVG Components for icons
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

const DownloadIcon = ({ color = '#1f232c' }: { color?: string }) => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 10l5 5 5-5"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 15V3"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ServiceIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 12l2 2 4-4"
      stroke="#717182"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
      stroke="#717182"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Bottom Navigation Icons
const HomeIcon = ({ active = false }: { active?: boolean }) => (
  <Svg width={21} height={21} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      stroke={active ? '#ffffff' : '#c7cad1'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 22V12h6v10"
      stroke={active ? '#ffffff' : '#c7cad1'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const RequestIcon = ({ active = false }: { active?: boolean }) => (
  <Svg width={21} height={21} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 5v14M5 12h14"
      stroke={active ? '#ffffff' : '#c7cad1'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PaymentsIcon = ({ active = false }: { active?: boolean }) => (
  <Svg width={23.1} height={23.1} viewBox="0 0 24 24" fill="none">
    <Path
      d="M1 4h22v16H1z"
      stroke={active ? '#ffffff' : '#c7cad1'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1 10h22"
      stroke={active ? '#ffffff' : '#c7cad1'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ProfileIcon = ({ active = false }: { active?: boolean }) => (
  <Svg width={21} height={21} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      stroke={active ? '#ffffff' : '#c7cad1'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      stroke={active ? '#ffffff' : '#c7cad1'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Avatar component
const Avatar = () => (
  <Image 
    source={require('../assets/avatar.png')} 
    style={styles.avatar}
    resizeMode="cover"
  />
);

// Transaction Card Component
interface TransactionCardProps {
  title: string;
  requestId: string;
  paymentMethod: string;
  date: string;
  amount: string;
  status: 'completed' | 'pending' | 'failed';
  onViewDetails: () => void;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  title,
  requestId,
  paymentMethod,
  date,
  amount,
  status,
  onViewDetails,
}) => {
  return (
    <View style={styles.transactionCard}>
      <View style={styles.transactionContent}>
        <View style={styles.transactionLeft}>
          <View style={styles.serviceIconContainer}>
            <ServiceIcon />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>{title}</Text>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionInfoText}>Request ID: {requestId}</Text>
              <Text style={styles.transactionInfoText}>{paymentMethod}</Text>
              <Text style={styles.transactionInfoText}>{date}</Text>
            </View>
          </View>
        </View>
        <View style={styles.transactionRight}>
          <View style={[styles.statusBadge, { backgroundColor: '#eaf6eb' }]}>
            <CheckIcon color="#008236" />
            <Text style={styles.statusText}>completed</Text>
          </View>
          <Text style={styles.transactionAmount}>{amount}</Text>
        </View>
      </View>
      <View style={styles.transactionButtons}>
        <TouchableOpacity style={styles.viewDetailsButton} onPress={onViewDetails}>
          <EyeIcon color="#ffffff" />
          <Text style={styles.viewDetailsButtonText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.receiptButton}>
          <DownloadIcon color="#1f232c" />
          <Text style={styles.receiptButtonText}>Receipt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Bottom Navigation is now handled by the tab navigator

interface PaymentsScreenProps {
  navigation?: any;
}

const PaymentsScreen: React.FC<PaymentsScreenProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('transactions');
  const [selectedTransaction, setSelectedTransaction] = useState<null | {
    id: string;
    service: string;
    amount: number;
    status: string;
    paymentMethod: string;
    date: string;
  }>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffddab" />
      
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusBarTime}>9:41</Text>
        <View style={styles.statusBarIcons}>
          {/* Status bar icons would be handled by the system */}
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <Avatar />
            <View style={styles.headerText}>
              <Text style={styles.welcomeText}>Welcome back!</Text>
              <Text style={styles.helpText}>How can we help you today?</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.requestButton}
            onPress={() => navigation.navigate('ServiceRequestStack')}
          >
            <Text style={styles.requestButtonText}>+ Request</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.mainContent} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {/* Tab Navigation */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'transactions' && styles.activeTab
              ]}
              onPress={() => setActiveTab('transactions')}
            >
              <Text style={[
                styles.tabText,
                activeTab === 'transactions' && styles.activeTabText
              ]}>
                Transactions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'payment-methods' && styles.activeTab
              ]}
              onPress={() => setActiveTab('payment-methods')}
            >
              <Text style={[
                styles.tabText,
                activeTab === 'payment-methods' && styles.activeTabText
              ]}>
                Payment Methods
              </Text>
            </TouchableOpacity>
          </View>

          {/* Content based on active tab */}
          {activeTab === 'transactions' ? (
            <View style={styles.transactionsList}>
              <TransactionCard
                title="Deep Office Cleaning"
                requestId="REQ-001"
                paymentMethod="Visa •••• 4242"
                date="2024-08-08 at 14:30"
                amount="-$150"
                status="completed"
                onViewDetails={() => {
                  setSelectedTransaction({
                    id: 'REQ-001',
                    service: 'Deep Office Cleaning',
                    amount: 150,
                    status: 'completed',
                    paymentMethod: 'Visa •••• 4242',
                    date: '2024-08-08 at 14:30'
                  });
                  setIsModalVisible(true);
                }}
              />
              <TransactionCard
                title="Safety Inspection"
                requestId="REQ-002"
                paymentMethod="Visa •••• 4242"
                date="2024-08-08 at 14:30"
                amount="-$200"
                status="completed"
                onViewDetails={() => {
                  setSelectedTransaction({
                    id: 'REQ-002',
                    service: 'Safety Inspection',
                    amount: 200,
                    status: 'completed',
                    paymentMethod: 'Visa •••• 4242',
                    date: '2024-08-08 at 14:30'
                  });
                  setIsModalVisible(true);
                }}
              />

              {/* Transaction Details Modal */}
              <TransactionDetails
                visible={isModalVisible}
                onClose={() => {
                  setIsModalVisible(false);
                  setSelectedTransaction(null);
                }}
                transaction={selectedTransaction || {
                  id: '',
                  service: '',
                  amount: 0,
                  status: '',
                  paymentMethod: '',
                  date: ''
                }}
              />
            </View>
          ) : (
            <PaymentMethods
              onEditCard={(cardId) => {
                console.log('Edit card pressed:', cardId);
                // Handle edit card navigation or modal
              }}
              onDeleteCard={(cardId) => {
                console.log('Delete card pressed:', cardId);
                // Handle delete card confirmation and API call
              }}
            />
          )}
        </View>
      </ScrollView>

      {/* Bottom Navigation is now handled by the tab navigator */}
    </SafeAreaView>
  );
};

export default PaymentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  statusBar: {
    height: 44,
    backgroundColor: '#ffddab',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 23,
  },
  statusBarTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f232c',
    letterSpacing: 0.2,
  },
  statusBarIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#ffddab',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 21,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16.5,
  },
  headerText: {
    gap: 2,
  },
  welcomeText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#0b8494',
    lineHeight: 25.2,
  },
  helpText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
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
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 14.3,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    paddingHorizontal: 14,
    paddingTop: 14,
    gap: 16,
  },
  tabContainer: {
    backgroundColor: '#e4e4e4',
    borderRadius: 12.75,
    padding: 3,
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12.75,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
  },
  activeTab: {
    backgroundColor: '#ffffff',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    textAlign: 'center',
    flexShrink: 1,
  },
  activeTabText: {
    color: '#1f232c',
  },
  transactionsList: {
    gap: 10.5,
  },
  transactionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12.75,
    padding: 1,
    borderWidth: 0.1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  transactionContent: {
    padding: 14,
    gap: 10.5,
  },
  transactionLeft: {
    flexDirection: 'row',
    gap: 10.5,
    flex: 1,
  },
  serviceIconContainer: {
    width: 28,
    height: 28,
    backgroundColor: '#f4f4f4',
    borderRadius: 8.75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionDetails: {
    flex: 1,
    gap: 8,
  },
  transactionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1f232c',
    lineHeight: 22.1,
  },
  transactionInfo: {
    gap: 3.5,
  },
  transactionInfoText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 12,
  },
  transactionRight: {
    alignItems: 'flex-end',
    gap: 8,
    position: 'absolute',
    right: 14,
    top: 14,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3.5,
    paddingHorizontal: 8,
    paddingVertical: 4.5,
    borderRadius: 6.75,
    borderWidth: 1,
    borderColor: '#eaf6eb',
  },
  statusText: {
    fontSize: 10.5,
    fontWeight: '400',
    color: '#008236',
    lineHeight: 14,
    textTransform: 'capitalize',
  },
  transactionAmount: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1f232c',
    lineHeight: 22.1,
  },
  transactionButtons: {
    flexDirection: 'row',
    gap: 7,
    paddingHorizontal: 14,
    paddingBottom: 21,
  },
  viewDetailsButton: {
    flex: 1,
    backgroundColor: '#0b8494',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
  },
  viewDetailsButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 14.3,
  },
  receiptButton: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
  },
  receiptButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f232c',
    lineHeight: 14.3,
  },
  // Bottom Navigation styles removed - now handled by tab navigator
});
