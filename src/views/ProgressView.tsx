import Benchmark from "@/components/Benchmark";
import Cluster from "@/components/Cluster";
import Component from "@/components/Component";
import { ExerciseType, UserConfig, getWeight, getWeightLast, toName, useUserConfig } from "@/contexts/UserConfigContext";

export default function ProgressView() {
	const userConfig: UserConfig = useUserConfig();

	const getIncrease = (ex: ExerciseType) => Math.round(((getWeight(userConfig, ex)) - getWeightLast(userConfig, ex)) / getWeightLast(userConfig, ex) * 100);

	const exercises: { name: string, kgs: string, increase: number }[] = [ExerciseType.BENCH_PRESS, ExerciseType.BACK_SQUAT, ExerciseType.WEIGHTED_PULLUPS, ExerciseType.DL, ExerciseType.OHP]
		.map(ex => {
			return { name: toName(ex), kgs: getWeight(userConfig, ex).toString(), increase: getIncrease(ex) }
		});

	return (<>
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
		<div className="grid grid-cols-1">
			{/* TODO */}
			{/* <Benchmark /> */}
		</div>
	</>);
}