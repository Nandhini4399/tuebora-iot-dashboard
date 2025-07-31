# tuebora-iot-dashboard
Tuebora IOT Dashboard

Tuebora IOT Dashboard is a web-based platform designed to monitor and manage IoT devices efficiently. It provides real-time data visualization and device control features.

## Folder Structure

```
tuebora-iot-dashboard/

│── index.html
├── src/
│   ├── components/
│   ├── translations/
│   ├── icons/
│   ├── App.tsx
│   ├── utils
│   └── types
├── package.json
└── README.md
└── tests
└── prompts.md
```

### Entry File

- **src/index.tsx**: The entry point of the application. It renders the root component (`App.tsx`) into the DOM.
- **src/App.tsx**: The main application component that sets up routing and layout for the dashboard.



## Getting Started

### Run the Project

```bash
npm install
npm run dev
```

### Run Test Cases

```bash
npm run test
```

### Run Cypress Tests

```bash
npx cypress open
```