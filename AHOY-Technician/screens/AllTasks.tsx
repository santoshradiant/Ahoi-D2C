import React, { useState } from 'react';
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
  ScrollView,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';
import TaskDetails from './TaskDetails';

const { width, height } = Dimensions.get('window');

// SVG Icons
const BookCheckIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V5L10 1H3C2.44772 1 2 1.44772 2 3Z"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 9L8 11L12 7"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ArrowRightIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M6 12L10 8L6 4"
      stroke="#1F232C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ArrowRightWhiteIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M6 12L10 8L6 4"
      stroke="#FFFFFF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const MapPinIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 1C10.7614 1 13 3.23858 13 6C13 10 8 15 8 15C8 15 3 10 3 6C3 3.23858 5.23858 1 8 1Z"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CalendarIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M12 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V4C14 2.89543 13.1046 2 12 2Z"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 1V3"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5 1V3"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 6H14"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const UserIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M0 16V14C0 11.7909 1.79086 10 4 10H12C14.2091 10 16 11.7909 16 14V16"
      stroke="#858B9B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

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

// Tab Bar Icons
const TasksIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CurrentIcon = () => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M10.5 19.5C15.4706 19.5 19.5 15.4706 19.5 10.5C19.5 5.52944 15.4706 1.5 10.5 1.5C5.52944 1.5 1.5 5.52944 1.5 10.5C1.5 15.4706 5.52944 19.5 10.5 19.5Z"
      stroke="#C7CAD1"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 6V10.5L13.5 12"
      stroke="#C7CAD1"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const HistoryIcon = () => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M3 3V8H8"
      stroke="#C7CAD1"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 13C18 17.4183 14.4183 21 10 21C5.58172 21 2 17.4183 2 13C2 8.58172 5.58172 5 10 5C12.2091 5 14.2091 5.89543 15.6569 7.34315L18 10"
      stroke="#C7CAD1"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ProfileIcon = () => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <Path
      d="M17 20V18C17 16.9391 16.5786 15.9217 15.8284 15.1716C15.0783 14.4214 14.0609 14 13 14H7C5.93913 14 4.92172 14.4214 4.17157 15.1716C3.42143 15.9217 3 16.9391 3 18V20"
      stroke="#C7CAD1"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z"
      stroke="#C7CAD1"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

interface AllTasksProps {
  navigation?: any;
}

export default function AllTasks({ navigation }: AllTasksProps) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const tasks = [
    {
      id: "TASK-001",
      title: "Deep Office Cleaning",
      price: "120 $",
      location: "123 Business Center, Floor 3, Conference Room A",
      time: "Today, 10:00 AM • 2 hours",
      customer: "Sarah Johnson",
      distance: "0.8 km",
      description: "Complete deep cleaning of office space including conference rooms and workstations.",
      paymentMethod: "Cash",
      amount: "$120",
    },
    {
      id: "TASK-002",
      title: "HVAC Maintenance",
      price: "95 $",
      location: "456 Corporate Plaza, Building B, Floor 2",
      time: "Today, 2:00 PM • 1.5 hours",
      customer: "Mike Chen",
      distance: "1.2 km",
      description: "Routine maintenance check and filter replacement for HVAC system.",
      paymentMethod: "Cash",
      amount: "$95",
    },
    {
      id: "TASK-003",
      title: "Emergency Plumbing Repair",
      price: "55 $",
      location: "789 Downtown Tower, Floor 15, Restroom B",
      time: "Today, 2:00 PM • 1.5 hours",
      customer: "Lisa Rodriguez",
      distance: "2.1 km",
      description: "Emergency repair of leaking pipes in restroom facilities.",
      paymentMethod: "Cash",
      amount: "$55",
    },
  ];

  const handleViewDetails = (task) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedTask(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffddab" />
      
      {/* Status Bar */}
      {/* <View style={styles.statusBar}> */}
        {/* <Text style={styles.timeText}>9:41</Text> */}
        {/* <View style={styles.statusIcons}> */}
          {/* <View style={styles.statusIcon} />
          <View style={styles.statusIcon} />
          <View style={styles.statusIcon} /> */}
        {/* </View> */}
      {/* </View> */}

      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          {/* <View style={styles.avatarContainer}>
            <View style={styles.avatarPlaceholder} />
          </View> */}
           <View style={styles.avatarContainer}>
                                  <Image
                                    source={require('../assets/avatar.png')}
                                    style={styles.avatar}
                                    resizeMode="cover"
                                  />
                                </View>
          <View style={styles.profileInfo}>
            <Text style={styles.greeting}>Good morning, Alex!</Text>
            <Text style={styles.subtitle}>Ready to help customers today?</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.alertButton}>
          <TriangleAlertIcon />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Active Task Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Task</Text>
          <View style={styles.activeTaskCard}>
            <View style={styles.taskHeader}>
              <BookCheckIcon />
              <Text style={styles.activeTaskTitle}>Deep Office Cleaning</Text>
              <TouchableOpacity style={styles.arrowButton}>
                <ArrowRightIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Assigned Tasks Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Assigned Tasks</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3 Pending</Text>
            </View>
          </View>
          
          {tasks.map((task) => (
            <View key={task.id} style={styles.taskCard}>
              <View style={styles.taskContent}>
                <View style={styles.taskInfo}>
                  <View style={styles.taskTitleRow}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                    <View style={styles.priceBadge}>
                      <Text style={styles.priceText}>{task.price}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.taskDetails}>
                    <View style={styles.detailRow}>
                      <MapPinIcon />
                      <Text style={styles.detailText}>{task.location}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <CalendarIcon />
                      <Text style={styles.detailText}>{task.time}</Text>
                    </View>
                    <View style={styles.detailRow}>
                      <UserIcon />
                      <Text style={styles.detailText}>{task.customer}</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.distanceContainer}>
                  <Text style={styles.distanceText}>{task.distance}</Text>
                </View>
              </View>
              
              <View style={styles.taskActions}>
                <TouchableOpacity 
                  style={styles.detailsButton}
                  onPress={() => handleViewDetails(task)}
                >
                  <Text style={styles.detailsButtonText}>View Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.startButton}>
                  <Text style={styles.startButtonText}>Start Task</Text>
                  <ArrowRightWhiteIcon />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>





      <TaskDetails
        visible={modalVisible}
        onClose={handleCloseModal}
        task={selectedTask}
      />
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
    paddingTop: 50,
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
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10.5,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  badge: {
    backgroundColor: '#1f232c',
    borderRadius: 99999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: 14.3,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  activeTaskCard: {
    backgroundColor: '#fbfbfb',
    borderRadius: 12.75,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    padding: 14,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10.5,
  },
  activeTaskTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    flex: 1,
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  arrowButton: {
    padding: 8,
  },
  taskCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12.75,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    padding: 8,
    marginBottom: 10.5,
  },
  taskContent: {
    flexDirection: 'row',
    marginBottom: 10.5,
  },
  taskInfo: {
    flex: 1,
    paddingRight: 10.5,
  },
  taskTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  taskTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  priceBadge: {
    backgroundColor: '#28a138',
    borderRadius: 99999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  priceText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: 14.3,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  taskDetails: {
    gap: 3.5,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3.5,
  },
  detailText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 12,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
    flex: 1,
  },
  distanceContainer: {
    paddingTop: 5,
    paddingBottom: 2,
    alignItems: 'flex-end',
  },
  distanceText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#717182',
    lineHeight: 14.3,
    textAlign: 'right',
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  taskActions: {
    flexDirection: 'row',
    gap: 7,
  },
  detailsButton: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  detailsButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f232c',
    lineHeight: 14.3,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },
  startButton: {
    flex: 1,
    backgroundColor: '#0b8494',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    height: 40,
  },
  startButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: 14.3,
    fontFamily: Platform.OS === 'ios' ? 'SF Pro Display' : 'System',
  },

   avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 16.5,
  },

});