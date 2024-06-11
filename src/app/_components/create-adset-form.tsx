"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";

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

const formSchema = z.object({
  bid_amount: z.string(),
  adname: z.string(),
  objective: z.string(),
  status: z.string(),
  special_ad_categories: z.string(),
});

export default function AdSet() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bid_amount: "",
      adname: "",
      objective: "",
      status: "",
      special_ad_categories: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      access_token: process.env.NEXT_PUBLIC_PAGE_TOKEN,
      ad_account_id: process.env.NEXT_PUBLIC_AD_ACCOUNT,
      bid_amount: values.bid_amount,
      daily_budget: 1000,
      campaign_id: "Your_campaign_id",
      destination_type: "MESSENGER",
      name: values.adname,
      optimization_goal: "IMPRESSIONS",
      status: "PAUSED",
      targeting: {
        geo_locations: { countries: ["US", "CA"] },
        device_platforms: ["mobile", "desktop"],
        publisher_platforms: ["messenger"],
      },
    };

    axios
      .post("http://116.202.210.102:3005/api/v1/adset", payload)
      .then((response) => {
        console.log("API Response:", response);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }

  return (
    <div className="p-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="bid_amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bid Amount</FormLabel>
                <FormControl>
                  <Input placeholder="1000$" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="adname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Messenger_ad_set_name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="objective"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Objective</FormLabel>
                <FormControl>
                  <Input placeholder="OUTCOME_TRAFFIC" {...field} />
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
                  <Input placeholder="Ex PAUSED" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="special_ad_categories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Special_Ad_Categories</FormLabel>
                <FormControl>
                  <Input placeholder="special_ad_categories" {...field} />
                </FormControl>
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
