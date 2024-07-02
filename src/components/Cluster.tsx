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
import { Switch } from "./ui/switch";

export default function Cluster() {
  const userConfig: UserConfig = useUserConfig();
  const [use90tm, setUse90tm] = userConfig.use90tm;

  const [benchPress, setBenchPress] = userConfig.exercises[ExerciseType.BENCH_PRESS];
  const [backSquat, setBackSquat] = userConfig.exercises[ExerciseType.BACK_SQUAT];
  const [weightedPullups, setWeightedPullups] = userConfig.exercises[ExerciseType.WEIGHTED_PULLUPS];
  const [dl, setDL] = userConfig.exercises[ExerciseType.DL];
  const [ohp, setOHP] = userConfig.exercises[ExerciseType.OHP];

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
          <CardFooter className="justify-center border-t p-4">
            <div className="border p-4 rounded-md shadow-sm">
              <div className="flex items-center justify-between">
                <div className="mr-4">
                  <h3 className="text-lg font-medium">90% TM</h3>
                  <p className="text-sm text-gray-600">
                    Enable this to use 90% of your 1RM as a training max
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <Switch id="switch-use90tm" checked={use90tm} onCheckedChange={v => setUse90tm(v)} />
                </div>
              </div>
            </div>
          </CardFooter>

        </div>
      </CardContent >
    </Card >
  )
}
