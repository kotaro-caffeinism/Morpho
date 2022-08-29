import "./App.css";
import "./reset.css";

import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import Question from "./component/Question.jsx";

import { auth } from "./firebase";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

import fetch from "node-fetch";
import _ from "lodash";

function App() {
  const [isPassed, setAsPassed] = useState(false);
  const { user } = useAuthContext();

  const monacoRef = useRef(null);

  function handleEditorWillMount(monaco) {
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function handleEditorDidMount(editor, monaco) {
    monacoRef.current = editor;
  }

  function test() {
    const studentCode = JSON.stringify(monacoRef.current.getValue());
    const arg = studentCode.match(/(?<=\().*?(?=\))/)[0];
    const expression = studentCode
      .match(/(?<=\{).*?(?=\})/)[0]
      .replace(/\\n|\\r\\n|\\r/g, "");
    const actual = new Function(arg, expression)(1);
    const expected = 1;

    if (_.isEqual(actual, expected)) {
      setAsPassed(true);
      alert("Test Passed!");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

  // not working
  async function submitCode() {
    const studentCode = JSON.stringify(monacoRef.current.getValue());
    console.log(studentCode, "studentCode ");

    const response = await fetch("/assessment", {
      method: "POST",
      body: studentCode,
    });
    alert("提出を受け付けました！");
    console.log(response, "res");
  }

  return !user ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Question />
      <Editor
        height="30vh"
        defaultLanguage="javascript"
        defaultValue="// ここにコードを書いてください"
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
      />
      {!isPassed ? (
        <button onClick={test}>テストを実行する</button>
      ) : (
        // not working
        <button onClick={submitCode}>提出する</button>
      )}
    </>
  );
}

export default App;
