import React from "react" ;
import axios from "axios" ;
class ButFiles extends React.Component {
state = {
files: null ,
};
handleFile(e) {
// Getting the files from the input
let files = e.target.files;
this .setState({ files });
}
handleUpload(e) {
let files = this .state.files;
let err1 = false;
for (const [key, element] of Object.entries(files)) {
    let formData = new FormData();
    formData.append( "file" , element);
    formData.append( "name" , "Name" );
    axios({
    url: `${process.env.REACT_APP_API_URL}/files`,
    method: "POST" ,
    headers: {
    },
    data: formData,
    })
    .then((res) => { /*alert ("все хорошо")*/}) 
    . catch ((err) => {err1=true });
    };
    if (err1) alert ("все плохо")
    else alert ("все хорошо")
}
render() {
return (
<div>
<input
type= "file"
multiple= "multiple" //To select multiple files
onChange={(e) => this .handleFile(e)}
/>
<button onClick={(e) => this .handleUpload(e)}
>Начать обработку</button>
</div>
);
}
}
export default ButFiles;