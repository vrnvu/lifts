import CardioDayCard from "@/components/CardioDayCard";
import EnduranceDayCard from "@/components/EnduranceDayCard";
import RestDayCard from "@/components/RestDayCard";
import StrengthDayCard, { StrengthExercise } from "@/components/StrengthDayCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { ExerciseType, UserConfig, getWeight, useUserConfig } from "@/contexts/UserConfigContext";

export default function ProgramOperatorView() {
  const userConfig: UserConfig = useUserConfig();

  const exercises: StrengthExercise[] = [
    { name: "Bench press", sets: "3x5", weight: getWeight(userConfig, ExerciseType.BENCH_PRESS) },
    { name: "Back squat", sets: "3x5", weight: getWeight(userConfig, ExerciseType.BACK_SQUAT) },
    { name: "Weighted pullups", sets: "3x5", weight: getWeight(userConfig, ExerciseType.WEIGHTED_PULLUPS) }
  ];

  const weekIds = ["item-1", "item-2", "item-3", "item-4", "item-5", "item-6", "item-7"];

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
  );
}