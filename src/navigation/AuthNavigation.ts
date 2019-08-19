import { createStackNavigator } from 'react-navigation';
import { SignIn, Welcome, Initializing } from '../screens';

const noHeader = { header: null };

const stack = {
  Initializing: {
    screen: Initializing,
    navigationOptions: noHeader,
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: noHeader,
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: noHeader,
  },
};

export const AuthStack = createStackNavigator(stack);
export type AuthRoutes = keyof typeof stack;
