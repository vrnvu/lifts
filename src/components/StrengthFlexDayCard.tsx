import { Zap } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export enum ProgressionType {
  KG = "kg",
  REPS = "reps",
  RIR = "RIR"
}

export interface StrengthFlexExercise {
  name: string;
  sets: [string, string][];
  progressionType: ProgressionType;
}

export interface StrengthFlexDayCardProps {
  template: string,
  exercises: StrengthFlexExercise[];
}

export default function StrengthFlexDayCard({ template, exercises }: StrengthFlexDayCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
        <CardTitle className="text-sm font-medium">STRENGTH</CardTitle>
        <Zap className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{template}</div>
        <div className="space-y-4 text-xs text-muted-foreground">
          {exercises.map((exercise, index) => (
            <div key={index}>
              <div>{exercise.name}</div>
              {exercise.sets.map(set =>
              (
                <div>
                  {set[0]} @ {set[1]} {exercise.progressionType}
                </div>
              )
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}