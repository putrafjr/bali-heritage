import Beranda from '../views/pages/beranda';
import Kesenian from '../views/pages/kesenian';
import formpendaftaran from '../views/pages/formpendaftran';
// import Event from '../views/pages/event';
// import TentangKami from '../views/pages/tentangKami';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/kesenian': Kesenian,
  '/formpendaftaran':formpendaftaran,
  // '/event': Event,
  // '/tentangKami': TentangKami,
};

export default routes;
