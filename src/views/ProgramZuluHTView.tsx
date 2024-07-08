import Cluster from "@/components/Cluster";
import RestDayCard from "@/components/RestDayCard";
import StrengthFlexDayCard, { StrengthFlexExercise } from "@/components/StrengthFlexDayCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { ExerciseType, UserConfig, getWeightTm, toName, useUserConfig } from "@/contexts/UserConfigContext";

export default function ProgramZuluHTView() {
  const userConfig: UserConfig = useUserConfig();
  const benchPress = getWeightTm(userConfig, ExerciseType.BENCH_PRESS);
  const backSquat = getWeightTm(userConfig, ExerciseType.BACK_SQUAT);
  const dl = getWeightTm(userConfig, ExerciseType.DL);
  const ohp = getWeightTm(userConfig, ExerciseType.OHP);
  const wpu = getWeightTm(userConfig, ExerciseType.WEIGHTED_PULLUPS);

  const week1: StrengthFlexExercise[][] = [
    [
      {
        name: toName(ExerciseType.OHP), sets: [
          ["4x5", (ohp * 0.75).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["4x10", (backSquat * 0.65).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.WEIGHTED_PULLUPS), sets: [
          ["3x12", (wpu * 0.60).toFixed(1)],
        ]
      },
    ],
    [
      {
        name: toName(ExerciseType.DL), sets: [
          ["4x5", (dl * 0.75).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["4x10", (benchPress * 0.65).toFixed(1)],
        ]
      },
      {
        name: "RDL", sets: [
          ["3x12", "2 RIR"],
        ]
      },
    ],
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["4x5", (backSquat * 0.75).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.OHP), sets: [
          ["4x10", (ohp * 0.65).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.WEIGHTED_PULLUPS), sets: [
          ["3x12", (wpu * 0.60).toFixed(1)],
        ]
      },
    ],
    [
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["4x5", (benchPress * 0.75).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.DL), sets: [
          ["4x10", (dl * 0.65).toFixed(1)],
        ]
      },
      {
        name: "RDL", sets: [
          ["3x12", "2 RIR"],
        ]
      },
    ]
  ];

  const week2: StrengthFlexExercise[][] = [
    [
      {
        name: toName(ExerciseType.OHP), sets: [
          ["4x4", (ohp * 0.80).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["4x8", (backSquat * 0.70).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.WEIGHTED_PULLUPS), sets: [
          ["3x10", (wpu * 0.65).toFixed(1)],
        ]
      },
    ],
    [
      {
        name: toName(ExerciseType.DL), sets: [
          ["4x4", (dl * 0.80).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["4x8", (benchPress * 0.70).toFixed(1)],
        ]
      },
      {
        name: "RDL", sets: [
          ["3x10", "2 RIR"],
        ]
      },
    ],
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["4x4", (backSquat * 0.80).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.OHP), sets: [
          ["4x8", (ohp * 0.70).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.WEIGHTED_PULLUPS), sets: [
          ["3x10", (wpu * 0.65).toFixed(1)],
        ]
      },
    ],
    [
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["4x4", (benchPress * 0.80).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.DL), sets: [
          ["4x8", (dl * 0.70).toFixed(1)],
        ]
      },
      {
        name: "RDL", sets: [
          ["3x10", "2 RIR"],
        ]
      },
    ]
  ];

  const week3: StrengthFlexExercise[][] = [
    [
      {
        name: toName(ExerciseType.OHP), sets: [
          ["4x3+", (ohp * 0.85).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["4x6", (backSquat * 0.75).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.WEIGHTED_PULLUPS), sets: [
          ["3x8", (wpu * 0.70).toFixed(1)],
        ]
      },
    ],
    [
      {
        name: toName(ExerciseType.DL), sets: [
          ["4x3+", (dl * 0.85).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["4x6", (benchPress * 0.75).toFixed(1)],
        ]
      },
      {
        name: "RDL", sets: [
          ["3x8", "2 RIR"],
        ]
      },
    ],
    [
      {
        name: toName(ExerciseType.BACK_SQUAT), sets: [
          ["4x3+", (backSquat * 0.85).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.OHP), sets: [
          ["4x6", (ohp * 0.75).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.WEIGHTED_PULLUPS), sets: [
          ["3x8", (wpu * 0.70).toFixed(1)],
        ]
      },
    ],
    [
      {
        name: toName(ExerciseType.BENCH_PRESS), sets: [
          ["4x3+", (benchPress * 0.85).toFixed(1)],
        ]
      },
      {
        name: toName(ExerciseType.DL), sets: [
          ["4x6", (dl * 0.75).toFixed(1)],
        ]
      },
      {
        name: "RDL", sets: [
          ["3x8", "2 RIR"],
        ]
      },
    ]
  ];



  const weekIds = ["item-1", "item-2", "item-3"];

  return (
    <><Cluster />
      <Accordion type="multiple" defaultValue={weekIds}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Week 1</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
              <StrengthFlexDayCard template="Zulu HT" exercises={week1[0]} />
              <StrengthFlexDayCard template="Zulu HT" exercises={week1[1]} />
              <RestDayCard />
              <StrengthFlexDayCard template="Zulu HT" exercises={week1[2]} />
              <StrengthFlexDayCard template="Zulu HT" exercises={week1[3]} />
              <RestDayCard />
              <RestDayCard />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Week 2</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
              <StrengthFlexDayCard template="Zulu HT" exercises={week2[0]} />
              <StrengthFlexDayCard template="Zulu HT" exercises={week2[1]} />
              <RestDayCard />
              <StrengthFlexDayCard template="Zulu HT" exercises={week2[2]} />
              <StrengthFlexDayCard template="Zulu HT" exercises={week2[3]} />
              <RestDayCard />
              <RestDayCard />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Week 3</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
              <StrengthFlexDayCard template="Zulu HT" exercises={week3[0]} />
              <StrengthFlexDayCard template="Zulu HT" exercises={week3[1]} />
              <RestDayCard />
              <StrengthFlexDayCard template="Zulu HT" exercises={week3[2]} />
              <StrengthFlexDayCard template="Zulu HT" exercises={week3[3]} />
              <RestDayCard />
              <RestDayCard />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion></>
  );
}