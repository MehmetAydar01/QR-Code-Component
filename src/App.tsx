import QrCodeCard from '@/components/QrCodeCard';
import Author from '@/components/Author';

function App() {
  return (
    <div className='relative min-h-screen grid place-items-center bg-secondary'>
      <QrCodeCard />
      <Author />
    </div>
  );
}

export default App;
