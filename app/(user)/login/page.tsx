"use client";

import { useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

import FormWrapper from "../_components/FormWrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import LinkBlock from "../_components/LinkBlock";

import { loginRequest } from "@/app/_api/strapi";

interface IFormData {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email("Email format is not valid").required("Email is required"),
  password: yup.string().required("Password is required").min(6),
});

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const jwt = getCookie("jwt");
    if (jwt) router.push("/");
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = { email: "", password: "", name: "" };

  const { register, handleSubmit } = useForm<IFormData>({ defaultValues, resolver: yupResolver(schema) });

  const onSubmit = ({ email, password }: IFormData) => {
    console.log("login", email, password);
    setIsLoading(true);
    loginRequest({ identifier: email, password })
      .then(({ data }) => {
        setCookie("user", JSON.stringify(data.user));
        setCookie("jwt", data.jwt);
        toast("Login Successfully");
        router.push("/");
      })
      .catch((e) => {
        toast(e?.response?.data?.error?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const onError = (errors: FieldErrors<IFormData>) => console.log(errors);

  return (
    <FormWrapper title="Login to Account" description="Enter your Email and Password to Login">
      <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-3">
        <Input placeholder="name@example.com" {...register("email")} />
        <Input type="password" placeholder="Password" {...register("password")} />
        <Button>{isLoading ? <LoaderIcon className="animate-spin" /> : "Login"} </Button>
      </form>
      <LinkBlock link="register" text="Don't have an account?" />
    </FormWrapper>
  );
};

export default Login;
