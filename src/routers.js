import { App, Home, Books, Shelf } from './App';


const routers = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/shelf/:id',
        component: Shelf
      },
      { path: '/books/:id',
        component: Books
      },
    ]
  }
]
export default routers;