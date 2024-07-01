"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  buying: z.string(),
  campaign_id: z.string(),
  billing_events: z.string(),
  bid_amount: z.string(),
  optimization_goal: z.string(),
  daily_budget: z.string(),
  targeting: z.string(),
  adname: z.string(),
  pagename: z.string(),
  objective: z.string(),
  status: z.string(),
});

export default function Adset() {
  const { data: session, status } = useSession();
  const [adAccounts, setAdAccounts] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const adId = searchParams?.get("adId");
  const campaignId = searchParams?.get("campaignId");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adname: "",
      optimization_goal: "",
      pagename: "",
      billing_events: " ",
      bid_amount: "",
      buying: "",
      objective: "",
      daily_budget: "",
      status: "",
      campaign_id: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      ad_account_id: adId,
      name: values.adname,
      optimization_goal: values.optimization_goal,
      billing_event: values.billing_events,
      bid_amount: values.bid_amount,
      buying_type: values.buying,
      daily_budget: values.daily_budget,
      targeting: {
        geo_locations: { countries: [`${values.targeting}`] },
        facebook_positions: ["feed"],
      },
      campaign_id: campaignId,
      objective: values.objective,
      pagename: { page_id: `${String(values.pagename)}` },
      status: values.status,
    };
    axios
      .post(
        `https://graph.facebook.com/v20.0/act_${
          payload?.ad_account_id
        }/adsets?status=${payload.status}&name=${
          payload.name
        }&optimization_goal=${payload.optimization_goal}&billing_event=${
          payload.billing_event
        }&bid_amount=${payload.bid_amount}&daily_budget=${
          payload.daily_budget
        }&campaign_id=${payload.campaign_id}&promoted_object=${JSON.stringify(
          payload.pagename
        )}&targeting=${JSON.stringify(payload.targeting)}&access_token=${
          (session as any).accessToken
        }`
      )
      .then((response) => {
        if (response) {
          router.push("/analytics");
        } else {
          console.error("API response does not contain an id:", response);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }

  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="adname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>s
                <FormControl>
                  <Input placeholder="My_Reach_Ad_Set" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="optimization_goal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Optimization Goal</FormLabel>
                <FormControl>
                  <Input placeholder="REACH" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="billing_events"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Biling Event</FormLabel>
                <FormControl>
                  <Input placeholder="IMPRESSIONS" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bid_amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bid Amount</FormLabel>
                <FormControl>
                  <Input placeholder="8234" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="daily_budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Daily Budget</FormLabel>
                <FormControl>
                  <Input placeholder="93932" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="targeting"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Geo Locations</FormLabel>
                <FormControl>
                  <Input placeholder="US" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Input placeholder="PAUSED" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pagename"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Page</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Page to publish" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white">
                    {session?.user.profile.accounts.data.map((item, index) => (
                      <SelectItem
                        className="border "
                        key={index}
                        value={item.id}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="p-4" variant="outline" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
