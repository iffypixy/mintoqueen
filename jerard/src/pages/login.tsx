import * as React from "react";
import {styled} from "@mui/material/styles";

import {MainTemplate, CenterContent} from "@shared/ui/templates";
import {Col, Row} from "@shared/lib/layout";
import {Button, Link, OutlinedInput, Text, H1} from "@shared/ui/atoms";

export const LoginPage: React.FC = () => {
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

          <Col w="100%" align="center" gap={4}>
            <FormWrapper w={50} p={5}>
              <form>
                <Col gap={4}>
                  <Row w="100%" justify="center">
                    <OutlinedInput
                      type="text"
                      name="username"
                      label="Username"
                      fullWidth
                    />
                  </Row>

                  <Row w="100%" justify="center">
                    <OutlinedInput
                      type="password"
                      name="password"
                      label="Password"
                      fullWidth
                    />
                  </Row>

                  <Row w="100%">
                    <Button fullWidth disabled>
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
