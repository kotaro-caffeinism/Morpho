// import logo from './logo.svg';
import "./App.css";
import "./reset.css";

import React, { useRef } from "react";
import Editor from "@monaco-editor/react";

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
      <Editor
        height="30vh"
        defaultLanguage="javascript"
        defaultValue="// ここにコードを書いてください"
        onMount={handleEditorDidMount}
      />
      <button onClick={showValue}>Show value</button>
    </>
  );
}

export default App;
