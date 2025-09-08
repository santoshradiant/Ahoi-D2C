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
import { Svg, Path, Circle, Mask, G, Rect, Text as SvgText } from 'react-native-svg';
import TickIcon from '../components/TickIcon';

const { width, height } = Dimensions.get('window');

// Image constants - using local assets
const imgRectangle3 = require('../assets/rectangle3.png');
const imgBackground = require('../assets/background.svg');
const img4 = require('../assets/arrow-left-alt.svg');
const imgGroup = require('../assets/group.svg');
const img5 = require('../assets/arrow-left.svg');
const img6 = require('../assets/arrow-right.svg');
const imgSvg1 = require('../assets/home-icon.svg');
const imgSvg2 = require('../assets/request-icon.svg');
const imgSvg3 = require('../assets/payments-icon.svg');
const imgSvg4 = require('../assets/profile-icon.svg');
const imgSvg = require('../assets/home-icon-alt.svg');
const img3 = require('../assets/arrow-left-alt.svg');
const imgPlus = require('../assets/plus-icon.svg');

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

// Payment method icons
const VisaIcon = () => (
  <Svg width={32} height={25} viewBox="0 0 32 25" fill="none">
    <Mask id="mask0_2088_326" maskType="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="25">
      <Path d="M0 0.5H32V24.5H0V0.5Z" fill="white"/>
    </Mask>
    <G mask="url(#mask0_2088_326)">
      <Path d="M28 0.5H4C2.93913 0.5 1.92172 0.921427 1.17157 1.67157C0.421427 2.42172 0 3.43913 0 4.5L0 20.5C0 21.5609 0.421427 22.5783 1.17157 23.3284C1.92172 24.0786 2.93913 24.5 4 24.5H28C29.0609 24.5 30.0783 24.0786 30.8284 23.3284C31.5786 22.5783 32 21.5609 32 20.5V4.5C32 3.43913 31.5786 2.42172 30.8284 1.67157C30.0783 0.921427 29.0609 0.5 28 0.5Z" fill="#252525"/>
      <Path d="M15.8841 8.76199L14.2801 16.258H12.3401L13.9441 8.76199H15.8841Z" fill="white"/>
      <Path fillRule="evenodd" clipRule="evenodd" d="M26.2069 16.258H27.9999L26.4329 8.76201H24.7799C24.603 8.76023 24.4296 8.81173 24.2823 8.90982C24.1349 9.00791 24.0206 9.14804 23.9539 9.31201L21.0439 16.258H23.0809L23.4849 15.138H25.9729L26.2069 16.258ZM24.0419 13.602L25.0629 10.787L25.6499 13.602H24.0419Z" fill="white"/>
      <Path d="M21.144 13.81C21.149 12.627 20.169 12.112 19.384 11.7C18.858 11.424 18.42 11.194 18.427 10.839C18.434 10.569 18.69 10.284 19.25 10.211C19.527 10.175 20.294 10.146 21.163 10.546L21.503 8.956C20.9224 8.73899 20.3078 8.62691 19.688 8.625C17.771 8.625 16.423 9.643 16.412 11.102C16.399 12.182 17.375 12.783 18.109 13.142C18.865 13.51 19.119 13.746 19.115 14.074C19.11 14.577 18.511 14.8 17.955 14.808C17.01 14.823 16.449 14.561 16.005 14.354L15.963 14.334L15.611 15.977C16.065 16.185 16.901 16.367 17.767 16.375C19.805 16.375 21.138 15.369 21.144 13.81ZM13.112 8.762L9.97 16.258H7.92L6.374 10.275C6.28 9.907 6.199 9.772 5.914 9.617C5.447 9.364 4.677 9.127 4 8.979L4.046 8.762H7.346C7.766 8.762 8.144 9.042 8.24 9.525L9.057 13.863L11.075 8.762H13.112Z" fill="white"/>
    </G>
  </Svg>
);

const CashIcon = () => (
  <Svg width={39} height={24} viewBox="0 0 39 24" fill="none">
    <Path d="M0.962315 24H34.3947C34.9261 24 35.3569 23.5692 35.3569 23.0378V5.98052C35.3569 5.44911 34.9261 5.01831 34.3947 5.01831H0.962315C0.430904 5.01831 0.000102997 5.44911 0.000102997 5.98052V23.0378C8.39233e-05 23.5692 0.430885 24 0.962315 24Z" fill="#5ED181"/>
    <Path d="M1.71671 22.7524H35.1491C35.6805 22.7524 36.1113 22.3216 36.1113 21.7902V4.7329C36.1113 4.2015 35.6805 3.77069 35.1491 3.77069H1.71671C1.1853 3.77069 0.754498 4.2015 0.754498 4.7329V21.7902C0.754498 22.3216 1.1853 22.7524 1.71671 22.7524Z" fill="#54B26C"/>
    <Path d="M2.36613 21.4769H35.7985C36.3299 21.4769 36.7607 21.0461 36.7607 20.5147V3.45739C36.7607 2.92598 36.3299 2.49518 35.7985 2.49518H2.36613C1.83472 2.49518 1.40391 2.92598 1.40391 3.45739V20.5147C1.40389 21.0461 1.8347 21.4769 2.36613 21.4769Z" fill="#5ED181"/>
    <Path d="M3.12052 20.2294H36.5529C37.0843 20.2294 37.5151 19.7986 37.5151 19.2671V2.20983C37.5151 1.67842 37.0843 1.24762 36.5529 1.24762H3.12052C2.58911 1.24762 2.15831 1.67842 2.15831 2.20983V19.2671C2.15829 19.7986 2.58909 20.2294 3.12052 20.2294Z" fill="#54B26C"/>
    <Path d="M3.87467 18.9817H37.3071C37.8385 18.9817 38.2693 18.5509 38.2693 18.0195V0.962212C38.2693 0.430803 37.8385 0 37.3071 0H3.87467C3.34327 0 2.91246 0.430803 2.91246 0.962212V18.0195C2.91246 18.5509 3.34327 18.9817 3.87467 18.9817Z" fill="#5ED181"/>
    <Path d="M4.51504 3.98757V14.9942C5.96107 14.9942 7.13323 16.1663 7.13323 17.6123H34.0486C34.0486 16.1663 35.2207 14.9942 36.6667 14.9942V3.98757C35.2207 3.98757 34.0486 2.81542 34.0486 1.36938H7.13323C7.13323 2.81542 5.96107 3.98757 4.51504 3.98757Z" fill="#8EE88B"/>
    <Path d="M20.5909 14.6546C17.739 14.6546 15.4271 12.3427 15.4271 9.49081C15.4271 6.63893 17.739 4.32703 20.5909 4.32703C23.4427 4.32703 25.7546 6.63893 25.7546 9.49081C25.7546 12.3427 23.4427 14.6546 20.5909 14.6546Z" fill="#5ED181"/>
    <Path d="M31.29 12.0809C30.2122 12.0809 29.3384 10.9213 29.3384 9.49086C29.3384 8.06042 30.2122 6.90082 31.29 6.90082C32.3679 6.90082 33.2417 8.06042 33.2417 9.49086C33.2417 10.9213 32.3679 12.0809 31.29 12.0809Z" fill="#5ED181"/>
    <Path d="M9.8916 12.0809C8.81373 12.0809 7.93995 10.9213 7.93995 9.49086C7.93995 8.06042 8.81373 6.90082 9.8916 6.90082C10.9695 6.90082 11.8433 8.06042 11.8433 9.49086C11.8433 10.9213 10.9695 12.0809 9.8916 12.0809Z" fill="#5ED181"/>
  </Svg>
);

// Card type icons
const VisaCardIcon = () => (
  <Svg width={18} height={12} viewBox="0 0 18 12" fill="none">
    <Rect x="0.5" y="0.5" width="17" height="11" rx="2" fill="#1A1F71"/>
    <Path d="M6.5 3.5H11.5V8.5H6.5V3.5Z" fill="white"/>
    <Path d="M7.5 4.5H10.5V7.5H7.5V4.5Z" fill="#1A1F71"/>
    <SvgText x="9" y="6" textAnchor="middle" fontSize="3" fill="white" fontWeight="bold">VISA</SvgText>
  </Svg>
);

const MastercardIcon = () => (
  <Svg width={18} height="12" viewBox="0 0 18 12" fill="none">
    <Rect x="0.5" y="0.5" width="17" height="11" rx="2" fill="#EB001B"/>
    <Circle cx="6" cy="6" r="2.5" fill="#F79E1B"/>
    <Circle cx="12" cy="6" r="2.5" fill="#F79E1B"/>
    <Path d="M8.5 6C8.5 4.5 9.5 3.5 11 3.5C12.5 3.5 13.5 4.5 13.5 6C13.5 7.5 12.5 8.5 11 8.5C9.5 8.5 8.5 7.5 8.5 6Z" fill="#EB001B"/>
  </Svg>
);

const ArrowRightIcon = () => (
  <Image
    source={img6}
    style={{ width: 16, height: 16 }}
    resizeMode="contain"
  />
);

// Bottom Navigation Icons using local assets
const HomeIcon = () => (
  <Image
    source={imgSvg1}
    style={{ width: 21, height: 21 }}
    resizeMode="contain"
  />
);

const RequestIcon = () => (
  <Image
    source={imgSvg2}
    style={{ width: 23.1, height: 23.1 }}
    resizeMode="contain"
  />
);

const PaymentsIcon = () => (
  <Image
    source={imgSvg3}
    style={{ width: 21, height: 21 }}
    resizeMode="contain"
  />
);

const ProfileIcon = () => (
  <Image
    source={imgSvg4}
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
                <TickIcon size={21} />
              </View>
              <Text style={styles.stepLabel}>Service Details</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={styles.stepCircle}>
                <TickIcon size={21} />
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
                <VisaIcon />
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
                <CashIcon />
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
                      <VisaCardIcon />
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
                      <MastercardIcon />
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
                    source={imgPlus}
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
    // borderWidth: 1,
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
    width: 39,
    height: 24,
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