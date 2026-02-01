import Contact from './sections/Contact';
import Hero from './sections/Hero';

function App() {
  return (
    <div className='min-h-screen bg-white text-slate-900'>
      <Hero />
      <main className='mx-auto max-w-4xl space-y-14 px-6 py-10'>
        <Contact />
      </main>
    </div>
  );
}

export default App;
