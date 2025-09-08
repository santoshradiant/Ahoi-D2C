import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';

interface AddPaymentProps {
  isVisible: boolean;
  onClose: () => void;
  onSave: (cardDetails: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardholderName: string;
  }) => void;
}

const AddPayment: React.FC<AddPaymentProps> = ({ isVisible, onClose, onSave }) => {
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [cardholderName, setCardholderName] = React.useState('');

  const handleSave = () => {
    onSave({
      cardNumber,
      expiryDate,
      cvv,
      cardholderName,
    });
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.dragHandle} />
          
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Add Payment Method</Text>
              <Text style={styles.subtitle}>
                Add a new credit or debit card to your account.
              </Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Card Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="1234 5678 9012 3456"
                  placeholderTextColor="#717182"
                  value={cardNumber}
                  onChangeText={setCardNumber}
                  keyboardType="numeric"
                  maxLength={19}
                />
              </View>

              <View style={styles.row}>
                <View style={[styles.inputContainer, styles.halfWidth]}>
                  <Text style={styles.label}>Expiry Date</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="MM/YY"
                    placeholderTextColor="#717182"
                    value={expiryDate}
                    onChangeText={setExpiryDate}
                    maxLength={5}
                  />
                </View>

                <View style={[styles.inputContainer, styles.halfWidth]}>
                  <Text style={styles.label}>CVV</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="123"
                    placeholderTextColor="#717182"
                    value={cvv}
                    onChangeText={setCvv}
                    keyboardType="numeric"
                    maxLength={3}
                    secureTextEntry
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Cardholder Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="John Doe"
                  placeholderTextColor="#717182"
                  value={cardholderName}
                  onChangeText={setCardholderName}
                />
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onClose}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSave}
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

const { width } = Dimensions.get('window');

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
  halfWidth: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 10.5,
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

export default AddPayment;
