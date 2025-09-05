import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

// Image constants from Figma
const imgRectangle3 = "http://localhost:3845/assets/18e01e2a8ee181c23b1a83841d2dd01e220d6520.png";
const imgBackground = "http://localhost:3845/assets/5c5a52f5f3638bec44c5aa43fbd9ee49a0cc7d6e.svg";
const img4 = "http://localhost:3845/assets/238dd6892dbbe27d5a06afc6b5d9d7c25ce52a34.svg";
const imgGroup = "http://localhost:3845/assets/e0b72717e769b3e1cf105f2762bf0e5bf9573f99.svg";
const img5 = "http://localhost:3845/assets/1931af93fccce6db5f6a709dd0914e3c0943f2c7.svg";
const img6 = "http://localhost:3845/assets/5e27d319007ceae5c2baf0312b3bf1c5585567c9.svg";
const imgSvg1 = "http://localhost:3845/assets/d84a9b81c6295b1332bab14f129e91d2f36a1bbe.svg";
const imgSvg2 = "http://localhost:3845/assets/56f398108f40dc6ac8782234ae58f50bdbac80cb.svg";
const imgSvg3 = "http://localhost:3845/assets/843b023d2f29645dc66350eb22a3161368a0319f.svg";
const imgSvg4 = "http://localhost:3845/assets/1ed729b77ba81b272e971e923d269ec6d680f9f8.svg";
const imgSvg = "http://localhost:3845/assets/674d9ec0091d121f0ca06cc36cf0f27baea191c4.svg";
const img3 = "http://localhost:3845/assets/5b36b24a3c2a60de0b9c9f0339f805a366aa5a4c.svg";
const imgPlus = "http://localhost:3845/assets/627de1d0af7e86f5c0b39d269894805d97fa9257.svg";

// Avatar component
const Avatar = ({ size = 48 }: { size?: number }) => (
  <Image
    source={require('../assets/avatar.png')}
    style={[styles.avatar, { width: size, height: size }]}
    resizeMode="cover"
  />
);

// Icon components using actual Figma assets
const ArrowLeftIcon = ({ color = 'black' }: { color?: string }) => (
  <Svg width={20} height={16} viewBox="0 0 20 16" fill="none">
    <Path
      d="M20.0002 8.00028C20.0002 8.55328 19.5532 9.00028 19.0002 9.00028H3.41422L8.70719 14.2933C9.09819 14.6842 9.09819 15.3163 8.70719 15.7073C8.51219 15.9023 8.25622 16.0003 8.00022 16.0003C7.74422 16.0003 7.48825 15.9023 7.29325 15.7073L0.29325 8.70731C-0.09775 8.31631 -0.09775 7.68425 0.29325 7.29325L7.29325 0.29325C7.68425 -0.09775 8.31619 -0.09775 8.70719 0.29325C9.09819 0.68425 9.09819 1.31631 8.70719 1.70731L3.41422 7.00028H19.0002C19.5532 7.00028 20.0002 7.44728 20.0002 8.00028Z"
      fill={color}
    />
  </Svg>
);

const ArrowRightIcon = () => (
  <Image
    source={{ uri: img6 }}
    style={{ width: 16, height: 16 }}
    resizeMode="contain"
  />
);

// Bottom Navigation Icons using actual Figma assets
const HomeIcon = () => (
  <Image
    source={{ uri: imgSvg1 }}
    style={{ width: 21, height: 21 }}
    resizeMode="contain"
  />
);

const RequestIcon = () => (
  <Image
    source={{ uri: imgSvg2 }}
    style={{ width: 23.1, height: 23.1 }}
    resizeMode="contain"
  />
);

const PaymentsIcon = () => (
  <Image
    source={{ uri: imgSvg3 }}
    style={{ width: 21, height: 21 }}
    resizeMode="contain"
  />
);

const ProfileIcon = () => (
  <Image
    source={{ uri: imgSvg4 }}
    style={{ width: 21, height: 21 }}
    resizeMode="contain"
  />
);

const RadioButtonSelected = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Circle cx={8} cy={8} r={7.5} fill="#030213" stroke="#030213" />
    <Circle cx={8} cy={8} r={3} fill="white" />
  </Svg>
);

const RadioButtonUnselected = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Circle cx={8} cy={8} r={7.5} fill="white" stroke="#D4D4D8" />
  </Svg>
);

interface ServiceDetailPaymentProps {
  navigation?: any;
}

export default function ServiceDetailPayment({ navigation }: ServiceDetailPaymentProps) {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [selectedCard, setSelectedCard] = useState('visa-4242');

  const handleBack = () => {
    console.log('Back pressed');
    navigation?.goBack();
  };

  const handleNext = () => {
    console.log('Next pressed');
    navigation?.navigate('ServiceDetailReview');
  };

  const handleRequest = () => {
    navigation?.navigate('ServiceDetails');
  };

  const handlePaymentSelect = (method: string) => {
    setSelectedPayment(method);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFDDAB" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.headerBackground}>
          <View style={styles.headerContainer}>
            <View style={styles.userSection}>
              <Avatar size={48} />
              <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeTitle}>Welcome back!</Text>
                <Text style={styles.welcomeSubtitle}>How can we help you today?</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.requestButton} onPress={handleRequest}>
              <Text style={styles.requestButtonText}>+ Request</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Progress Section */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.createRequestText}>Create Request</Text>
            <View style={styles.stepIndicator}>
              <Text style={styles.stepText}>Step 3 of 4</Text>
            </View>
          </View>

          {/* Step Progress */}
          <View style={styles.stepContainer}>
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Image
                  source={{ uri: imgBackground }}
                  style={styles.stepIcon}
                />
              </View>
              <Text style={styles.stepLabel}>Service Details</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Image
                  source={{ uri: imgBackground }}
                  style={styles.stepIcon}
                />
              </View>
              <Text style={styles.stepLabel}>Schedule</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={[styles.stepCircle, styles.stepCircleActive]}>
                <Text style={styles.stepNumberActive}>3</Text>
              </View>
              <Text style={styles.stepLabel}>Payment</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumber}>4</Text>
              </View>
              <Text style={styles.stepLabelInactive}>Review & Submit</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Form Content */}
        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>Payment Method</Text>
            <Text style={styles.formSubtitle}>Choose how you'd like to pay for this service</Text>
          </View>

          <View style={styles.paymentMethodsContainer}>
            {/* Credit/Debit Card Option */}
            <TouchableOpacity 
              style={[
                styles.paymentOption,
                selectedPayment === 'card' && styles.paymentOptionSelected
              ]}
              onPress={() => handlePaymentSelect('card')}
            >
              <View style={styles.paymentOptionContent}>
                <Image
                  source={{ uri: img4 }}
                  style={styles.paymentIcon}
                />
                <View style={styles.paymentInfo}>
                  <Text style={styles.paymentTitle}>Credit/Debit Card</Text>
                  <Text style={styles.paymentDescription}>Pay securely online</Text>
                </View>
              </View>
              <View style={styles.radioButton}>
                {selectedPayment === 'card' ? <RadioButtonSelected /> : <RadioButtonUnselected />}
              </View>
            </TouchableOpacity>

            {/* Cash Payment Option */}
            <TouchableOpacity 
              style={[
                styles.paymentOption,
                selectedPayment === 'cash' && styles.paymentOptionSelected
              ]}
              onPress={() => handlePaymentSelect('cash')}
            >
              <View style={styles.paymentOptionContent}>
                <Image
                  source={{ uri: imgGroup }}
                  style={styles.cashIcon}
                />
                <View style={styles.paymentInfo}>
                  <Text style={styles.paymentTitle}>Cash Payment</Text>
                  <Text style={styles.paymentDescription}>Pay the technician upon completion</Text>
                </View>
              </View>
              <View style={styles.radioButton}>
                {selectedPayment === 'cash' ? <RadioButtonSelected /> : <RadioButtonUnselected />}
              </View>
            </TouchableOpacity>

            {/* Cash Payment Notice */}
            {selectedPayment === 'cash' && (
              <View style={styles.cashNoticeContainer}>
                <View style={styles.cashNotice}>
                  <Text style={styles.cashNoticeTitle}>Cash Payment Notice</Text>
                  <Text style={styles.cashNoticeText}>
                    You will pay $72 in cash to the technician upon service completion. Please have the exact amount ready.
                  </Text>
                </View>
              </View>
            )}

            {/* Preferred Card Selection */}
            {selectedPayment === 'card' && (
              <View style={styles.preferredCardSection}>
                <Text style={styles.preferredCardTitle}>Preferred Card</Text>
                <View style={styles.cardsList}>
                  {/* Visa Card */}
                  <TouchableOpacity
                    style={[
                      styles.cardOption,
                      selectedCard === 'visa-4242' && styles.cardOptionSelected
                    ]}
                    onPress={() => setSelectedCard('visa-4242')}
                  >
                    <View style={styles.cardContent}>
                      <View style={styles.cardIconContainer}>
                        <Image
                          source={{ uri: imgSvg }}
                          style={styles.cardTypeIcon}
                        />
                      </View>
                      <View style={styles.cardDetails}>
                        <View style={styles.cardTitleRow}>
                          <Text style={styles.cardNumber}>Visa •••• 4242</Text>
                          <View style={styles.defaultBadge}>
                            <Text style={styles.defaultBadgeText}>Default</Text>
                          </View>
                        </View>
                        <Text style={styles.cardExpiry}>Expires 12/25</Text>
                      </View>
                    </View>
                    <View style={styles.radioButton}>
                      {selectedCard === 'visa-4242' ? <RadioButtonSelected /> : <RadioButtonUnselected />}
                    </View>
                  </TouchableOpacity>

                  {/* Mastercard */}
                  <TouchableOpacity
                    style={[
                      styles.cardOption,
                      selectedCard === 'mastercard-8888' && styles.cardOptionSelected
                    ]}
                    onPress={() => setSelectedCard('mastercard-8888')}
                  >
                    <View style={styles.cardContent}>
                      <View style={styles.cardIconContainer}>
                        <Image
                          source={{ uri: imgSvg }}
                          style={styles.cardTypeIcon}
                        />
                      </View>
                      <View style={styles.cardDetails}>
                        <Text style={styles.cardNumber}>Mastercard •••• 8888</Text>
                        <Text style={styles.cardExpiry}>Expires 08/26</Text>
                      </View>
                    </View>
                    <View style={styles.radioButton}>
                      {selectedCard === 'mastercard-8888' ? <RadioButtonSelected /> : <RadioButtonUnselected />}
                    </View>
                  </TouchableOpacity>
                </View>

                {/* Add Card Button */}
                <TouchableOpacity style={styles.addCardButton}>
                  <Image
                    source={{ uri: imgPlus }}
                    style={styles.addCardIcon}
                  />
                  <Text style={styles.addCardText}>Add Debit/Credit Card</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Total Amount */}
          <View style={styles.totalAmountContainer}>
            <Text style={styles.totalAmountLabel}>Total Amount</Text>
            <Text style={styles.totalAmountValue}>$72</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Buttons */}
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <ArrowLeftIcon />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
          <ArrowRightIcon />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation is now handled by the tab navigator */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  headerBackground: {
    backgroundColor: '#FFDDAB',
    paddingTop: 14,
    paddingBottom: 21,
    paddingHorizontal: 14,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    borderRadius: 16.5,
  },
  welcomeContainer: {
    gap: 0,
  },
  welcomeTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 19,
    fontWeight: '600',
    color: '#0B8494',
    lineHeight: 25.2,
  },
  welcomeSubtitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#1F232C',
    lineHeight: 18,
  },
  requestButton: {
    backgroundColor: '#0B8494',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  requestButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 14.3,
  },
  progressSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 21,
  },
  createRequestText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#0A0A0A',
    lineHeight: 14.3,
  },
  stepIndicator: {
    backgroundColor: '#ECEEF2',
    paddingHorizontal: 11.5,
    paddingVertical: 2.75,
    borderRadius: 6.75,
  },
  stepText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#0A0A0A',
    lineHeight: 14.3,
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  stepItem: {
    alignItems: 'center',
    flex: 1,
  },
  stepCircle: {
    width: 21,
    height: 21,
    borderRadius: 21,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3.5,
  },
  stepCircleActive: {
    backgroundColor: '#030213',
  },
  stepIcon: {
    width: 21,
    height: 21,
  },
  stepNumber: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 14.3,
  },
  stepNumberActive: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#FFFFFF',
    lineHeight: 14.3,
  },
  stepLabel: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#0A0A0A',
    lineHeight: 14.3,
    textAlign: 'center',
  },
  stepLabelInactive: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#858C9B',
    lineHeight: 14.3,
    textAlign: 'center',
  },
  progressBar: {
    height: 7,
    backgroundColor: 'rgba(3,2,19,0.2)',
    borderRadius: 7,
    marginBottom: 14,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '75%', // 75% for step 3 of 4
    backgroundColor: '#030213',
  },
  formContainer: {
    flex: 1,
    padding: 14,
  },
  formHeader: {
    marginBottom: 16,
    gap: 7,
  },
  formTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 17,
    fontWeight: '600',
    color: '#0A0A0A',
    lineHeight: 22.1,
  },
  formSubtitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#0B8494',
    lineHeight: 18,
  },
  paymentMethodsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12.75,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    padding: 16,
    marginBottom: 16,
    gap: 21,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 17,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D4D4D8',
    backgroundColor: 'rgba(255,255,255,0)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  paymentOptionSelected: {
    borderColor: 'rgba(24,24,27,0.5)',
  },
  paymentOptionContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    gap: 12,
  },
  paymentIcon: {
    width: 32,
    height: 24,
  },
  cashIcon: {
    width: 38.269,
    height: 24,
    transform: [{ rotateY: '180deg' }],
  },
  paymentInfo: {
    flex: 1,
    gap: 8,
  },
  paymentTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#0A0A0A',
    lineHeight: 18,
  },
  paymentDescription: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 14.3,
  },
  radioButton: {
    marginLeft: 8,
  },
  cashNoticeContainer: {
    marginTop: 14,
  },
  cashNotice: {
    backgroundColor: '#FEFCE8',
    borderWidth: 1,
    borderColor: '#995D00',
    borderRadius: 8.75,
    padding: 15,
    gap: 3.5,
  },
  cashNoticeTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#995D00',
    lineHeight: 18,
  },
  cashNoticeText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 13,
    fontWeight: '400',
    color: '#A65F00',
    lineHeight: 14.3,
  },
  totalAmountContainer: {
    backgroundColor: 'rgba(236,236,240,0.5)',
    borderRadius: 8.75,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalAmountLabel: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 14,
    fontWeight: '500',
    color: '#0A0A0A',
    lineHeight: 21,
  },
  totalAmountValue: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 14,
    fontWeight: '500',
    color: '#00A63E',
    lineHeight: 21,
  },
  bottomButtonsContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingTop: 15,
    paddingBottom: 14,
    gap: 7,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  backButton: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
  },
  backButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 17,
    fontWeight: '600',
    color: '#1F232C',
    lineHeight: 22.1,
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#0B8494',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
  },
  nextButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 22.1,
  },
  // Bottom navigation styles removed - now handled by tab navigator
  // Preferred Card Section Styles
  preferredCardSection: {
    marginTop: 14,
    gap: 7,
  },
  preferredCardTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#0A0A0A',
    lineHeight: 18,
  },
  cardsList: {
    gap: 10.5,
    marginTop: 7,
  },
  cardOption: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12.75,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardOptionSelected: {
    borderColor: 'rgba(24,24,27,0.5)',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10.5,
  },
  cardIconContainer: {
    backgroundColor: 'rgba(3,2,19,0.1)',
    width: 35,
    height: 35,
    borderRadius: 8.75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTypeIcon: {
    width: 17.5,
    height: 17.5,
  },
  cardDetails: {
    flex: 1,
    gap: 8,
    paddingVertical: 2,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  cardNumber: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#0A0A0A',
    lineHeight: 18,
  },
  defaultBadge: {
    backgroundColor: '#DCFCE7',
    borderWidth: 1,
    borderColor: '#B9F8CF',
    borderRadius: 6.75,
    paddingHorizontal: 8,
    paddingVertical: 1,
  },
  defaultBadgeText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'sans-serif',
    fontSize: 10.5,
    fontWeight: '400',
    color: '#008236',
    lineHeight: 14,
    textAlign: 'center',
  },
  cardExpiry: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 12,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 12,
  },
  addCardButton: {
    backgroundColor: '#0B8494',
    borderRadius: 6,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 7,
  },
  addCardIcon: {
    width: 16,
    height: 16,
  },
  addCardText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 22.1,
  },
});