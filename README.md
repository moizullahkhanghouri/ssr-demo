# SSR, CSR and SSG in Next.js

## Project Overview
This project demonstrates three rendering methods in Next.js: Server-Side Rendering (SSR), Client-Side Rendering (CSR), and Static Site Generation (SSG). It uses the JSONPlaceholder API to fetch and display post data.

## Features
- Dynamic SSR page that fetches a post using its ID.
- CSR page that fetches data using React's `useEffect` and `useState`.
- SSG page that generates a page using `getStaticProps`.
- Comparison of rendering methods and their use cases.

## Pages
- `/ssr/2` — Displays post ID 2 using dynamic SSR.
- `/csr` — Fetches and displays data in the browser.
- `/ssg` — Displays statically generated post data.

## Performance Comparison

| Method | Performance | Best Use Case |
|---|---|---|
| SSR | Fresh data on each request; server processing is required. | Frequently changing data and personalized pages. |
| CSR | The initial page may show a loading state while data is fetched. | Interactive dashboards and client-focused applications. |
| SSG | Fast page delivery because HTML is generated at build time. | Blogs, documentation, and mostly static pages. |

## Technologies Used
- Next.js
- React
- JavaScript
- JSONPlaceholder API
- Git and GitHub

## How to Run
1. Install Node.js.
2. Clone or download the project.
3. Open the project folder in a terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open `http://localhost:3000` in a browser.

## Conclusion
SSR is useful when data must be updated on each request. CSR is useful for interactive applications where data can load in the browser. SSG is suitable for pages that can be generated in advance and served quickly.
