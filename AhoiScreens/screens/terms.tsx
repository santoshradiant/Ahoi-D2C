import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

// SVG Icons
const ArrowLeftIcon = ({ color = 'black' }: { color?: string }) => (
  <Svg width={20} height={16} viewBox="0 0 20 16" fill="none">
    <Path
      d="M20.0002 8.00028C20.0002 8.55328 19.5532 9.00028 19.0002 9.00028H3.41422L8.70719 14.2933C9.09819 14.6842 9.09819 15.3163 8.70719 15.7073C8.51219 15.9023 8.25622 16.0003 8.00022 16.0003C7.74422 16.0003 7.48825 15.9023 7.29325 15.7073L0.29325 8.70731C-0.09775 8.31631 -0.09775 7.68425 0.29325 7.29325L7.29325 0.29325C7.68425 -0.09775 8.31619 -0.09775 8.70719 0.29325C9.09819 0.68425 9.09819 1.31631 8.70719 1.70731L3.41422 7.00028H19.0002C19.5532 7.00028 20.0002 7.44728 20.0002 8.00028Z"
      fill={color}
    />
  </Svg>
);

const SignalIcon = () => (
  <Svg width={18} height={10} viewBox="0 0 18 10" fill="none">
    <Path
      d="M1 9L3.5 6.5M6 4L8.5 1.5M11 1.5L13.5 4M16 6.5L18.5 9"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const WifiIcon = () => (
  <Svg width={15} height={11} viewBox="0 0 15 11" fill="none">
    <Path
      d="M7.5 1C10.5 1 13 3.5 13 6.5M7.5 4C9.5 4 11 5.5 11 7.5M7.5 7C8 7 8.5 7.5 8.5 8"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const BatteryIcon = () => (
  <Svg width={27} height={13} viewBox="0 0 27 13" fill="none">
    <Path
      d="M1 4.5C1 3.5 1.5 3 2.5 3H20.5C21.5 3 22 3.5 22 4.5V8.5C22 9.5 21.5 10 20.5 10H2.5C1.5 10 1 9.5 1 8.5V4.5Z"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 6H24V7H22V6Z"
      fill="#1F232C"
    />
  </Svg>
);

interface TermsProps {
  navigation?: any;
}

export default function Terms({ navigation }: TermsProps) {
  const handleBackPress = () => {
    if (navigation) {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffddab" />
      
      {/* Status Bar */}
      <View style={styles.statusBar}>
        {/* <Text style={styles.timeText}>9:41</Text> */}
        {/* <View style={styles.statusIcons}>
          <SignalIcon />
          <WifiIcon />
          <BatteryIcon />
        </View> */}
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms & Privacy</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Terms & Conditions</Text>
          <Text style={styles.lastUpdated}>Last Updated: 12/12/2026</Text>
          <Text style={styles.spacing}></Text>
          
          <Text style={styles.sectionTitle}>1. Definitions</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>
              • Service refers to the website, application, or product offered by [Your Company Name].
            </Text>
            <Text style={styles.bulletItem}>
              • User, You, or Your refers to the person accessing or using our Service.
            </Text>
            <Text style={styles.bulletItem}>
              • We, Our, or Us refers to [Your Company Name].
            </Text>
            <Text style={styles.bulletItem}></Text>
          </View>

          <Text style={styles.sectionTitle}>2. Use of the Service</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>
              • You must be at least 18 years old to use our Service.
            </Text>
            <Text style={styles.bulletItem}>
              • You agree not to use the Service for any illegal or unauthorized purpose.
            </Text>
            <Text style={styles.bulletItem}>
              • We reserve the right to terminate accounts that violate these terms.
            </Text>
            <Text style={styles.bulletItem}></Text>
          </View>

          <Text style={styles.sectionTitle}>3. Intellectual Property</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>
              • All content, trademarks, and materials on the Service are owned by [Your Company Name] unless otherwise stated.
            </Text>
            <Text style={styles.bulletItem}>
              • You may not copy, distribute, or reuse any content without prior written permission.
            </Text>
          </View>

          <Text style={styles.spacing}></Text>

          <Text style={styles.sectionTitle}>4. User-Generated Content</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>
              • Any content you submit remains yours, but you grant [Your Company Name] a non-exclusive license to use it for the purpose of operating and improving the Service.
            </Text>
            <Text style={styles.bulletItem}>
              • You are responsible for ensuring your content does not infringe on any third-party rights.
            </Text>
          </View>

          <Text style={styles.spacing}></Text>

          <Text style={styles.sectionTitle}>5. Limitation of Liability</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>
              • The Service is provided "as is" without any warranties of any kind.
            </Text>
            <Text style={styles.bulletItem}>
              • [Your Company Name] shall not be liable for any damages resulting from the use or inability to use the Service.
            </Text>
          </View>

          <Text style={styles.spacing}></Text>

          <Text style={styles.sectionTitle}>6. Changes to Terms</Text>
          <Text style={styles.paragraph}>
            We may update these Terms & Conditions from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
          </Text>

          <Text style={styles.sectionTitle}>7. Contact Us</Text>
          <Text style={styles.paragraph}>
            If you have questions about these Terms & Conditions, you can reach us at:{'\n'}
            📧 support@[yourdomain].com
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 23,
    paddingVertical: 8,
    backgroundColor: '#ffddab',
  },
  timeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F232C',
    fontFamily: Platform.OS === 'ios' ? 'Urbanist' : 'System',
    letterSpacing: 0.2,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 9,
    paddingVertical: 15,
    backgroundColor: '#ffddab',
    minHeight: 51,
  },
  backButton: {
    width: 20,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'System',
    textAlign: 'center',
    flex: 1,
  },
  headerSpacer: {
    width: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 50,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0a0a0a',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
    lineHeight: 18,
    marginBottom: 0,
  },
  lastUpdated: {
    fontSize: 15,
    fontWeight: '500',
    color: '#858c9b',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
    lineHeight: 18,
    marginBottom: 0,
  },
  spacing: {
    fontSize: 15,
    lineHeight: 18,
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0a0a0a',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
    lineHeight: 18,
    marginBottom: 0,
  },
  bulletList: {
    marginLeft: 0,
  },
  bulletItem: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0a0a0a',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
    lineHeight: 18,
    marginBottom: 0,
    marginLeft: 22.5,
  },
  paragraph: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0a0a0a',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
    lineHeight: 18,
    marginBottom: 0,
  },
});
