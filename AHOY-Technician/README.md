# AHOY-Technician

A React Native app for technicians, built with Expo and TypeScript.

## Features

- **Authentication**: Sign in and sign up screens
- **Profile Management**: User profile with personal information editing
- **Navigation**: Bottom tab navigation with profile tab

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

3. Run on your preferred platform:
   - **Android**: `npm run android` or `yarn android`
   - **iOS**: `npm run ios` or `yarn ios`
   - **Web**: `npm run web` or `yarn web`

## Project Structure

```
AHOY-Technician/
├── assets/                 # Images, icons, and other static assets
├── components/            # Reusable React components
├── navigation/            # Navigation configuration
│   └── MainTabNavigator.tsx
├── screens/              # Screen components
│   ├── signin.tsx
│   ├── signup.tsx
│   └── profile.tsx
├── android/              # Android-specific code
├── App.js               # Main app component
├── package.json         # Dependencies and scripts
└── app.json            # Expo configuration
```

## Configuration

The app is configured for:
- **Package Name**: `com.pakkisantosh.AHOYTechnician`
- **App Name**: `AHOY-Technician`
- **Expo SDK**: 53.0.22
- **React Native**: 0.79.6

## Building for Production

### Android

1. Build APK:
   ```bash
   eas build --platform android
   ```

2. Build AAB (for Play Store):
   ```bash
   eas build --platform android --profile production
   ```

### iOS

1. Build for iOS:
   ```bash
   eas build --platform ios
   ```

## Development

This project uses:
- **React Navigation** for navigation
- **React Native SVG** for icons
- **TypeScript** for type safety
- **Expo** for development and building

## License

0BSD
