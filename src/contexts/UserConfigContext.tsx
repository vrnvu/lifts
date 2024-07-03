import React, { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

export enum ExerciseType {
  BENCH_PRESS = 'BENCH_PRESS',
  BACK_SQUAT = 'BACK_SQUAT',
  WEIGHTED_PULLUPS = 'WEIGHTED_PULLUPS',
  DL = 'DL',
  OHP = 'OHP',
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

type ExerciseState = [number, Dispatch<SetStateAction<number>>];
type Use90tmState = [boolean, Dispatch<SetStateAction<boolean>>];

interface UserCurrentExercisesState {
  BENCH_PRESS: ExerciseState;
  BACK_SQUAT: ExerciseState;
  WEIGHTED_PULLUPS: ExerciseState;
  DL: ExerciseState;
  OHP: ExerciseState;
}

type UserLastExercisesState = {
  [key in ExerciseType]: ExerciseState;
}

export interface UserConfig {
  exercises: UserCurrentExercisesState;
  lastExercises: UserLastExercisesState;
  use90tm: Use90tmState;
}

export function getWeight(userConfig: UserConfig, exercise: ExerciseType): number {
  return userConfig.exercises[exercise][0];
}

export function getWeightLast(userConfig: UserConfig, exercise: ExerciseType): number {
  return userConfig.lastExercises[exercise][0];
}


export function getWeightTm(userConfig: UserConfig, exercise: ExerciseType): number {
  const tm = userConfig.use90tm[0] ? 0.9 : 1;
  return getWeight(userConfig, exercise) * tm;
}

const UserConfigContext = createContext<UserConfig | undefined>(undefined);

export const useUserConfig: () => UserConfig = () => {
  const userConfig = React.useContext(UserConfigContext);
  if (userConfig == undefined) {
    throw new Error("UserConfig context not initialized");
  }

  return userConfig;
}

const initializeExercises = (): UserCurrentExercisesState => ({
  [ExerciseType.BENCH_PRESS]: useState<number>(103),
  [ExerciseType.BACK_SQUAT]: useState<number>(110),
  [ExerciseType.WEIGHTED_PULLUPS]: useState<number>(116),
  [ExerciseType.DL]: useState<number>(150),
  [ExerciseType.OHP]: useState<number>(70),
});

const initializeLastExercises = (): UserCurrentExercisesState => ({
  [ExerciseType.BENCH_PRESS]: useState<number>(103),
  [ExerciseType.BACK_SQUAT]: useState<number>(110),
  [ExerciseType.WEIGHTED_PULLUPS]: useState<number>(116),
  [ExerciseType.DL]: useState<number>(150),
  [ExerciseType.OHP]: useState<number>(70),
});

const initializeUse90tm = (): Use90tmState => useState<boolean>(false);

export function UserConfigProvider({ children }: { children: React.ReactNode }) {
  const exercises = initializeExercises();
  const lastExercises = initializeLastExercises();
  const use90tm = initializeUse90tm();

  const userConfig: UserConfig = {
    exercises,
    use90tm,
    lastExercises,
  };

  return (
    <UserConfigContext.Provider value={userConfig}>
      {children}
    </UserConfigContext.Provider>
  );
}
