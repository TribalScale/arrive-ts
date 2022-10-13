export const EmailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);
export const RoutesType = Object.freeze({
  EMAIL_SCREEN: 'EmailScreen',
  PASSWORD_SCREEN: 'PasswordScreen',
  LOGIN_SCREEN: 'SigninScreen',
  INFO_CAROUSEL: 'InfoCarousel',
  HOME_SCREEN: 'HomeScreen',
  RESOURCES_SCREEN: 'ResourcesScreen',
  TRAVELERS_SCREEN: 'TravelersScreen',
  TRAVEL_DOCUMENT_SCREEN: 'TravelDocumentScreen',
  TRAVEL_DOCUMENT_DETAILS_SCREEN: 'TravelDocumentDetailsScreen',
  SETTINGS_SCREEN: 'SettingsScreen',
  STACKS: {
    HOME: 'HomeStack',
    RESOURCES: 'ResourcesStack',
    TRAVELERS: 'TravelersStack',
    SETTINGS: 'SettingsStack',
  },
});
export const TabIconList = {
  [RoutesType.STACKS.HOME]: {
    active: 'ios-home',
    inactive: 'ios-home-outline',
    routeName: 'Home',
  },
  [RoutesType.STACKS.TRAVELERS]: {
    active: 'ios-person-add',
    inactive: 'ios-person-add-outline',
    routeName: 'Travelers',
  },
  [RoutesType.STACKS.RESOURCES]: {
    active: 'ios-book',
    inactive: 'ios-book-outline',
    routeName: 'Resources',
  },
  [RoutesType.STACKS.SETTINGS]: {
    active: 'ios-settings',
    inactive: 'ios-settings-outline',
    routeName: 'Settings',
  },
};
