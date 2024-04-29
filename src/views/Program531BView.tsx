import RestDayCard from "@/components/RestDayCard";
import StrengthFlexDayCard, { StrengthFlexExercise } from "@/components/StrengthFlexDayCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExerciseType, UserConfig, getWeight, toName, useUserConfig } from "@/contexts/UserConfigContext";

export default function Program531BView() {
  const userConfig: UserConfig = useUserConfig();
  const benchPress = getWeight(userConfig, ExerciseType.BENCH_PRESS);
  const backSquat = getWeight(userConfig, ExerciseType.BACK_SQUAT);

  const week1: StrengthFlexExercise[][] = [
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["5 reps", (backSquat * 0.65).toFixed(1)],
          ["5 reps", (backSquat * 0.75).toFixed(1)],
          ["+5 reps", (backSquat * 0.85).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["5 reps", (benchPress * 0.65).toFixed(1)],
          ["5 reps", (benchPress * 0.75).toFixed(1)],
          ["+5 reps", (benchPress * 0.85).toFixed(1)],
        ]
      }
    ],
    [
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["5 reps", (benchPress * 0.65).toFixed(1)],
          ["5 reps", (benchPress * 0.75).toFixed(1)],
          ["+5 reps", (benchPress * 0.85).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["5 reps", (backSquat * 0.65).toFixed(1)],
          ["5 reps", (backSquat * 0.75).toFixed(1)],
          ["+5 reps", (backSquat * 0.85).toFixed(1)],
        ]
      }
    ],
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["5 reps", (backSquat * 0.65).toFixed(1)],
          ["5 reps", (backSquat * 0.75).toFixed(1)],
          ["+5 reps", (backSquat * 0.85).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["5 reps", (benchPress * 0.65).toFixed(1)],
          ["5 reps", (benchPress * 0.75).toFixed(1)],
          ["+5 reps", (benchPress * 0.85).toFixed(1)],
        ]
      }
    ],
  ];


  const weekIds = ["item-1", "item-2"];

  // TODO week 3 and multiple weeks
  return (
    <Accordion type="multiple" defaultValue={weekIds}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Week 1</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-7 gap-4">
            <StrengthFlexDayCard exercises={week1[0]} />
            <RestDayCard />
            <StrengthFlexDayCard exercises={week1[1]} />
            <RestDayCard />
            <StrengthFlexDayCard exercises={week1[2]} />
            <RestDayCard />
            <RestDayCard />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Week 2</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-7 gap-4">
            <StrengthFlexDayCard exercises={week1[0]} />
            <RestDayCard />
            <StrengthFlexDayCard exercises={week1[1]} />
            <RestDayCard />
            <StrengthFlexDayCard exercises={week1[2]} />
            <RestDayCard />
            <RestDayCard />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}