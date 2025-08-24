import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-center text-4xl font-bold mb-4">About & Contact</h1>

      <Image
        src="/images/about.jpg"
        alt="A picture of me in a University of Washington Bothell purple sweatshirt"
        width={160}
        height={160}
        className="w-60 h-60 rounded-full mx-auto mb-8 object-cover"
      />

      <p className="mb-2">
      Hello! My name is <strong>Sohail Chutani</strong> and I&apos;m a <strong>Computer Engineering student</strong> at UW Bothell and a hobbyist photographer.
      </p>
      <p className="mb-2">
        This site is a work-in-progress project that started in earnest late August 2025.
      </p>
      <p className="mb-2">
        I&apos;ve been meaning to create a photography portfolio for a long time now and decided to finally try to do it this summer and make it a learning experience as well.
      </p>
      <p className="mb-2">
        My goal is to create this site with a modern web stack. 
        My current plan is to use Next.js with the new App Router, 
        Tailwind CSS for styling, and Vercel for deployment. 
        I also want to eventually integrate Supabase to store my photos and possibly 
        a CMS for easier content management. 
      </p>
      <p className="mb-2">
        Lastly, I&apos;m also going to be using LLMs as resources for this project. AI seems like the direction the industry is going so this project is one way I&apos;m working to get
        more comfortable with using LLMs. I&apos;m planning on using these LLMs through T3 Chat, 
        GitHub Copilot, and ChatGPT.com.
      </p>
      <p className="mb-2">
        Feel free to reach out to me at <Link href="mailto:sohail@chutani.com" className="text-blue-600 underline">sohail@chutani.com</Link>
      </p>

      <div className="mt-6 flex justify-center gap-6">
        <Link href="https://github.com/sohail-c" target="_blank" className="flex items-center gap-2 text-gray-800 hover:text-black transition">
          <Image src="/github.svg" alt="GitHub" width={24} height={24} />
          <span className="hidden sm:inline">GitHub</span>
        </Link>

        <Link href="https://linkedin.com/in/sohailchutani" target="_blank" className="flex items-center gap-2 text-gray-800 hover:text-black transition">
          <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          <span className="hidden sm:inline">LinkedIn</span>
        </Link>
      </div>
    </main>
  );
}
