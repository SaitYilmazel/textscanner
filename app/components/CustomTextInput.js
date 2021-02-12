import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';

import BaseInput from './BaseInput';

export default class Hoshi extends BaseInput {
  static propTypes = {
    borderColor: PropTypes.string,
    /*
     * this is used to set backgroundColor of label mask.
     * this should be replaced if we can find a better way to mask label animation.
     */
    passiveColor: PropTypes.string,
    activeColor: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    maskColor: PropTypes.string,
    passwordhide: PropTypes.bool.isRequired,
    inputPadding: PropTypes.number,
    height: PropTypes.number,
  };

  static defaultProps = {
    activeColor: 'red',
    passiveColor: 'black',
    borderColor: 'red',
    inputPadding: 16,
    height: 48,
    borderHeight: 3,
  };

  render() {
    const {
      label,
      passwordhide,
      iconName,
      style: containerStyle,
      inputStyle,
      labelStyle,
      maskColor,
      activeColor,
      passiveColor,
      borderColor,
      borderHeight,
      inputPadding,
      height: inputHeight,
    } = this.props;
    const { width, focusedAnim, value } = this.state;
    const flatStyles = StyleSheet.flatten(containerStyle) || {};
    const containerWidth = flatStyles.width || width;

    return (
      <View
        style={[
          styles.container,
          containerStyle,
          {
            height: inputHeight + inputPadding,
            width: containerWidth,
          },
        ]}
        onLayout={this._onLayout}
      >
        <Image
          style={{
            width: 25,
            height: 25,
            marginTop: 20,
            marginLeft: 20,
          }}
          source={{
            uri: iconName
          }}
        />
          <TextInput
            ref={this.input}
            {...this.props}
            style={[
              styles.textInput,
              inputStyle,
              {
                width: 210,
                height: inputHeight,
                left: inputPadding,
              },
            ]}
            secureTextEntry={passwordhide}
            value={value}
            onBlur={this._onBlur}
            onChange={this._onChange}
            onFocus={this._onFocus}
            underlineColorAndroid={'transparent'}
          />
        <TouchableWithoutFeedback onPress={this.focus}>
          <View
            style={styles.labelContainer}
          >
            {/* passive label */}
            <Animated.Text
              style={[
                styles.label,
                {
                  opacity: focusedAnim.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 0, 1],
                  }),
                  top: focusedAnim.interpolate({
                    inputRange: [0, 0.5, 0.51, 1],
                    outputRange: [24, 24, 0, 0],
                  }),
                  left: focusedAnim.interpolate({
                    inputRange: [0, 0.5, 0.51, 1],
                    outputRange: [inputPadding, 2 * inputPadding, 0, inputPadding],
                  }),
                  color: focusedAnim.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [passiveColor, activeColor, activeColor],
                  }),
                },
              ]}
            >
              {label}
            </Animated.Text>
            {/* active label */}
            <Animated.Text
              style={[
                styles.label,
                {
                  opacity: focusedAnim.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 0, 1],
                  }),
                  top: focusedAnim.interpolate({
                    inputRange: [0, 0.5, 0.51, 1],
                    outputRange: [24, 24, 0, 0],
                  }),
                  left: focusedAnim.interpolate({
                    inputRange: [0, 0.5, 0.51, 1],
                    outputRange: [inputPadding, 2 * inputPadding, 0, inputPadding],
                  }),
                  color: focusedAnim.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [passiveColor, activeColor, activeColor],
                  }),
                },
              ]}
            >
              {label}
            </Animated.Text>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={[styles.labelMask, {
            backgroundColor: maskColor,
            width: inputPadding,
          }]}
        />
        <Animated.View
          style={[
            styles.border,
            {
              width: focusedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 210],
              }),
              backgroundColor: borderColor,
              height: borderHeight,
              marginLeft: 60,
              marginBottom: 10,
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0,
    borderBottomColor: '#ffffff',
  },
  labelContainer: {
    position: 'absolute',
  },
  label: {
    position: 'absolute',
    marginLeft: 45,
    fontSize: 16,
    color: '#6a7989',
  },
  textInput: {
    fontSize: 14,
    fontWeight: "800",
    position: 'absolute',
    bottom: 2,
    padding: 0,
    fontSize: 16,
    color: "#757575",
    fontFamily: "Now-Regular",
    marginLeft: 45,
    marginRight: 20,
  },
  labelMask: {
    height: 24,
  },
  border: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});