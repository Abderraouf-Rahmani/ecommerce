<div align='center' >
[![RAOUF STORE](https://i.imgur.com/jrnzZO3.png "RAOUF STORE")](https://raouf.vercel.app/ "RAOUF STORE")
</div>



## About The Project
RAOUFラウフ is an eCommerce website that minimalistic and simple design lifestyle enthusiasts can buy from.

### Built With:
- [NextJs](https://nextjs.org/)
- [Vanilla Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Sanity.io](https://www.sanity.io/)
- [Stripe](https://stripe.com/)

### Getting Started
#### Prerequisites
To run this project on your local machine make sure you have the latest package manager installed:
```sh
  npm install npm@latest -g
  ```
#### Installation
1. clone the repo:
```sh
   git clone https://github.com/Abderraouf-Rahmani/ecommerce.git
```
2.  Install NPM packages
   ```sh
   npm install npm@latest -g
```
3. Create an .env file

This project has four envirement variables:
```sh
NEXT_PUBLIC_SANITY_TOKEN = <your_sanity_token_here>
SANITY_PROJECT_ID = <your_sanity_project_id_here>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = <your_stripe_publishable_key_here>
STRIPE_SECRET_KEY=<your_stripe_secret_key_here>
```

* Sanity.io is an open source headless real-time CMS that you can customize with JavaScript and React, you'll need to create an account there and fill in the first two variables with their respective values.
* The last two variables are from Stripe, which is a payment processing platform, you'll need to make an account as well and fill in the variables with their respective values.

4. Run the development server


```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Roadmap

- [x] Make the website responsive
- [x] Add Success and Cancelled pages
- [ ] Add swiping functionality for the product's carousel.
- [ ] Add a filter to sort products by price.
- [ ] Multi-language Support
    - [ ] French
    - [ ] Arabic

## Contact
Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/a-rahmani/)

## Acknowledgments

This project made possible because a [tutorial](https://www.youtube.com/watch?v=4mOkFXyxfsU) I watched on a youtube channel called [JavaScriptMastery](https://www.youtube.com/c/JavaScriptMastery), I just gave the front-end a better styling.
