import Calendar from "@/components/Calendar";
import { StrengthExercise } from "@/components/StrengthDayCard";

import { ExerciseType, UserConfig, getWeight, useUserConfig } from "@/contexts/UserConfigContext";

export default function ProgramView() {
  const userConfig: UserConfig = useUserConfig();

  const exercises: StrengthExercise[] =  [
      {name: "Bench press", sets: "3x5", weight: getWeight(userConfig, ExerciseType.BENCH_PRESS)},
      {name: "Back squat", sets: "3x5", weight: getWeight(userConfig, ExerciseType.BACK_SQUAT)},
      {name: "Weighted pullups", sets: "3x5", weight: getWeight(userConfig, ExerciseType.WEIGHTED_PULLUPS)}
  ];

  const weekIds = ["item-1", "item-2", "item-3", "item-4", "item-5", "item-6", "item-7"];

	return (
    <Calendar exercises={exercises} weekIds={weekIds} />
	);
}