import * as React from "react";
import {styled} from "@mui/material";
import {useForm} from "react-hook-form";

import {Button, Link, OutlinedInput, Text, H1} from "@shared/ui/atoms";
import {MainTemplate, CenterContent} from "@shared/ui/templates";
import {Col, Row} from "@shared/lib/layout";

interface Form {
  username: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const {register, formState, handleSubmit} = useForm<Form>({
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const form = {
    username: register("username", {
      required: {
        value: true,
        message: "Username is required",
      },
    }),
    password: register("password", {
      required: {
        value: true,
        message: "Password is required",
      },
    }),
  };

  const handleFormSubmit = (data: Form) => {
    console.log(data);
  };

  return (
    <MainTemplate>
      <CenterContent>
        <Col w="100%" align="center" gap={8}>
          <Col w="100%" gap={3}>
            <Row w="100%" justify="center">
              <H1>What&apos;s good?</H1>
            </Row>

            <Row w="100%" justify="center">
              <Text size={2} secondary>
                Sign into your account to play chess.
              </Text>
            </Row>
          </Col>

          <Col w="100%" align="center" gap={3}>
            <FormWrapper w={50} p={4}>
              <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                      type="password"
                      label="Password"
                      error={!!formState.errors.password}
                      helperText={formState.errors.password?.message}
                      fullWidth
                      {...form.password}
                    />
                  </Row>

                  <Row w="100%">
                    <Button fullWidth disabled={!formState.isValid}>
                      Sign in
                    </Button>
                  </Row>
                </Col>
              </form>
            </FormWrapper>

            <Col w="100%" gap={1}>
              <Row w="100%" justify="center">
                <Text secondary>Do not have an account yet?</Text>&nbsp;
                <Link to="/register" underline>
                  Sign up
                </Link>
              </Row>

              <Row w="100%" justify="center">
                <Text secondary>Forgot a password?</Text>&nbsp;
                <Link to="/reset" underline>
                  Reset
                </Link>
              </Row>
            </Col>
          </Col>
        </Col>
      </CenterContent>
    </MainTemplate>
  );
};

const FormWrapper = styled(Col)`
  border: 1px solid #e3e3e3;
  border-radius: ${({theme}) => theme.shape.borderRadius};
`;
