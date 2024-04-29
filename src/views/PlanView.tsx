import Cluster from "@/components/Cluster";
import Component from "@/components/Component";
import { ExerciseType, UserConfig, useUserConfig } from "@/contexts/UserConfigContext";

export interface PlanViewProps {}
export default function PlanView({}: PlanViewProps) {
	const userConfig: UserConfig = useUserConfig();

	const benchPress = userConfig.exercises.get(ExerciseType.BENCH_PRESS)![0];
	const backSquat = userConfig.exercises.get(ExerciseType.BACK_SQUAT)![0];
	const weightedPullups = userConfig.exercises.get!(ExerciseType.WEIGHTED_PULLUPS)![0];
	const total = benchPress + backSquat + weightedPullups;

	const lastBenchPress = userConfig.lastExercises.get(ExerciseType.BENCH_PRESS)![0]; 
	const lastBackSquat = userConfig.lastExercises.get(ExerciseType.BACK_SQUAT)![0]; 
	const lastWeightedPullups = userConfig.lastExercises.get!(ExerciseType.WEIGHTED_PULLUPS)![0];

	const lastTotal = lastBenchPress + lastBackSquat + lastWeightedPullups;

	const benchIncrease = Math.round(((benchPress - lastBenchPress)/ lastBenchPress) * 100); 
	const backSquatIncrease = Math.round(((backSquat - lastBackSquat) / lastBackSquat) * 100); 
	const weightedPullupsIncrease = Math.round(((weightedPullups - lastWeightedPullups) / lastWeightedPullups) * 100);
	const totalIncrease = Math.round(((total - lastTotal) / lastTotal) * 100);

	return (
	<div className="grid grid-cols-3 gap-4">
		<Cluster />
		<div className="grid grid-cols-subgrid grid-cols-2 gap-4">
			<Component exercise='Bench press' kgs={benchPress.toString()} increase={benchIncrease} />
			<Component exercise='Back squat' kgs={backSquat.toString()} increase={backSquatIncrease} />
		</div>
		<div className="grid grid-cols-subgrid grid-cols-2 gap-4">
			<Component exercise='Weighted pullups' kgs={weightedPullups.toString()} increase={weightedPullupsIncrease} />
			<Component exercise='Total volume' kgs={total.toString()} increase={totalIncrease} />
		</div>
	</div>
	);
}