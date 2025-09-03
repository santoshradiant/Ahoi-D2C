import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

// SVG Icons
const CreditCardIcon = ({ color = '#030213' }: { color?: string }) => (
  <Svg width={17.5} height={17.5} viewBox="0 0 24 24" fill="none">
    <Path
      d="M1 4h22v16H1z"
      stroke={color}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M1 10h22"
      stroke={color}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const EditIcon = ({ color = '#1f232c' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      stroke={color}
      strokeWidth={1.17}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
      stroke={color}
      strokeWidth={1.17}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const DeleteIcon = ({ color = '#1f232c' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 6h18"
      stroke={color}
      strokeWidth={1.46}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      stroke={color}
      strokeWidth={1.46}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PlusIcon = ({ color = '#ffffff' }: { color?: string }) => (
  <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 5v14M5 12h14"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Payment Card Component
interface PaymentCardProps {
  cardType: 'Visa' | 'Mastercard';
  maskedNumber: string;
  expiryDate: string;
  isDefault?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  cardType,
  maskedNumber,
  expiryDate,
  isDefault = false,
  onEdit,
  onDelete,
}) => {
  return (
    <View style={styles.paymentCard}>
      <View style={styles.cardContent}>
        <View style={styles.cardLeft}>
          <View style={styles.cardIconContainer}>
            <CreditCardIcon color="#030213" />
          </View>
          <View style={styles.cardDetails}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>{cardType} •••• {maskedNumber}</Text>
              {isDefault && (
                <View style={styles.defaultBadge}>
                  <Text style={styles.defaultBadgeText}>Default</Text>
                </View>
              )}
            </View>
            <Text style={styles.expiryText}>Expires {expiryDate}</Text>
          </View>
        </View>
        <View style={styles.cardActions}>
          <TouchableOpacity style={styles.actionButton} onPress={onEdit}>
            <EditIcon color="#1f232c" />
          </TouchableOpacity>
          {!isDefault && onDelete && (
            <TouchableOpacity style={styles.actionButton} onPress={onDelete}>
              <DeleteIcon color="#1f232c" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

// Main PaymentMethods Component
interface PaymentMethodsProps {
  onAddCard?: () => void;
  onEditCard?: (cardId: string) => void;
  onDeleteCard?: (cardId: string) => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  onAddCard,
  onEditCard,
  onDeleteCard,
}) => {
  const handleEditCard = (cardId: string) => {
    if (onEditCard) {
      onEditCard(cardId);
    }
  };

  const handleDeleteCard = (cardId: string) => {
    if (onDeleteCard) {
      onDeleteCard(cardId);
    }
  };

  const handleAddCard = () => {
    if (onAddCard) {
      onAddCard();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsList}>
        <PaymentCard
          cardType="Visa"
          maskedNumber="4242"
          expiryDate="12/25"
          isDefault={true}
          onEdit={() => handleEditCard('visa-4242')}
        />
        <PaymentCard
          cardType="Mastercard"
          maskedNumber="8888"
          expiryDate="08/26"
          onEdit={() => handleEditCard('mastercard-8888')}
          onDelete={() => handleDeleteCard('mastercard-8888')}
        />
      </View>
      
      <TouchableOpacity style={styles.addCardButton} onPress={handleAddCard}>
        <PlusIcon color="#ffffff" />
        <Text style={styles.addCardButtonText}>Add Debit/Credit Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
  },
  cardsList: {
    gap: 10.5,
  },
  paymentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12.75,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10.5,
    flex: 1,
  },
  cardIconContainer: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(3, 2, 19, 0.1)',
    borderRadius: 8.75,
    justifyContent: 'center',
    alignItems: 'center',
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
  cardTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    fontFamily: 'SF Pro Display',
  },
  defaultBadge: {
    backgroundColor: '#dcfce7',
    borderWidth: 1,
    borderColor: '#b9f8cf',
    borderRadius: 6.75,
    paddingHorizontal: 8,
    paddingVertical: 1,
  },
  defaultBadgeText: {
    fontSize: 10.5,
    fontWeight: '400',
    color: '#008236',
    lineHeight: 14,
    fontFamily: 'SF Pro Text',
  },
  expiryText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 12,
    fontFamily: 'SF Pro Display',
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  actionButton: {
    backgroundColor: '#ffffff',
    width: 28,
    height: 28,
    borderRadius: 6.75,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCardButton: {
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
  addCardButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 22.1,
    fontFamily: 'SF Pro Display',
  },
});
