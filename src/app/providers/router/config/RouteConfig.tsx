import { RouteProps } from 'react-router-dom';
import { Main } from './../../../../pages/Main/ui/Main'; 
//здесь работают только относительные пути

export enum AppRoutes {
    MAIN = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Main />,
    },
}