import {
    createRouter,
    createRootRoute,
    createRoute,
    Outlet
  } from '@tanstack/react-router';
  import Home from '../pages/Home';
  import CharacterDetails from '../pages/CharacterDetail';
  import { z } from 'zod';
  
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  });
  
  
  const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
    searchSchema: z.object({
      page: z.coerce.number().optional(),
    }),
  });
  
  
  const characterRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/character/$id',
    component: CharacterDetails,
  });
  
  const routeTree = rootRoute.addChildren([homeRoute, characterRoute]);
  
  const router = createRouter({
    routeTree,
  });
  
  export default router;