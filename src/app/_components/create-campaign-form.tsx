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

const formSchema = z.object({
  buying: z.string(),
  adname: z.string(),
  objective: z.string(),
  status: z.string(),
  special_ad_categories: z.string(),
});

export default function ProfileForm() {
  const { data: session, status } = useSession();
  const [adAccounts, setAdAccounts] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const adId = searchParams?.get("adId");

  async function getAdAccounts() {
    try {
      const response = await axios.get("https://graph.facebook.com/v20.0/me", {
        params: {
          fields: "adaccounts",
          access_token: (session as any).accessToken,
        },
      });

      const adAccounts = response.data.adaccounts.data;
      setAdAccounts(adAccounts[0]);
      return adAccounts;
    } catch (error) {
      console.error("Failed to fetch ad accounts:", error);
      throw error;
    }
  }

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

  useEffect(() => {
    getAdAccounts();
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      ad_account_id: adId,
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
      .post(
        `https://graph.facebook.com/v20.0/act_${
          payload?.ad_account_id
        }/campaigns?effective_status=${payload.status}&name=${
          payload.name
        }&objective=${payload.objective}&special_ad_categories=${
          payload.special_ad_categories
        }&access_token=${(session as any).accessToken}`
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
                  <Input placeholder="Summer_Sale_2024_Promo" {...field} />
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
