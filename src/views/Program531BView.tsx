import Cluster from "@/components/Cluster";
import RestDayCard from "@/components/RestDayCard";
import StrengthFlexDayCard, { ProgressionType, StrengthFlexExercise } from "@/components/StrengthFlexDayCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExerciseType, UserConfig, getWeightTm, toName, useUserConfig } from "@/contexts/UserConfigContext";

export default function Program531BView() {
  const userConfig: UserConfig = useUserConfig();
  const benchPress = getWeightTm(userConfig, ExerciseType.BENCH_PRESS);
  const backSquat = getWeightTm(userConfig, ExerciseType.BACK_SQUAT);
  const dl = getWeightTm(userConfig, ExerciseType.DL);
  const ohp = getWeightTm(userConfig, ExerciseType.OHP);

  const week1: StrengthFlexExercise[][] = [
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["5", (backSquat * 0.65).toFixed(1)],
          ["5", (backSquat * 0.75).toFixed(1)],
          ["5+", (backSquat * 0.85).toFixed(1)],
        ], progressionType: ProgressionType.KG
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["5", (benchPress * 0.65).toFixed(1)],
          ["5", (benchPress * 0.75).toFixed(1)],
          ["5+", (benchPress * 0.85).toFixed(1)],
        ], progressionType: ProgressionType.KG
      }
    ],
    [
      {
        name: toName(ExerciseType.DL), sets: [
          ["5", (dl * 0.65).toFixed(1)],
          ["5", (dl * 0.75).toFixed(1)],
          ["5+", (dl * 0.85).toFixed(1)],
        ], progressionType: ProgressionType.KG
      },
      {
        name: toName(ExerciseType.OHP), sets: [
          ["5", (ohp * 0.65).toFixed(1)],
          ["5", (ohp * 0.75).toFixed(1)],
          ["5+", (ohp * 0.85).toFixed(1)],
        ], progressionType: ProgressionType.KG
      }
    ],
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["5", (backSquat * 0.65).toFixed(1)],
          ["5", (backSquat * 0.75).toFixed(1)],
          ["5+", (backSquat * 0.85).toFixed(1)],
        ], progressionType: ProgressionType.KG
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["5", (benchPress * 0.65).toFixed(1)],
          ["5", (benchPress * 0.75).toFixed(1)],
          ["5+", (benchPress * 0.85).toFixed(1)],
        ], progressionType: ProgressionType.KG
      }
    ],
  ];

  const week2: StrengthFlexExercise[][] = [
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["3", (backSquat * 0.70).toFixed(1)],
          ["3", (backSquat * 0.80).toFixed(1)],
          ["3+", (backSquat * 0.90).toFixed(1)],
        ], progressionType: ProgressionType.KG
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["3", (benchPress * 0.70).toFixed(1)],
          ["3", (benchPress * 0.80).toFixed(1)],
          ["3+", (benchPress * 0.90).toFixed(1)],
        ], progressionType: ProgressionType.KG
      }
    ],
    [
      {
        name: toName(ExerciseType.DL), sets: [
          ["3", (dl * 0.70).toFixed(1)],
          ["3", (dl * 0.80).toFixed(1)],
          ["3+", (dl * 0.90).toFixed(1)],
        ], progressionType: ProgressionType.KG
      },
      {
        name: toName(ExerciseType.OHP), sets: [
          ["3", (ohp * 0.70).toFixed(1)],
          ["3", (ohp * 0.80).toFixed(1)],
          ["3+", (ohp * 0.90).toFixed(1)],
        ], progressionType: ProgressionType.KG
      }
    ],
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["3", (backSquat * 0.70).toFixed(1)],
          ["3", (backSquat * 0.80).toFixed(1)],
          ["3+", (backSquat * 0.90).toFixed(1)],
        ], progressionType: ProgressionType.KG
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["3", (benchPress * 0.70).toFixed(1)],
          ["3", (benchPress * 0.80).toFixed(1)],
          ["3+", (benchPress * 0.90).toFixed(1)],
        ], progressionType: ProgressionType.KG
      }
    ],
  ];

  const week3: StrengthFlexExercise[][] = [
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["5", (backSquat * 0.75).toFixed(1)],
          ["3", (backSquat * 0.85).toFixed(1)],
          ["1+", (backSquat * 0.95).toFixed(1)],
        ], progressionType: ProgressionType.KG
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["5", (benchPress * 0.75).toFixed(1)],
          ["3", (benchPress * 0.85).toFixed(1)],
          ["1+", (benchPress * 0.95).toFixed(1)],
        ], progressionType: ProgressionType.KG
      }
    ],
    [
      {
        name: toName(ExerciseType.DL), sets: [
          ["5", (dl * 0.75).toFixed(1)],
          ["3", (dl * 0.85).toFixed(1)],
          ["1+", (dl * 0.95).toFixed(1)],
        ], progressionType: ProgressionType.KG
      },
      {
        name: toName(ExerciseType.OHP), sets: [
          ["5", (ohp * 0.75).toFixed(1)],
          ["3", (ohp * 0.85).toFixed(1)],
          ["1+", (ohp * 0.95).toFixed(1)],
        ], progressionType: ProgressionType.KG
      }
    ],
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["5", (backSquat * 0.75).toFixed(1)],
          ["3", (backSquat * 0.85).toFixed(1)],
          ["1+", (backSquat * 0.95).toFixed(1)],
        ], progressionType: ProgressionType.KG
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["5", (benchPress * 0.75).toFixed(1)],
          ["3", (benchPress * 0.85).toFixed(1)],
          ["1+", (benchPress * 0.95).toFixed(1)],
        ], progressionType: ProgressionType.KG
      }
    ],
  ];

  const weekIds = ["item-1", "item-2", "item-3"];

  return (
    <><Cluster />
      <Accordion type="multiple" defaultValue={weekIds}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Week 1</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
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
      </Accordion></>
  );
}