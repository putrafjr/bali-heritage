import Beranda from '../views/pages/beranda';
import Kesenian from '../views/pages/kesenian';
import Event from '../views/pages/event';
// import TentangKami from '../views/pages/tentangKami';
import Login from '../views/pages/login';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/kesenian': Kesenian,
  '/event': Event,
  // '/tentangKami': TentangKami,
  '/login': Login,
};

export default routes;
