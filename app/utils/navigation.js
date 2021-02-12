// Libraries
import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';

// single screen
export function singleScreen(
  screenName,
  subTitle = '',
  backButtonVisible = false,
  topBarVisible = false,
  passProps = null,

) {
  /*Navigation.setDefaultOptions({
    topBar: {
      visible: true,
      drawBehind: true,
      title: {text: ""},
      background: {color: "red"}
    },
    statusBar: {
      style: statusBar,
      visible: true,
      backgroundColor: backgroundColor,
      //translucent: true,
    },
    animations: {
      showModal: {
        enabled: Platform.select({android: false, ios: true}),
        waitForRender: true,
      },
      dismissModal: {
        waitForRender: true,
      },
    },
  });*/

  Navigation.setDefaultOptions({
    statusBar: {
      style: 'light',
      visible: true,
      backgroundColor: '#303F9F',
    },
    topBar: {
      animate: true,
      visible: topBarVisible,
      title: {
        text: '',
        color: '#ffffff',
      },
      subtitle: {
        text: subTitle,
        color: '#C5CAE9',
      },
      backButton: {
        visible: backButtonVisible,
        color: '#FFFFFF',
      },
      background: { color: '#3F51B5' },
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: screenName,
              passProps: passProps,
            },
          },
        ],
      },
    },
  });
}

export function modal(
  screenName,
  passProps = {},
  statusBarVisible = true,
  animation = { show: true, dismiss: true },
  backgroundColor = 'transparent',
) {
  //
  let showModalAnimations = Platform.select({
    ios: {
      enabled: animation.show,
      waitForRender: true,
    },
    android: {
      enabled: true,
      alpha: {
        from: 0,
        to: 1,
        duration: 400,
        startDelay: 0,
        interpolation: 'accelerate',
      },
    },
  });

  let dismissModalAnimations = Platform.select({
    ios: {
      enabled: animation.dismiss,
      waitForRender: true,
    },
    android: {
      enabled: true,
      alpha: {
        from: 1,
        to: 0,
        duration: 200,
        startDelay: 0,
        interpolation: 'accelerate',
      },
    },
  });

  //
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: screenName,
            name: screenName,
            passProps: {
              ...passProps,
            },
            options: {
              statusBar: {
                visible: statusBarVisible,
              },
              modalPresentationStyle: Platform.select({
                ios: 'overFullScreen',
                android: 'overCurrentContext',
              }),
              layout: {
                backgroundColor: backgroundColor,
              },
              topBar: {
                visible: topBarVisible,
              },
              animations: {
                showModal: {
                  ...showModalAnimations,
                },
                dismissModal: {
                  ...dismissModalAnimations,
                },
              },
            },
          },
        },
      ],
    },
  });
}

export function push(
  componentId,
  screenName,
  subTitle = '',
  backButtonVisible,
  statusBarVisible,
  topBarVisible,
  passProps = {},
  statusBarStyle,
) {
  //
  let screenId = screenName;

  //
  Navigation.push(componentId, {
    component: {
      id: screenId,
      name: screenName,
      passProps: {
        ...passProps,
      },
      options: {
        topBar: {
          visible: topBarVisible,
          subtitle: {
            text: subTitle,
          },
          backButton: {
            visible: backButtonVisible,
          },
        },
        bottomTabs: {
          visible: false,
          drawBehind: true,
        },
        statusBar: {
          visible: statusBarVisible,
          style: statusBarStyle,
        },
      },
    },
  })
    .then(() => {
      //store.dispatch(setCurrentScreen(screenId));
    })
    .catch((error) => { });
}

export function pop(componentId) {
  Navigation.pop(componentId)
    .then(() => {
      //store.dispatch(setCurrentScreen(''));
    })
    .catch((error) => { });
}

export default {
  //userProfile,
  modal,
  push,
  pop,
  singleScreen,
};
