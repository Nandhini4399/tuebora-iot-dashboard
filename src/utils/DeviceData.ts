export type DeviceData = {
    deviceName: string;
    location: string;
    status: string;
    lastSeen: string;
}

export interface SortOption {
  label: string;
  value: string;
  type: string;
}

export const ITEMS_PER_PAGE = 5;

export const sortOptions: SortOption[] = [
  { label: "Name (A–Z)", value: "deviceName_asc", type: "asc" },
  { label: "Name (Z–A)", value: "deviceName_desc", type: "desc" },
  { label: "Location (A–Z)", value: "location_asc", type: "asc" },
  { label: "Location (Z–A)", value: "location_desc", type: "desc" },
  { label: "Last Seen (Newest First)", value: "lastSeen_asc", type: "desc" },
  { label: "Last Seen (Oldest First)", value: "lastSeen_desc", type: "asc" },
  { label: "Status (A-Z)", value: "status_asc", type: "asc" },
  { label: "Status (Z-A)", value: "status_desc", type: "desc" }
];

export const iotDevices: DeviceData[] = [
  {
    deviceName: "Living Room Thermostat",
    location: "Living Room",
    status: "Online",
    lastSeen: "2025-07-30T10:15:00"
  },
  {
    deviceName: "Front Door Camera",
    location: "Entrance",
    status: "Offline",
    lastSeen: "2025-07-29T22:45:00"
  },
  {
    deviceName: "Garage Door Sensor",
    location: "Garage",
    status: "Online",
    lastSeen: "2025-07-30T11:50:00"
  },
  {
    deviceName: "Kitchen Smart Light",
    location: "Kitchen",
    status: "Error",
    lastSeen: "2025-07-30T09:05:00"
  },
  {
    deviceName: "Bedroom Air Quality Monitor",
    location: "Bedroom",
    status: "Online",
    lastSeen: "2025-07-30T11:20:00"
  },
  {
    deviceName: "Outdoor Weather Sensor",
    location: "Backyard",
    status: "Offline",
    lastSeen: "2025-07-28T16:30:00"
  },
  {
    deviceName: "Office Smart Plug",
    location: "Home Office",
    status: "Online",
    lastSeen: "2025-07-30T10:45:00"
  },
  {
    deviceName: "Bathroom Leak Detector",
    location: "Bathroom",
    status: "Online",
    lastSeen: "2025-07-30T11:10:00"
  },
  {
    deviceName: "Smart Refrigerator",
    location: "Kitchen",
    status: "Online",
    lastSeen: "2025-07-30T08:40:00"
  },
  {
    deviceName: "Garage Motion Sensor",
    location: "Garage",
    status: "Error",
    lastSeen: "2025-07-29T21:00:00"
  },
  {
    deviceName: "Kids Room Night Light",
    location: "Kids Bedroom",
    status: "Offline",
    lastSeen: "2025-07-30T00:00:00"
  },
  {
    deviceName: "Main Hall Smoke Detector",
    location: "Main Hall",
    status: "Online",
    lastSeen: "2025-07-30T11:58:00"
  },
  {
    deviceName: "Balcony Humidity Sensor",
    location: "Balcony",
    status: "Online",
    lastSeen: "2025-07-30T10:05:00"
  },
  {
    deviceName: "Smart Speaker",
    location: "Living Room",
    status: "Online",
    lastSeen: "2025-07-30T11:30:00"
  },
  {
    deviceName: "Home Energy Meter",
    location: "Utility Room",
    status: "Offline",
    lastSeen: "2025-07-28T13:55:00"
  }
];

export const statusColors: Record<string, string> = {
    Online: '#4CAF50',
    Offline: '#9E9E9E',  
    Error: '#F44336'     
  };