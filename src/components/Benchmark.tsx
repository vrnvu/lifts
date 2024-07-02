import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { ExerciseType, UserConfig, toName, useUserConfig } from "@/contexts/UserConfigContext";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { PlusCircle } from "lucide-react";

export default function Benchmark() {
	const userConfig: UserConfig = useUserConfig();


	const [benchPress, setBenchPress] = userConfig.exercises[ExerciseType.BENCH_PRESS];
	const [backSquat, setBackSquat] = userConfig.exercises[ExerciseType.BACK_SQUAT];
	const [weightedPullups, setWeightedPullups] = userConfig.exercises[ExerciseType.WEIGHTED_PULLUPS];
	const [dl, setDL] = userConfig.exercises[ExerciseType.DL];
	const [ohp, setOHP] = userConfig.exercises[ExerciseType.OHP];

	const [lastBenchPress, setLastBenchPress] = userConfig.lastExercises[ExerciseType.BENCH_PRESS];
	const [lastBackSquat, setLastBackSquat] = userConfig.lastExercises[ExerciseType.BACK_SQUAT];
	const [lastWeightedPullups, setLastWeightedPullups] = userConfig.lastExercises[ExerciseType.WEIGHTED_PULLUPS];
	const [lastDL, setLastDL] = userConfig.lastExercises[ExerciseType.DL];
	const [lastOHP, setLastOHP] = userConfig.lastExercises[ExerciseType.OHP];

	const exercises = [
		{
			type: ExerciseType.BENCH_PRESS,
			current: benchPress,
			setCurrent: setBenchPress,
			last: lastBenchPress,
			setLast: setLastBenchPress
		},
		{
			type: ExerciseType.BACK_SQUAT,
			current: backSquat,
			setCurrent: setBackSquat,
			last: lastBackSquat,
			setLast: setLastBackSquat
		},
		{
			type: ExerciseType.WEIGHTED_PULLUPS,
			current: weightedPullups,
			setCurrent: setWeightedPullups,
			last: lastWeightedPullups,
			setLast: setLastWeightedPullups
		},
		{
			type: ExerciseType.DL,
			current: dl,
			setCurrent: setDL,
			last: lastDL,
			setLast: setLastDL
		},
		{
			type: ExerciseType.OHP,
			current: ohp,
			setCurrent: setOHP,
			last: lastOHP,
			setLast: setLastOHP
		},
	];

	return (<>
		<Card>
			<CardHeader>
				<CardTitle>Exercise cluster</CardTitle>
				<CardDescription>
					Introduce your 1RM for the following exercieses to set up the program
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="overflow-x-auto">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-1/4 px-1">Exercise</TableHead>
								<TableHead className="w-1/4 px-1">Current 1 RM</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{exercises.map((exercise, index) => (
								<TableRow key={exercise.type}>
									<TableCell className="font-semibold px-1">{toName(exercise.type)}</TableCell>
									<TableCell className="px-1">
										<Label htmlFor={`ex-${index}`} className="sr-only">
											Current 1RM
										</Label>
										<Input
											className="text-lg p-2 w-full"
											id={`ex-${index}`}
											type="number"
											min={0}
											defaultValue={exercise.current}
											onChange={(e) => exercise.setCurrent(e.target.valueAsNumber)} />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>

					<CardFooter className="justify-center border-t p-4">
						<Button size="sm" variant="ghost" className="gap-1">
							<PlusCircle className="h-3.5 w-3.5" />
							Add Variant
						</Button>
					</CardFooter>
				</div>
			</CardContent>
		</Card>
		<Card className="xl:col-span-2">
			<CardHeader className="flex flex-row items-center">
				<div>
					<CardTitle>Transactions</CardTitle>
					<CardDescription>
						Recent transactions from your store.
					</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Customer</TableHead>
							<TableHead className="hidden xl:table-column">Type</TableHead>
							<TableHead className="hidden xl:table-column">Status</TableHead>
							<TableHead className="hidden xl:table-column">Date</TableHead>
							<TableHead className="text-right">Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>
								<div className="font-medium">Liam Johnson</div>
								<div className="hidden text-sm text-muted-foreground md:inline">
									liam@example.com
								</div>
							</TableCell>
							<TableCell className="hidden xl:table-column">Sale</TableCell>
							<TableCell className="hidden xl:table-column">
								<Badge className="text-xs" variant="outline">
									Approved
								</Badge>
							</TableCell>
							<TableCell className="hidden md:table-cell lg:hidden xl:table-column">
								2023-06-23
							</TableCell>
							<TableCell className="text-right">$250.00</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
		</Card>

	</>)
}