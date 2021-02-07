# News App

## Things to note

1. This application uses the news api for all the data within.
2. This is a development application and meant for educational purposes.
3. You will need an API key from News API in order to access their data.
4. The API key is for development purposes only. If you plan to push this to production, then you will need to get a production API key from them as well.

## About the Application

1. Build in `reactjs`
2. Styled with `tailwindcss` because classnames are hard to come up with.
3. Still in development so there is no live demo.
4. Uses `axios` to fetch data because it is more secure than the fetch API.
5. `momentjs` to format the dates on the articles.

### Optional

6. `react-icons` for icons in the application.
7. `react-router-dom` to handle our internal routing.

More information will be added as the application continues to come together.

## Features

1. Search form to search for articles

## How to run

1. Clone the repository using `git clone *LINK TO REPO*` or download the zip file.
2. Open up the cloned/extracted folder in your code editor and run `npm install` to install `node_modules`.
3. Register for an API key from News API and then create a `.env` file in the root of your workspace.
4. Inside the `.env` file, paste the following: `REACT_APP_NEWS_API_KEY=YOUR_API_KEY` and then replace `YOUR_API_KEY` with your actual API key.
5. Spin up your development server by running `npm start` in your terminal.
6. Your dev server will open up on `http://localhost:3000` if there is nothing else running on that port, and you should be able to see some articles as well as perform searches.

# NOTE:

Do NOT push your API key to GitHub. Avoid this by confirming that your `.env` file is included in your `.gitignore` file. If you have cloned this repo, then it is already included, but always confirm.

# Update

I'm thinking about using another API to get the news articles because News API is not served over `https` which poses both a security risk as well as a challenge when deploying to Netlify.
