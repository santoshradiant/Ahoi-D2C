import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  SafeAreaView,
  Modal,
  Animated,
  Dimensions,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface EditProfileProps {
  navigation?: any;
}

export default function EditProfile({ navigation }: EditProfileProps) {
  const [fullName, setFullName] = useState('Yousri Bouhamed');
  const [email, setEmail] = useState('yousri@bellman.media');
  const [phoneNumber, setPhoneNumber] = useState('+1 (555) 123-4567');
  const [designation, setDesignation] = useState('Plumber');
  const [skills] = useState([
    'Web Development',
    'Data Analysis',
    'Network Security',
    'Cloud Computing',
    'Machine Learning',
    'UI/UX Design',
    'Database Management',
    'Technical Support',
    'Customer Service',
    'Software Development',
    'Product Management',
    'Quality Assurance',
    'Sales Operations',
    'Marketing Strategy',
    'Data Analysis',
    'User Experience Design',
    'Network Administration',
    'Business Development',
  ]);

  const slideAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    // Animate modal in
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (navigation) {
        navigation.goBack();
      }
    });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Saving profile:', {
      fullName,
      email,
      phoneNumber,
      designation,
    });
    handleClose();
  };

  const handleUpdatePassword = () => {
    // Handle password update logic
    console.log('Update password pressed');
  };

  const renderSkillTag = (skill: string, index: number) => (
    <View key={index} style={styles.skillTag}>
      <Text style={styles.skillTagText}>{skill}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffddab" />
      
      {/* Modal Background Overlay */}
      <View style={styles.overlay} />
      
      {/* Modal Container */}
      <Animated.View
        style={[
          styles.modalContainer,
          {
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [400, 0],
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
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            {/* Title Section */}
            <View style={styles.titleSection}>
              <Text style={styles.title}>Edit Profile</Text>
              <Text style={styles.subtitle}>
                Update your personal information and account details.
              </Text>
            </View>

            {/* Form Fields */}
            <View style={styles.formContainer}>
              {/* Full Name */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  value={fullName}
                  onChangeText={setFullName}
                  placeholder="Enter your full name"
                />
              </View>

              {/* Email */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                />
              </View>

              {/* Phone Number */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                />
              </View>

              {/* Designation */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Designation</Text>
                <TextInput
                  style={styles.input}
                  value={designation}
                  onChangeText={setDesignation}
                  placeholder="Enter your designation"
                />
              </View>

              {/* Skills */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Skills</Text>
                <View style={styles.skillsContainer}>
                  {skills.map((skill, index) => renderSkillTag(skill, index))}
                </View>
              </View>

              {/* Update Password Button */}
              <TouchableOpacity style={styles.updatePasswordButton} onPress={handleUpdatePassword}>
                <Text style={styles.updatePasswordText}>Update Password</Text>
              </TouchableOpacity>

              {/* Action Buttons */}
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                  <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Home Indicator */}
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicatorBar} />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -16,
    },
    shadowOpacity: 0.12,
    shadowRadius: 20.1,
    elevation: 20,
    maxHeight: '90%',
  },
  modalHeader: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  dragHandle: {
    width: 32,
    height: 4,
    backgroundColor: '#0b8494',
    borderRadius: 100,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 63,
  },
  titleSection: {
    marginBottom: 24,
  },
  title: {
    fontSize: 21,
    fontWeight: '400',
    color: '#1f232c',
    marginBottom: 8,
    fontFamily: 'Ghapter-Regular',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    lineHeight: 18,
    fontFamily: 'SF Pro Display',
  },
  formContainer: {
    gap: 13,
  },
  fieldContainer: {
    gap: 7,
  },
  label: {
    fontSize: 15,
    fontWeight: '400',
    color: '#1f232c',
    lineHeight: 18,
    fontFamily: 'SF Pro Display',
  },
  input: {
    backgroundColor: '#f3f3f5',
    borderRadius: 6.75,
    paddingHorizontal: 11.5,
    paddingVertical: 7.25,
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    fontFamily: 'SF Pro Display',
    minHeight: 31.5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  skillTag: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    paddingHorizontal: 9,
    paddingVertical: 5,
    height: 24,
    justifyContent: 'center',
  },
  skillTagText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#1f232c',
    lineHeight: 14.3,
    textAlign: 'center',
    fontFamily: 'SF Pro Display',
  },
  updatePasswordButton: {
    backgroundColor: 'transparent',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  updatePasswordText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    fontFamily: 'SF Pro Display',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 7,
    marginTop: 7,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f232c',
    lineHeight: 14.3,
    fontFamily: 'SF Pro Display',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#0b8494',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 14.3,
    fontFamily: 'SF Pro Display',
  },
  homeIndicator: {
    height: 21,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
  },
  homeIndicatorBar: {
    width: 139,
    height: 5,
    backgroundColor: '#1f232c',
    borderRadius: 100,
  },
});