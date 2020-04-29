## Use Mobx Decorator

#####1. yarn add --dev customize-cra react-app-rewired  

#####2. add config-ovverides.js
```javascript
const { 
  addDecoratorsLegacy, // decorator를 사용할 수 있도록 해주는 config
  disableEsLint,
  override,
} = require("customize-cra");

// 사용자 정의 웹팩 설정
module.exports = {
  webpack: override(
      disableEsLint(),
      addDecoratorsLegacy()
  ),
};
```

#####3. yarn add --dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties

#####4. add .babelrc

```javascript
{
  "presets": [
    "react-app"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ]
  ]
}
```
