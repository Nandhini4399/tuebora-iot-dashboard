import type { DeviceData } from "./DeviceData";

export const filterDevices = (devices: DeviceData[], value: string) => {
    return [...devices].filter((device: DeviceData) => 
         device.deviceName.toLowerCase().includes(value.toLowerCase()) ||
        device.location.toLowerCase().includes(value.toLowerCase()) ||
        device.status.toLowerCase().includes(value.toLowerCase())
     );
}  


export const sortDevice = (devices: DeviceData[], key: string, type: string) => {
  const sorted = [...devices];

  sorted.sort((a, b) => {
    if (key === 'lastSeen') {
      const dateA = new Date(a.lastSeen).getTime();
      const dateB = new Date(b.lastSeen).getTime();
      return type === 'asc' ? dateA - dateB : dateB - dateA;
    }

    const valA = (a as any)[key]?.toString().toLowerCase() ?? '';
    const valB = (b as any)[key]?.toString().toLowerCase() ?? '';
    return type === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  return sorted;
};


export const groupData = (devices: DeviceData[]) => {
    return [...devices].reduce((acc, device) => {
  if (!acc[device.status]) {
    acc[device.status] = { status: device.status, count: 0, deviceNames: [] as string[] };
  }
  acc[device.status].count++;
  acc[device.status].deviceNames.push(device.deviceName);
  return acc;
}, {} as Record<string, { status: string; count: number; deviceNames: string[] }>);
};