import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

// SVG Icons
const TriangleAlertIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M8.57 1.5L14.5 11.5C14.65 11.77 14.73 12.08 14.73 12.39C14.73 12.7 14.65 13.01 14.5 13.28C14.35 13.55 14.13 13.77 13.86 13.92C13.59 14.07 13.28 14.15 12.97 14.15H1.03C0.72 14.15 0.41 14.07 0.14 13.92C-0.13 13.77 -0.35 13.55 -0.5 13.28C-0.65 13.01 -0.73 12.7 -0.73 12.39C-0.73 12.08 -0.65 11.77 -0.5 11.5L5.43 1.5C5.58 1.23 5.8 1.01 6.07 0.86C6.34 0.71 6.65 0.63 6.96 0.63C7.27 0.63 7.58 0.71 7.85 0.86C8.12 1.01 8.34 1.23 8.49 1.5H8.57Z"
      fill="#FFD799"
    />
    <Path
      d="M7 5V8"
      stroke="#CC7C00"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 11H7.01"
      stroke="#CC7C00"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

interface TasksProps {
  navigation?: any;
}

export default function Tasks({ navigation }: TasksProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffddab" />
      
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.statusIcons}>
          {/* Status icons would go here - using placeholder views */}
          <View style={styles.statusIcon} />
          <View style={styles.statusIcon} />
          <View style={styles.statusIcon} />
        </View>
      </View>

      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarPlaceholder} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.greeting}>Good morning, Alex!</Text>
            <Text style={styles.subtitle}>Ready to help customers today?</Text>
          </View>
        </View>
        <View style={styles.alertButton}>
          <TriangleAlertIcon />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateTitle}>No tasks assigned yet</Text>
          <Text style={styles.emptyStateMessage}>
            You're all caught up! New tasks will appear here when they're assigned to you.
          </Text>
          
          {/* All Tasks Button */}
          <TouchableOpacity 
            style={styles.allTasksButton}
            onPress={() => navigation?.navigate('AllTasks')}
          >
            <Text style={styles.allTasksButtonText}>View All Tasks</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  statusBar: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    backgroundColor: '#ffffff',
  },
  timeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f232c',
    letterSpacing: 0.2,
    lineHeight: 22.4,
    fontFamily: Platform.OS === 'ios' ? 'Urbanist' : 'System',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusIcon: {
    width: 18,
    height: 10,
    backgroundColor: '#1f232c',
    borderRadius: 2,
  },
  header: {
    backgroundColor: '#ffddab',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 21,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 16.5,
    backgroundColor: '#e0b8ff',
    overflow: 'hidden',
  },
  avatarPlaceholder: {
    width: '100%',
    height: '100%',
    borderRadius: 16.5,
    backgroundColor: '#e0b8ff',
  },
  profileInfo: {
    flex: 1,
  },
  greeting: {
    fontSize: 19,
    fontWeight: '600',
    color: '#0b8494',
    lineHeight: 25.2,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f232c',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  alertButton: {
    backgroundColor: '#cc7c00',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Math.max(20, (width - 294) / 2),
  },
  emptyStateContainer: {
    alignItems: 'center',
    gap: 8,
    maxWidth: 294,
  },
  emptyStateTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 25.2,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  emptyStateMessage: {
    fontSize: 15,
    fontWeight: '500',
    color: '#717182',
    textAlign: 'center',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
    marginBottom: 24,
  },
  allTasksButton: {
    backgroundColor: '#0b8494',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allTasksButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 22.4,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },

});