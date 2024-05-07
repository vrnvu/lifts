import Meso from "@/components/Meso";
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";
import { DateRange } from "react-day-picker";


export default function MesoView() {
	const [range, setRange] = useState<DateRange | undefined>(undefined);
	return (
		<><div>
			<Meso />
		</div><div>
				<Calendar
					disableNavigation
					fixedWeeks
					showOutsideDays={false}
					weekStartsOn={1}
					defaultMonth={new Date(2024, 0, 1)}
					mode="range"
					numberOfMonths={4}
					selected={range}
					onSelect={setRange}
					className="rounded-md border"
				/>

				<Calendar
					disableNavigation
					fixedWeeks
					showOutsideDays={false}
					weekStartsOn={1}
					defaultMonth={new Date(2024, 4, 1)}
					mode="range"
					numberOfMonths={4}
					selected={range}
					onSelect={setRange}
					className="rounded-md border"
				/>

				<Calendar
					disableNavigation
					fixedWeeks
					showOutsideDays={false}
					weekStartsOn={1}
					defaultMonth={new Date(2024, 8, 1)}
					mode="range"
					numberOfMonths={4}
					selected={range}
					onSelect={setRange}
					className="rounded-md border"
				/>
			</div></>
	);
}