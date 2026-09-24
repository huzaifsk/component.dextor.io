import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="rounded-md border border-border p-4 text-sm text-muted-foreground">
        Update your name, email, and public profile details here.
      </TabsContent>
      <TabsContent value="password" className="rounded-md border border-border p-4 text-sm text-muted-foreground">
        Change your password and manage two-factor authentication.
      </TabsContent>
      <TabsContent value="team" className="rounded-md border border-border p-4 text-sm text-muted-foreground">
        Invite teammates and manage roles for your workspace.
      </TabsContent>
    </Tabs>
  );
}
