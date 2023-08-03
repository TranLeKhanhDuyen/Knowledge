# PRACTICE 2 - HTML/CSS
*Aug 02, 2023*

### OVERVIEW
* This document provides analyze the design, planning and questions for HTML-CSS practice two.
* You can refer details design here: [Figma](https://www.figma.com/file/QIMFoTvHjbrnZy6sp24DKz/Yoora-CMS-(Copy)-(Copy)?type=design&node-id=0-1&mode=design&t=sMtIHNgTzubuZnWL-0)
* GitHub: [repo](https://github.com/TranLeKhanhDuyen/intern-agility/tree/learn-html-css)
* My Trello: [here](https://trello.com/b/yQlmWuS5/internship-duyen-tran-practicetwo0)
### TIMELINE
* Start date: 02/08/2023
* End date: 11/08/2023
  
### TEAMSIZE
* 1 dev

### TECHNICAL
* HTML5
* CSS3
* Vercal

### SUPPORTED BROWSER
* Google Chrome: Version 114.0.5735.199

### EDITOR
* Visual Studio Code
  
### REQUIMENTS
* Upgrade the existing practice to responsive
* Work fine on Chrome browser latest version
* Getting the code to work cross browser latest version (Chrome, Firefox, MS Edge, Opera, Safari)


### TARGET
* Apply knowledge to responsive practice one design
* Used media queries fcoor popular screen size


### STRUCTURE HTML
The layout inclues: 14 sections
* Header
  * Navbar
  * Button
  * Logo
  * Background
* Hero section
  * Descript content
  * Images
  * Input form
  * Background 
* Partner section
  * Logo images
* Benefit section
  * Cards
* Revenue-statis section
  * Image 
  * Tag
* Maketing section
  * Tag
  * Images 
* Service section
  * Tag
  * Images 
* Integrations section
  * Logo images
* New-service section
  * Images
* Revenue section
  * Avata images
* Comments section
  * Avata images
* Supercharge section
  * Button
* Footer
  * Logo
  * Icon 
* Copyright
### CSS
* Colors
  * Primary-color: #fff
  * Secondary-color: ##F4F4F4
  * Tertiary-color: #004050

* Font-family
  * Primary-font: Satoshi
* Font-weight
  * fw-regular: 400
  * fw-semibold: 500
  * fw-bold: 700
* Font-size
  * text-sm: 14px
  * text-md: 16px
  * text-lg: 18px
  * text-xl: 32px
  * text-2xl: 48px
  * text-3xl: 64px

### FOLDER STRUCTURE

```
|-- practice-two
    |-- src
        |-- assets
        |-- sections
        |-- styles
           |-- base
           |-- components
           |-- layout
           |-- pages
           |-- themes
           |-- utils
           |-- vendors
           |-- main.css
        |-- index.html
    |-- .editorconfig
    |-- .gitignore
    |-- commitlint.config.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
|-- README.md

```

### STEPS INSTALL AND RUN CODE
- Step 01: Clone repository:

```
git clone -b feature/practice-two <https://github.com/TranLeKhanhDuyen/intern-agility.git>
```

- Step 02: Move to folder practice-two:

```
cd practice-two
```

- Step 03: Install dependencies:

```
npm install
```

- Step 04: Finally run with:

```
npm start
```