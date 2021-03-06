import * as React from "react";
import {styled} from "@mui/material";
import {useForm} from "react-hook-form";

import {Button, Link, OutlinedInput, Text, H1} from "@shared/ui/atoms";
import {MainTemplate, CenterContent} from "@shared/ui/templates";
import {Col, Row} from "@shared/lib/layout";
import {regex} from "@shared/lib/regex";

interface Form {
  username: string;
  email: string;
  password: string;
  confirm: string;
}

export const RegisterPage: React.FC = () => {
  const {register, handleSubmit, getValues, trigger, formState} = useForm<Form>(
    {
      mode: "onChange",
      defaultValues: {
        username: "",
        email: "",
        password: "",
        confirm: "",
      },
    },
  );

  const form = {
    username: register("username", {
      required: {
        value: true,
        message: "Username is required",
      },
      minLength: {
        value: 5,
        message: "Username must contain at least 5 characters",
      },
      maxLength: {
        value: 20,
        message: "Username must not exceed 20 characters",
      },
      pattern: {
        value: regex.username,
        message: "Username is not valid",
      },
    }),
    email: register("email", {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: regex.email,
        message: "Email is not valid",
      },
    }),
    password: register("password", {
      minLength: {
        value: 8,
        message: "Password must contain at least 8 characters",
      },
      maxLength: {
        value: 100,
        message: "Password must not exceed 100 characters",
      },
      required: {
        value: true,
        message: "Password is required",
      },
    }),
    confirm: register("confirm", {
      required: {
        value: true,
        message: "Password confirm is required",
      },
      validate: (v) => v === getValues().password || "Passwords do not match",
    }),
  };

  const handleFormSubmit = (data: Form) => {
    console.log(data);
  };

  return (
    <MainTemplate>
      <CenterContent>
        <Col w="100%" align="center" gap={7}>
          <Col w="100%" gap={2}>
            <Row w="100%" justify="center">
              <H1>Join mintoqueen</H1>
            </Row>

            <Row w="100%" justify="center">
              <Text size={2} secondary>
                Enjoy another level of chess experience.
              </Text>
            </Row>
          </Col>

          <Col w="100%" align="center" gap={3}>
            <FormWrapper w={50} p={4}>
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Col gap={3}>
                  <Col gap={2}>
                    <Row w="100%" justify="center">
                      <OutlinedInput
                        type="text"
                        label="Username"
                        error={!!formState.errors.username}
                        helperText={formState.errors.username?.message}
                        fullWidth
                        {...form.username}
                      />
                    </Row>

                    <Row w="100%" justify="center">
                      <OutlinedInput
                        type="email"
                        label="Email"
                        error={!!formState.errors.email}
                        helperText={formState.errors.email?.message}
                        fullWidth
                        {...form.email}
                      />
                    </Row>

                    <Row w="100%">
                      <OutlinedInput
                        type="password"
                        label="Password"
                        error={!!formState.errors.password}
                        helperText={formState.errors.password?.message}
                        fullWidth
                        {...form.password}
                        onChange={(event) => {
                          form.password.onChange(event).then(() => {
                            trigger("confirm");
                          });
                        }}
                      />
                    </Row>

                    <Row w="100%">
                      <OutlinedInput
                        type="password"
                        label="Confirm"
                        error={!!formState.errors.confirm}
                        helperText={formState.errors.confirm?.message}
                        fullWidth
                        {...form.confirm}
                      />
                    </Row>
                  </Col>

                  <Row w="100%">
                    <Button
                      fullWidth
                      type="submit"
                      disabled={!formState.isValid}
                    >
                      Create an account
                    </Button>
                  </Row>
                </Col>
              </form>
            </FormWrapper>

            <Row w="100%" justify="center">
              <Text secondary>Do you already have an account?</Text>&nbsp;
              <Link to="/login" underline>
                Sign in
              </Link>
            </Row>
          </Col>
        </Col>
      </CenterContent>
    </MainTemplate>
  );
};

const FormWrapper = styled(Col)`
  border: 1px solid ${({theme}) => theme.palette.divider};
  border-radius: ${({theme}) => theme.shape.borderRadius};
`;
