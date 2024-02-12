export interface EisTaskMonitor {
  id: number;
  category: string;
  name: string;
  status: string;
  location: string;
  hostName: string;
  frequency: number | null;
  frequencyStr: string;
  lastRunTime: Date | null;
  nextRunTime: Date | null;
}
