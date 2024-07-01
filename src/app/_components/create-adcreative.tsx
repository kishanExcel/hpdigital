"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
  name: z.string(),
  filename: z.string(),
});

export default function AdCreative() {
  const { data: session } = useSession();
  const [adAccounts, setAdAccounts] = useState("");
  const [imageHash, setImageHash] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const adId = searchParams?.get("adId");
  const campaignId = searchParams?.get("campaignId");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      filename: "",
    },
  });

  async function handleImageUpload() {
    const { watch } = form;
    const file = watch("filename");
    try {
      const formData = new FormData();
      formData.append("filename", file);

      const uploadResponse = await axios.post(
        `https://graph.facebook.com/v20.0/act_${adId}/adimages`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            access_token: (session as any).accessToken,
          },
        }
      );

      //   setImageHash(uploadResponse);
    } catch (error) {
      console.error("Image upload error:", error);
      throw error;
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      name: "",
      object_story_spec: {
        page_id: "<PAGE_ID>",
        link_data: {
          image_hash: imageHash,
          link: "https://facebook.com/<PAGE_ID>",
          message: "try it out",
        },
      },
    };
    axios
      .post(
        `https://graph.facebook.com/v20.0/act_${adId}/adcreatives&${payload}&access_token=${
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
            name="filename"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Images</FormLabel>
                <FormControl>
                  <Input placeholder="Images" type="file" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <AlertDialog>
            <AlertDialogTrigger>Upload Image</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Upload this Image?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently upload to
                  your account and upload to your adsManager.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleImageUpload()}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <FormField
            control={form.control}
            name="name"
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
            name="filename"
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
