import Hero from './components/Hero';
import Layout from './components/Layout/Layout';
import Nav from './components/Navigation';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer/Footer';
import { faAngleDoubleRight, faBars, faPen } from '@fortawesome/free-solid-svg-icons';
import TeamSection from './components/TeamSection';
import SizeState from './context/SizeState';
const services = [
  {
    id: new Date(),
    heading: 'ui/ux design',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum dolorum cupiditate consequuntur? Temporibus fuga eaque nobis vitae officiis iure',
    icon: faPen,
    color: '#2d9cdb',
  },
  {
    id: new Date(),
    heading: 'frontend design',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum dolorum cupiditate consequuntur? Temporibus fuga eaque nobis vitae officiis iure',
    icon: faAngleDoubleRight,
    color: '#2fae60',
  },
  {
    id: new Date(),
    heading: 'backend design',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum dolorum cupiditate consequuntur? Temporibus fuga eaque nobis vitae officiis iure',
    icon: faBars,
    color: '#eb5757',
  },
];

const projects = [
  {
    id: new Date(),
    title: 'Full stack application',
    heading: 'Smart home dashboard',
    image: '/smarthome.jpg',
  },
  {
    id: new Date(),
    title: 'UI/UX design',
    heading: 'Onboard application',
    image: '/onboard.png',
  },
  {
    id: new Date(),
    title: 'Mobile application',
    heading: 'Booking system',
    image: '/booking.png',
  },
  {
    id: new Date(),
    title: 'Front end application',
    heading: 'Juice product page',
    image: '/juice-product.png',
  },
];

const team = [
  {
    id: new Date(),
    img: '/person1.png',
  },
  {
    id: new Date(),
    img: '/person2.png',
  },
  {
    id: new Date(),
    img: '/person3.png',
  },
];
const teamlead = {
  id: new Date(),
  img: '/person4.png',
  type: 'teamlead',
  name: 'Carlos Tan',
  tagline: 'the decorate gatsby',
};
const App = () => {
  return (
    <SizeState>
      <Layout>
        <Nav />
        <Hero />
        <Services children={services} />
        <Projects children={projects} />
        <TeamSection children={team} teamlead={teamlead} />
      </Layout>
      <Footer />
    </SizeState>
  );
};

export default App;
