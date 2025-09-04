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
  Modal,
} from 'react-native';

const { width, height } = Dimensions.get('window');

// Image constants from Figma
const imgRectangle3 = "http://localhost:3845/assets/18e01e2a8ee181c23b1a83841d2dd01e220d6520.png";
const imgRectangle4 = "http://localhost:3845/assets/a2ec4f106a2b7b150c67ec5e53cf64a9fa74d4b0.png";
const imgRectangle5 = "http://localhost:3845/assets/5c8d238d361cfb4c2b5bacd017585f5d921793fb.png";
const imgRectangle6 = "http://localhost:3845/assets/1af874fade7ad42053642a16d9f68b47f85969b6.png";
const imgBackground = "http://localhost:3845/assets/5c5a52f5f3638bec44c5aa43fbd9ee49a0cc7d6e.svg";
const imgBackground1 = "http://localhost:3845/assets/211686a7b81f07a482d651b74bcc8aad0d6bac24.svg";
const imgBackground2 = "http://localhost:3845/assets/a5001cbbeb9ce9605a6d73f60ff9537bfb451c9f.svg";
const imgBackground3 = "http://localhost:3845/assets/0deebf68bd4e2e24a05bc7178c6559c0ecc66602.svg";
const img3 = "http://localhost:3845/assets/1931af93fccce6db5f6a709dd0914e3c0943f2c7.svg";
const imgSvg = "http://localhost:3845/assets/d84a9b81c6295b1332bab14f129e91d2f36a1bbe.svg";
const imgSvg1 = "http://localhost:3845/assets/56f398108f40dc6ac8782234ae58f50bdbac80cb.svg";
const imgSvg2 = "http://localhost:3845/assets/843b023d2f29645dc66350eb22a3161368a0319f.svg";
const imgSvg3 = "http://localhost:3845/assets/1ed729b77ba81b272e971e923d269ec6d680f9f8.svg";

// Modal image constants from Figma
const imgCheckmark = "http://localhost:3845/assets/91a039ceeaa57cd033eb1c48b0e18f58d51f0080.svg";

// Avatar component
const Avatar = ({ size = 48 }: { size?: number }) => (
  <View style={[styles.avatar, { width: size, height: size }]}>
    <Image
      source={{ uri: imgRectangle3 }}
      style={styles.avatarImage}
      resizeMode="cover"
    />
  </View>
);

// Icon components using actual Figma assets
const ArrowLeftIcon = () => (
  <Image
    source={{ uri: img3 }}
    style={{ width: 16, height: 16 }}
    resizeMode="contain"
  />
);

// Bottom Navigation Icons using actual Figma assets
const HomeIcon = () => (
  <Image
    source={{ uri: imgSvg }}
    style={{ width: 21, height: 21 }}
    resizeMode="contain"
  />
);

const RequestIcon = () => (
  <Image
    source={{ uri: imgSvg1 }}
    style={{ width: 23.1, height: 23.1 }}
    resizeMode="contain"
  />
);

const PaymentsIcon = () => (
  <Image
    source={{ uri: imgSvg2 }}
    style={{ width: 21, height: 21 }}
    resizeMode="contain"
  />
);

const ProfileIcon = () => (
  <Image
    source={{ uri: imgSvg3 }}
    style={{ width: 21, height: 21 }}
    resizeMode="contain"
  />
);

interface ServiceDetailReviewProps {
  navigation?: any;
}

export default function ServiceDetailReview({ navigation }: ServiceDetailReviewProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(5);

  const handleBack = () => {
    console.log('Back pressed');
    navigation?.goBack();
  };

  const handleSubmitRequest = () => {
    console.log('Submit Request pressed');
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    navigation?.navigate('ServiceDetails');
  };

  const handleNewRequest = () => {
    setModalVisible(false);
    navigation?.navigate('ServiceDetails');
  };

  const handleRequest = () => {
    navigation?.navigate('ServiceDetails');
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
              <Text style={styles.stepText}>Step 4 of 4</Text>
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
              <View style={styles.stepCircle}>
                <Image
                  source={{ uri: imgBackground1 }}
                  style={styles.stepIcon}
                />
              </View>
              <Text style={styles.stepLabel}>Payment</Text>
            </View>
            <View style={styles.stepItem}>
              <View style={[styles.stepCircle, styles.stepCircleActive]}>
                <Text style={styles.stepNumberActive}>4</Text>
              </View>
              <Text style={styles.stepLabel}>Review & Submit</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
            <View style={styles.progressFillPartial}>
              <Image
                source={{ uri: imgBackground2 }}
                style={styles.progressPartialIcon}
              />
            </View>
            <View style={styles.progressFillEnd}>
              <Image
                source={{ uri: imgBackground3 }}
                style={styles.progressEndIcon}
              />
            </View>
          </View>
        </View>

        {/* Form Content */}
        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>Review & Submit</Text>
            <Text style={styles.formSubtitle}>Please review your request details</Text>
          </View>

          <View style={styles.summaryContainer}>
            {/* Request Summary Section */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Request Summary</Text>
            </View>

            <View style={styles.summaryContent}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Service:</Text>
                <Text style={styles.summaryValue}>Cleaning Service</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Location:</Text>
                <Text style={styles.summaryValue}>Oasis Tower One, Dubai Sport City</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Preferred Time:</Text>
                <Text style={styles.summaryValue}>12:00 PM</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Preferred Date:</Text>
                <Text style={styles.summaryValue}>21 Nov, 2025</Text>
              </View>

              {/* Description Section */}
              <View style={styles.descriptionSection}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>Lorem Ipsum</Text>
              </View>

              {/* Photos Section */}
              <View style={styles.photosSection}>
                <Text style={styles.photosTitle}>Photos</Text>
                <View style={styles.photosContainer}>
                  <Image
                    source={{ uri: imgRectangle4 }}
                    style={styles.photoItem}
                    resizeMode="cover"
                  />
                  <Image
                    source={{ uri: imgRectangle5 }}
                    style={styles.photoItem}
                    resizeMode="cover"
                  />
                  <Image
                    source={{ uri: imgRectangle6 }}
                    style={styles.photoItem}
                    resizeMode="cover"
                  />
                </View>
              </View>

              {/* Payment Information Section */}
              <View style={styles.paymentSection}>
                <View style={styles.paymentHeader}>
                  <Text style={styles.paymentTitle}>Payment Information</Text>
                </View>
                <View style={styles.paymentDetails}>
                  <View style={styles.paymentRow}>
                    <Text style={styles.paymentLabel}>Payment Method</Text>
                    <Text style={styles.paymentValue}>Debit Card</Text>
                  </View>
                  <View style={styles.paymentRow}>
                    <Text style={styles.paymentLabel}>Card</Text>
                    <Text style={styles.paymentValue}>MasterCard •••• 8888</Text>
                  </View>
                  <View style={styles.paymentRow}>
                    <Text style={styles.paymentLabel}>Amount</Text>
                    <Text style={styles.paymentValue}>$72</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Buttons */}
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <ArrowLeftIcon />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmitRequest}>
          <Text style={styles.submitButtonText}>Submit Request</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation is now handled by the tab navigator */}

      {/* Success Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Drag Handle */}
            <View style={styles.modalHeader}>
              <View style={styles.dragHandle} />
            </View>

            {/* Modal Content */}
            <View style={styles.modalContent}>
              {/* Success Icon */}
              <View style={styles.successIconContainer}>
                <Image
                  source={{ uri: imgCheckmark }}
                  style={styles.successIcon}
                  resizeMode="contain"
                />
              </View>

              {/* Success Message */}
              <View style={styles.successMessageContainer}>
                <Text style={styles.successTitle}>Request Submitted!</Text>
                <Text style={styles.successSubtitle}>
                  Your service request has been successfully submitted and is being processed.
                </Text>
              </View>

              {/* Request ID */}
              <View style={styles.requestIdContainer}>
                <Text style={styles.requestIdLabel}>Request ID</Text>
                <Text style={styles.requestIdValue}>REQ-R877</Text>
              </View>

              {/* Rating Section */}
              <View style={styles.ratingSection}>
                <Text style={styles.ratingTitle}>How likely are you to recommend us?</Text>
                
                {/* Rating Buttons */}
                <View style={styles.ratingButtonsContainer}>
                  {[0, 1, 2, 3, 4, 5].map((rating) => (
                    <TouchableOpacity
                      key={rating}
                      style={[
                        styles.ratingButton,
                        rating === 0 && styles.ratingButtonFirst,
                        rating === 5 && styles.ratingButtonLast,
                        selectedRating === rating && styles.ratingButtonSelected,
                      ]}
                      onPress={() => setSelectedRating(rating)}
                    >
                      <Text style={[
                        styles.ratingButtonText,
                        selectedRating === rating && styles.ratingButtonTextSelected
                      ]}>
                        {rating}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Rating Labels */}
                <View style={styles.ratingLabelsContainer}>
                  <View style={styles.ratingLabelLeft}>
                    <Text style={styles.ratingEmoji}>😡</Text>
                    <Text style={styles.ratingLabelText}>Not likely</Text>
                  </View>
                  <View style={styles.ratingLabelRight}>
                    <Text style={styles.ratingLabelTextSmall}>Very Likely</Text>
                    <Text style={styles.ratingEmoji}>😍</Text>
                  </View>
                </View>
              </View>

              {/* Action Buttons */}
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity style={styles.newRequestButton} onPress={handleNewRequest}>
                  <Text style={styles.newRequestButtonText}>New Request</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.doneButton} onPress={handleModalClose}>
                  <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
              </View>

              {/* Home Indicator */}
              <View style={styles.homeIndicatorContainer}>
                <View style={styles.homeIndicator} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
    backgroundColor: '#E0B8FF',
    borderRadius: 16.5,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
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
  progressBar: {
    height: 7,
    backgroundColor: 'rgba(3,2,19,0.2)',
    borderRadius: 7,
    marginBottom: 14,
    overflow: 'hidden',
    position: 'relative',
  },
  progressFill: {
    position: 'absolute',
    height: '100%',
    width: '100%', // 100% for step 4 of 4
    backgroundColor: '#030213',
    left: 0,
    top: 0,
  },
  progressFillPartial: {
    position: 'absolute',
    top: 0.5,
    bottom: -0.5,
    left: 124.5,
    right: 124.83,
  },
  progressPartialIcon: {
    width: '100%',
    height: '100%',
  },
  progressFillEnd: {
    position: 'absolute',
    top: 0,
    bottom: 7.5,
    left: 263,
    right: 14,
  },
  progressEndIcon: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 1,
    padding: 14,
  },
  formHeader: {
    marginBottom: 21,
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
  summaryContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12.75,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    padding: 16,
    gap: 21,
  },
  sectionHeader: {
    marginBottom: 0,
  },
  sectionTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#0A0A0A',
    lineHeight: 18,
  },
  summaryContent: {
    gap: 10.5,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  summaryLabel: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
    maxHeight: 17.5,
  },
  summaryValue: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#0A0A0A',
    lineHeight: 18,
    maxHeight: 17.5,
    textAlign: 'right',
    flex: 1,
    marginLeft: 16,
  },
  descriptionSection: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    gap: 3.5,
  },
  descriptionTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#0A0A0A',
    lineHeight: 18,
  },
  descriptionText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
  },
  photosSection: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    gap: 16,
  },
  photosTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#0A0A0A',
    lineHeight: 18,
  },
  photosContainer: {
    flexDirection: 'row',
    gap: 7,
  },
  photoItem: {
    width: 85,
    height: 85,
    borderRadius: 8,
  },
  paymentSection: {
    gap: 16,
  },
  paymentHeader: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  paymentTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#0A0A0A',
    lineHeight: 18,
  },
  paymentDetails: {
    gap: 8,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  paymentLabel: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
  },
  paymentValue: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#0A0A0A',
    lineHeight: 18,
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
  submitButton: {
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
  submitButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 22.1,
  },
  // Bottom navigation styles removed - now handled by tab navigator
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    maxHeight: height * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -16,
    },
    shadowOpacity: 0.12,
    shadowRadius: 20.1,
    elevation: 8,
  },
  modalHeader: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dragHandle: {
    width: 32,
    height: 4,
    backgroundColor: '#0B8494',
    borderRadius: 100,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    gap: 24,
    alignItems: 'center',
  },
  successIconContainer: {
    width: 56,
    height: 56,
    backgroundColor: '#DCFCE7',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successIcon: {
    width: 28,
    height: 28,
  },
  successMessageContainer: {
    gap: 8,
    alignItems: 'center',
    width: '100%',
  },
  successTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Ghapter' : 'sans-serif',
    fontSize: 21,
    fontWeight: '400',
    color: '#0A0A0A',
    lineHeight: 31.5,
    textAlign: 'center',
  },
  successSubtitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
    textAlign: 'center',
  },
  requestIdContainer: {
    backgroundColor: '#F4F4F4',
    borderRadius: 8.75,
    padding: 10.5,
    gap: 3.5,
    alignItems: 'center',
    width: '100%',
  },
  requestIdLabel: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
    textAlign: 'center',
  },
  requestIdValue: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 17,
    fontWeight: '600',
    color: '#0A0A0A',
    lineHeight: 22.1,
    textAlign: 'center',
  },
  ratingSection: {
    gap: 16,
    width: '100%',
  },
  ratingTitle: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 17,
    fontWeight: '600',
    color: '#09090B',
    lineHeight: 22.1,
    textAlign: 'center',
  },
  ratingButtonsContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  ratingButton: {
    flex: 1,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D4D4D8',
    paddingVertical: 7.5,
    paddingHorizontal: 1,
  },
  ratingButtonFirst: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  ratingButtonLast: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  ratingButtonSelected: {
    borderColor: 'rgba(24, 24, 27, 0.5)',
  },
  ratingButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'Inter' : 'sans-serif',
    fontSize: 14,
    fontWeight: '500',
    color: '#09090B',
    lineHeight: 20,
    letterSpacing: -0.25,
    textAlign: 'center',
  },
  ratingButtonTextSelected: {
    color: '#09090B',
  },
  ratingLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  ratingLabelLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ratingLabelRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ratingEmoji: {
    fontFamily: Platform.OS === 'ios' ? 'Inter' : 'sans-serif',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: -0.25,
  },
  ratingLabelText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 15,
    fontWeight: '500',
    color: '#09090B',
    lineHeight: 18,
  },
  ratingLabelTextSmall: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 12,
    fontWeight: '500',
    color: '#09090B',
    lineHeight: 16,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    gap: 7,
    width: '100%',
  },
  newRequestButton: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  newRequestButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 17,
    fontWeight: '600',
    color: '#1F232C',
    lineHeight: 22.1,
  },
  doneButton: {
    flex: 1,
    backgroundColor: '#0B8494',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  doneButtonText: {
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'sans-serif',
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 22.1,
  },
  homeIndicatorContainer: {
    height: 21,
    width: 375,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
  homeIndicator: {
    width: 139,
    height: 5,
    backgroundColor: '#1F232C',
    borderRadius: 100,
  },
});
