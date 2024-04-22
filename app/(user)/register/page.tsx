import Link from "next/link";
import FormWrapper from "../_components/FormWrapper";

const Register = () => {
  return (
    <FormWrapper title="Create an Account" description="Enter your Email and Password to Create an account">
      Register Form
      <p>
        Already have an account?{"\u00A0"}
        <Link href={"/login"} className="text-blue-500">
          Click here to Login
        </Link>
      </p>
    </FormWrapper>
  );
};

export default Register;
