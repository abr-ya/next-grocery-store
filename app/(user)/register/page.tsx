"use client";

import { FieldErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import FormWrapper from "../_components/FormWrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import LinkBlock from "../_components/LinkBlock";

interface IFormData {
  email: string;
  password: string;
  name: string;
}

const schema = yup.object({
  email: yup.string().email("Email format is not valid").required("Email is required"),
  password: yup.string().required("Password is required").min(6),
  name: yup.string().required("Name is required"),
});

const Register = () => {
  const defaultValues = { email: "", password: "", name: "" };

  const { register, handleSubmit } = useForm<IFormData>({ defaultValues, resolver: yupResolver(schema) });

  const onSubmit = (params: IFormData) => {
    console.log(params);
  };
  const onError = (errors: FieldErrors<IFormData>) => console.log(errors);

  const isLoading = false;

  return (
    <FormWrapper title="Create an Account" description="Enter your Email and Password to Create an account">
      <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-3">
        <Input placeholder="Username" {...register("name")} />
        <Input placeholder="name@example.com" {...register("email")} />
        <Input type="password" placeholder="Password" {...register("password")} />
        <Button>{isLoading ? <LoaderIcon className="animate-spin" /> : "Create an Account"} </Button>
      </form>
      <LinkBlock link="login" text="Already have an account?" />
    </FormWrapper>
  );
};

export default Register;
