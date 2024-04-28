import { createContext, useState } from "react";

export interface UserConfig {
  benchPress: number;
  backSquat: number;
  weightedPullups: number;
  setBenchPress: (v: number) => void;
  setBackSquat: (v: number) => void;
  setWeightedPullups: (v: number) => void;

  // last 1 RM
  lastBenchPress: number;
  lastBackSquat: number;
  lastWeightedPullups: number;
  setLastBenchPress: (v: number) => void;
  setLastBackSquat: (v: number) => void;
  setLastWeightedPullups: (v: number) => void;
}

export const UserConfigContext = createContext<UserConfig | undefined>(undefined);

export function UserConfigProvider({ children }: { children: React.ReactNode }) {
  const [benchPress, setBenchPress] = useState<number>(0);
  const [backSquat, setBackSquat] = useState<number>(0);
  const [weightedPullups, setWeightedPullups] = useState<number>(0);

  // last 1rm

  const [lastBenchPress, setLastBenchPress] = useState<number>(0);
  const [lastBackSquat, setLastBackSquat] = useState<number>(0);
  const [lastWeightedPullups, setLastWeightedPullups] = useState<number>(0);

  const userConfig: UserConfig = {
    benchPress,
    backSquat,
    weightedPullups,
    setBenchPress,
    setBackSquat,
    setWeightedPullups,
    lastBenchPress,
    lastBackSquat,
    lastWeightedPullups,
    setLastBenchPress,
    setLastBackSquat,
    setLastWeightedPullups
  };

  return (
    <UserConfigContext.Provider value={userConfig}>
      {children}
    </UserConfigContext.Provider>
  );
}
