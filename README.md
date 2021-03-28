# Angular-Nest-Webapp-Template

An Admin web application built with Angular on the frontend and NestJS on the backend. Frontend is based on SB-Admin-Template.
This is a template repository that you can use to start developing your own web application!

:construction: Please note: The template is working finde, but the documentation is under construction. Please create an issue if you have any questions

## How to run

### Development setup
It's best to open two terminals. Use one to run the backend and the other one for the frontend.
- To run the backend, open a terminal inside the `backend` directory and run `npm run start:dev`. The backend will run on port 3000.
- To run the frontend, open a terminal inside the `frontend` directory and run `npm run start:dev`. The frontend will run on a local angular development server. Your browser shoould be automatically opend, if not go to http://localhost:4200/ (Note that there is no login. You can just click "login" with or without any credentials)

### Debug setup
*Documentation coming soon*

### Build for production
*Documentation coming soon*

## Directory structure
- Backend: A Nest JS application containing all your backend services and business logic
  - All backend dependencies have to be put inside the separate package.json inside the backend folder
  - All API routes are inside `backend/src/routes`

- Frontend: An angular application
  - All backend dependencies have to be put inside the separate package.json inside the frontend folder
  - Everything related to the basic layout should stay inside `frontend/src/app/layout`
  - All your modules with their components (.ts, .html, and .scss) should be put in `frontend/src/app/modules`
  - All code that's not part of one modules but is instead used by more than one module (e.g. your services, pipes, interceptors) should be put inside `frontend/src/app/shared`
  - Everything static (e.g. images) belongs inside `frontend/src/app/assets`
  - Angular environment definitions are kept in `frontend/src/app/environments`

## How to make it your own
This repository acts as a basic starting point to spare you some efforts and help you to get started quickly. The following two sections describe how you can create you own web application from this repository.

### Extend the frontend
Basic instructions on how to add your own modules to the frontend:
1. Create a folder for your module inside `frontend/src/app/modules`
2. Inside that folder, implement your Angular module with all its components, maybe its own router and whatever you need
3. Add your module to the list of links in the sidebar. To do so, you need to do a couple of things:
	- Inside `frontend/src/app/layout/sidebar/sidebar.component.html`: Copy and paste one of the existing links (complete a-tag from `<a [routerLinkActive]...` to `</a>` with your own contents (i.e. router-link, link text, font-awesome icon)
	- Inside `frontend/src/app/layout/layout-routing.module.ts`: Add your module route to one of the child routes by copying one of the existing ones. Make sure that the path matches your router link of the previous step and ensure that the path to your module file is correct.
4. Add your own services: As services are typically used in more than one module, they should be put inside the `frontend/src/app/modules/shared` directory.

### Add your own modules to the backend
