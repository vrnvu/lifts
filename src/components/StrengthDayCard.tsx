import { Zap } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface StrengthExercise {
  name: string;
  sets: string;
  weight: string;
}

export interface StrengthDayCardProps {
  exercises: StrengthExercise[];
}

export default function StrengthDayCard({exercises}: StrengthDayCardProps) {
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
                {exercise.sets} @ {exercise.weight}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}