import RestDayCard from "@/components/RestDayCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function Program531BView() {
  const weekIds = ["item-1", "item-2"];

  return (
    <Accordion type="multiple" defaultValue={weekIds}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Week 1</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-7 gap-4">
            <RestDayCard />
            <RestDayCard />
            <RestDayCard />
            <RestDayCard />
            <RestDayCard />
            <RestDayCard />
            <RestDayCard />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Week 2</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-7 gap-4">
            <RestDayCard />
            <RestDayCard />
            <RestDayCard />
            <RestDayCard />
            <RestDayCard />
            <RestDayCard />
            <RestDayCard />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}