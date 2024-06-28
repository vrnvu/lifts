import RestDayCard from "@/components/RestDayCard";
import StrengthFlexDayCard, { StrengthFlexExercise } from "@/components/StrengthFlexDayCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExerciseType, UserConfig, getWeight, toName, useUserConfig } from "@/contexts/UserConfigContext";

export default function Program531BView() {
  const userConfig: UserConfig = useUserConfig();
  const benchPress = getWeight(userConfig, ExerciseType.BENCH_PRESS);
  const backSquat = getWeight(userConfig, ExerciseType.BACK_SQUAT);
  const dl = getWeight(userConfig, ExerciseType.DL);
  const ohp = getWeight(userConfig, ExerciseType.OHP);

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
        name: toName(ExerciseType.DL), sets: [
          ["5 reps", (dl * 0.65).toFixed(1)],
          ["5 reps", (dl * 0.75).toFixed(1)],
          ["+5 reps", (dl * 0.85).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.OHP), sets: [
          ["5 reps", (ohp * 0.65).toFixed(1)],
          ["5 reps", (ohp * 0.75).toFixed(1)],
          ["+5 reps", (ohp * 0.85).toFixed(1)],
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

  const week2: StrengthFlexExercise[][] = [
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["3 reps", (backSquat * 0.70).toFixed(1)],
          ["3 reps", (backSquat * 0.80).toFixed(1)],
          ["+3 reps", (backSquat * 0.90).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["3 reps", (benchPress * 0.70).toFixed(1)],
          ["3 reps", (benchPress * 0.80).toFixed(1)],
          ["+3 reps", (benchPress * 0.90).toFixed(1)],
        ]
      }
    ],
    [
      {
        name: toName(ExerciseType.DL), sets: [
          ["3 reps", (dl * 0.70).toFixed(1)],
          ["3 reps", (dl * 0.80).toFixed(1)],
          ["+3 reps", (dl * 0.90).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.OHP), sets: [
          ["3 reps", (ohp * 0.70).toFixed(1)],
          ["3 reps", (ohp * 0.80).toFixed(1)],
          ["+3 reps", (ohp * 0.90).toFixed(1)],
        ]
      }
    ],
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["3 reps", (backSquat * 0.70).toFixed(1)],
          ["3 reps", (backSquat * 0.80).toFixed(1)],
          ["+3 reps", (backSquat * 0.90).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["3 reps", (benchPress * 0.70).toFixed(1)],
          ["3 reps", (benchPress * 0.80).toFixed(1)],
          ["+3 reps", (benchPress * 0.90).toFixed(1)],
        ]
      }
    ],
  ];

  const week3: StrengthFlexExercise[][] = [
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["5 reps", (backSquat * 0.75).toFixed(1)],
          ["3 reps", (backSquat * 0.85).toFixed(1)],
          ["+1 reps", (backSquat * 0.95).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["5 reps", (benchPress * 0.75).toFixed(1)],
          ["3 reps", (benchPress * 0.85).toFixed(1)],
          ["+1 reps", (benchPress * 0.95).toFixed(1)],
        ]
      }
    ],
    [
      {
        name: toName(ExerciseType.DL), sets: [
          ["5 reps", (dl * 0.75).toFixed(1)],
          ["3 reps", (dl * 0.85).toFixed(1)],
          ["+1 reps", (dl * 0.95).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.OHP), sets: [
          ["5 reps", (ohp * 0.75).toFixed(1)],
          ["3 reps", (ohp * 0.85).toFixed(1)],
          ["+1 reps", (ohp * 0.95).toFixed(1)],
        ]
      }
    ],
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["5 reps", (backSquat * 0.75).toFixed(1)],
          ["3 reps", (backSquat * 0.85).toFixed(1)],
          ["+1 reps", (backSquat * 0.95).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["5 reps", (benchPress * 0.75).toFixed(1)],
          ["3 reps", (benchPress * 0.85).toFixed(1)],
          ["+1 reps", (benchPress * 0.95).toFixed(1)],
        ]
      }
    ],
  ];

  const weekIds = ["item-1", "item-2", "item-3"];

  return (
    <Accordion type="multiple" defaultValue={weekIds}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Week 1</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-7 gap-4">
            <StrengthFlexDayCard template="5/3/1" exercises={week1[0]} />
            <RestDayCard />
            <StrengthFlexDayCard template="5/3/1" exercises={week1[1]} />
            <RestDayCard />
            <StrengthFlexDayCard template="5/3/1" exercises={week1[2]} />
            <RestDayCard />
            <RestDayCard />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Week 2</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-7 gap-4">
            <StrengthFlexDayCard template="5/3/1" exercises={week2[0]} />
            <RestDayCard />
            <StrengthFlexDayCard template="5/3/1" exercises={week2[1]} />
            <RestDayCard />
            <StrengthFlexDayCard template="5/3/1" exercises={week2[2]} />
            <RestDayCard />
            <RestDayCard />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Week 3</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-7 gap-4">
            <StrengthFlexDayCard template="5/3/1" exercises={week3[0]} />
            <RestDayCard />
            <StrengthFlexDayCard template="5/3/1" exercises={week3[1]} />
            <RestDayCard />
            <StrengthFlexDayCard template="5/3/1" exercises={week3[2]} />
            <RestDayCard />
            <RestDayCard />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}