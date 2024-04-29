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

  const [lastBenchPress, setLastBenchPress] = userConfig.lastExercises.get(ExerciseType.BENCH_PRESS)!;
  const [lastBackSquat, setLastBackSquat] = userConfig.lastExercises.get(ExerciseType.BACK_SQUAT)!;
  const [lastWeightedPullups, setLastWeightedPullups] = userConfig.lastExercises.get(ExerciseType.WEIGHTED_PULLUPS)!;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise cluster</CardTitle>
        <CardDescription>
          Introduce your 1RM for the following exercieses to set up the program
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[10px]">Exercise</TableHead>
              <TableHead className="w-[200px]">Current 1 RM</TableHead>
              <TableHead className="w-[200px]">Last 1 RM</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold">{toName(ExerciseType.BENCH_PRESS)}</TableCell>
              <TableCell>
                <Label htmlFor="ex-1" className="sr-only">
                  Current 1RM
                </Label>
                <Input id="ex-1" type="number" min={0} defaultValue={benchPress} onChange={(e) => setBenchPress(e.target.valueAsNumber)} />
              </TableCell>
              <TableCell>
                <Label htmlFor="last-ex-1" className="sr-only">
                  Last 1RM
                </Label>
                <Input id="last-ex-1" type="number" min={0} defaultValue={lastBenchPress} onChange={(e) => setLastBenchPress(e.target.valueAsNumber)} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-semibold">{toName(ExerciseType.BACK_SQUAT)}</TableCell>
              <TableCell>
                <Label htmlFor="ex-2" className="sr-only">
                  Current 1RM
                </Label>
                <Input id="ex-2" type="number" min={0} defaultValue={backSquat} onChange={(e) => setBackSquat(e.target.valueAsNumber)} />
              </TableCell>
              <TableCell>
                <Label htmlFor="last-ex-2" className="sr-only">
                  Last 1RM
                </Label>
                <Input id="last-ex-2" type="number" min={0} defaultValue={lastBackSquat} onChange={(e) => setLastBackSquat(e.target.valueAsNumber)} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-semibold">{toName(ExerciseType.WEIGHTED_PULLUPS)}</TableCell>
              <TableCell>
                <Label htmlFor="ex-3" className="sr-only">
                  Current 1RM
                </Label>
                <Input id="ex-3" type="number" min={0} defaultValue={weightedPullups} onChange={(e) => setWeightedPullups(e.target.valueAsNumber)} />
              </TableCell>
              <TableCell>
                <Label htmlFor="last-ex-3" className="sr-only">
                  Last 1RM
                </Label>
                <Input id="last-ex-2" type="number" min={0} defaultValue={lastWeightedPullups} onChange={(e) => setLastWeightedPullups(e.target.valueAsNumber)} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-semibold">{toName(ExerciseType.DL)}</TableCell>
              <TableCell>
                <Label htmlFor="ex-3" className="sr-only">
                  Current 1RM
                </Label>
                <Input id="ex-3" type="number" min={0} defaultValue={dl} onChange={(e) => setDL(e.target.valueAsNumber)} />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-semibold">{toName(ExerciseType.OHP)}</TableCell>
              <TableCell>
                <Label htmlFor="ex-3" className="sr-only">
                  Current 1RM
                </Label>
                <Input id="ex-3" type="number" min={0} defaultValue={ohp} onChange={(e) => setOHP(e.target.valueAsNumber)} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
