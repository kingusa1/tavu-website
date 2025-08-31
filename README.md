## About This Project

This project is a statically exported Next.js application that serves as a beautiful and responsive landing page for users to learn about TAVÚ and join the waitlist for the studio's opening.

### Features

-   **Responsive Design:** Fully responsive layout that looks great on all devices, from mobile phones to desktops.
-   **Waitlist Form:** A functional waitlist form integrated with EmailJS to capture user interest.
-   **Static Site Generation:** Optimized for performance and easy deployment on static hosting platforms like GitHub Pages.
-   **Modern UI:** Built with modern design principles using ShadCN UI and Tailwind CSS.

---

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Form Handling:** [EmailJS](https://www.emailjs.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (v18 or later) and npm installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/tavu-website.git
    cd tavu-website
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up EmailJS credentials:**
    The waitlist form relies on EmailJS. The deployed version has the necessary public keys hardcoded for static deployment. For local testing, you can continue to use the hardcoded keys found in `src/components/landing/WaitlistForm.tsx`.

### Running the Development Server

To run the app in development mode, use the following command. This will start a local server, typically on `http://localhost:3000`.

```sh
npm run dev
```

---

## Building and Exporting for Production

To create a production-ready version of the site, you can build and export it as static files.

1.  **Build the application:**
    ```sh
    npm run build
    ```
    This command builds the Next.js application and automatically exports it to the `out/` directory, as configured by `output: 'export'` in `next.config.ts`.

2.  **Serve the static files locally (optional):**
    If you want to test the exported static files before deploying, you can use a simple local server.
    ```sh
    npx serve out
    ```

---

## Deployment

This repository is configured for deployment to **GitHub Pages**. The `next.config.ts` file is set up with `assetPrefix: './'` to ensure all static assets (CSS, JS, images) are referenced with relative paths, which is necessary for this type of deployment.

Any push to the `main` branch will trigger a GitHub Action to automatically build and deploy the site.
