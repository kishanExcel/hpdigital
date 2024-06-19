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
  buying: z.string(),
  adname: z.string(),
  objective: z.string(),
  status: z.string(),
  special_ad_categories: z.string(),
});

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      buying: "",
      adname: "",
      objective: "",
      status: "",
      special_ad_categories: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      ad_account_id: "433913099432932", // put your own ad_account_id //
      buying_type: values.buying,
      name: values.adname,
      objective: values.objective,
      status: values.status,
      special_ad_categories:
        values.special_ad_categories.length === 1 &&
        values.special_ad_categories[0] === ""
          ? "NONE"
          : [values.special_ad_categories],
    };

    axios
      .post("http://116.202.210.102:3005/api/v1/campaign", payload, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAGE_TOKEN}`,
        },
      })
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
            name="buying"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Buying type</FormLabel>
                <FormControl>
                  <Input placeholder="AUCTION" {...field} />
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
                  <Input placeholder="Messenger_ad_campaign_name" {...field} />
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
