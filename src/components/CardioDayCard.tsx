import { Activity } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardioDayCardProps {
  minutes: number
}

export default function CardioDayCard({ minutes }: CardioDayCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
        <CardTitle className="text-sm font-medium">CARDIO</CardTitle>
        <Activity className="h-4 w-4 sm:h-2 sm:w-2 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl sm:text-md font-bold">Running</div>
        <p className="text-xs sm: text-sm text-muted-foreground">
          {minutes} min @ Zone 2
        </p>
      </CardContent>
    </Card>
  );
}