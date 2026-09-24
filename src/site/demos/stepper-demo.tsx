import { Stepper } from "../../components/ui/stepper";

const steps = [
  { label: "Account" },
  { label: "Profile" },
  { label: "Review" },
  { label: "Done" },
];

export default function StepperDemo() {
  return <Stepper steps={steps} activeStep={1} />;
}
