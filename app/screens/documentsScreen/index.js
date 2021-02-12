import React from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import { PinchGestureHandler,GestureHandler } from 'react-native-gesture-handler';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: screen.width,
    height: screen.width,
  },
});

export default class App extends React.Component {
  scale = new Animated.Value(1);

  onPinchEvent = Animated.event([{ nativeEvent: { scale: this.scale } }], {
    useNativeDriver: true,
  },   console.log("onPinchEvent")
  );

  onPinchStateChange = (event) => {
    if (event.nativeEvent.oldState === GestureHandler.State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 1,
      }).start();
      console.log("onPinchStateChange")
    }
    
  };

  render() {
    return (
      <View style={styles.container}>
        <PinchGestureHandler
          onGestureEvent={this.onPinchEvent}
          onHandlerStateChange={this.onPinchStateChange}>
          <Animated.Image
            source={{
              uri:
                'https://images.pexels.com/photos/2147459/pexels-photo-2147459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            }}
            style={[
              styles.image,
              {
                transform: [{ scale: this.scale }],
              },
            ]}
            resizeMode="contain"
          />
        </PinchGestureHandler>
      </View>
    );
  }
}