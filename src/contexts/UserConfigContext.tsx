import React, { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

export enum ExerciseType {
  BENCH_PRESS,
  BACK_SQUAT,
  WEIGHTED_PULLUPS,
  DL,
  OHP,
}

export function toName(exercise: ExerciseType) {
  switch (exercise) {
    case ExerciseType.BENCH_PRESS:
      return "Bench Press";
    case ExerciseType.BACK_SQUAT:
      return "Back Squat";
    case ExerciseType.WEIGHTED_PULLUPS:
      return "Weighted Pullups";
    case ExerciseType.DL:
      return "Deadlift";
    case ExerciseType.OHP:
      return "Overhead Press";
    default:
      throw new Error(`Non-existent exercise type in switch: ${exercise}`);
  }
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
  exercises.set(ExerciseType.BENCH_PRESS, useState<number>(103));
  exercises.set(ExerciseType.BACK_SQUAT, useState<number>(110));
  exercises.set(ExerciseType.WEIGHTED_PULLUPS, useState<number>(116));
  exercises.set(ExerciseType.DL, useState<number>(120));
  exercises.set(ExerciseType.OHP, useState<number>(70));

  const lastExercises = new Map<ExerciseType, [number, Dispatch<SetStateAction<number>>]>();
  lastExercises.set(ExerciseType.BENCH_PRESS, useState<number>(0));
  lastExercises.set(ExerciseType.BACK_SQUAT, useState<number>(0));
  lastExercises.set(ExerciseType.WEIGHTED_PULLUPS, useState<number>(0));
  lastExercises.set(ExerciseType.DL, useState<number>(0));
  lastExercises.set(ExerciseType.OHP, useState<number>(0));

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
