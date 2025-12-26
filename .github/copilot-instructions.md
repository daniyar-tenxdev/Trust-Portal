# Project Coding Standards

## JavaScript Guidelines

- Use ES6 syntax
- Prefer arrow functions
- This project uses Next.js with App router
- Use components from project that we already have
- Use HeroUI v2.7.8 components if custom are not available or not suitable in this case
- Create new components yourself only when other not available or not suitable
- Use tailwind v3.4.17 for this project, use clsx for conditional classes
- Use fetchBackend function to send requests to backend
- write all comments in English
- Use Luxon for time related things
- Use react-hook-form for forms
- This project is big and already has some libraries, functions, hooks and contexts
- Check do we already have some functionality to do something
- Try not to use hardcoded width and height if it is possible, use margins and paddings
- Try not to hardcode text styles
- Use Toasts from HeroUI toasts (showToast function), not react-hot-toast
- Use Routes from routes.ts file for navigation
- Dont write readme files
- Dont write test files
- BaseSchema will automatically convert snake_case to camelCase and vice versa, so use camelCase in frontend
