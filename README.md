# 👤 On-Device Face Verification App (React Native)

This is a lightweight cross-platform React Native app (Android & iOS) that performs **face verification** entirely on-device using:

- 📷 `react-native-vision-camera` for capturing live camera frames
- 🎯 `@react-native-ml-kit/face-detection` for detecting facial landmarks
- 🧠 `react-native-fast-tflite` for running MobileFaceNet (.tflite) and extracting 512-D facial embeddings
- 💾 `react-native-mmkv` for secure and fast local storage
- 🔐 **No internet or cloud API** — completely offline and private

---

## 🚀 Features

- Register a new user by capturing their face
- Align and crop face image based on MLKit’s 5-point landmarks
- Extract a 512-dimensional face embedding using MobileFaceNet
- Save and verify identities by comparing cosine similarity of embeddings
- Securely store all face templates locally on the device

---

## 🧰 Tech Stack

| Module              | Description                          |
|---------------------|--------------------------------------|
| React Native CLI    | Bare workflow (no Expo)              |
| MLKit               | Face detection + 5-point landmarks   |
| MobileFaceNet       | Lightweight FR model (TFLite format) |
| Vision Camera       | High-performance frame capture       |
| MMKV                | Fast local storage                   |

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/amrit-khadka04/faceapp.git
cd faceapp
```

### 2. Install Dependencies (using npm)

```bash
npm install
```

### 3. Install iOS Pods (iOS only)

```bash
cd ios && pod install && cd ..
```

### 4. Add TFLite Model

- Download `mobilefacenet.tflite` from:
  [https://github.com/fdbtrs/AdaDistill/tree/main/output/AdaDistill](https://github.com/fdbtrs/AdaDistill/tree/main/output/AdaDistill)

- Then place it here:

```
android/app/src/main/assets/mobilefacenet.tflite
```

- On iOS, drag the file into Xcode under "Copy Bundle Resources"

---

## ⚙️ Metro Configuration

Add the `.tflite` extension to your `metro.config.js`:

```js
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig();
  config.resolver.assetExts.push('tflite');
  return config;
})();
```

---

## 📂 Project Structure

```
faceapp/
├── assets/
│   └── models/
│       └── mobilefacenet.tflite
├── src/
│   ├── components/
│   │   ├── RegisterUser.tsx
│   │   └── VerifyUser.tsx
│   ├── utils/
│   │   ├── alignFace.ts
│   │   ├── embedding.ts
│   │   └── similarity.ts
│   └── storage/
│       └── userDB.ts
├── App.tsx
└── metro.config.js
```

---

## 📸 How It Works

1. Capture image using `VisionCamera`
2. Detect 5-point facial landmarks using MLKit
3. Align & crop face (112×112) based on landmarks
4. Feed image into `mobilefacenet.tflite` to get 512-D vector
5. Compare with stored template using cosine similarity

---

## 🧪 Run the App

### Android
```bash
npx react-native run-android
```

### iOS
```bash
npx react-native run-ios
```

Make sure to enable camera and storage permissions on your device or emulator.

---

## ✅ Status

- [x] Camera Integration
- [x] Landmark Detection
- [x] Face Alignment
- [x] Template Extraction (TFLite)
- [x] Cosine Similarity Matching
- [ ] Liveness Detection (optional)

---

## 📄 License

This project is licensed under the MIT License.

---

## 👋 Author

**Amrit Khadka**  
📧 Email: amrit.khadka@stud.tu-darmstadt.de  
🔗 GitHub: [@amrit-khadka04](https://github.com/amrit-khadka04)
