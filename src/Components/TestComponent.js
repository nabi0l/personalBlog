import React, { useEffect } from "react";
import { testConsoleLog } from "../test";

const TestComponent = () => {
  useEffect(() => {
    console.log("TestComponent mounted");
    testConsoleLog();
  }, []);

  return (
    <div className="bg-red-100 p-4 m-4 rounded-lg">
      <h2 className="text-xl font-bold text-red-800">Test Component</h2>
      <p className="text-red-600">
        This is a test component to check console logs
      </p>
      <button
        onClick={() => {
          console.log("Test button clicked");
          testConsoleLog();
        }}
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Test Console Log
      </button>
    </div>
  );
};

export default TestComponent;
