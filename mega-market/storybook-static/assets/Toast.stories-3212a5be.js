import{j as a}from"./jsx-runtime-39fb3a81.js";import{T as r,s as n}from"./index-35c3c3d4.js";import"./index-d1005068.js";const y={title:"Components/Toast",component:r,tags:["autodocs"],argTypes:{message:{description:"Message of toast"},type:{description:"Type of toast",control:{type:"select",options:["success","error","info","warning"]}}}},s={render(){return n("Add to cart successfully","success"),a.jsx(r,{})}},o={render(){return n("Error","error"),a.jsx(r,{})}},e={render(){return n("Info","info"),a.jsx(r,{})}},t={render(){return n("Warning","warning"),a.jsx(r,{})}};var c,u,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render() {
    showToast('Add to cart successfully', 'success');
    return <Toast />;
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,i,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render() {
    showToast('Error', 'error');
    return <Toast />;
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var T,w,g;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render() {
    showToast('Info', 'info');
    return <Toast />;
  }
}`,...(g=(w=e.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var f,S,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render() {
    showToast('Warning', 'warning');
    return <Toast />;
  }
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const E=["ShowToastSuccess","ShowToastError","ShowToastInfo","ShowToastWarning"];export{o as ShowToastError,e as ShowToastInfo,s as ShowToastSuccess,t as ShowToastWarning,E as __namedExportsOrder,y as default};
