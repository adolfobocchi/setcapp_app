import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const HtmlEditor = ({ register, name }) => {
  useEffect(() => {
    register(name); // Registra o campo do formulário
  }, [register, name]);

  return <ReactQuill  />;
};

export default HtmlEditor;
