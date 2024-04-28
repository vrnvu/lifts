import { createContext, useState } from "react";

export interface UserConfig {
  benchPress: number;
  backSquat: number;
  weightedPullups: number;
  setBenchPress?: (v: number) => void;
  setBackSquat?: (v: number) => void;
  setWeightedPullups?: (v: number) => void;
}

const initialUserConfig: UserConfig = {
  benchPress: 0,
  backSquat: 0,
  weightedPullups: 0,
};

export const UserConfigContext = createContext<UserConfig>(initialUserConfig);

export default function UserConfigProvider({ children }: { children: React.ReactNode }) {
  const [benchPress, setBenchPress] = useState<number>(0);
  const [backSquat, setBackSquat] = useState<number>(0);
  const [weightedPullups, setWeightedPullups] = useState<number>(0);

  const userConfig: UserConfig = {
    benchPress,
    backSquat,
    weightedPullups,
    setBenchPress,
    setBackSquat,
    setWeightedPullups,
  };

  return (
    <UserConfigContext.Provider value={userConfig}>
      {children}
    </UserConfigContext.Provider>
  );
}
