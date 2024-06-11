import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileForm from "./create-campaign-form";
import AdSet from "./create-adset-form";

export function VariantTabs() {
  return (
    <Tabs defaultValue="basic" className="w-full overflow-scroll">
      <TabsList>
        <TabsTrigger value="createcampaign">Create a Campaign</TabsTrigger>
        <TabsTrigger value="createadset">Create an Ad Set</TabsTrigger>
        <TabsTrigger value="createcreative">Create Ad Creative</TabsTrigger>
        <TabsTrigger value="createad">Create the Ad </TabsTrigger>
        <TabsTrigger value="publish">Publish your Ad</TabsTrigger>
      </TabsList>
      <TabsContent value="createcampaign" className="mt-6">
        <ProfileForm />
      </TabsContent>
      <TabsContent value="createadset" className="mt-6">
        {" "}
        <AdSet />
      </TabsContent>
      <TabsContent value="createcreative" className="mt-6">
        Create Ad Creative
      </TabsContent>
      <TabsContent value="createad" className="mt-6">
        Create the Ad
      </TabsContent>
      <TabsContent value="publish" className="mt-6">
        Publish your Ad
      </TabsContent>
    </Tabs>
  );
}
