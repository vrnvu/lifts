import Cluster from "@/components/Cluster";
import Component from "@/components/Component";

export interface PlanViewProps {}
export default function PlanView({}: PlanViewProps) {
	return (
	<div className="grid grid-cols-3 gap-4">
		<Cluster />
		<div className="grid grid-cols-subgrid grid-cols-2 gap-4">
			<Component exercise='Bench press' kgs='85' increase={24} />
			<Component exercise='Back squat' kgs='115' increase={8} />
		</div>
		<div className="grid grid-cols-subgrid grid-cols-2 gap-4">
			<Component exercise='Weighted pullups' kgs='15' increase={14} />
			<Component exercise='Total volume' kgs='321' increase={32} />
		</div>
	</div>
	);
}