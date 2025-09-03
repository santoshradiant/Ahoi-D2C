import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

// SVG Components
const ArrowLeftIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <Path
      d="M15.8333 10H4.16666"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 15.8334L4.16666 10L10 4.16669"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ShareIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M12 5.33333C13.1046 5.33333 14 4.43791 14 3.33333C14 2.22876 13.1046 1.33333 12 1.33333C10.8954 1.33333 10 2.22876 10 3.33333C10 4.43791 10.8954 5.33333 12 5.33333Z"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 14.6667C13.1046 14.6667 14 13.7713 14 12.6667C14 11.5621 13.1046 10.6667 12 10.6667C10.8954 10.6667 10 11.5621 10 12.6667C10 13.7713 10.8954 14.6667 12 14.6667Z"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.72667 9.00667L10.28 11.66"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.2733 4.34L5.72667 7"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const HomeIcon = ({ color = '#ffffff' }) => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M2.625 7.875L10.5 2.625L18.375 7.875V17.5C18.375 17.9473 18.1973 18.3763 17.8839 18.6897C17.5705 19.0031 17.1415 19.1808 16.6942 19.1808H4.30583C3.85854 19.1808 3.42951 19.0031 3.11612 18.6897C2.80272 18.3763 2.625 17.9473 2.625 17.5V7.875Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.875 19.1808V10.5H13.125V19.1808"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const RequestIcon = ({ color = '#c7cad1' }) => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M10.5 19.25C15.3325 19.25 19.25 15.3325 19.25 10.5C19.25 5.66751 15.3325 1.75 10.5 1.75C5.66751 1.75 1.75 5.66751 1.75 10.5C1.75 15.3325 5.66751 19.25 10.5 19.25Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 7V14"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 10.5H14"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PaymentsIcon = ({ color = '#c7cad1' }) => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M17.5 3.5H3.5C2.57053 3.5 1.75 4.32053 1.75 5.25V15.75C1.75 16.6795 2.57053 17.5 3.5 17.5H17.5C18.4295 17.5 19.25 16.6795 19.25 15.75V5.25C19.25 4.32053 18.4295 3.5 17.5 3.5Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.75 8.75H19.25"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ProfileIcon = ({ color = '#c7cad1' }) => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M17.5 18.375V16.625C17.5 15.6967 17.1313 14.8065 16.4749 14.1501C15.8185 13.4937 14.9283 13.125 14 13.125H7C6.07174 13.125 5.18151 13.4937 4.52513 14.1501C3.86875 14.8065 3.5 15.6967 3.5 16.625V18.375"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 9.625C12.433 9.625 14 8.058 14 6.125C14 4.192 12.433 2.625 10.5 2.625C8.567 2.625 7 4.192 7 6.125C7 8.058 8.567 9.625 10.5 9.625Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

interface InvoiceProps {
  navigation: {
    goBack: () => void;
    navigate: (screen: string) => void;
  };
}

const Invoice: React.FC<InvoiceProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header with yellow background */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>invoice-file-19831.pdf</Text>
          
          <TouchableOpacity style={styles.shareButton}>
            <ShareIcon />
          </TouchableOpacity>
        </View>
      </View>

      {/* Invoice Image */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.invoiceImagePlaceholder}>
          <Text style={styles.placeholderText}>Invoice Preview</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <HomeIcon color="#ffffff" />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('ServiceDetails')}
        >
          <RequestIcon />
          <Text style={styles.navText}>Request</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <PaymentsIcon />
          <Text style={styles.navText}>Payments</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <ProfileIcon />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    backgroundColor: '#FFDDAB',
    paddingTop: 10,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'SF Pro Text',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
  },
  shareButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  invoiceImagePlaceholder: {
    width: width,
    height: 520,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#666666',
  },
  bottomNav: {
    height: 92,
    backgroundColor: '#0B8494',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 7,
    borderRadius: 8.75,
  },
  navText: {
    fontFamily: 'SF Pro Display',
    fontSize: 15,
    color: '#C7CAD1',
  },
  activeNavText: {
    color: '#FFFFFF',
  },
});

export default Invoice;
