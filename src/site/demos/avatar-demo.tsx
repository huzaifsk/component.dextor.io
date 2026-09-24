import { Avatar } from "../../components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        src="https://github.com/shadcn.png"
        alt="Shad"
        fallback="SC"
        size="sm"
      />
      <Avatar
        src="https://broken-image-url.test/none.png"
        alt="Jane Doe"
        fallback="JD"
        size="md"
      />
      <Avatar fallback="AB" size="lg" />
    </div>
  );
}
