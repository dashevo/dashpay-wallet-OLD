// @flow
import * as React from 'react';
import Field from 'components/Field';
import Avatar from 'components/Avatar';
import View from 'components/View';
import Icon from 'components/Icon';

function ImageField(props) {
  return (
    <Field {...props} name="image">
      {({ form }) => {
        const { name, image } = form.values;

        return (
          <Avatar name={name} image={image} {...props}>
            {({ children, styles }) => (
              <View style={styles.center}>
                <View style={styles.container}>
                  <View style={styles.body}>{children}</View>
                  <View style={styles.left}>
                    <Icon style={styles.icon} name="dash" />
                  </View>
                </View>
              </View>
            )}
          </Avatar>
        );
      }}
    </Field>
  );
}

export default ImageField;
