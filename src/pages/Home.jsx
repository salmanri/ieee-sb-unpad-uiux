import Hero from '../components/Hero';
import AboutPreview from '../components/About';
import EventsPreview from '../components/Events';
import PublicationsPreview from '../components/Publications';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <EventsPreview />
      <PublicationsPreview />
    </main>
  );
}
