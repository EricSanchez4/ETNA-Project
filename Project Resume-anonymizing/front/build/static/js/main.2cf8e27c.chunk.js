(this["webpackJsonpreact-file-upload"]=this["webpackJsonpreact-file-upload"]||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),s=a.n(l),o=(a(23),a(24),a(25),a(3)),i=a(4),c=a(2),u=a(17),d=a(16),p=a(15),m=a.n(p).a.create({baseURL:"http://127.0.0.1:8000",headers:{"Content-type":"application/json"}}),h=new(function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"upload",value:function(e,t){var a=new FormData;return a.append("file",e),m.post("/uploadfile/",a,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:t})}}]),e}()),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).selectFile=n.selectFile.bind(Object(c.a)(n)),n.upload=n.upload.bind(Object(c.a)(n)),n.state={selectedFiles:void 0,currentFile:void 0,progress:0,message:""},n}return Object(i.a)(a,[{key:"selectFile",value:function(e){this.setState({selectedFiles:e.target.files})}},{key:"upload",value:function(){var e=this,t=this.state.selectedFiles[0];this.setState({progress:0,currentFile:t}),h.upload(t,(function(t){e.setState({progress:Math.round(100*t.loaded/t.total)})})).then((function(t){e.setState({message:t.data.message})})).catch((function(t){console.log(t),e.setState({progress:0,message:"Could not upload the file!",currentFile:void 0})})),this.setState({selectedFiles:void 0})}},{key:"render",value:function(){var e=this.state,t=e.selectedFiles,a=e.currentFile,n=e.progress,l=e.message;return r.a.createElement("div",null,a&&r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-info progress-bar-striped",role:"progressbar","aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100",style:{width:n+"%"}},n,"%")),r.a.createElement("label",{className:"btn btn-default"},r.a.createElement("input",{type:"file",onChange:this.selectFile})),r.a.createElement("button",{className:"btn btn-success",disabled:!t,onClick:this.upload},"Upload"),r.a.createElement("div",{className:"alert alert-light",role:"alert"},l))}}]),a}(n.Component);var v=function(){return r.a.createElement("div",{className:"container",style:{width:"600px"}},r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement("h3",null,"Par Amelie Roynette"),r.a.createElement("h4",null,"Uploader de fichier en React + Python (FastAPI)")),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2cf8e27c.chunk.js.map