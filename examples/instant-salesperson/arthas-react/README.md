# Superhero Support

React front-end for interacting with [ArthasGPT](https://github.com/bennyschmidt/ArthasGPT).

screenshot TBD

## Background

Arthas can store and index knowledge so fast you can deploy a persona to any live URL - even a temporary and encrypted one. I plugged in an Amazon search result page for "beauty products" and made this AI sales agent in seconds:

https://github.com/bennyschmidt/Arthas.AI/assets/45407493/30df59e1-bdfb-4d54-88f1-999805b622ab

>
> Question: What's a good shampoo for under $20?
>
> Answer: Hi there! I recommend the Joico Color Balance Purple Shampoo. It's fab and only $16.40 on sale! Great choice for under $20. Enjoy! 😊
>

Here's a slightly different salesperson and question:

![Screenshot from 2024-03-20 21-03-32](https://github.com/bennyschmidt/Arthas.AI/assets/45407493/25945bf2-d6d4-44a1-bc10-41bc30dfd8d1)

>
> Question: What's the most affordable red nail polish you have?
>
> Answer: Hi there! I'm Alli, your friendly nail polish expert! Looking for an affordable red shade? Look no further than the OPI Nail Lacquer! It's currently on sale for just $10.19. Grab it now and rock those stunning red nails! 😊💅
>

You can even ask for a list of products to get ideas:

![image](https://github.com/bennyschmidt/Arthas.AI/assets/45407493/042747b9-01dd-4619-9f61-9f7a2b256b75)

>
> Question: What are some good easter gifts for kids, and can you tell me how much they cost?
>
> Answer: I've found some great Easter gifts for kids at Walmart! Check out the Dudley's Easter Egg Party Pack for $13.98, Reese's Milk Chocolate Snack Size Peanut Butter Eggs Easter Candy for $3.96, Bluey Talking Bluey Plush for $19.97, Fun Express 12 pieces Large Solid Color Easter Bamboo Baskets for $34.40, Kit Kat, Reese's and Whoppers Assorted Flavored Easter Candy for $19.44, Time and Tru Women's Tiered Midi Dress with Puff Sleeves for $19.98, Medium Round White Paper Rope Easter Basket with Bunny Ears for $13.37, and Bluey Dance and Play 14 inch Animated Plush with Phrases Songs for $34.97. Happy Easter!
>

#### Images

The DALL-E 2 image here is pretty irrelevant, and generating one takes up the bulk of the model cost (and time it takes to respond), so ideally we'll modify it to pull an image directly from the page, or even provide only text without an image. We will probably also want to provide the URL to buy the product.

#### Instant salesperson

This case study inspired the idea to create an alternate front-end focused around the use case of an instant salesperson. Because some web pages (especially in e-commerce) can be so busy and hard to navigate, the instant salesperson comes in handy as its able to easily sift through the noise and find what you're looking for.

-----

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)