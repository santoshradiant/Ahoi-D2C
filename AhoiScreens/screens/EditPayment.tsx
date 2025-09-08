import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  Dimensions,
} from 'react-native';

interface EditPaymentProps {
  isVisible: boolean;
  onClose: () => void;
  onSave: (cardDetails: {
    expiryDate: string;
    cardholderName: string;
  }) => void;
  cardDetails: {
    cardNumber: string;
    cardType: string;
    expiryDate: string;
    cardholderName: string;
  };
}

const EditPayment = ({ isVisible, onClose, onSave, cardDetails }: EditPaymentProps) => {
  const [expiryDate, setExpiryDate] = useState(cardDetails.expiryDate);
  const [cardholderName, setCardholderName] = useState(cardDetails.cardholderName);

  const handleCancel = () => {
    onClose();
  };

  const handleSaveChanges = () => {
    onSave({
      expiryDate,
      cardholderName
    });
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={handleCancel}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.dragHandle} />
          
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Edit Payment Method</Text>
              <Text style={styles.subtitle}>
                Update your payment method information.
              </Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Card</Text>
                <Text style={styles.cardInfo}>
                  {cardDetails.cardType} {cardDetails.cardNumber}
                </Text>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Expiry Date</Text>
                <TextInput
                  style={styles.input}
                  value={expiryDate}
                  onChangeText={setExpiryDate}
                  placeholder="MM/YY"
                  placeholderTextColor="#717182"
                  maxLength={5}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Cardholder Name</Text>
                <TextInput
                  style={styles.input}
                  value={cardholderName}
                  onChangeText={setCardholderName}
                  placeholder="Enter cardholder name"
                  placeholderTextColor="#717182"
                />
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCancel}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSaveChanges}
              >
                <Text style={styles.saveButtonText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingTop: 8,
    width: '100%',
  },
  dragHandle: {
    width: 32,
    height: 4,
    backgroundColor: '#0B8494',
    alignSelf: 'center',
    borderRadius: 100,
    marginBottom: 8,
  },
  container: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 21,
    fontFamily: 'SF Pro Display',
    fontWeight: '400',
    color: '#1F232C',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'SF Pro Display',
    color: '#717182',
  },
  form: {
    gap: 13,
  },
  inputContainer: {
    gap: 7,
  },
  cardInfo: {
    fontSize: 15,
    fontFamily: 'SF Pro Display',
    fontWeight: '500',
    color: '#1F232C',
    backgroundColor: '#F4F4F4',
    borderRadius: 6.75,
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
    textAlignVertical: 'center',
  },
  label: {
    fontSize: 15,
    fontFamily: 'SF Pro Display',
    fontWeight: '500',
    color: '#1F232C',
  },
  input: {
    backgroundColor: '#F4F4F4',
    borderRadius: 6.75,
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    fontFamily: 'SF Pro Display',
    color: '#1F232C',
    textAlignVertical: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 16,
  },
  cancelButton: {
    flex: 1,
    minHeight: 48,
    backgroundColor: '#F4F4F4',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  cancelButtonText: {
    fontSize: 15,
    fontFamily: 'SF Pro Display',
    fontWeight: '600',
    color: '#1F232C',
    textAlign: 'center',
  },
  saveButton: {
    flex: 1,
    minHeight: 48,
    backgroundColor: '#0B8494',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  saveButtonText: {
    fontSize: 15,
    fontFamily: 'SF Pro Display',
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default EditPayment;
