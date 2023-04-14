import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Controller } from 'react-hook-form';

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
      ['link', 'image'],
      ['clean']
    ],
  };
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'align', 'center', 'right', 'justify',
    'link', 'image'
  ];
  
  const EditorHtml = ({ name, control, defaultValue }) => {
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field: { onChange, value } }) => (
          <ReactQuill value={value} onChange={onChange} theme="snow" modules={modules} formats={formats} />
        )}
      />
    );
  };

  export default EditorHtml;