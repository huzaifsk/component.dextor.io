import { Button } from "../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../../components/ui/card";

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>
          A short description that explains what this card is about.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Card content goes here. It can be any combination of text, media, or
          other components.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Share</Button>
      </CardFooter>
    </Card>
  );
}
