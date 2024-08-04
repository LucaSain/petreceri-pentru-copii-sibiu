"use server";
import { redirect } from "next/navigation";
import { sendEmail } from "./mailjet/mailjet";

interface names {
  nume: string;
  prenume: string;
  email: string;
  telefon: string;
  mesaj: string;
}

const names = ["nume", "email", "mesaj", "telefon", "prenume"];
const submit = async (formData: FormData) => {
  "use server";
  let data: names = {
    nume: "",
    prenume: "",
    email: "",
    telefon: "",
    mesaj: "",
  };

  for (let name of names) {
    data[name as keyof names] = formData.get(name) as string;
  }

  try {
    await sendEmail({
      subject: "rezervare",
      message: JSON.stringify(data),
    });
  } catch (e) {
    console.error(e);
  }
  redirect("/confirm");
};

export default submit;
