import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Textarea,
} from "@headlessui/react";
import clsx from "clsx";
import SelectRole from "./SelectRole";
import { useState } from "react";
import toastFs from "../../Utils/toast";

export default function ContactForm() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const submitData = () => {
    const isValidEmail = emailRegex.test(email);

    if (!email || !subject || !description || !role) {
      toastFs("Please enter all data", "warning");
      return;
    } else if (!isValidEmail) {
      toastFs("Please enter a valid email", "warning");
    } else if (role === "Select Your Role") {
      toastFs("Select Your Role", "warning");
    } else {
      toastFs("Thank you", "success");
      console.log({ email, subject, description, role });
    }
  };

  return (
    <div className="w-full max-w-lg bg-black rounded-xl my-2">
      <Fieldset className="space-y-6 rounded-xl bg-blue-500/60 p-6 sm:p-10">
        <Legend className="text-base/7 font-semibold text-white">
          Contact Form
        </Legend>
        <div className="mt-3">
          {" "}
          <SelectRole setRole={setRole} />
        </div>
        <Field>
          <Label className="text-sm/6 font-medium text-white">
            E-mail Address
          </Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">Subject</Label>
          <Input
            onChange={(e) => setSubject(e.target.value)}
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">
            Description
          </Label>
          <Textarea
            onChange={(e) => setDescription(e.target.value)}
            className={clsx(
              "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            rows={3}
          />
        </Field>
        <Button
          type="submit"
          onClick={submitData}
          className="inline-flex items-center gap-2 rounded-md bg-blue-500/60 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-blue-500/10 focus:outline-none data-[hover]:bg-blue-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          Submit
        </Button>
      </Fieldset>
    </div>
  );
}
