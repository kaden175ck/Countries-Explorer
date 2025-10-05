# Countries Explorer

A cool, interactive web application that lets you explore country data using the new **React Router V7** framework. This project fetches data from the [REST Countries API](https://restcountries.com) and allows you to filter and view detailed information about countries, including their names, capitals, regions, populations, and flags.

## Features

- **Dynamic Routing:** Leverages React Router V7 to handle multiple routes and dynamic URL parameters.
- **Data Fetching:** Uses route loaders to retrieve country data from the REST Countries API.
- **Search & Filter:** Users can search for countries by name and filter by region.
- **Responsive UI:** Styled with Tailwind CSS to create a modern, responsive interface.
- **Modular Code:** Organized into reusable components for easy scaling and maintenance.

## Demo

_Link to Demo:_  
[Live Demo](https://kaden175ck.github.io/Countries-Explorer/)

## Usage

- **Home Page:** Get an introduction to the project with a hero section that explains the purpose of the explorer.
- **Countries Page:** View a list of all countries. Use the search input to filter by name and select a region from the dropdown to narrow down your results.
- **Country Detail Page:** Click on any country from the list to see detailed information, including a country flag, official name, capital, region, subregion, and population.
- **About Page:** Learn more about how the app uses the REST Countries API to display data and the technologies powering the project.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React Router V7:** For handling routing and navigation in our React application.
- **TypeScript:** Provides static typing for a more robust and maintainable codebase.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Vite:** Fast development server and build tool.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please feel free to submit a pull request or open an issue.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
