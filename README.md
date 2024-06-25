# rn-assignment5-11297349
Sure, here's a brief README explaining how I built the application using the code provided:

## Finance App

This is a simple React Native application that displays a users visa card and shows the transactions and purchases made with the card it also allows users to switch between light and dark themes.

## Getting Started

To get started with this project, the following have to be installed:

- Node.js
- React Native CLI
- An Android or iOS emulator, or a physical device with the appropriate development environment set up

Next, follow these steps:

1. Clone the repository:

```
git clone [url]
```

2. Create the development server (blank react native template):

```
npx create-expo-app --template blank
```

3.Follow the steps after creating the development server

4. Change directory to the name you gave to your folder when creating the development server

```
cd [folder name]
```

5. Run the application on your emulator or device:

```
npm run android # for Android
npm run ios # for iOS
```

## Features

The application has the following features:

- Ability to switch between light and dark themes
- Platform-specific rendering of the theme switch component (using `Platform.select`)
- Use of the `AppContext` to manage the theme state globally

## Implementation

The key components of the implementation are:

1. **SettingScreen.js**: This is the main screen that displays the theme switch. It uses the `Switch` component from `react-native` to toggle the theme, and the `Text` component to display the current theme.

2. **AppContext.js**: This file defines the `AppContext`, which is used to manage the theme state globally. The `useContext` hook is used in the `SettingScreen` to access and update the theme.

3. **Platform-specific rendering**: The code uses the `Platform.select` function to conditionally render the Android and iOS versions of the `Switch` component, allowing for platform-specific styling and behavior.

4. **Theme management**: The `toggleTheme` function updates the `theme` state in the `AppContext` and also toggles the `isToggled` state, which is used to determine the current theme.
5. **Home.js**: This file is the platform on which all other files are displayes with navigation through the app.js file
6. **HomeScreen.js**: This file displays transactions made with the users card

By following this README, you should be able to set up and run the React Native theme switcher application on your local development environment.
