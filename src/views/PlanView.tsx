import Cluster from "@/components/Cluster";
import Component from "@/components/Component";
import { UserConfig, UserConfigContext } from "@/context/UserConfigContext";
import { useContext } from "react";

export interface PlanViewProps {}
export default function PlanView({}: PlanViewProps) {
	const userConfig: UserConfig | undefined = useContext(UserConfigContext);
	if (userConfig == undefined) {
		return;
	}
	const benchPress = userConfig.benchPress;
	const backSquat = userConfig.backSquat;
	const weightedPullups = userConfig.weightedPullups;
	const total = benchPress + backSquat + weightedPullups;

	return (
	<div className="grid grid-cols-3 gap-4">
		<Cluster />
		<div className="grid grid-cols-subgrid grid-cols-2 gap-4">
			<Component exercise='Bench press' kgs={benchPress.toString()} increase={0} />
			<Component exercise='Back squat' kgs={backSquat.toString()} increase={0} />
		</div>
		<div className="grid grid-cols-subgrid grid-cols-2 gap-4">
			<Component exercise='Weighted pullups' kgs={weightedPullups.toString()} increase={0} />
			<Component exercise='Total volume' kgs={total.toString()} increase={0} />
		</div>
	</div>
	);
}