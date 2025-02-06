/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as IndexImport } from './routes/index'
import { Route as VelordsIndexImport } from './routes/velords.index'
import { Route as RealmsIndexImport } from './routes/realms.index'
import { Route as DashboardIndexImport } from './routes/dashboard.index'
import { Route as VelordsClaimImport } from './routes/velords.claim'
import { Route as RealmsClaimImport } from './routes/realms.claim'
import { Route as RealmsBridgeImport } from './routes/realms.bridge'
import { Route as DashboardPostsImport } from './routes/dashboard.posts'
import { Route as ClaimsRealmsImport } from './routes/claims.realms'
import { Route as DashboardPostsIndexImport } from './routes/dashboard.posts.index'
import { Route as DashboardPostsPostIdImport } from './routes/dashboard.posts.$postId'

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const VelordsIndexRoute = VelordsIndexImport.update({
  id: '/velords/',
  path: '/velords/',
  getParentRoute: () => rootRoute,
} as any)

const RealmsIndexRoute = RealmsIndexImport.update({
  id: '/realms/',
  path: '/realms/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)

const VelordsClaimRoute = VelordsClaimImport.update({
  id: '/velords/claim',
  path: '/velords/claim',
  getParentRoute: () => rootRoute,
} as any)

const RealmsClaimRoute = RealmsClaimImport.update({
  id: '/realms/claim',
  path: '/realms/claim',
  getParentRoute: () => rootRoute,
} as any)

const RealmsBridgeRoute = RealmsBridgeImport.update({
  id: '/realms/bridge',
  path: '/realms/bridge',
  getParentRoute: () => rootRoute,
} as any)

const DashboardPostsRoute = DashboardPostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => DashboardRoute,
} as any)

const ClaimsRealmsRoute = ClaimsRealmsImport.update({
  id: '/claims/realms',
  path: '/claims/realms',
  getParentRoute: () => rootRoute,
} as any)

const DashboardPostsIndexRoute = DashboardPostsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardPostsRoute,
} as any)

const DashboardPostsPostIdRoute = DashboardPostsPostIdImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => DashboardPostsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/claims/realms': {
      id: '/claims/realms'
      path: '/claims/realms'
      fullPath: '/claims/realms'
      preLoaderRoute: typeof ClaimsRealmsImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/posts': {
      id: '/dashboard/posts'
      path: '/posts'
      fullPath: '/dashboard/posts'
      preLoaderRoute: typeof DashboardPostsImport
      parentRoute: typeof DashboardImport
    }
    '/realms/bridge': {
      id: '/realms/bridge'
      path: '/realms/bridge'
      fullPath: '/realms/bridge'
      preLoaderRoute: typeof RealmsBridgeImport
      parentRoute: typeof rootRoute
    }
    '/realms/claim': {
      id: '/realms/claim'
      path: '/realms/claim'
      fullPath: '/realms/claim'
      preLoaderRoute: typeof RealmsClaimImport
      parentRoute: typeof rootRoute
    }
    '/velords/claim': {
      id: '/velords/claim'
      path: '/velords/claim'
      fullPath: '/velords/claim'
      preLoaderRoute: typeof VelordsClaimImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardImport
    }
    '/realms/': {
      id: '/realms/'
      path: '/realms'
      fullPath: '/realms'
      preLoaderRoute: typeof RealmsIndexImport
      parentRoute: typeof rootRoute
    }
    '/velords/': {
      id: '/velords/'
      path: '/velords'
      fullPath: '/velords'
      preLoaderRoute: typeof VelordsIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/posts/$postId': {
      id: '/dashboard/posts/$postId'
      path: '/$postId'
      fullPath: '/dashboard/posts/$postId'
      preLoaderRoute: typeof DashboardPostsPostIdImport
      parentRoute: typeof DashboardPostsImport
    }
    '/dashboard/posts/': {
      id: '/dashboard/posts/'
      path: '/'
      fullPath: '/dashboard/posts/'
      preLoaderRoute: typeof DashboardPostsIndexImport
      parentRoute: typeof DashboardPostsImport
    }
  }
}

// Create and export the route tree

interface DashboardPostsRouteChildren {
  DashboardPostsPostIdRoute: typeof DashboardPostsPostIdRoute
  DashboardPostsIndexRoute: typeof DashboardPostsIndexRoute
}

const DashboardPostsRouteChildren: DashboardPostsRouteChildren = {
  DashboardPostsPostIdRoute: DashboardPostsPostIdRoute,
  DashboardPostsIndexRoute: DashboardPostsIndexRoute,
}

const DashboardPostsRouteWithChildren = DashboardPostsRoute._addFileChildren(
  DashboardPostsRouteChildren,
)

interface DashboardRouteChildren {
  DashboardPostsRoute: typeof DashboardPostsRouteWithChildren
  DashboardIndexRoute: typeof DashboardIndexRoute
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardPostsRoute: DashboardPostsRouteWithChildren,
  DashboardIndexRoute: DashboardIndexRoute,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/claims/realms': typeof ClaimsRealmsRoute
  '/dashboard/posts': typeof DashboardPostsRouteWithChildren
  '/realms/bridge': typeof RealmsBridgeRoute
  '/realms/claim': typeof RealmsClaimRoute
  '/velords/claim': typeof VelordsClaimRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/realms': typeof RealmsIndexRoute
  '/velords': typeof VelordsIndexRoute
  '/dashboard/posts/$postId': typeof DashboardPostsPostIdRoute
  '/dashboard/posts/': typeof DashboardPostsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/claims/realms': typeof ClaimsRealmsRoute
  '/realms/bridge': typeof RealmsBridgeRoute
  '/realms/claim': typeof RealmsClaimRoute
  '/velords/claim': typeof VelordsClaimRoute
  '/dashboard': typeof DashboardIndexRoute
  '/realms': typeof RealmsIndexRoute
  '/velords': typeof VelordsIndexRoute
  '/dashboard/posts/$postId': typeof DashboardPostsPostIdRoute
  '/dashboard/posts': typeof DashboardPostsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteWithChildren
  '/claims/realms': typeof ClaimsRealmsRoute
  '/dashboard/posts': typeof DashboardPostsRouteWithChildren
  '/realms/bridge': typeof RealmsBridgeRoute
  '/realms/claim': typeof RealmsClaimRoute
  '/velords/claim': typeof VelordsClaimRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/realms/': typeof RealmsIndexRoute
  '/velords/': typeof VelordsIndexRoute
  '/dashboard/posts/$postId': typeof DashboardPostsPostIdRoute
  '/dashboard/posts/': typeof DashboardPostsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/claims/realms'
    | '/dashboard/posts'
    | '/realms/bridge'
    | '/realms/claim'
    | '/velords/claim'
    | '/dashboard/'
    | '/realms'
    | '/velords'
    | '/dashboard/posts/$postId'
    | '/dashboard/posts/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/claims/realms'
    | '/realms/bridge'
    | '/realms/claim'
    | '/velords/claim'
    | '/dashboard'
    | '/realms'
    | '/velords'
    | '/dashboard/posts/$postId'
    | '/dashboard/posts'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/claims/realms'
    | '/dashboard/posts'
    | '/realms/bridge'
    | '/realms/claim'
    | '/velords/claim'
    | '/dashboard/'
    | '/realms/'
    | '/velords/'
    | '/dashboard/posts/$postId'
    | '/dashboard/posts/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRoute: typeof DashboardRouteWithChildren
  ClaimsRealmsRoute: typeof ClaimsRealmsRoute
  RealmsBridgeRoute: typeof RealmsBridgeRoute
  RealmsClaimRoute: typeof RealmsClaimRoute
  VelordsClaimRoute: typeof VelordsClaimRoute
  RealmsIndexRoute: typeof RealmsIndexRoute
  VelordsIndexRoute: typeof VelordsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRoute: DashboardRouteWithChildren,
  ClaimsRealmsRoute: ClaimsRealmsRoute,
  RealmsBridgeRoute: RealmsBridgeRoute,
  RealmsClaimRoute: RealmsClaimRoute,
  VelordsClaimRoute: VelordsClaimRoute,
  RealmsIndexRoute: RealmsIndexRoute,
  VelordsIndexRoute: VelordsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/claims/realms",
        "/realms/bridge",
        "/realms/claim",
        "/velords/claim",
        "/realms/",
        "/velords/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx",
      "children": [
        "/dashboard/posts",
        "/dashboard/"
      ]
    },
    "/claims/realms": {
      "filePath": "claims.realms.tsx"
    },
    "/dashboard/posts": {
      "filePath": "dashboard.posts.tsx",
      "parent": "/dashboard",
      "children": [
        "/dashboard/posts/$postId",
        "/dashboard/posts/"
      ]
    },
    "/realms/bridge": {
      "filePath": "realms.bridge.tsx"
    },
    "/realms/claim": {
      "filePath": "realms.claim.tsx"
    },
    "/velords/claim": {
      "filePath": "velords.claim.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard.index.tsx",
      "parent": "/dashboard"
    },
    "/realms/": {
      "filePath": "realms.index.tsx"
    },
    "/velords/": {
      "filePath": "velords.index.tsx"
    },
    "/dashboard/posts/$postId": {
      "filePath": "dashboard.posts.$postId.tsx",
      "parent": "/dashboard/posts"
    },
    "/dashboard/posts/": {
      "filePath": "dashboard.posts.index.tsx",
      "parent": "/dashboard/posts"
    }
  }
}
ROUTE_MANIFEST_END */
