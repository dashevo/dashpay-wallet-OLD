// @flow
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Form from 'components/Form';
import Button from 'components/Button';
import View from 'components/View';
import Text from 'components/Text';
import AutoSubmit from 'components/AutoSubmit';
import RecipientField from './components/RecipientField';
import selector from './selectors';
import defaults from './defaults';
import styles from './styles';
import type { Props, State } from './types';

class PayScreen extends React.Component<Props, State> {
  static defaultProps = defaults;

  constructor(props: Props) {
    super(props);
    this.navigateToScanner = this.navigateToScanner.bind(this);
    const onSubmit = this.handleSubmit.bind(this);
    this.state = {
      ...props.formProps,
      onSubmit,
    };
  }

  handleSubmit(values: Object) {
    const { navigation } = this.props;
    navigation.replace('PayTabs', values);
  }

  navigateToScanner() {
    const { navigation } = this.props;
    navigation.replace('ScannerScreen');
  }

  render(): React.Element<any> {
    return (
      <Form {...this.state}>
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.row}>
              <Text style={styles.title}>Pay</Text>
            </View>
            <View style={styles.row}>
              <RecipientField />
            </View>
            <View style={styles.row}>
              <AutoSubmit />
            </View>
            <View style={styles.row}>
              <Button primary full sm>
                {({ styles }) => (
                  <TouchableOpacity
                    style={styles.container}
                    onPress={this.navigateToScanner}
                  >
                    <Text style={styles.text}>Scan QR code</Text>
                  </TouchableOpacity>
                )}
              </Button>
            </View>
          </View>
        </View>
      </Form>
    );
  }
}

export default connect(selector)(PayScreen);
