# Horoscope App – Development Guide

This repository contains the web version of the horoscope application. The project can also be packaged as a native Android application using [Capacitor](https://capacitorjs.com/).

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Build for Android

1. Make sure the above dependencies are installed.
2. Install Capacitor CLI globally if you don't already have it:
   `npm install -g @capacitor/cli`
3. Build the web assets and sync them to the Android project:
   `npm run android`
4. If this is the first time running Capacitor, add the Android platform:
   `npx cap add android`
5. Open the project in Android Studio and run it on a device or emulator:
   `npx cap open android`

The generated Android project lives in the `android/` directory. Subsequent changes to the web code only require running `npm run android` again to copy the latest build.

## Roadmap

1. **Finalize PWA assets** – Ensure the web manifest and service worker are correctly configured so the web version functions offline and can be installed on mobile devices.
2. **Capacitor integration** – Use Capacitor to wrap the web app into a native container for Android distribution.
3. **Testing on devices** – Verify that notifications, audio and local storage work inside the Android build.
4. **Play Store preparation** – Configure app icons, splash screens and package identifiers, then build a release APK/AAB for publishing.

Following these steps will allow the same codebase to run as a website and as a fully installable Android application.
