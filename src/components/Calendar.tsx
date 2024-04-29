import CardioDayCard from "./CardioDayCard";
import EnduranceDayCard from "./EnduranceDayCard";
import RestDayCard from "./RestDayCard";
import StrengthDayCard, { StrengthExercise } from "./StrengthDayCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export interface CalendarProps {
	exercises: StrengthExercise[];
	weekIds: string[];
 }

export default function Calendar({exercises, weekIds}: CalendarProps) {
  return (
	<Accordion type="multiple" defaultValue={weekIds}>
		<AccordionItem value="item-1">
		<AccordionTrigger>Week 1</AccordionTrigger>
		<AccordionContent>
		<div className="grid grid-cols-7 gap-4">
		<StrengthDayCard exercises={exercises} effort={0.7} />
		<CardioDayCard minutes={30} />
		<StrengthDayCard exercises={exercises} effort={0.7} />
		<CardioDayCard minutes={40} />
		<StrengthDayCard exercises={exercises} effort={0.7} />
		<EnduranceDayCard minutes={60} />
		<RestDayCard />
		</div>
		</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
		<AccordionTrigger>Week 2</AccordionTrigger>
		<AccordionContent>
		<div className="grid grid-cols-7 gap-4">
		<StrengthDayCard exercises={exercises} effort={0.8} />
		<CardioDayCard minutes={30} />
		<StrengthDayCard exercises={exercises} effort={0.8} />
		<CardioDayCard minutes={40} />
		<StrengthDayCard exercises={exercises} effort={0.8} />
		<EnduranceDayCard minutes={60} />
		<RestDayCard />
		</div>         
		</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3">
		<AccordionTrigger>Week 3</AccordionTrigger>
		<AccordionContent>
		<div className="grid grid-cols-7 gap-4">
		<StrengthDayCard exercises={exercises} effort={0.9} />
		<CardioDayCard minutes={30} />
		<StrengthDayCard exercises={exercises} effort={0.9} />
		<CardioDayCard minutes={40} />
		<StrengthDayCard exercises={exercises} effort={0.9} />
		<EnduranceDayCard minutes={60} />
		<RestDayCard />
		</div>
		</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-4">
		<AccordionTrigger>Week 4</AccordionTrigger>
		<AccordionContent>
		<div className="grid grid-cols-7 gap-4">
		<RestDayCard />
		<CardioDayCard minutes={30} />
		<RestDayCard />
		<CardioDayCard minutes={30} />
		<RestDayCard />
		<CardioDayCard minutes={30} />
		<RestDayCard />
		</div>
		</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-5">
		<AccordionTrigger>Week 5</AccordionTrigger>
		<AccordionContent>
		<div className="grid grid-cols-7 gap-4">
		<StrengthDayCard exercises={exercises} effort={0.75} />
		<CardioDayCard minutes={30} />
		<StrengthDayCard exercises={exercises} effort={0.75} />
		<CardioDayCard minutes={40} />
		<StrengthDayCard exercises={exercises} effort={0.75} />
		<EnduranceDayCard minutes={60} />
		<RestDayCard />
		</div>
		</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-6">
		<AccordionTrigger>Week 6</AccordionTrigger>
		<AccordionContent>
		<div className="grid grid-cols-7 gap-4">
		<StrengthDayCard exercises={exercises} effort={0.85} />
		<CardioDayCard minutes={30} />
		<StrengthDayCard exercises={exercises} effort={0.85} />
		<CardioDayCard minutes={40} />
		<StrengthDayCard exercises={exercises} effort={0.85} />
		<EnduranceDayCard minutes={60} />
		<RestDayCard />
		</div>
		</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-7">
		<AccordionTrigger>Week 7</AccordionTrigger>
		<AccordionContent>
		<div className="grid grid-cols-7 gap-4">
		<StrengthDayCard exercises={exercises} effort={0.95} />
		<CardioDayCard minutes={30} />
		<StrengthDayCard exercises={exercises} effort={0.95} />
		<CardioDayCard minutes={40} />
		<StrengthDayCard exercises={exercises} effort={0.95} />
		<EnduranceDayCard minutes={60} />
		<RestDayCard />
		</div>
		</AccordionContent>
		</AccordionItem>
	</Accordion>
	)
}
