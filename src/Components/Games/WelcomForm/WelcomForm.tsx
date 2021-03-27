import React, { useState, useRef } from "react";
import {
  Button,
  Typography,
  Form,
  Select,
  Input,
} from "antd";
import "./WelcomForm.scss";

const WelcomForm = () => {


  const { Text, Title } = Typography;



  return (
   
          <div className="letterSolver__settings">
            <Title level={3} className="letterSolver__start_game-title">
              <Text strong>TITLE</Text>
            </Title>
            <Form >
              <Form.Item
                name={["user", "name"]}
                label="Name"
              >
                <Input
                  placeholder="Name"
                 
                />
              </Form.Item>
       
              <Form.Item
                name={["user", "wordsLevel"]}
                label="WORD DIFFICULT"
                initialValue="0"
              >
                <Select
                  placeholder="LEVEL DIFFICULT"
                >
                  <Select.Option value="0">
                  FIRST
                  </Select.Option>
                  <Select.Option value="1">
                   SECOND
                  </Select.Option>
                  <Select.Option value="2">
                  THIRD
                  </Select.Option>
                  <Select.Option value="3">
                   FOURTH
                  </Select.Option>
                  <Select.Option value="4">
                    FIFTH
                  </Select.Option>
                  <Select.Option value="5">
                  SIXTH
                  </Select.Option>
                </Select>
              </Form.Item>           

              <Button
                className="letterSolver__start_game-btn"
                autoFocus
                htmlType="submit"
              >
               START
              </Button>
            </Form>
          </div>
      
  );
};
export default WelcomForm;