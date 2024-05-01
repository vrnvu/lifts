import Cluster from "@/components/Cluster";
import Component from "@/components/Component";
import { ExerciseType, UserConfig, getWeight, getWeightLast, toName, useUserConfig } from "@/contexts/UserConfigContext";

export default function PlanView() {
	const userConfig: UserConfig = useUserConfig();

	const getIncrease = (ex: ExerciseType) => Math.round(((getWeight(userConfig, ex)) - getWeightLast(userConfig, ex)) / getWeightLast(userConfig, ex) * 100);

	const exercises = [
		{ name: toName(ExerciseType.BENCH_PRESS), kgs: getWeight(userConfig, ExerciseType.BENCH_PRESS).toString(), increase: getIncrease(ExerciseType.BENCH_PRESS) },
		{ name: toName(ExerciseType.BACK_SQUAT), kgs: getWeight(userConfig, ExerciseType.BACK_SQUAT).toString(), increase: getIncrease(ExerciseType.BACK_SQUAT) },
		{ name: toName(ExerciseType.WEIGHTED_PULLUPS), kgs: getWeight(userConfig, ExerciseType.WEIGHTED_PULLUPS).toString(), increase: getIncrease(ExerciseType.WEIGHTED_PULLUPS) },
		{ name: toName(ExerciseType.DL), kgs: getWeight(userConfig, ExerciseType.DL).toString(), increase: getIncrease(ExerciseType.DL) },
		{ name: toName(ExerciseType.OHP), kgs: getWeight(userConfig, ExerciseType.OHP).toString(), increase: getIncrease(ExerciseType.OHP) },
		// TODO total
		// { name: 'Total volume', kgs: total.toString(), increase: totalIncrease }
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<Cluster />
			<div className="grid grid-cols-1 md:grid-cols-3 md:auto-cols-max md:auto-rows-max gap-4">
				{exercises.map((exercise) => (
					<Component
						key={exercise.name}
						exercise={exercise.name}
						kgs={exercise.kgs}
						increase={exercise.increase}
					/>
				))}
			</div>
		</div>
	);
}