# Betopia PulseGrid

Betopia PulseGrid is a premium web application developed for a leading solar engineering and renewable energy solutions company. The platform showcases a comprehensive catalog of solar products, detailed pricing packages, and professional services, designed to drive the transition to clean, sustainable energy in Bangladesh.

## 🚀 Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Custom SVG Icons & Heroicons

## 🌟 Key Features & Pages

- **Home (`/`)**: Engaging landing page featuring a parallax hero, company impact statistics, service highlights, and customer testimonials.
- **About Us (`/about`)**: Detailed company overview including history, mission/vision statements, leadership team profiles, and infrastructure capabilities.
- **Products (`/products`)**: Interactive catalog of solar components (Inverters, Panels, Batteries, Accessories) and an organized Trusted Brand Partners grid.
- **Pricing & Packages (`/pricing`)**: Transparent breakdown of Residential solar packages (P0 - P7) and Custom Commercial/Industrial solutions.
- **Services (`/services`)**: In-depth look at professional offerings including turnkey installations, government tender strategy, and OEM spare parts indenting.
- **Get a Quote (`/quote`)**: Dedicated contact page featuring a Google Maps integration and a comprehensive inquiry form for specific package requests.

## 🎨 Design System

The application utilizes a custom design system tailored for a premium, eco-friendly aesthetic:
- **Primary Colors**: Dark Green (`bg-heading-3` / `#11201d`) and Vibrant Neon Green (`text-heading-1`).
- **Components**: Reusable, highly interactive components including a global `<Button />` with animated SVG arrows, dynamic tabs for product filtering, and sleek hover effects across all package cards.
- **Typography**: Clean, modern sans-serif fonts optimized for readability and visual impact.

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `/app`: Contains all Next.js App Router pages (`/about`, `/pricing`, `/products`, `/quote`, `/services`).
- `/app/components`: Reusable UI components (`Navbar`, `Footer`, `Hero`, `CTA`, `Button`, etc.).
- `/public`: Static assets including images, logos, and icons.

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/), the creators of Next.js. Simply connect the GitHub repository to Vercel for automatic deployments and CI/CD.
