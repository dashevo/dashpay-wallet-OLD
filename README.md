# dashpay-wallet

## Setup:
Install NodeJS, Yarn, Android Studio, Java SDK 8 and Python 2.

On Windows you can install [Chocolatey](https://chocolatey.org) then run `choco install -y nodejs.install yarn python2 jdk8 androidstudio` (If some of these are already installed you can omit them.)

Set up Android Studio and create a virtual device for testing. [Windows instructions from Technet](https://blogs.technet.microsoft.com/karanrustagi/2017/08/15/how-to-setup-android-emulator-using-android-studio/) (skip the last step)

In the **dashpay-wallet** project folder, run `yarn` to install dependencies.

Run `npm i -g react-native-cli`.

## Development:
Launch your android emulator from inside Android Studio or [from the command line](https://developer.android.com/studio/run/emulator-commandline).

Run the packager from the project folder: `yarn start`

Launch the app on the emulator: `react-native run-android`. You can toggle *Live Reload* and *Hot Reloading* in the developer menu (Ctrl+M)

## Code Conventions
We are using the [AirBNB Javascript style](https://github.com/airbnb/javascript) with configurations for ESLint, Prettify, and Editorconfig. In order to benefit from these, make sure your IDE has those extensions installed and enabled.
