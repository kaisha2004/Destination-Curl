![Alt Text](https://media.giphy.com/media/26BRHHtEXdVVxVFmw/giphy.gif)

<br>
<br>
<br>

# Destination-Curl

### Project Overview

Did you know that more than 60% of women have curly hair which makes for a mosaic of curl types, curl structures, and curl styles on display everyday. Recently there's been this revolution in hair to focus on curls. No longer are women, heating, straightening, or chemically treating their curls. They are wearing them proudly big, bold, and free. Destination Curl is the online e-commerce equivalent to Sephora for curly girls. We want them to feel at home on our site, while buying products with confidence because they trust us with their precious curls. Also, we want them to engage daily with the site and gain useful tips/tricks on how to love their curls. 

*designed for mobile devices (iPad and iPhone) as well
<br>

### Wireframes

![https://wireframe.cc/E8U9Xt] (url)

- Desktop Landing

![https://wireframe.cc/3UuOfS](url)

- Desktop Resource Show (Product)

![https://wireframe.cc/uaRCtf](url)

- Desktop Resource Index (Hairstyle Ideas)

![https://wireframe.cc/wx8qGQ](url)

- Tablet Resource Index

![https://wireframe.cc/ymGrNk](url)

- Mobile Resource Index

<br>

### MVP

The **Destination Curl** MVP will provide a good starting point for the website. It would introduce consumers to the website by first educating them on the different curl types on the landing page. The products featured would help the consumer make informed decisions on purchases with clickable links to the product page. Here, the consumer would find additional product info and links to learn more about he seller/brands featured. The site would also feature DIY Hairstyle ideas to make styling hair easier for consumers. Also, we want this to be collaborative as consumers will be able to upload their own styles. 

<br>

#### Goals

- Use (2) external Airtable data sets 
- Render API data from Airtable on page 
- Allow users to click on product images (which redirect to individual product pages)
- Allow users to create a post and upload Hairstyle ideas
- External links to seller pages on product pages

<br>

#### Libraries 


|     Library       |                                     Description                                            |
| :--------------:  | :-----------------------------------------------------------------------------------------:|
| React Router Dom  | _A tool that allows me to handle routes in a web app, using dynamic routing._              |
| Styled-Components | _A toole that will allow me to write actual CSS in your JavaScript._                       |
|    Axios          | _A promise-based HTTP client that is used for making HTTP requests to fetch or save data._ |

<br>

#### Data

|    API     | Quality Docs? |                              Website                                  |                     
| :--------: | :-----------: | :--------------------------------------------------------------------:| 
| AirtableAPI|      no       | https://airtable.com/tblgWcItkHpk43HNw/viwyQcDI3557LF6uF?blocks=hide  |

<br>

#### Component Hierarchy

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ App.jsx
      |__ Homepage.jsx
      |__ Product.jsx
      |__ Style_Ideas.jsx
      |__ Navigation.jsx
      |__ Header.jsx
```

<br>

#### Component Breakdown


|  Component   |    Type    | state | props |                                 Description                                           |
| :----------: | :--------: | :---: | :---: | :------------------------------------------------------------------------------------:|
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._                                    |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._                            |
|   Homepage   | functional |   n   |   n   | _The homepage will render product images using cards in flexbox._                     |
|    Product   | functional |   y   |   y   | _The product will serve as states, render the info as props, and link to seller info._|
|  Style Ideas | functional |   n   |   n   | _The style idea pages will show tips and allow users to upload suggestions._          |

<br>

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Uploading data      |    H     |     3 hrs      |     TBD       |     TBD     |
| Gathering Content   |    H     |     4 hrs      |     TBD       |     TBD     |
| Building JS file    |    H     |     7 hrs      |     TBD       |     TBD     |
| Building CSS file   |    H     |     9 hrs      |     TBD       |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     TBD       |     TBD     |
| Deployment          |    H     |     1 hrs      |     TBD       |     TBD     |
| TOTAL               |          |    27 hrs      |     TBD       |     TBD     |

<br>

#### Helper Functions (TBD)


|  Function  | Description                      |
| :--------: | :-------------------------------:|
| TBD        |   _TBD_                          |


<br>

### Post-MVP


- _Carousel of products dispayed by curl type on Homepage._
- _Price displayed inside product image on Homepage._
- _User ability to embed Youtube video on Style Idea page._
- _Hairstyle ideas would be clickable images for more info._
- _Sections that features local stylists and/or more info on product sellers._

<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
