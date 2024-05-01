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

export default function Cluster() {
  const userConfig: UserConfig = useUserConfig();


  const [benchPress, setBenchPress] = userConfig.exercises.get(ExerciseType.BENCH_PRESS)!;
  const [backSquat, setBackSquat] = userConfig.exercises.get(ExerciseType.BACK_SQUAT)!;
  const [weightedPullups, setWeightedPullups] = userConfig.exercises.get(ExerciseType.WEIGHTED_PULLUPS)!;
  const [dl, setDL] = userConfig.exercises.get(ExerciseType.DL)!;
  const [ohp, setOHP] = userConfig.exercises.get(ExerciseType.OHP)!;

  const [lastBenchPress, setLastBenchPress] = userConfig.lastExercises.get(ExerciseType.BENCH_PRESS)!;
  const [lastBackSquat, setLastBackSquat] = userConfig.lastExercises.get(ExerciseType.BACK_SQUAT)!;
  const [lastWeightedPullups, setLastWeightedPullups] = userConfig.lastExercises.get(ExerciseType.WEIGHTED_PULLUPS)!;
  const [lastDL, setLastDL] = userConfig.lastExercises.get(ExerciseType.DL)!;
  const [lastOHP, setLastOHP] = userConfig.lastExercises.get(ExerciseType.OHP)!;

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

  return (
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
                <TableHead className="w-1/4 px-1">Last 1 RM</TableHead>
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
                  {exercise.last != undefined && (
                    <TableCell className="px-1">
                      <Label htmlFor={`last-ex-${index}`} className="sr-only">
                        Last 1RM
                      </Label>
                      <Input
                        className="text-lg p-2 w-full"
                        id={`last-ex-${index}`}
                        type="number"
                        min={0}
                        defaultValue={exercise.last}
                        onChange={(e) => exercise.setLast(e.target.valueAsNumber)} />
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <CardFooter>
            <Button className="w-full">Todo Save</Button>
          </CardFooter>
        </div>
      </CardContent >
    </Card >
  )
}
