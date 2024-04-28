import CardioDayCard from "@/components/CardioDayCard";
import EnduranceDayCard from "@/components/EnduranceDayCard";
import RestDayCard from "@/components/RestDayCard";
import StrengthDayCard, { StrengthExercise } from "@/components/StrengthDayCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const exercieses: StrengthExercise[] =  [
    {name: "Bench press", sets: "3x5", weight: "80kg"},
    {name: "Back squat", sets: "3x5", weight: "95kg"},
    {name: "Weighted pullups", sets: "3x5", weight: "15kg"}
];

export interface ProgramnViewProps {}
export default function ProgramView({}: ProgramnViewProps) {
	return (
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Week 1</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-7 gap-4">
              <StrengthDayCard exercises={exercieses} />
              <CardioDayCard minutes={30} />
              <StrengthDayCard exercises={exercieses} />
              <CardioDayCard minutes={40} />
              <StrengthDayCard exercises={exercieses} />
              <EnduranceDayCard minutes={60} />
              <RestDayCard />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Week 2</AccordionTrigger>
          <AccordionContent>
             <div className="grid grid-cols-7 gap-4">
              <StrengthDayCard exercises={exercieses} />
              <CardioDayCard minutes={30} />
              <StrengthDayCard exercises={exercieses} />
              <CardioDayCard minutes={40} />
              <StrengthDayCard exercises={exercieses} />
              <EnduranceDayCard minutes={60} />
              <RestDayCard />
            </div>         
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Week 3</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-7 gap-4">
              <StrengthDayCard exercises={exercieses} />
              <CardioDayCard minutes={30} />
              <StrengthDayCard exercises={exercieses} />
              <CardioDayCard minutes={40} />
              <StrengthDayCard exercises={exercieses} />
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
              <StrengthDayCard exercises={exercieses} />
              <CardioDayCard minutes={30} />
              <StrengthDayCard exercises={exercieses} />
              <CardioDayCard minutes={40} />
              <StrengthDayCard exercises={exercieses} />
              <EnduranceDayCard minutes={60} />
              <RestDayCard />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Week 6</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-7 gap-4">
              <StrengthDayCard exercises={exercieses} />
              <CardioDayCard minutes={30} />
              <StrengthDayCard exercises={exercieses} />
              <CardioDayCard minutes={40} />
              <StrengthDayCard exercises={exercieses} />
              <EnduranceDayCard minutes={60} />
              <RestDayCard />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Week 7</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-7 gap-4">
              <StrengthDayCard exercises={exercieses} />
              <CardioDayCard minutes={30} />
              <StrengthDayCard exercises={exercieses} />
              <CardioDayCard minutes={40} />
              <StrengthDayCard exercises={exercieses} />
              <EnduranceDayCard minutes={60} />
              <RestDayCard />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
	);
}