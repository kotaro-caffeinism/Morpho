import "./App.css";
import "./reset.css";

import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import Question from "./component/Question.jsx";

function App() {
  const [isPassed, setAsPassed] = useState(false);
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function test() {
    alert(editorRef.current.getValue());
    setAsPassed(true);
  }

  function submitCode() {
    alert(editorRef.current.getValue());
  }

  return (
    <>
      <header>Morpho</header>
      <Question />
      <Editor
        height="30vh"
        defaultLanguage="javascript"
        defaultValue="// ここにコードを書いてください"
        onMount={handleEditorDidMount}
      />
      {!isPassed ? (
        <button onClick={test}>テストを実行する</button>
      ) : (
        <button onClick={submitCode}>提出する</button>
      )}
      <footer>Morpho</footer>
    </>
  );
}

export default App;
