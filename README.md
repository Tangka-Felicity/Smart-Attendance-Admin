# Smart Attendance Web

Smart Attendance Web is a React and Vite admin application for managing attendance workflows across organizations, departments, users, sessions, and reports. The current implementation is a frontend-first prototype backed by local mock data and persisted browser state, which makes it useful for validating flows, UI structure, and future backend contracts.

## What the Application Does

The application supports the main admin journey described in the project documentation:

- Sign in, register, verify OTP, and reset passwords.
- Select an organization scope.
- Manage organizations, departments, and users.
- Create and review attendance sessions.
- Open QR-based session attendance flows.
- Monitor attendance and apply manual updates.
- Review reports, profile details, and settings.

The routed application pages currently include:

- `Dashboard`
- `Organizations`
- `Departments`
- `Users`
- `Sessions`
- `Session Details`
- `Session QR`
- `Attendance`
- `Reports`
- `Profile`
- `Settings`

## Tech Stack

- React 19
- Vite 7
- React Router
- Zustand for app state and persistence
- Tailwind CSS 4
- React Hook Form + Zod
- TanStack Table
- Framer Motion
- Sonner

## Current Prototype Notes

- The app is currently frontend-only.
- Data is seeded from mock state in the app store.
- State is persisted in the browser using `localStorage`.
- The store shape is designed to mirror a future backend-driven implementation.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` creates a production build in `dist/`.
- `npm run lint` runs ESLint.
- `npm run preview` serves the production build locally.

## Project Structure

```text
src/
  app/          App providers, layouts, router, and centralized store
  components/   Shared layout components and UI primitives
  features/     Feature modules such as auth, dashboard, sessions, and reports
  lib/          Utility helpers
docs/           Planning, requirements, architecture, schema, and API docs
public/         Static assets
```

Important application entry points:

- `src/main.jsx`
- `src/App.jsx`
- `src/app/router/index.jsx`
- `src/app/store/useAppStore.js`
- `src/app/store/selectors.js`

## Documentation

Project documentation is split between this README and the Markdown documents in the `docs/` folder. For more information, review:

- [README.md](./README.md) for setup, overview, scripts, structure, and contribution guidance.
- [docs/01_Planning_and_Requirements.md](./docs/01_Planning_and_Requirements.md) for project overview, stakeholders, objectives, and planning context.
- [docs/02_Software_Requirements_Specification.md](./docs/02_Software_Requirements_Specification.md) for system actors, user stories, and functional requirements.
- [docs/03_Data_Requirements_Document.md](./docs/03_Data_Requirements_Document.md) for entities, validation rules, and data requirements.
- [docs/04_Entity_Relationship_Diagram.md](./docs/04_Entity_Relationship_Diagram.md) for the ERD and entity relationships.
- [docs/05_Database_Schema.md](./docs/05_Database_Schema.md) for the proposed database structure and table design.
- [docs/06_System_Architecture.md](./docs/06_System_Architecture.md) for architecture decisions and major system components.
- [docs/07_Application_Structure_and_Interface.md](./docs/07_Application_Structure_and_Interface.md) for application structure, pages, and interface expectations.
- [docs/08_API_Specification.md](./docs/08_API_Specification.md) for the planned API contract and backend integration details.

## Contributing

Contributions should be opened against the `dev` branch, not `main`.

### Contribution Flow

1. Fork the repository on GitHub.
2. Clone your fork locally:

```bash
git clone https://github.com/<your-github-username>/smart-attendance-web.git
cd smart-attendance-web
```

3. Add the original repository as `upstream`:

```bash
git remote add upstream https://github.com/<original-owner>/smart-attendance-web.git
git fetch upstream
```

4. Check out the latest `dev` branch and create your feature branch from it:

```bash
git checkout -b dev upstream/dev
git checkout -b feature/your-change
```

5. Install dependencies and make your changes:

```bash
npm install
npm run dev
```

6. Run checks before pushing:

```bash
npm run lint
npm run build
```

7. Commit and push your branch to your fork:

```bash
git add .
git commit -m "Describe your change"
git push -u origin feature/your-change
```

8. Open a pull request from your forked branch into the repository's `dev` branch.

Important:

- Do not open pull requests against `main`.
- Make sure the PR base branch is `dev`.
- Keep changes focused and describe the purpose of the update clearly in the PR.
