import{a as d}from"./index-3cfbc138.js";import"./index-c2370680.js";import"./index-084bc635.js";import"./index-5c56a23c.js";import"./jsx-runtime-39fb3a81.js";import"./index-d1005068.js";import"./index-645fbfc4.js";import"./index-35c3c3d4.js";import"./index-e576e493.js";const D={title:"Components/IconTextButton",component:d,tags:["autodocs"],argTypes:{size:{description:"The size of button"},additionalClass:{description:"Add class to the button"},title:{description:"The title of button."},subTitle:{description:"The subs title of button."},iconPosition:{description:"The position of the icon relative to the text",control:{type:"radio",options:["left","right"]}}}},t={args:{size:"sm",icon:"location",title:"Deliver to",subTitle:"423651"}},o={...t,args:{icon:"truck",title:"Track your order",iconPosition:"left"}},e={...t,args:{icon:"buy",title:"Groceries",iconPosition:"right",additionalClass:"select"}};var i,r,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    icon: 'location',
    title: 'Deliver to',
    subTitle: '423651'
  }
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Default,
  args: {
    icon: 'truck',
    title: 'Track your order',
    iconPosition: 'left'
  }
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,p,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Default,
  args: {
    icon: 'buy',
    title: 'Groceries',
    iconPosition: 'right',
    additionalClass: 'select'
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const P=["Default","IconLeft","IconRight"];export{t as Default,o as IconLeft,e as IconRight,P as __namedExportsOrder,D as default};
