"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Slider } from "@/components/ui/slider"
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  model: z.string({
    required_error: "Model is required",
  }),
  prompt: z.string({
    required_error: "Prompt is required",
  }),
  guidance: z.number({
    required_error: "Guidance scale is required",
  }),
  num_outputs: z
    .number()
    .min(1, { message: "Number of outputs should be at least 1." })
    .max(4, { message: "Number of outputs must be less than or equal to 4." }),

  aspect_ratio: z.string({
    required_error: "Aspect ratio is required!",
  }),

  output_format: z.string({
    required_error: "Output format is required!",
  }),

  output_quality: z
    .number()
    .min(1, { message: "Output quality should be at least 1." })
    .max(100, { message: "Output quality must be less than or equal to 100." }),

  num_inference_steps: z
    .number()
    .min(1, { message: "Number of inference steps should be at least 1." })
    .max(50, {
      message: "Number of inference steps must be less than or equal to 50.",
    }),
});

const Configurations = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "black-forest-labs/flux-dev",
      prompt: "",
      guidance: 3.5,
      num_outputs: 1,
      aspect_ratio: "1:1",
      output_format: "jpg",
      output_quality: 80,
      num_inference_steps: 28,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <fieldset className="grid gap-6 p-4 bg-background rounded-lg border">
          <legend className="text-sm -ml-1 px-1 font-medium">
            Settings
          </legend>

            <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="black-forest-labs/flux-dev">
                    Flux Dev
                  </SelectItem>
                  <SelectItem value="black-forest-labs/flux-schnell">
                    Flux Schnell
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="aspect_ratio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aspect Ratio</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select aspect ratio" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1:1">1:1</SelectItem>
                    <SelectItem value="16:9">16:9</SelectItem>
                    <SelectItem value="9:16">9:16</SelectItem>
                    <SelectItem value="3:2">3:2</SelectItem>
                    <SelectItem value="2:3">2:3</SelectItem>
                    <SelectItem value="4:3">4:3</SelectItem>
                    <SelectItem value="3:4">3:4</SelectItem>
                    <SelectItem value="21:9">21:9</SelectItem>
                    <SelectItem value="9:21">9:21</SelectItem>
                    <SelectItem value="5:4">5:4</SelectItem>
                    <SelectItem value="4:5">4:5</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
          control={form.control}
          name="num_outputs"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Outputs</FormLabel>
                <FormControl>
                  <Input type="number" min={1} max={4}  {...field}
                  onChange={(event)=>field.onChange(+event.target.value)}/>
                </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="guidance"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='flex items-center justify-between'><div>
              Guidance
                </div>
                <span>
                  {field.value}</span></FormLabel>
                <FormControl>
                <Slider defaultValue={[field.value]}min={0} max={10} step={0.5} 
                onValueChange={value=>field.onChange(value[0])}/>
                </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="num_inference_steps"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='flex items-center justify-between'><div>
            Number of Inference Steps
                </div>
                <span>
                  {field.value}</span></FormLabel>
                <FormControl>
                <Slider defaultValue={[field.value]}min={1} max={50} step={1} 
                onValueChange={value=>field.onChange(value[0])}/>
                </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="output_quality"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='flex items-center justify-between'><div>
            Output Quality
                </div>
                <span>
                  {field.value}</span></FormLabel>
                <FormControl>
                <Slider defaultValue={[field.value]}min={50} max={100} step={1} 
                onValueChange={value=>field.onChange(value[0])}/>
                </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
            control={form.control}
            name="output_format"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Output Format</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Output Format" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="webp">webp</SelectItem>
                    <SelectItem value="png">png</SelectItem>
                    <SelectItem value="jpg">jpg</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prompt</FormLabel>
                <FormControl>
                  <Textarea  {...field} rows={6}/>
                </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="font-medium">Generate</Button>
        </fieldset>
      </form>
      
    </Form>
        
        
  );
};

export default Configurations;
