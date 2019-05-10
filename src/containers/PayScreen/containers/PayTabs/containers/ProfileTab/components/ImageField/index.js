// @flow
import * as React from 'react';
import Touchable from 'components/Touchable';
import Field from 'components/Field';
import Avatar from 'components/Avatar';
import View from 'components/View';
import Icon from 'components/Icon';

function ImageField(props) {
  return (
    <Field {...props} name="image">
      {({ form }) => {
        const { name, image } = form.values;

        function onPress() {
          form.navigation.navigate('CameraRollScreen', {
            onSelect: selected => form.setFieldValue('image', selected.selected[0].uri),
          });
        }

        return (
          <Avatar name={name} image={image} {...props}>
            {({ children, bind, styles }) => (
              <Touchable onPress={onPress}>
                <View style={styles.col}>
                  <View style={styles.center}>
                    <View style={styles.container}>
                      <View style={styles.body}>{children}</View>
                      <View style={styles.left}>
                        <Touchable
                          {...bind}
                          hitSlop={{
                            bottom: 10,
                            left: 10,
                            right: 10,
                            top: 10,
                          }}
                        >
                          <Icon style={styles.icon} name="dash" />
                        </Touchable>
                      </View>
                    </View>
                  </View>
                </View>
              </Touchable>
            )}
          </Avatar>
        );
      }}
    </Field>
  );
}

export default ImageField;
