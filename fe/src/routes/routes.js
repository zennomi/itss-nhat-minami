import * as Pages from '../pages';


export const UserRoutes = [];

export const AdminRoutes = [
    {path: '/admin', element: <Pages.Home/>}
];

export const GuestRoutes = [
    {path: '/login', element: <Pages.Login/>},
    {path: '/register', element: <Pages.Register/>},
];


export const NormalRoutes = [
    {path: '/', element: <Pages.Home/>},
    {path: '/search', element: <Pages.Search/>},
    {path: '/bookmark',element: <Pages.Bookmark/>},
    {path: '/tutor/:id', element: <Pages.Tutor/>},

];
