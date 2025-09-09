import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TermsAndPrivacy = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffddab" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms & Privacy</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Terms & Conditions</Text>
          <Text style={styles.lastUpdated}>Last Updated: 12/12/2026</Text>
          
          <Text style={styles.spacing}></Text>
          
          <Text style={styles.sectionTitle}>1. Definitions</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• Service refers to the website, application, or product offered by [Your Company Name].</Text>
            <Text style={styles.bulletPoint}>• User, You, or Your refers to the person accessing or using our Service.</Text>
            <Text style={styles.bulletPoint}>• We, Our, or Us refers to [Your Company Name].</Text>
          </View>
          
          <Text style={styles.spacing}></Text>
          
          <Text style={styles.sectionTitle}>2. Use of the Service</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• You must be at least 18 years old to use our Service.</Text>
            <Text style={styles.bulletPoint}>• You agree not to use the Service for any illegal or unauthorized purpose.</Text>
            <Text style={styles.bulletPoint}>• We reserve the right to terminate accounts that violate these terms.</Text>
          </View>
          
          <Text style={styles.spacing}></Text>
          
          <Text style={styles.sectionTitle}>3. Intellectual Property</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• All content, trademarks, and materials on the Service are owned by [Your Company Name] unless otherwise stated.</Text>
            <Text style={styles.bulletPoint}>• You may not copy, distribute, or reuse any content without prior written permission.</Text>
          </View>
          
          <Text style={styles.spacing}></Text>
          
          <Text style={styles.sectionTitle}>4. User-Generated Content</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• Any content you submit remains yours, but you grant [Your Company Name] a non-exclusive license to use it for the purpose of operating and improving the Service.</Text>
            <Text style={styles.bulletPoint}>• You are responsible for ensuring your content does not infringe on any third-party rights.</Text>
          </View>
          
          <Text style={styles.spacing}></Text>
          
          <Text style={styles.sectionTitle}>5. Limitation of Liability</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• The Service is provided "as is" without any warranties of any kind.</Text>
            <Text style={styles.bulletPoint}>• [Your Company Name] shall not be liable for any damages resulting from the use or inability to use the Service.</Text>
          </View>
          
          <Text style={styles.spacing}></Text>
          
          <Text style={styles.sectionTitle}>6. Changes to Terms</Text>
          <Text style={styles.bodyText}>We may update these Terms & Conditions from time to time. Any changes will be posted on this page with an updated "Last Updated" date.</Text>
          
          <Text style={styles.sectionTitle}>7. Contact Us</Text>
          <Text style={styles.bodyText}>
            If you have questions about these Terms & Conditions, you can reach us at:{'\n'}
            📧 support@[yourdomain].com
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#ffddab',
    height: 116,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 44,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 70,
    width: 20,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'SF Pro Text',
    marginTop: 26,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0a0a0a',
    fontFamily: 'SF Pro Display',
    lineHeight: 18,
    marginBottom: 4,
  },
  lastUpdated: {
    fontSize: 15,
    fontWeight: '500',
    color: '#858c9b',
    fontFamily: 'SF Pro Display',
    lineHeight: 18,
    marginBottom: 18,
  },
  spacing: {
    height: 18,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0a0a0a',
    fontFamily: 'SF Pro Display',
    lineHeight: 18,
    marginBottom: 8,
  },
  bulletList: {
    marginBottom: 18,
  },
  bulletPoint: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0a0a0a',
    fontFamily: 'SF Pro Display',
    lineHeight: 18,
    marginBottom: 4,
    paddingLeft: 0,
  },
  bodyText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#0a0a0a',
    fontFamily: 'SF Pro Display',
    lineHeight: 18,
    marginBottom: 18,
  },
});

export default TermsAndPrivacy;