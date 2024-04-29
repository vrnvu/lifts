import Cluster from "@/components/Cluster";
import Component from "@/components/Component";
import { ExerciseType, UserConfig, getWeight, getWeightLast, useUserConfig } from "@/contexts/UserConfigContext";

export default function PlanView() {
	const userConfig: UserConfig = useUserConfig();

	const benchPress = getWeight(userConfig, ExerciseType.BENCH_PRESS);
	const backSquat = getWeight(userConfig, ExerciseType.BACK_SQUAT);
	const weightedPullups = getWeight(userConfig, ExerciseType.WEIGHTED_PULLUPS);
	const total = benchPress + backSquat + weightedPullups;

	const lastBenchPress = getWeightLast(userConfig, ExerciseType.BENCH_PRESS);
	const lastBackSquat = getWeightLast(userConfig, ExerciseType.BACK_SQUAT);
	const lastWeightedPullups = getWeightLast(userConfig, ExerciseType.WEIGHTED_PULLUPS);
	const lastTotal = lastBenchPress + lastBackSquat + lastWeightedPullups;

	const benchIncrease = Math.round(((benchPress - lastBenchPress) / lastBenchPress) * 100);
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