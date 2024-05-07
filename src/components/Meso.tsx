import { Soup } from "lucide-react"

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

export default function Meso() {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
				<CardTitle className="text-sm font-medium">REST</CardTitle>
				<Soup className="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">Rest day</div>
				<p className="text-xs text-muted-foreground"></p>
			</CardContent>
		</Card>
	);
}