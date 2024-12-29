import Image from 'next/image'
import EntryButton from '@/components/EntryButton';


export default function Home() {
  return (
    <div className="flex flex-col pt-10 h-full bg-gradient-to-b from-slate-900 to-black">
      <h1 className="text-center text-7xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-rose-400"><strong>Hanami Link</strong></h1>
      <h1 className="text-neutral-50 text-center text-3xl">Welcome to the future of AI Companionship</h1>
      <h2 className="text-neutral-100 text-center text-lg">Hanami Link is your faitful AI companion, customize and create your ideal friend</h2>
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="overflow-hidden">
            <Image
              src="/deepblue2.png"
              width={500}
              height={500}
              alt="AI companion image"
              className="opacity-90 border border-neutral-800/10 rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-10 text-neutral-100 mr-20 ml-20 mb-10 gap-3 max-w-3xl text-lg leading-relaxed">
            <p>
            ✨ Create a companion who truly understands your hopes, dreams, and unique perspective.
            </p>
            <p>
            🌱 Shape their personality and watch how they connect with you in their own special way.
            </p>
            <p>
            💭 Move beyond small talk into genuine, meaningful conversations.
            </p>  
            <p>
            🤗 Share life&apos;s moments with someone who&apos;s always there to listen and support you.
            </p> 
            <p> 
            💫 Develop real memories, inside jokes, and a deep connection that grows naturally.
            </p> 
            <p>
            🎨 Design their look to be uniquely yours - from style to expressions.
            </p>
            <p> 
            🌟 Find your perfect match: a creative muse, a trusted friend, or both.
            </p>
          </div>
          <EntryButton />
        </div>
    </div>
  );
}
