
# HOMEZY DESIGN SYSTEM

# Commnands

The recommended workflow is to run TSDX in one terminal:



## API Reference



```http
  npm start # or yarn start
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `npm start` | `script` | **execute the defined file without typing its execution command.**.|


This builds to `/dist` and runs the project in watch mode so any edits you
save inside `src`causes a rebuild to `/dist`.

Then run either storybook or the example playground:

## Storybook

Run inside another terminal:
```http
  yarn storybook
```

This loads the story from `./stories`.

## Contributers

- [@yakatyansh](https://github.com/yakatyansh)
- [@grvsh02](https://github.com/grvsh02)


# Components
The user can get a precis or an overview of all the components 
down below.

# Basic Elements
📌 A - BUTTON

🔗 A.1 - Default : In the default, the user will get a pre-set design for the button. The iconProps is 
set to :
 ```
iconProps : {
icon : "ShoppingCart"
type : "Bold"
}
 ```
The user can see the button at the top - center of the screen just below the navbar. The label of the 
button is `Shop Now`. By clicking on the button the user can shop the items that they have selected.
The size can be changed according to the device in which the application has been opened: 'xs','sm' and 'base'.

🔗 A.2 - Variants : In this the pre - set design will be removed and the user can put it's own iconProps. Apart from this the rest is same as the 
default button.

🔗 A.2 - Disabled :  In this the button will be disabled and the user cannot use it anymore to shop.
To use the button again, the user has to enable the button by making the sliding button to false in the disabled section.
