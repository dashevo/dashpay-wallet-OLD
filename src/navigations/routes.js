import HomeScreen from 'containers/HomeScreen';
import PayScreen from 'containers/PayScreen';
import ReceiveScreen from 'containers/ReceiveScreen';
import ContactsScreen from 'containers/ContactsScreen';
import ConfirmScreen from 'containers/ConfirmScreen';
import ContactScreen from 'containers/ContactScreen';
import ActivitiesScreen from 'containers/ActivitiesScreen';

const routes = {
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: false,
      title: 'Home',
    },
  },
  ActivitiesScreen: {
    screen: ActivitiesScreen,
    navigationOptions: {
      header: false,
      title: 'Activities',
    },
  },
  ContactsScreen: {
    screen: ContactsScreen,
    navigationOptions: {
      header: true,
      title: 'Contacts',
    },
  },
  ContactScreen: {
    screen: ContactScreen,
    navigationOptions: {
      header: true,
      title: 'Contact',
    },
  },
  PayScreen: {
    screen: PayScreen,
    navigationOptions: {
      header: true,
      title: 'Pay',
    },
  },
  ReceiveScreen: {
    screen: ReceiveScreen,
    navigationOptions: {
      header: true,
      title: 'Receive',
    },
  },
  ConfirmScreen: {
    screen: ConfirmScreen,
    navigationOptions: {
      header: false,
      title: 'Confirm',
    },
  },
};

export default routes;
