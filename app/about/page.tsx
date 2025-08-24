import Link from "next/link";
export default function About() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
    
      <h1 className="text-4xl font-bold mb-4">About & Contact</h1>
      <p className="mb-2">
        Hello! My name is Sohail Chutani and I&apos;m a Computer Engineering student at the University of Washington Bothell and a photographer.
      </p>
      <p className="mb-2">
        This site is a work-in-progress project for summer 2025.
      </p>
      <p className="mb-2">
        I&apos;ve been meaning to create a photography portfolio for a long time now and decided to finally try to do it this summer and make it a learning experience as well.
      </p>
      <p className="mb-2">
        My goal is to create this site with a modern web stack. 
        My current plan is to use Next.js with the new App Router, 
        Tailwind CSS for styling, and GitHub pages for hosting. 
        I also want to eventually integrate Supabase for storage my photos and possibly 
        a CMS for easier content management. 
      </p>
      <p className="mb-2">
        Lastly, I&apos;m also going to be trying to use LLMs 
        like ChatGPT and Gemini as resources for this project rather than just searching for 
        it on the web. AI seems like the direction the industry is going and I feel like
        I need to get on the train so this project is one way I&apos;m trying to get
        more comfortable with using LLMs. I&apos;m planning on using these LLMs through ChatGPT.com, 
        GitHub Copilot, and T3 Chat.
      </p>
      <p className="mb-2">
        Feel free to reach out to me at <Link href="mailto:sohail@chutani.com" className="text-blue-600 underline">sohail@chutani.com</Link>
      </p>
      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        <p>© nothing to see here</p>
      </footer>
    </main>
  );
}
