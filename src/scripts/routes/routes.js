import Beranda from '../views/pages/beranda';
import Kesenian from '../views/pages/kesenian';
import formpendaftaran from '../views/pages/form';
import Event from '../views/pages/event';
import tentangKami from '../views/pages/about';
import Login from '../views/pages/login';
import Admin from '../views/pages/admin';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/kesenian': Kesenian,
  '/formpendaftaran': formpendaftaran,
  '/event': Event,
  '/tentangkami': tentangKami,
  '/login': Login,
  '/admin': Admin,
};

export default routes;
