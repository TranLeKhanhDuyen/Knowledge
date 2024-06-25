import{T as l}from"./index-c2370680.js";import"./jsx-runtime-39fb3a81.js";import"./index-d1005068.js";const u={title:"Components/TextField",component:l,tags:["autodocs"],argTypes:{isShowLabel:{description:"One boolean to test for open or close label of input."},label:{description:"Content of label."},validate:{description:"Validation of input."},additionalClass:{description:"Adds the additional class to the text filed."},placeholder:{description:"Content of text field."}}},e={args:{additionalClass:"input-search",placeholder:"Search ..."}},t={...e,args:{...e.args,isShowLabel:!0,label:"Email",placeholder:"Enter email",additionalClass:"input-text",iconLeft:"search",iconRight:"list"}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    additionalClass: 'input-search',
    placeholder: 'Search ...'
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...InputText,
  args: {
    ...InputText.args,
    isShowLabel: true,
    label: 'Email',
    placeholder: 'Enter email',
    additionalClass: 'input-text',
    iconLeft: 'search',
    iconRight: 'list'
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const h=["InputText","InputSearch"];export{t as InputSearch,e as InputText,h as __namedExportsOrder,u as default};
