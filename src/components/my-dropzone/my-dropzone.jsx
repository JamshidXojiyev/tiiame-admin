import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  DropzoneContainer,
  H1,
  SPAN,
  SuccessStyle,
  UpdateStyle,
  UploadContainer,
  ValueBlock,
} from "./my-dropzone.s";
import { ReactComponent as UploadIcon } from "./icon/upload.svg";
import { ReactComponent as SuccessIcon } from "./icon/successFile.svg";
import { ReactComponent as UpdateIcon } from "./icon/update.svg";

function MyDropzone(props) {
  const [fileRes, setFileRes] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const file_res = new FormData();
      file_res.append("file", file);
      setFileRes(file_res);

      // const reader = new FileReader();

      // reader.onabort = () => alert("file reading was aborted");
      // reader.onerror = () => alert("file reading has failed");
      // reader.onload = () => {
      //   // Do whatever you want with the file contents
      //   const binaryStr = reader.result;
      //   setFileRes(binaryStr);
      // };
      // reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: props.accept ? props.accept : "fill/*",
    disabled: props.disabled,
  });
  useEffect(() => {
    props.fileResponse(fileRes);
  }, [fileRes]);
  return (
    <DropzoneContainer width={props.width} height={props.height}>
      {fileRes ? (
        <SuccessStyle>
          <SuccessIcon />
          <UpdateStyle onClick={() => setFileRes(null)}>
            <UpdateIcon />
          </UpdateStyle>
        </SuccessStyle>
      ) : (
        <UploadContainer {...getRootProps()}>
          <input {...getInputProps()} />
          <UploadIcon />
          <ValueBlock>
            <H1>Drag image</H1>
            <H1>
              or browse to{" "}
              <SPAN>
                select {props.selectValue ? props.selectValue : "file"}
              </SPAN>
            </H1>
          </ValueBlock>
        </UploadContainer>
      )}
    </DropzoneContainer>
  );
}

export default MyDropzone;

// import React, { useEffect, useState } from "react";
// import {
//   CheckSVGContent,
//   CloseBtn,
//   DropzoneBlock,
//   H1,
//   OrderIMG,
//   SPAN,
// } from "./my-dropzone.s";
// import { MyDiv } from "../../global-styles/my-div.s";
// import Dropzone from "react-dropzone";
// import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
// import { ReactComponent as ExportSVG } from "../../assets/icons/export.svg";

// function MyDropzone(props) {
//   const [file, setFile] = useState([]);
//   const [fileRes, setFileRes] = useState(null);
//   const [imgURL, setImgURL] = useState(props.img);

//   useEffect(() => {
//     if (file.length > 0) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setFileRes(reader.result);
//       };
//       reader.readAsDataURL(file[0]);
//     }
//   }, [file]);
//   useEffect(() => {
//     props.set_file(file[0]);
//   }, [fileRes]);

//   return (
//     <>
//       <Dropzone onDrop={(e) => setFile(e)}>
//         {({ getRootProps, getInputProps }) => (
//           <DropzoneBlock error={props.error} {...getRootProps()}>
//             {fileRes || imgURL.type ? (
//               props.type === "image" ? (
//                 <MyDiv relative center>
//                   <OrderIMG src={fileRes ? fileRes : imgURL.url} />
//                   <CloseBtn
//                     icon
//                     onClick={() => {
//                       setFile([]);
//                       setFileRes(null);
//                       setImgURL("");
//                     }}
//                     text={<CloseIcon />}
//                   />
//                 </MyDiv>
//               ) : (
//                 <>
//                   <CheckSVGContent />
//                 </>
//               )
//             ) : (
//               <MyDiv display="flex" width="auto" gap="48px">
//                 <input {...getInputProps()} accept="image/svg+xml" />
//                 <ExportSVG />
//                 <MyDiv>
//                   <H1>Drag {props.type}</H1>
//                   <H1>
//                     or browse to <SPAN>select file</SPAN>
//                   </H1>
//                 </MyDiv>
//               </MyDiv>
//             )}
//           </DropzoneBlock>
//         )}
//       </Dropzone>
//     </>
//   );
// }

// export default MyDropzone;
