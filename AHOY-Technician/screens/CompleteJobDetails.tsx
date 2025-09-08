import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  Platform,
  Alert,
  Image,
} from 'react-native';
import { CheckCircleIcon } from '../components/Icons';

const { width } = Dimensions.get('window');

interface CompleteJobDetailsProps {
  visible: boolean;
  onClose: () => void;
  onComplete: (data: CompletionData) => void;
}

interface CompletionData {
  notes: string;
  photo: string | null;
  signature: string | null;
  additionalCost: number;
  cashCollected: boolean;
}

// Camera Icon Component
const CameraIcon = () => (
  <View style={styles.cameraIcon}>
    <View style={styles.cameraBody}>
      <View style={styles.cameraLens} />
    </View>
  </View>
);

// Plus Icon Component
const PlusIcon = () => (
  <View style={styles.plusIcon}>
    <View style={styles.plusHorizontal} />
    <View style={styles.plusVertical} />
  </View>
);

// Minus Icon Component
const MinusIcon = () => (
  <View style={styles.minusIcon}>
    <View style={styles.minusLine} />
  </View>
);

export default function CompleteJobDetails({ visible, onClose, onComplete }: CompleteJobDetailsProps) {
  const [notes, setNotes] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const [additionalCost, setAdditionalCost] = useState(0);
  const [cashCollected, setCashCollected] = useState(false);

  const handleTakePhoto = () => {
    // Simulate taking a photo
    Alert.alert('Photo', 'Photo functionality would be implemented here');
    setPhoto('photo_taken');
  };

  const handleSignature = () => {
    // Simulate signature capture
    Alert.alert('Signature', 'Signature capture would be implemented here');
    setSignature('signature_captured');
  };

  const handleComplete = () => {
    if (!photo) {
      Alert.alert('Error', 'A completion photo is required to finish the job.');
      return;
    }
    if (!signature) {
      Alert.alert('Error', 'Customer signature is required to confirm service completion.');
      return;
    }
    if (!cashCollected) {
      Alert.alert('Error', 'Please confirm that you have collected the total amount of cash.');
      return;
    }

    const completionData: CompletionData = {
      notes,
      photo,
      signature,
      additionalCost,
      cashCollected,
    };

    onComplete(completionData);
  };

  const incrementCost = () => {
    setAdditionalCost(prev => prev + 1);
  };

  const decrementCost = () => {
    setAdditionalCost(prev => Math.max(0, prev - 1));
  };

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
          <View style={styles.dragHandle} />
          
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Complete Job</Text>
              <Text style={styles.subtitle}>
                Upload a completion photo and add any final notes before marking this job as complete.
              </Text>
            </View>

            {/* Completion Notes */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Completion Notes</Text>
              <TextInput
                style={styles.textArea}
                placeholder="Describe what you've completed so far..."
                placeholderTextColor="#717182"
                multiline
                value={notes}
                onChangeText={setNotes}
              />
            </View>

            {/* Completion Photos */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Completion Photos*</Text>
              <TouchableOpacity style={styles.photoUpload} onPress={handleTakePhoto}>
                <Text style={styles.photoText}>
                  A completion photo is required to finish the job.
                </Text>
                <View style={styles.photoButton}>
                  <CameraIcon />
                  <Text style={styles.photoButtonText}>Take Photo</Text>
                </View>
              </TouchableOpacity>
              {photo && (
                <View style={styles.photoPreview}>
                  <Text style={styles.photoTaken}>✓ Photo taken</Text>
                </View>
              )}
            </View>

            {/* Customer Signature */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Customer Signature*</Text>
              <TouchableOpacity style={styles.signatureArea} onPress={handleSignature}>
                <Text style={styles.signatureText}>Sign here</Text>
              </TouchableOpacity>
              <Text style={styles.signatureNote}>
                Customer signature is required to confirm service completion.
              </Text>
              {signature && (
                <View style={styles.signaturePreview}>
                  <Text style={styles.signatureTaken}>✓ Signature captured</Text>
                </View>
              )}
            </View>

            {/* Additional Cost */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Additional Cost</Text>
              <View style={styles.costInput}>
                <View style={styles.costInputField}>
                  <Text style={styles.dollarSign}>$ </Text>
                  <Text style={[styles.costValue, additionalCost > 0 ? styles.costValueActive : styles.costValuePlaceholder]}>
                    {additionalCost > 0 ? additionalCost.toString() : 'Enter amount'}
                  </Text>
                </View>
                <View style={styles.costButtons}>
                  <TouchableOpacity style={styles.costButton} onPress={incrementCost}>
                    <PlusIcon />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.costButton} onPress={decrementCost}>
                    <MinusIcon />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.costNote}>This will be approved by admin</Text>
            </View>

            {/* Cash Collection Confirmation */}
            <View style={styles.checkboxSection}>
              <TouchableOpacity 
                style={styles.checkbox} 
                onPress={() => setCashCollected(!cashCollected)}
              >
                <View style={[styles.checkboxBox, cashCollected && styles.checkboxChecked]}>
                  {cashCollected && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.checkboxLabel}>
                  I confirm that i collected the total amount of cash
                </Text>
              </TouchableOpacity>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
                <CheckCircleIcon />
                <Text style={styles.completeButtonText}>Complete Job</Text>
              </TouchableOpacity>
            </View>
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
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: -16 },
    shadowOpacity: 0.12,
    shadowRadius: 20.1,
    elevation: 20,
  },
  dragHandle: {
    width: 32,
    height: 4,
    backgroundColor: '#0b8494',
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 8,
  },
  scrollView: {
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
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 8,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  textArea: {
    backgroundColor: '#f3f3f5',
    borderRadius: 6.75,
    padding: 12,
    minHeight: 56,
    fontSize: 15,
    color: '#000000',
    textAlignVertical: 'top',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  photoUpload: {
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderStyle: 'dashed',
    borderRadius: 8.75,
    padding: 16,
    alignItems: 'center',
    minHeight: 107,
    justifyContent: 'center',
  },
  photoText: {
    fontSize: 13,
    color: '#717182',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  photoButton: {
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    gap: 16,
  },
  photoButtonText: {
    fontSize: 12,
    color: '#1f232c',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  photoPreview: {
    marginTop: 8,
    alignItems: 'center',
  },
  photoTaken: {
    fontSize: 14,
    color: '#28a138',
    fontWeight: '500',
  },
  signatureArea: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: 'rgba(113, 113, 130, 0.3)',
    borderStyle: 'dashed',
    borderRadius: 8.75,
    height: 112,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  signatureText: {
    fontSize: 12.3,
    color: '#717182',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'System',
  },
  signatureNote: {
    fontSize: 12,
    color: '#717182',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  signaturePreview: {
    marginTop: 8,
    alignItems: 'center',
  },
  signatureTaken: {
    fontSize: 14,
    color: '#28a138',
    fontWeight: '500',
  },
  costInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d4d4d8',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  costInputField: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  dollarSign: {
    fontSize: 15,
    color: '#1f232c',
    fontWeight: '500',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  costValue: {
    fontSize: 15,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  costValueActive: {
    color: '#1f232c',
  },
  costValuePlaceholder: {
    color: '#717182',
  },
  costButtons: {
    borderLeftWidth: 1,
    borderLeftColor: '#d4d4d8',
  },
  costButton: {
    width: 24,
    height: 18.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#d4d4d8',
  },
  costNote: {
    fontSize: 12,
    color: '#717182',
    marginTop: 4,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  checkboxSection: {
    marginBottom: 24,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkboxBox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 4,
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  checkboxChecked: {
    backgroundColor: '#0b8494',
    borderColor: '#0b8494',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    flex: 1,
    fontFamily: Platform.OS === 'ios' ? 'Inter' : 'System',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 7,
    marginBottom: 32,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  cancelButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f232c',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  completeButton: {
    flex: 1,
    backgroundColor: '#0b8494',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    height: 40,
  },
  completeButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  // Icon styles
  cameraIcon: {
    width: 21,
    height: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraBody: {
    width: 18,
    height: 12,
    backgroundColor: '#1f232c',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraLens: {
    width: 6,
    height: 6,
    backgroundColor: '#ffffff',
    borderRadius: 3,
  },
  plusIcon: {
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusHorizontal: {
    position: 'absolute',
    width: 8,
    height: 1,
    backgroundColor: '#1f232c',
  },
  plusVertical: {
    position: 'absolute',
    width: 1,
    height: 8,
    backgroundColor: '#1f232c',
  },
  minusIcon: {
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minusLine: {
    width: 8,
    height: 1,
    backgroundColor: '#1f232c',
  },
});