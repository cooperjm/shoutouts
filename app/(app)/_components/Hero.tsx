import Image from "next/image";
import riley from "@/public/rileyshoutouts-cropped.png";
import shoutout from "@/public/shoutouts-cropped.png"

export default function Hero() {
  return (
    <section className="w-full h-[90svh] relative overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,.24)_0%,rgba(0,0,0,.24)_100%),linear-gradient(135deg,#6ee7f9_0%,#60a5fa_40%,#b388ff_100%)]">
       {/* <Image
        src="/rileyshoutouts-cropped.png"
        alt="Riley Shoutouts"
        width={1000}
        height={500}
        priority
        sizes="100vw"
        className="object-cover"
      /> */}
      <Image 
         src={riley}
         alt="Riley Shoutouts"
         className="w-[60%] absolute bottom-0 right-[-10%]"
      />
      <Image 
         src={shoutout}
         alt="Shoutouts"
         className="w-[50%] absolute bottom-70 left-0"
      />
    </section>
  )
}
