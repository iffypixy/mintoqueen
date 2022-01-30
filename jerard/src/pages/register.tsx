import * as React from "react";
import {styled} from "@mui/material/styles";

import {MainTemplate, CenterContent} from "@shared/ui/templates";
import {Col, Row} from "@shared/lib/layout";
import {Button, Link, OutlinedInput, Text, H1} from "@shared/ui/atoms";

export const RegisterPage: React.FC = () => {
  return (
    <MainTemplate>
      <CenterContent>
        <Col w="100%" align="center" gap={8}>
          <Col w="100%" gap={3}>
            <Row w="100%" justify="center">
              <H1>Join mintoqueen</H1>
            </Row>

            <Row w="100%" justify="center">
              <Text size={2} secondary>
                Enjoy another level of chess experience.
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
                      type="email"
                      name="email"
                      label="Email"
                      fullWidth
                    />
                  </Row>

                  <Row w="100%" justify="space-between">
                    <Row w="48%">
                      <OutlinedInput
                        type="password"
                        name="password"
                        label="Password"
                        fullWidth
                      />
                    </Row>

                    <Row w="48%">
                      <OutlinedInput
                        type="password"
                        name="confirm"
                        label="Confirm"
                        fullWidth
                      />
                    </Row>
                  </Row>

                  <Row w="100%">
                    <Button fullWidth disabled>
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
  border: 1px solid #e3e3e3;
  border-radius: ${({theme}) => theme.shape.borderRadius};
`;
