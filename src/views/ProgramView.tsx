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
import { ExerciseType, UserConfig, getWeight, useUserConfig } from "@/contexts/UserConfigContext";

export interface ProgramViewProps {}
export default function ProgramView({}: ProgramViewProps) {
  const userConfig: UserConfig = useUserConfig();

  const exercieses: StrengthExercise[] =  [
      {name: "Bench press", sets: "3x5", weight: getWeight(userConfig, ExerciseType.BENCH_PRESS)},
      {name: "Back squat", sets: "3x5", weight: getWeight(userConfig, ExerciseType.BACK_SQUAT)},
      {name: "Weighted pullups", sets: "3x5", weight: getWeight(userConfig, ExerciseType.WEIGHTED_PULLUPS)}
  ];

  const weekIds = ["item-1", "item-2", "item-3", "item-4", "item-5", "item-6", "item-7"];

	return (
      <Accordion type="multiple" defaultValue={weekIds}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Week 1</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-7 gap-4">
              <StrengthDayCard exercises={exercieses} effort={0.7} />
              <CardioDayCard minutes={30} />
              <StrengthDayCard exercises={exercieses} effort={0.7} />
              <CardioDayCard minutes={40} />
              <StrengthDayCard exercises={exercieses} effort={0.7} />
              <EnduranceDayCard minutes={60} />
              <RestDayCard />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Week 2</AccordionTrigger>
          <AccordionContent>
             <div className="grid grid-cols-7 gap-4">
              <StrengthDayCard exercises={exercieses} effort={0.8} />
              <CardioDayCard minutes={30} />
              <StrengthDayCard exercises={exercieses} effort={0.8} />
              <CardioDayCard minutes={40} />
              <StrengthDayCard exercises={exercieses} effort={0.8} />
              <EnduranceDayCard minutes={60} />
              <RestDayCard />
            </div>         
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Week 3</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-7 gap-4">
              <StrengthDayCard exercises={exercieses} effort={0.9} />
              <CardioDayCard minutes={30} />
              <StrengthDayCard exercises={exercieses} effort={0.9} />
              <CardioDayCard minutes={40} />
              <StrengthDayCard exercises={exercieses} effort={0.9} />
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
              <StrengthDayCard exercises={exercieses} effort={0.75} />
              <CardioDayCard minutes={30} />
              <StrengthDayCard exercises={exercieses} effort={0.75} />
              <CardioDayCard minutes={40} />
              <StrengthDayCard exercises={exercieses} effort={0.75} />
              <EnduranceDayCard minutes={60} />
              <RestDayCard />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Week 6</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-7 gap-4">
              <StrengthDayCard exercises={exercieses} effort={0.85} />
              <CardioDayCard minutes={30} />
              <StrengthDayCard exercises={exercieses} effort={0.85} />
              <CardioDayCard minutes={40} />
              <StrengthDayCard exercises={exercieses} effort={0.85} />
              <EnduranceDayCard minutes={60} />
              <RestDayCard />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Week 7</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-7 gap-4">
              <StrengthDayCard exercises={exercieses} effort={0.95} />
              <CardioDayCard minutes={30} />
              <StrengthDayCard exercises={exercieses} effort={0.95} />
              <CardioDayCard minutes={40} />
              <StrengthDayCard exercises={exercieses} effort={0.95} />
              <EnduranceDayCard minutes={60} />
              <RestDayCard />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
	);
}