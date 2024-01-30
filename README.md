### Jotion, Fullstack Notion Clone Developed with Next.js 13, React, ShadcnUI, Tailwind & Convex

#Key Features:

- Real-time database   
- Notion-style editor 
- Infinite children documents 
- Trash can & soft delete 🗑
- Authentication 
- File upload
- File deletion
- File replacement
- Icons for each document (changes in real-time) 
- Expandable sidebar 
- Full mobile responsiveness 
- Publish your note to the web 
- Fully collapsable sidebar 
- Landing page 
- Cover image of each document 
- Recover deleted files 

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/notion-clone-tutorial.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

### Setup Convex

```shell
npx convex dev

```

### Start the app

```shell
npm run dev
