import React, { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

export enum ExerciseType {
  BENCH_PRESS,
  BACK_SQUAT,
  WEIGHTED_PULLUPS
}

export interface UserConfig {
  exercises: Map<ExerciseType, [number, Dispatch<SetStateAction<number>>]>;
  lastExercises: Map<ExerciseType, [number, Dispatch<SetStateAction<number>>]>;
}

export function updateWeight(userConfig: UserConfig, exercise: ExerciseType): Dispatch<SetStateAction<number>> {
  return userConfig.exercises.get(exercise)![1];
}

export function updateLastWeight(userConfig: UserConfig, exercise: ExerciseType): Dispatch<SetStateAction<number>> {
  return userConfig.lastExercises.get(exercise)![1];
}

export function getWeight(userConfig: UserConfig, exercise: ExerciseType): number {
  return userConfig.exercises.get(exercise)![0];
}

export function getWeightLast(userConfig: UserConfig, exercise: ExerciseType): number {
  return userConfig.lastExercises.get(exercise)![0];
}

const UserConfigContext = createContext<UserConfig | undefined>(undefined);

export const useUserConfig: () => UserConfig = () => {
  const userConfig = React.useContext(UserConfigContext);
  if (userConfig == undefined) {
    throw new Error("UserConfig context not initialized");
  }

  return userConfig;
}

export function UserConfigProvider({ children }: { children: React.ReactNode }) {
  const exercises = new Map<ExerciseType, [number, Dispatch<SetStateAction<number>>]>();
  exercises.set(ExerciseType.BENCH_PRESS, useState<number>(0));
  exercises.set(ExerciseType.BACK_SQUAT, useState<number>(0));
  exercises.set(ExerciseType.WEIGHTED_PULLUPS, useState<number>(0));

  const lastExercises = new Map<ExerciseType, [number, Dispatch<SetStateAction<number>>]>();
  lastExercises.set(ExerciseType.BENCH_PRESS, useState<number>(0));
  lastExercises.set(ExerciseType.BACK_SQUAT, useState<number>(0));
  lastExercises.set(ExerciseType.WEIGHTED_PULLUPS, useState<number>(0));

  const userConfig: UserConfig = {
    exercises,
    lastExercises,
  };

  return (
    <UserConfigContext.Provider value={userConfig}>
      {children}
    </UserConfigContext.Provider>
  );
}
