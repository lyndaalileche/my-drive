import Footer from '@/components/footer';
import MentionsLegalesPage from '@/components/mainMentionLegale';
import Navbar from '@/components/navbar';

export default function MentionsLegales() {
  return (
    <div>
      <Navbar/>
      <main>
      <MentionsLegalesPage/>
      </main>
      <div className=' bottom-0 fixed w-full'>
      <Footer/>
      </div>
    </div>
  );
};
