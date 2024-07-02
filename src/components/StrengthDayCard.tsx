import { Zap } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface StrengthExercise {
  name: string;
  weight: number;
}

export interface StrengthDayCardProps {
  exercises: StrengthExercise[];
  sets: string;
  effort: number;
}

export default function StrengthDayCard({ exercises, sets, effort }: StrengthDayCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
        <CardTitle className="text-sm font-medium">STRENGTH</CardTitle>
        <Zap className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">Operator</div>
        <div className="space-y-4 text-xs text-muted-foreground">
          {exercises.map((exercise, index) => (
            <div key={index}>
              <div>{exercise.name}</div>
              <div>
                {sets} @ {(exercise.weight * effort).toFixed(1)} kg
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}