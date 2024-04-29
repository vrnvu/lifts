import CardioDayCard from "./CardioDayCard";
import EnduranceDayCard from "./EnduranceDayCard";
import RestDayCard from "./RestDayCard";
import StrengthDayCard, { StrengthExercise } from "./StrengthDayCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export interface CalendarProps {
	exercises: StrengthExercise[];
	weekIds: string[];
}

export default function Calendar({ exercises, weekIds }: CalendarProps) {
	return (
		<Accordion type="multiple" defaultValue={weekIds}>
			<AccordionItem value="item-1">
				<AccordionTrigger>Operator 70%</AccordionTrigger>
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
				<AccordionTrigger>Operator 80%</AccordionTrigger>
				<AccordionContent>
					<div className="grid grid-cols-7 gap-4">
						<StrengthDayCard exercises={exercises} effort={0.8} />
						<CardioDayCard minutes={40} />
						<StrengthDayCard exercises={exercises} effort={0.8} />
						<CardioDayCard minutes={50} />
						<StrengthDayCard exercises={exercises} effort={0.8} />
						<EnduranceDayCard minutes={70} />
						<RestDayCard />
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Operator 90%</AccordionTrigger>
				<AccordionContent>
					<div className="grid grid-cols-7 gap-4">
						<StrengthDayCard exercises={exercises} effort={0.9} />
						<CardioDayCard minutes={50} />
						<StrengthDayCard exercises={exercises} effort={0.9} />
						<CardioDayCard minutes={60} />
						<StrengthDayCard exercises={exercises} effort={0.9} />
						<EnduranceDayCard minutes={80} />
						<RestDayCard />
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-5">
				<AccordionTrigger>Operator 75%</AccordionTrigger>
				<AccordionContent>
					<div className="grid grid-cols-7 gap-4">
						<StrengthDayCard exercises={exercises} effort={0.75} />
						<CardioDayCard minutes={60} />
						<StrengthDayCard exercises={exercises} effort={0.75} />
						<CardioDayCard minutes={70} />
						<StrengthDayCard exercises={exercises} effort={0.75} />
						<EnduranceDayCard minutes={90} />
						<RestDayCard />
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-6">
				<AccordionTrigger>Operator 85%</AccordionTrigger>
				<AccordionContent>
					<div className="grid grid-cols-7 gap-4">
						<StrengthDayCard exercises={exercises} effort={0.85} />
						<CardioDayCard minutes={70} />
						<StrengthDayCard exercises={exercises} effort={0.85} />
						<CardioDayCard minutes={80} />
						<StrengthDayCard exercises={exercises} effort={0.85} />
						<EnduranceDayCard minutes={100} />
						<RestDayCard />
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-7">
				<AccordionTrigger>Operator 95%</AccordionTrigger>
				<AccordionContent>
					<div className="grid grid-cols-7 gap-4">
						<StrengthDayCard exercises={exercises} effort={0.95} />
						<CardioDayCard minutes={50} />
						<StrengthDayCard exercises={exercises} effort={0.95} />
						<CardioDayCard minutes={50} />
						<StrengthDayCard exercises={exercises} effort={0.95} />
						<EnduranceDayCard minutes={80} />
						<RestDayCard />
					</div>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-4">
				<AccordionTrigger>Deload and re-test RM</AccordionTrigger>
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
		</Accordion>
	)
}
