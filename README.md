
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


📌 B - CARD

🔗 B.1 - Default : 

The user can see a flexible and extensible content container at the top-center of the screen.
It contains a wide variety of content, contextual background colors, powerful display options and description.

In this the user will get the information about the items that they have selected for purchase.
The card contains : 

♦️ `title => This contains the title of the card.`

♦️ `description => This section contains the description of the card.`

♦️ `background => This will contain the background color of the card.`

♦️ `className => This is used to change the width and margin of the card.`

🔗 B.2 - Example Design : 

Here the user will get two cards which are respectively : 
                
                💡 Free Return    -  This left side card will help the user to return the 
                                     the items within 30 days if the user is not satisfied
                                     with the product.
                                     > Note : The user should read all the guidelines of the return policy.
                💡 Free Shipping  -  The user will not have to pay the shipping price if they purchase items above ₹500(INDIAN RUPEES).

🔳 Here also the width and the margin can be set using the className, for - example : `w - a m - b`. The 'a' and 'b' are the respective width and margin.