import {ROUTES} from './RoutesIdentifier';

export const tabIconNames = {
  [ROUTES.Stacks.HOME_STACK]: {
    active: 'ios-home',
    inactive: 'ios-home-outline',
    routeName: 'Home',
  },
  [ROUTES.Stacks.TRAVELERS_STACK]: {
    active: 'ios-person-add',
    inactive: 'ios-person-add-outline',
    routeName: 'Travelers',
  },
  [ROUTES.Stacks.RESOURCES_STACK]: {
    active: 'ios-book',
    inactive: 'ios-book-outline',
    routeName: 'Resources',
  },
  [ROUTES.Stacks.SETTINGS_STACK]: {
    active: 'ios-settings',
    inactive: 'ios-settings-outline',
    routeName: 'Settings',
  },
};
