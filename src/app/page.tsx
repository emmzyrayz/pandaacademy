import { HmNavbar } from '@/components/navbar/page';
import { redirect } from 'next/navigation';


export default function Home() {

  // redirect("/landing-page");

  return (
    <div className="flex min-h-screen relative">
      <HmNavbar className="custom-class" />
      <div className="flex-1 p-4 lg:ml-[80px]">
        {/* Your main content here */}
      </div>
    </div>
  );
}