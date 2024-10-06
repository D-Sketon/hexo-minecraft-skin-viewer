import { describe, it, expect } from "vitest";

const processArgs = require("../lib/processArgs.js");

describe("processArgs", () => {
  it("only type and content", () => {
    const args = ["type", "content"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      type: "type",
      content: "content",
      autoRotate: true,
      animation: false,
      width: 300,
      height: 400,
      args: [],
    });
  });

  it("type, content, autoRotate - true", () => {
    const args = ["type", "content", "true"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      type: "type",
      content: "content",
      autoRotate: "true",
      animation: false,
      width: 300,
      height: 400,
      args: [],
    });
  });

  it("type, content, autoRotate - false", () => {
    const args = ["type", "content", "false"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      type: "type",
      content: "content",
      autoRotate: "false",
      animation: false,
      width: 300,
      height: 400,
      args: [],
    });
  });

  it("type, content, autoRotate, animation", () => {
    const args = ["type", "content", "true", "true"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      type: "type",
      content: "content",
      autoRotate: "true",
      animation: "true",
      width: 300,
      height: 400,
      args: [],
    });
  });

  it("type, content, autoRotate, animation, width", () => {
    const args = ["type", "content", "true", "true", "500"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      type: "type",
      content: "content",
      autoRotate: "true",
      animation: "true",
      width: "500",
      height: 400,
      args: [],
    });
  });

  it("type, content, autoRotate, animation, width, height", () => {
    const args = ["type", "content", "true", "true", "500", "600"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      type: "type",
      content: "content",
      autoRotate: "true",
      animation: "true",
      width: "500",
      height: "600",
      args: [],
    });
  });

  it("type, content, autoRotate, animation, width, height, args", () => {
    const args = [
      "type",
      "content",
      "true",
      "true",
      "500",
      "600",
      "arg1",
      "arg2",
    ];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      type: "type",
      content: "content",
      autoRotate: "true",
      animation: "true",
      width: "500",
      height: "600",
      args: ["arg1", "arg2"],
    });
  });

  it("type, content, autoRotate, width", () => {
    const args = ["type", "content", "true", "500"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      type: "type",
      content: "content",
      autoRotate: "true",
      animation: false,
      width: "500",
      height: 400,
      args: [],
    });
  });

  it("type, content, autoRotate, args", () => {
    const args = ["type", "content", "true", "arg1", "arg2"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      type: "type",
      content: "content",
      autoRotate: "true",
      animation: false,
      width: 300,
      height: 400,
      args: ["arg1", "arg2"],
    });
  });

  it("type, content, autoRotate, width, args", () => {
    const args = ["type", "content", "true", "500", "arg1", "arg2"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      type: "type",
      content: "content",
      autoRotate: "true",
      animation: false,
      width: "500",
      height: 400,
      args: ["arg1", "arg2"],
    });
  });

  it("type, content, width, args", () => {
    const args = ["type", "content", "500", "arg1", "arg2"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      type: "type",
      content: "content",
      autoRotate: true,
      animation: false,
      width: "500",
      height: 400,
      args: ["arg1", "arg2"],
    });
  });

  it("type, content, width, height, args", () => {
    const args = ["type", "content", "500", "600", "arg1", "arg2"];
    const result = processArgs(args);
    expect(result).toEqual({
      id: expect.any(String),
      type: "type",
      content: "content",
      autoRotate: true,
      animation: false,
      width: "500",
      height: "600",
      args: ["arg1", "arg2"],
    });
  });
});
