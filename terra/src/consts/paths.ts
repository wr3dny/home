// import { Lego } from '../pages/Lego/Lego';
// import { Books } from '../pages/Books/Books';
// import { Gallery } from '../pages/Gallery/Gallery';
import { Flex } from '../pages/Flex/Flex';
import { Home } from '../pages/Home/Home';


export const PATHS = [
  { path: '/', key: 'Home', Component: Home , available: true },
  // { path: '/lego', key: 'Lego', Component: Lego, available: true },
  // { path: '/books', key: 'Books', Component: Books, available: false },
  // { path: '/gallery', key: 'Gallery', Component: Gallery , available: false},
  { path: '/flex', key: 'Flex', Component: Flex , available: true }
];