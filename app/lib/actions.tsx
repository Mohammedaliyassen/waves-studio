"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod"; // Import Zod

export type FormState = {
  success: boolean;
  message: string | null;
  errors?: {
    user_name?: string[];
    user_email?: string[];
    whats_app?: string[];
    project_type?: string[];
    estimated_budget?: string[];
    message?: string[];
  };
};

// Define Zod schema for the form data
const ContactMessageSchema = z.object({
  user_name: z.string().min(1, { message: "Name is required." }),
  user_email: z.string().email({ message: "Invalid email format." }),
  whats_app: z
    .string()
    .regex(/^\+?[0-9]{7,15}$/, { message: "Invalid WhatsApp number." })
    .optional()
    .or(z.literal("")),
  project_type: z
    .array(z.enum(["Web", "Mobile", "Desktop"]))
    .min(1, { message: "Please select at least one project type." }),
  estimated_budget: z
    .enum(["$1k-$5k", "$5k-$10k", "$10k+", "Not specified", ""])
    .refine((val) => val !== "", {
      message: "Please select an estimated budget.",
    }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." }),
});

export async function submitContactMessage(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Explicitly return Promise<FormState>
  const rawData = {
    user_name: formData.get("user_name")?.toString() ?? "",
    user_email: formData.get("user_email")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    whats_app: formData.get("whats_app")?.toString() ?? "",
    project_type: formData.getAll("project_type") as string[], // Get all selected checkboxes
    estimated_budget: formData.get("estimated_budget")?.toString() ?? "",
  };

  // Validate data with Zod
  const validatedFields = ContactMessageSchema.safeParse(rawData);

  if (!validatedFields.success) {
    console.log(
      "submitContactMessage — validation failed:",
      validatedFields.error.flatten().fieldErrors
    );
    return {
      success: false,
      message: "Data validation failed. Please check the fields.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {
    user_name,
    user_email,
    message,
    whats_app,
    project_type,
    estimated_budget,
  } = validatedFields.data;

  console.log("submitContactMessage — received rawData:", validatedFields.data);

  const pbUrl =
    process.env.NEXT_PUBLIC_POCKETBASE_URL ?? process.env.POCKETBASE_URL;
  console.log("submitContactMessage — using PocketBase URL:", pbUrl);

  if (!pbUrl) {
    console.error("submitContactMessage — PocketBase URL not configured");
    return {
      success: false,
      message: "Server misconfiguration: PocketBase URL missing.",
    };
  }

  try {
    const res = await fetch(`${pbUrl}/api/collections/connects/records`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_name,
        user_email,
        message,
        whats_app,
        project_type: project_type.join(", "), // Store as comma-separated string
        estimated_budget,
      }),
    });

    console.log(
      "submitContactMessage — PB status:",
      res.status,
      res.statusText
    );

    const text = await res.text();
    try {
      console.log("submitContactMessage — PB body (json):", JSON.parse(text));
    } catch {
      console.log("submitContactMessage — PB body (raw):", text);
    }

    if (!res.ok) {
      console.error("submitContactMessage — PB returned not ok");
      return {
        success: false,
        message: `Submission failed: ${res.status} - ${text}`,
      };
    }

    console.log("submitContactMessage — success, revalidating path /contact");
    revalidatePath("/contact");
    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (err) {
    console.error("submitContactMessage — Fetch Error:", err);
    return {
      success: false,
      message:
        "Connection error. Please ensure the PocketBase server is running.",
    };
  }
}
