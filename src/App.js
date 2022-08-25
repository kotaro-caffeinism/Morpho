import "./App.css";
import "./reset.css";

import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import Question from "./component/Question.jsx";

function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
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
      <button onClick={showValue}>Show value</button>
      <footer>Morpho</footer>
    </>
  );
}

export default App;
