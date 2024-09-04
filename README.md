# Habit Tracker App

## Overview
The Habit Tracker App is designed to help users build and maintain positive habits through a simple, intuitive, and visually appealing interface. The app includes various features that ensure habits are tracked effectively, and statistics are provided to help users understand their progress over time.

## Getting Started

### Prerequisites
- **Node.js**: Ensure you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).
- **Expo CLI**: Install Expo CLI globally using npm:
  ```bash
  npm install -g expo-cli
- **Expo Go App**: If you would like to run this app on your phone, download the Expo Go app

### Installing
1. Clone project: https://github.com/bkcan/habit-tracker.git
2. Enter project: cd habit-tracker-app
3. Install dependencies: npm install

### Running Application
#### Run on simulator 
1. Open simulator of choice
2. git switch simulator
3. npx expo start
4. Type 'i' to open on iOS simulaotr or 'a' to open on android simulator
#### Run on device:
1. git switch device
2. npx expo start --tunnel
3. Scan QR code with device

## Major Features
### Habit Check-Off System
- Users can easily mark habits as completed for the day with a simple tap.
- Each habit's status is visually updated to reflect whether it has been completed or not.
### List of Habits System
- Displays all user-created habits in an organized list.
- Each habit is presented with its current streak and best streak, along with the option to view more detailed information.
### Habit Information Display System
- Provides detailed information about each habit, including start date, frequency, current streak, best streak, and description.
- Users can edit habit details, including the title, start date, and frequency.
### Individual Habit Statistic System with Bar Chart
- Visual representation of habit statistics using a bar chart.
- Users can view their habit completion percentage over time, helping to monitor progress.
### Unique Colored Icon System
- Each habit is represented with an icon whose color changes based on the habit's current streak and best streak.
- Icons provide immediate visual feedback on a habit’s progress.
### Icon Coloring Information Page
- Detailed information on what each icon color represents, making it easier for users to understand their progress at a glance.
### Async Data Storage
- Habit data is stored locally on the device using AsyncStorage, ensuring persistence across sessions.
- The app saves and retrieves data efficiently, ensuring users never lose their progress.
### Context API
- The app leverages the Context API for state management, ensuring a consistent user experience across different components.
- Provides a seamless way to access and update habit data throughout the app.
### Simplistic and Intuitive UI Layout and Functionality
- The app features a clean and user-friendly interface, making it easy for users of all ages to navigate and use.
Simplistic design choices ensure that the focus remains on the user's habits and progress.

## Minor Features
### Streak Updating with Habit Completion
- Each time a habit is marked as complete, the current streak is automatically updated.
- The app checks if the new streak surpasses the best streak and updates it accordingly.
### Habit Completion Reset at Midnight Every Day
- At midnight, the app automatically resets all habits completion status to ensure users start fresh every day.
- The reset occurs based on the user's local timezone.
- If the habit was not completed, the current streak will be lost
### Over-Creation of Habit Prevention with Alert
- The app prevents users from creating more than six habits, displaying an alert if they attempt to exceed this limit.
### Title Wrapping for Long Habit Titles
- Habit titles that are too long to fit within the display area automatically wrap or truncate with ellipses, ensuring the UI remains clean and readable.
### Custom Date Styling for Input
- Date inputs are styled with custom formatting, ensuring users can easily enter and view dates in the mm/dd/yyyy format.
- The date input automatically formats as the user types, enhancing the user experience.
- The date input is also validated to prevent non-existent dates
### Prevention of Streaks Exceeding Possible Days
- The app prevents users from setting a streak value that exceeds the number of days since the habit's start date, ensuring accurate tracking.
- Auto Updates Best Streak if Current Streak is Greater
- If the current streak surpasses the best streak, the app automatically updates the best streak to match, ensuring accurate statistics.
### Description of Habit Storage
- Users can add and store descriptions for each habit, providing context or notes that help them stay motivated or remember details about the habit.
### Overall Habit Completion Statistic
- The app calculates and displays an overall habit completion percentage based on the number of days since the start date and the habit's frequency per week.
### Custom Splash Screen
- The app features a custom splash screen that enhances the user experience and brand identity.
### Wireframes
- The development process included detailed wireframes that guided the design and functionality of the app, ensuring a well-thought-out user interface.