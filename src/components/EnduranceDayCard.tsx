import { Heart } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface EnduranceDayCardProps {
	minutes: number
}

export default function EnduranceDayCard({minutes}: EnduranceDayCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
        <CardTitle className="text-sm font-medium">ENDURANCE</CardTitle>
        <Heart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">Running</div>
        <p className="text-xs text-muted-foreground">
		{minutes} min @ Zone 2
	</p>
      </CardContent>
    </Card>
  );
}