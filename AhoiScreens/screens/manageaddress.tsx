import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
  Modal,
  TextInput,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Svg, Path } from 'react-native-svg';

// SVG Icons
const ArrowLeftIcon = ({ color = 'black' }: { color?: string }) => (
  <Svg width={20} height={16} viewBox="0 0 20 16" fill="none">
    <Path
      d="M20.0002 8.00028C20.0002 8.55328 19.5532 9.00028 19.0002 9.00028H3.41422L8.70719 14.2933C9.09819 14.6842 9.09819 15.3163 8.70719 15.7073C8.51219 15.9023 8.25622 16.0003 8.00022 16.0003C7.74422 16.0003 7.48825 15.9023 7.29325 15.7073L0.29325 8.70731C-0.09775 8.31631 -0.09775 7.68425 0.29325 7.29325L7.29325 0.29325C7.68425 -0.09775 8.31619 -0.09775 8.70719 0.29325C9.09819 0.68425 9.09819 1.31631 8.70719 1.70731L3.41422 7.00028H19.0002C19.5532 7.00028 20.0002 7.44728 20.0002 8.00028Z"
      fill={color}
    />
  </Svg>
);

const PlusIcon = ({ color = '#ffffff' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M7 1V13M1 7H13"
      stroke={color}
      strokeWidth={1.17}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const HomeIcon = ({ color = '#0b8494' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M2.625 5.25L7 2.625L11.375 5.25V11.375C11.375 11.6973 11.1973 12.0063 10.8839 12.3197C10.5705 12.6331 10.1415 12.8108 9.69417 12.8108H4.30583C3.85854 12.8108 3.42951 12.6331 3.11612 12.3197C2.80272 12.0063 2.625 11.6973 2.625 11.375V5.25Z"
      stroke={color}
      strokeWidth={1.17}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.25 12.8108V7H8.75V12.8108"
      stroke={color}
      strokeWidth={1.17}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const OfficeIcon = ({ color = '#717182' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M3.5 12.8333V2.33332C3.5 2.0239 3.62292 1.72716 3.84171 1.50837C4.0605 1.28957 4.35725 1.16666 4.66667 1.16666H9.33333C9.64275 1.16666 9.9395 1.28957 10.1583 1.50837C10.3771 1.72716 10.5 2.0239 10.5 2.33332V12.8333H3.5Z"
      stroke={color}
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.49984 7H2.33317C2.02375 7 1.72701 7.12292 1.50821 7.34171C1.28942 7.5605 1.1665 7.85725 1.1665 8.16667V11.6667C1.1665 11.9761 1.28942 12.2728 1.50821 12.4916C1.72701 12.7104 2.02375 12.8333 2.33317 12.8333H3.49984"
      stroke={color}
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 5.25H11.6667C11.9761 5.25 12.2728 5.37292 12.4916 5.59171C12.7104 5.8105 12.8333 6.10725 12.8333 6.41667V11.6667C12.8333 11.9761 12.7104 12.2728 12.4916 12.4916C12.2728 12.7104 11.9761 12.8333 11.6667 12.8333H10.5"
      stroke={color}
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.8335 3.5H8.16683"
      stroke={color}
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.8335 5.83334H8.16683"
      stroke={color}
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.8335 8.16666H8.16683"
      stroke={color}
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.8335 10.5H8.16683"
      stroke={color}
      strokeWidth={1.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const EditIcon = ({ color = '#1f232c' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M7 1.75H2.33333C1.89131 1.75 1.75 1.89131 1.75 2.33333V11.6667C1.75 12.1087 1.89131 12.25 2.33333 12.25H11.6667C12.1087 12.25 12.25 12.1087 12.25 11.6667V7"
      stroke={color}
      strokeWidth={1.17}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.91667 0.583333C10.2083 0.291667 10.7917 0.291667 11.0833 0.583333L13.4167 2.91667C13.7083 3.20833 13.7083 3.79167 13.4167 4.08333L7.875 9.625L5.25 10.5L6.125 7.875L9.91667 0.583333Z"
      stroke={color}
      strokeWidth={1.17}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const DeleteIcon = ({ color = '#1f232c' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M1.75 3.5H12.25"
      stroke={color}
      strokeWidth={1.17}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.0833 3.5V11.6667C11.0833 12.1087 10.942 12.25 10.5 12.25H3.5C3.058 12.25 2.91667 12.1087 2.91667 11.6667V3.5M4.66667 3.5V2.33333C4.66667 1.89131 4.80798 1.75 5.25 1.75H8.75C9.19202 1.75 9.33333 1.89131 9.33333 2.33333V3.5"
      stroke={color}
      strokeWidth={1.17}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const StarIcon = ({ color = '#1f232c' }: { color?: string }) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <Path
      d="M7 1L8.5 4.5L12.5 4.5L9.5 7L10.5 11L7 8.5L3.5 11L4.5 7L1.5 4.5L5.5 4.5L7 1Z"
      stroke={color}
      strokeWidth={1.17}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Badge Component
interface BadgeProps {
  content: string;
  type?: 'pill' | 'rectangle';
  state?: 'Default' | 'active' | 'Inactive';
  backgroundColor?: string;
  textColor?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  content, 
  type = 'pill', 
  state = 'Default',
  backgroundColor = '#1f232c',
  textColor = '#ffffff'
}) => {
  return (
    <View style={[styles.badge, { backgroundColor }]}>
      <Text style={[styles.badgeText, { color: textColor }]}>{content}</Text>
    </View>
  );
};

// Address Card Component
interface AddressCardProps {
  type: 'home' | 'office';
  title: string;
  address: string;
  city: string;
  country: string;
  isDefault?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  onSetDefault?: () => void;
}

const AddressCard: React.FC<AddressCardProps> = ({
  type,
  title,
  address,
  city,
  country,
  isDefault = false,
  onEdit,
  onDelete,
  onSetDefault,
}) => {
  const IconComponent = type === 'home' ? HomeIcon : OfficeIcon;
  
  return (
    <View style={styles.addressCard}>
      <View style={styles.cardContent}>
        <View style={styles.cardLeft}>
          <View style={styles.cardHeader}>
            <View style={styles.titleRow}>
              <IconComponent color="#0b8494" />
              <Text style={styles.cardTitle}>{title}</Text>
              <Badge content={type === 'home' ? 'Home' : 'Work'} />
              {isDefault && (
                <Badge 
                  content="Default" 
                  backgroundColor="#eaf6eb" 
                  textColor="#28a138" 
                />
              )}
            </View>
          </View>
          <View style={styles.addressDetails}>
            <Text style={styles.addressText}>{address}</Text>
            <Text style={styles.addressText}>{city}</Text>
            <Text style={styles.addressText}>{country}</Text>
          </View>
        </View>
        <View style={styles.cardActions}>
          {!isDefault && (
            <TouchableOpacity style={styles.actionButton} onPress={onSetDefault}>
              <StarIcon color="#1f232c" />
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.actionButton} onPress={onEdit}>
            <EditIcon color="#1f232c" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={onDelete}>
            <DeleteIcon color="#1f232c" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Main ManageAddress Component
interface ManageAddressProps {
  navigation?: any;
}

const ManageAddress: React.FC<ManageAddressProps> = ({ navigation }) => {
  const nav = useNavigation();
  
  // Modal state
  const [showAddModal, setShowAddModal] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(0)).current;
  
  // Form state
  const [addressLabel, setAddressLabel] = React.useState('');
  const [addressType, setAddressType] = React.useState<'Home' | 'Work' | 'Other'>('Home');
  const [streetAddress, setStreetAddress] = React.useState('');
  const [apartment, setApartment] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');
  const [specialInstructions, setSpecialInstructions] = React.useState('');

  const handleBackPress = () => {
    if (nav) {
      nav.goBack();
    }
  };

  const handleAddNewAddress = () => {
    setShowAddModal(true);
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleDismissModal = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowAddModal(false);
      // Reset form
      setAddressLabel('');
      setAddressType('Home');
      setStreetAddress('');
      setApartment('');
      setCity('');
      setState('');
      setZipCode('');
      setSpecialInstructions('');
    });
  };

  const handleAddAddress = () => {
    // Handle add address logic here
    console.log('Adding address:', {
      addressLabel,
      addressType,
      streetAddress,
      apartment,
      city,
      state,
      zipCode,
      specialInstructions,
    });
    handleDismissModal();
  };

  const handleEditAddress = (addressId: string) => {
    // Handle edit address
    console.log('Edit address:', addressId);
  };

  const handleDeleteAddress = (addressId: string) => {
    // Handle delete address
    console.log('Delete address:', addressId);
  };

  const handleSetDefault = (addressId: string) => {
    // Handle set default address
    console.log('Set default address:', addressId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffddab" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <ArrowLeftIcon color="#1f232c" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Addresses</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Add New Address Button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddNewAddress}>
          <PlusIcon color="#ffffff" />
          <Text style={styles.addButtonText}>Add New Address</Text>
        </TouchableOpacity>

        {/* Address List */}
        <View style={styles.addressList}>
          <AddressCard
            type="home"
            title="Home"
            address="123 Main Street, Apt 2B"
            city="New York, NY 10001"
            country="United States"
            isDefault={true}
            onEdit={() => handleEditAddress('home-1')}
            onDelete={() => handleDeleteAddress('home-1')}
          />
          
          <AddressCard
            type="office"
            title="Office"
            address="456 Business Ave"
            city="New York, NY 10002"
            country="United States"
            onEdit={() => handleEditAddress('office-1')}
            onDelete={() => handleDeleteAddress('office-1')}
            onSetDefault={() => handleSetDefault('office-1')}
          />
        </View>
      </ScrollView>

      {/* Add New Address Modal */}
      <Modal
        visible={showAddModal}
        transparent={true}
        animationType="none"
        onRequestClose={handleDismissModal}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity 
            style={styles.modalBackground} 
            activeOpacity={1} 
            onPress={handleDismissModal}
          />
          <Animated.View
            style={[
              styles.modalContainer,
              {
                transform: [
                  {
                    translateY: slideAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [600, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            {/* Drag Handle */}
            <View style={styles.modalHeader}>
              <View style={styles.dragHandle} />
            </View>

            {/* Modal Content */}
            <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
              {/* Title and Description */}
              <View style={styles.modalTitleContainer}>
                <Text style={styles.modalTitle}>Add New Address</Text>
                <Text style={styles.modalDescription}>
                  Add a new service location to your account.
                </Text>
              </View>

              {/* Form Fields */}
              <View style={styles.formContainer}>
                {/* Address Label */}
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>Address Label *</Text>
                  <TextInput
                    style={styles.textInput}
                    value={addressLabel}
                    onChangeText={setAddressLabel}
                    placeholder="e.g., Home, Office, Mom's House"
                    placeholderTextColor="#717182"
                  />
                </View>

                {/* Address Type */}
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>Address Type</Text>
                  <View style={styles.addressTypeContainer}>
                    <TouchableOpacity
                      style={[
                        styles.addressTypeButton,
                        addressType === 'Home' && styles.addressTypeButtonActive
                      ]}
                      onPress={() => setAddressType('Home')}
                    >
                      <Text style={[
                        styles.addressTypeButtonText,
                        addressType === 'Home' && styles.addressTypeButtonTextActive
                      ]}>
                        Home
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.addressTypeButton,
                        addressType === 'Work' && styles.addressTypeButtonActive
                      ]}
                      onPress={() => setAddressType('Work')}
                    >
                      <Text style={[
                        styles.addressTypeButtonText,
                        addressType === 'Work' && styles.addressTypeButtonTextActive
                      ]}>
                        Work
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.addressTypeButton,
                        addressType === 'Other' && styles.addressTypeButtonActive
                      ]}
                      onPress={() => setAddressType('Other')}
                    >
                      <Text style={[
                        styles.addressTypeButtonText,
                        addressType === 'Other' && styles.addressTypeButtonTextActive
                      ]}>
                        Other
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Street Address */}
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>Street Address *</Text>
                  <TextInput
                    style={styles.textInput}
                    value={streetAddress}
                    onChangeText={setStreetAddress}
                    placeholder="123 Main Street"
                    placeholderTextColor="#717182"
                  />
                </View>

                {/* Apartment/Unit */}
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>Apartment/Unit</Text>
                  <TextInput
                    style={styles.textInput}
                    value={apartment}
                    onChangeText={setApartment}
                    placeholder="Apt 2B, Suite 100, etc."
                    placeholderTextColor="#717182"
                  />
                </View>

                {/* City and State Row */}
                <View style={styles.rowContainer}>
                  <View style={styles.halfFieldContainer}>
                    <Text style={styles.fieldLabel}>City *</Text>
                    <TextInput
                      style={styles.textInput}
                      value={city}
                      onChangeText={setCity}
                      placeholder="New York"
                      placeholderTextColor="#717182"
                    />
                  </View>
                  <View style={styles.halfFieldContainer}>
                    <Text style={styles.fieldLabel}>State *</Text>
                    <TextInput
                      style={styles.textInput}
                      value={state}
                      onChangeText={setState}
                      placeholder="NY"
                      placeholderTextColor="#717182"
                    />
                  </View>
                </View>

                {/* ZIP Code */}
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>ZIP Code *</Text>
                  <TextInput
                    style={styles.textInput}
                    value={zipCode}
                    onChangeText={setZipCode}
                    placeholder="10001"
                    placeholderTextColor="#717182"
                    keyboardType="numeric"
                  />
                </View>

                {/* Special Instructions */}
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>Special Instructions</Text>
                  <TextInput
                    style={[styles.textInput, styles.textArea]}
                    value={specialInstructions}
                    onChangeText={setSpecialInstructions}
                    placeholder="Ring doorbell twice, use back entrance, etc."
                    placeholderTextColor="#717182"
                    multiline={true}
                    numberOfLines={3}
                    textAlignVertical="top"
                  />
                </View>

                {/* Action Buttons */}
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity 
                    style={styles.cancelButton} 
                    onPress={handleDismissModal}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.addButton} 
                    onPress={handleAddAddress}
                  >
                    <Text style={styles.addButtonText}>Add Address</Text>
                  </TouchableOpacity>
                </View>

                {/* Home Indicator */}
                <View style={styles.homeIndicatorContainer}>
                  <View style={styles.homeIndicator} />
                </View>
              </View>
            </ScrollView>
          </Animated.View>
        </View>
      </Modal>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 9,
    paddingTop: Platform.OS === 'ios' ? 14 : 44,
    paddingBottom: 21,
    height: 116,
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
    lineHeight: 19.2,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Text' : 'System',
    textAlign: 'center',
    flex: 1,
  },
  headerSpacer: {
    width: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  addButton: {
    backgroundColor: '#0b8494',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 40,
    marginBottom: 14,
  },
  addButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 22.1,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  addressList: {
    gap: 10.5,
  },
  addressCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12.75,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 22,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flex: 1,
    gap: 7,
  },
  cardHeader: {
    gap: 7,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  addressDetails: {
    gap: 3.5,
  },
  addressText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginLeft: 10.5,
  },
  actionButton: {
    width: 28,
    height: 28,
    borderRadius: 6.75,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 99999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 14.3,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
    textAlign: 'center',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'flex-end',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#171717',
    shadowOffset: {
      width: 0,
      height: -16,
    },
    shadowOpacity: 0.12,
    shadowRadius: 20.1,
    elevation: 16,
    maxWidth: 401,
    alignSelf: 'center',
    width: '100%',
    maxHeight: '80%',
  },
  modalHeader: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dragHandle: {
    width: 32,
    height: 4,
    backgroundColor: '#0b8494',
    borderRadius: 100,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  modalTitleContainer: {
    gap: 8,
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: '400',
    color: '#1f232c',
    lineHeight: 31.5,
    fontFamily: Platform.OS === 'ios' ? 'Ghapter' : 'System',
  },
  modalDescription: {
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  formContainer: {
    gap: 13,
  },
  fieldContainer: {
    gap: 7,
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 10.5,
  },
  halfFieldContainer: {
    flex: 1,
    gap: 7,
  },
  fieldLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  textInput: {
    backgroundColor: '#f3f3f5',
    borderRadius: 6.75,
    paddingHorizontal: 11.5,
    paddingVertical: 7.25,
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
    height: 31.5,
  },
  textArea: {
    height: 58,
    minHeight: 58,
    textAlignVertical: 'top',
    paddingTop: 8,
  },
  addressTypeContainer: {
    flexDirection: 'row',
    gap: 7,
  },
  addressTypeButton: {
    flex: 1,
    height: 40,
    borderRadius: 6.75,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressTypeButtonActive: {
    backgroundColor: '#030213',
    borderColor: '#030213',
  },
  addressTypeButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  addressTypeButtonTextActive: {
    color: '#ffffff',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 8,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1f232c',
    lineHeight: 22.1,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  homeIndicatorContainer: {
    backgroundColor: '#ffffff',
    height: 21,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 8,
    marginTop: 16,
  },
  homeIndicator: {
    width: 139,
    height: 5,
    backgroundColor: '#1f232c',
    borderRadius: 100,
  },
});

export default ManageAddress;
