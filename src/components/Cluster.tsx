import {
  Card,
  CardContent,
  CardDescription,
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

export default function Cluster() {
  const userConfig: UserConfig = useUserConfig();


  const [benchPress, setBenchPress] = userConfig.exercises.get(ExerciseType.BENCH_PRESS)!;
  const [backSquat, setBackSquat] = userConfig.exercises.get(ExerciseType.BACK_SQUAT)!;
  const [weightedPullups, setWeightedPullups] = userConfig.exercises.get(ExerciseType.WEIGHTED_PULLUPS)!;
  const [dl, setDL] = userConfig.exercises.get(ExerciseType.DL)!;
  const [ohp, setOHP] = userConfig.exercises.get(ExerciseType.OHP)!;

  const exercises = [
    {
      type: ExerciseType.BENCH_PRESS,
      current: benchPress,
      setCurrent: setBenchPress,
    },
    {
      type: ExerciseType.BACK_SQUAT,
      current: backSquat,
      setCurrent: setBackSquat,
    },
    {
      type: ExerciseType.WEIGHTED_PULLUPS,
      current: weightedPullups,
      setCurrent: setWeightedPullups,
    },
    {
      type: ExerciseType.DL,
      current: dl,
      setCurrent: setDL,
    },
    {
      type: ExerciseType.OHP,
      current: ohp,
      setCurrent: setOHP,
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
        </div>
      </CardContent >
    </Card >
  )
}
