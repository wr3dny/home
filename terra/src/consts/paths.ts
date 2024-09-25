// import { Lego } from '../pages/Lego/Lego';
// import { Books } from '../pages/Books/Books';
// import { Gallery } from '../pages/Gallery/Gallery';
import { Flex } from '../pages/Flex/Flex';
import { Home2 } from '../pages/Home/Home';
import { Schema } from '../components/Schema/Schema';


export const PATHS = [
  { path: '/', key: 'Home', Component: Home2 , available: true },
  // { path: '/lego', key: 'Lego', Component: Lego, available: true },
  // { path: '/books', key: 'Books', Component: Books, available: false },
  // { path: '/gallery', key: 'Gallery', Component: Gallery , available: false},
  { path: '/about', key: 'About', Component: Flex , available: true },
  { path: '/schema', key: 'Schema', Component: Schema , available: true }
];