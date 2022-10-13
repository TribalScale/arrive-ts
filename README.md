# ArriveTS

## Index

- [Case Study](#case-study)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Generate Production Version](#generate-production-version)
- [Styleguide](#styleguide)
- [Contributing](#contributing)

## Case Study

### The Context

During the COVID-19 pandemic, the Canadian government introduced the ArriveCan mobile and web application, usage of which was mandatory in order to digitally collect information about inbound travellers, their vaccination status, and post-arrival accommodation plans. More recently, the application has been used by the government to allow inbound travellers to complete their Advance CBSA Declaration. While its first purpose was related to public health, its secondary purpose is aimed at reducing passenger wait times at Canadian airports. 

### The Challenge

Upon learning the reported project cost of building and maintaining the ArriveCan app, TribalScale’s team wanted to demonstrate how iterative work and fluid communication can help produce quick results when it comes to building digital products. Our team also wanted to demonstrate the technical passion and prowess of the Canadian engineering community. 

With this in mind, our tribe worked together to quickly rebuild the front end version of the ArriveCan mobile app as a learning & team building experience. We refer to our version as ArriveTS. 

### The Result

TribalScale wrapped up its hackathon on Oct. 10, 2022. After two days of work, the team was able to recreate the ArriveCan app and we are now releasing the Git Repo to the public. TribalScale was able to deliver the following features:

- Sign-up flow
- Created ability to add travel documents
- Created ability to add additional traveler profiles to accounts
- Ability to save travelers' details for future trips
- Ability to complete declaration forms (approximately a dozen questions)
- Ability to input trip information; integration with API for list of Canadian International airports
- Created placeholder to scan Passport or PR Card to add traveler details
- List of linked traveler resources

What’s available today: 

- Here's a quick [video preview](https://www.globenewswire.com/Tracker?data=eu-OMf2qSxZcx7qaZtrFuD3orF9Ipd3fNdw7Oif1jBZUO6Wz4HhwDVpI0d2YpFbPVgNgbT2-Qszgna9v-OxJ_9d1dhPDruC11Ep5RpWUxhI=) of what has been built so far
- Open source code required to build the ArriveTS app 

## Prerequisites

- [Node.js > 14](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.11.3](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

### Base dependencies

- [aws-amplify](https://github.com/aws-amplify/amplify-js) for authentication.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-async-storage](https://github.com/react-native-async-storage/async-storage) for local storage.
- [react-hook-form](https://github.com/react-hook-form/react-hook-form) for form handling.
- [react-native-paper](https://callstack.github.io/react-native-paper/) for pre-built components.
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.

## Getting Started

### Configuring Amplify Authentication

This project uses AWS Amplify with Cognito User Pool to connect app authentication. In order to setup authentication on this app, you must have an AWS Cognito User Pool set up. You will need your AWS account access key id and secret access key to get Amplify setup. You will also need the Amplify CLI setup on your system. Follow instructions [here](https://docs.amplify.aws/cli/start/install/).

Once you have the CLI setup, in the projects root directory run:

```bash
amplify init
```

Once you have setup programmatic access to your AWS account, import the user pool by running the following command:

```bash
amplify import auth
```

Follow the step by step instructions on the CLI to import your AWS Cognito User Pool. 

Please refer to the [Amplify Documentation](https://docs.amplify.aws/cli/auth/overview/) for more information on how to configure Amplify to the project.


### Install dependencies

Run
```bash
yarn install
```

### Install Pods

After installing all yarn dependencies, move to your ios folder and run:

```bash
pod install
```

or

From the project root folder, run:

```bash
npx pod-install
```

### Running the application

#### iOS

Run:

```bash
yarn ios
```

### Android

Run:

```bash
yarn android
```

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `index.js`: Main component that starts your whole app.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `context`: Folder to put all contexts for the application.
  - `routes`: Folder to store the navigators
    - `AuthenticatedStack`: Folder to store all authenticated routes
    - `UnauthenticatedStack`: Folder to store all unauthenticated routes
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code.
      - `index.js`
  - `utils`: This folder contains all utilities that you may need, such as colors and constants

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

## Styleguide

For coding styling, we decided to go with ESLint and [React Native community's styleguide](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community#readme).


## Contributing

Want to contribute to this project? Follow these small steps to shoot your first PR!

- Fork our repo
- Create a new branch with the feature you are going to add or any bug you want to solve
- Start working on your new branch
- Send us a pull request!

[Here](https://www.dataschool.io/how-to-contribute-on-github/) is a more detailed step by step guide from [DataSchool](https://www.dataschool.io/) for contributing to open source projects
