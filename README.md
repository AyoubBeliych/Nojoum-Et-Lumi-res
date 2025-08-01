# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
  `npm run dev`

## Build Android APK

This project uses Capacitor to package the web app as a native Android application.

1. After installing dependencies, add the Android platform once:
   `npx cap add android`
2. Build the web assets and sync them to the Android project:
   `npm run build:android`
3. Open the project in Android Studio to build or run on a device:
   `npx cap open android`
