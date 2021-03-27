import React, { useState, useRef } from "react";
import { Button, Typography, Form, Select, Input } from "antd";
import "./WelcomForm.scss";

const WelcomForm = () => {
  const { Text, Title } = Typography;

  return (
    <div className="welcomeForm">
      <Title level={3} className="welcomeForm-title">
        <Text strong>TITLE</Text>
      </Title>

      <Form className="welcomeForm__form">
        <Form.Item
          className="welcomeForm__form-item"
          name={["user", "wordsLevel"]}
          label="WORD DIFFICULT"
          initialValue="0"
        >
          <Select
            className="welcomeForm__form-select"
            placeholder="LEVEL DIFFICULT"
          >
            <Select.Option value="0">FIRST</Select.Option>
            <Select.Option value="1">SECOND</Select.Option>
            <Select.Option value="2">THIRD</Select.Option>
            <Select.Option value="3">FOURTH</Select.Option>
            <Select.Option value="4">FIFTH</Select.Option>
            <Select.Option value="5">SIXTH</Select.Option>
          </Select>
        </Form.Item>

        <Button
          className="welcomeForm__form-btnStart"
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
