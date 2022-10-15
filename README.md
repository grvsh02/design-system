
# HOMEZY DESIGN SYSTEM

# Commands

The recommended workflow is to run TSDX in one terminal:



## API Reference



```http
  npm install # or yarn install
```

| Parameter | Type     | Description                                                        |
| :-------- | :------- |:-------------------------------------------------------------------|
| `npm start` | `script` | **Install all the node_modules required to run the application.**. |


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
- [@saumy4854](https://github.com/saumy4854)


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


📌 C - ICON(🛒)

🔗 C.1 - Default : 

In this the user can view the icon/logo of our company. And as we know :
 ```
 “The power of visual language — never forget it. 
 The good, the bad and the ugly. 
 It really does hold some weight in how it can sway and persuade whole groups of people.”
 ```
Our default icon represents a shopping cart(🛒) which is used by almost everyone when they go for purchasing something for
their family ,dear ones or themselves.
>🔻Note : Our icon can be changed using the icon option.

| Name | type    | Description                       |
| :-------- | :------- | :-------------------------------- |
| `icon`      | `string` | **The icon can be changed using this option.**|
| `size`      | `string` | **The application takes size according to the device.**|
| `type`      | `string` | **It can be either be bold or outline.**|
| `fill`      | `hex color` | **The color of the icon can be changed.**|

# BANNERS

📌 A - Carousel

🔗 A.1 - Default : 

 - The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.

 - In this the user will get indicators along with the controls - `Prev` and `Next`.
                        
 - 📝Important : The user can see all the latest collection,offers(disconts) on whole variety of different
   things(cothes,footwear,electronic gadgets,etc.).

 - The user can shop the products shown in the carousel by just clicking on the `Shop Now` button which gets 
   highlighted whenever the user hovers the mouse over it.

   
# SELECTORS

📌 A - Dropdown

🔗 A.1 - Default : 

In this the user can can select the items that they want to buy in the dropdown box.
The following is  the description for the controls.
| Name | Control |
| ------ | ------ |
| `showOnHover` | The items(options) in the dropdown box gets highlighted on hovering. |
| `label` | Classifying name. |
| `placeholder` | Describes the expected value of an input field. |
| `className` | The size of the dropbox can be altered using this. |
| `items` | Shows the items selected by the user. |

>NOTE : The user can stop the hovering by clicking on the slide button of the `showOnHover` and making it False.


# PRODUCT

📌 A - Icon Card

🔗 A.1 - Default : 

The user can see a sign (♥️) and (XL) at the top - center just below the navbar.

⚙️ (♥️) : This can be used by the user to like the product which they want to buy at that moment or later on.

⚙️ (XL) : The user can set the size of the cloth item, for example - XL = 95 cm = 36 Inches,XXL =44-46 Inches = 112-117 cm.

📌 B - Product Card

🔗 B.1 - Default :

The user can see a product card which is a specific page with all the detailed information about your product.
The user can see the product card in left hand side of the screen.
It has many icon cards inside it which have some features respectively.
For example :

| icon  | Control |
| ------ | ------ |
| `🛒` | The user can shop by clicking on this icon. |
| `⚫` | The user can bookmark it. |
| `♥️` | The user can like it. |
| `👁️` | The user can see the product, it's details and public reviews. |


| Name  | Control |
| ------ | ------ |
| **name** | The name of the product is given in the product card. |
| **price** | The price of the item is shown. |
| **brand** | The brand or the company of the product is shown. |
| **productProps** | The rating, strike price, color options and size options are given. |

>NOTE : The rating is basically a parameter which shows how the customers have likes it and how good the product basically is.
- For example - ⭐⭐⭐⭐ and above are considered as very good products as per the reviews given by the user.


# USER INPUTS

📌 A - LabelTextInput

🔗 A.1 - Default : 

Here the user has to input their  email id through which they have logged in to the website.

💿 The email id should be of the form:

```
local-part@domain name

```

💿 The syntax of the local part - 

```
The local-part or username may be up to 64 characters long and contain:

📩 uppercase and lowercase Latin letters (A-Z, a-z);
📩 numeric values (from 0 to 9);
📩 special characters, such as # ! % $ ‘ & + * – / = ? ^ _`. { | } ~

```
💿 @ sign :

```
The @ symbol connects the domain and the person who owns the email address.

```

💿 Domain name syntax :

```
A domain name consists of one or more parts separated by a dot, such as example.com. Each part must be no longer than 63 characters and can contain:

📩 uppercase and lowercase Latin letters (A-Z, a-z);
📩 numeric values (from 0 to 9), on condition that domains can’t be all numeric;
📩 a hyphen (-), on condition that it is not placed at the beginning or end of the domain.

```


📌 C - IconTextInput

🔗 C.1 - Default :

- This is just a text input box with a icon/A component to render a leading / trailing icon in the TextInput. The user can put their email address in this box.

- Props : 

 ```
⏳ icon (required)
    Type: IconSource
    Icon to show.

⏳ onPress
    Type: () => void
    Function to execute on press.

⏳ forceTextInputFocus
    Type: boolean
    Default value: true
    Whether the TextInput will focus after onPress

⏳ color
    Type: ((isTextInputFocused: boolean) => string | undefined) | string
    Color of the icon or a function receiving a boolean indicating whether the TextInput is focused and returning the color.

⏳ style
    Type: StyleProp<ViewStyle>

⏳ theme
   Type: Theme

 ```

| Name | Description | Default |
| :-------- | :------- | :-------------------------------- |
| placeholder | `string` | **"Email Address"**|
| value | `string` | - |
| onChange | `((value: any) => void)` | **() => {}**|
| charLimit | `hex color` | - |
| charLimit | `number` | - |
| className | `string` | - |
| required | `boolean` | - |
| disabled | `boolean` | - |
| type |`email,text,textarea,password,url,number`| - |
| errorText | `string` | - |
| PreTextIcon | `any` | **SmsTracking**|
| PostTextIcon | `any` | **ArrowRight1**|
| showCharLimit | `boolean` | - |


# LAYOUTS

📌 A - Page Navigator

🔗 A.1 - Default :

- The user can use the filter function which enables searching for particular pages and a limiting of the display to the pages that match certain criteria.

Some of the features :

| Name  | Control |
| ------ | ------ |
| `itemsPerPage` | The user can select the items per page. (`number`) |
| `totalCount` | The user can select the total count of the items. (`number`) |

⚠️ Note : There are total 50 pages.

Navigation symbols (🧭): 

| icon  | attribute |
| ------ | ------ |
| `<<` | The user can shift to extreme left and go to page number 1. |
| `<` | The user can shift to the left page one by one. |
| `>` | The user can shift to the right page one by one. |
| `>>` | The user can shift to extreme right and go to page number 50. |

