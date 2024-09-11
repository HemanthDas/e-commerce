/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticationLoginImport } from './routes/authentication/login'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AuthenticationLoginRoute = AuthenticationLoginImport.update({
  path: '/authentication/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/authentication/login': {
      id: '/authentication/login'
      path: '/authentication/login'
      fullPath: '/authentication/login'
      preLoaderRoute: typeof AuthenticationLoginImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/authentication/login': typeof AuthenticationLoginRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/authentication/login': typeof AuthenticationLoginRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/authentication/login': typeof AuthenticationLoginRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/authentication/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/authentication/login'
  id: '__root__' | '/' | '/authentication/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AuthenticationLoginRoute: typeof AuthenticationLoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AuthenticationLoginRoute: AuthenticationLoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/authentication/login"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/authentication/login": {
      "filePath": "authentication/login.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
