import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is dextor-components?</AccordionTrigger>
        <AccordionContent>
          A collection of thin, styled wrappers over Radix UI primitives, themed
          with design tokens.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It builds on Radix UI, which handles keyboard navigation and ARIA
          out of the box.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
        <AccordionContent>
          Yes. Styling is driven entirely by design tokens that adapt
          automatically.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
