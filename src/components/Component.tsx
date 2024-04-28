import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export interface ComponentProps {
	exercise: string;
	kgs: string;
	increase: number;
}

export default function Component({exercise, kgs, increase}: ComponentProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{exercise}</CardDescription>
        <CardTitle className="text-4xl">{kgs} kg</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">+{increase}% increase</div>
      </CardContent>
      <CardFooter>
        <Progress value={increase} aria-label="{increase}% increase" />
      </CardFooter>
    </Card>
  )
}
