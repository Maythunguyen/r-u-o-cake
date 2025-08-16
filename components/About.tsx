import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';



const About = () => {
    const content = [
    {
      title: "What’s R U O’Cake?",
      description: [
        "R U O’Cake? is a podcast community run by two twenty-somethings, Ebony and May.",
        "As they began their chapter in young adulthood, they were shocked to discover the sheer amount of chaos, confusion, and conflict that awaited them.",
        "Their motto for starting was simple: to create a safe space for people navigating their twenties to feel seen, heard, and understood."
      ],
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/ruocake.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Problem",
      description: [
        "Fear mongering. Influencer clout. Carefully curated conversations. Fake media.",
        "Influencers care more about fitting in rather than standing up.",
        "An age of digitalised separation. Mental health stigmatisation.",
        "Lack of young voices in media, politics. Misinformation."
      ],
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/ruocake.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Solution",
      description: [
        "Bring back unfiltered, honest conversations.",
        "Create a safe space to speak about challenging and uncomfortable topics.",
        "Talk about the unique experiences central to navigating life in your twenties.",
        "Connect people and use virtual connection for good purposes.",
        "Cut through the BS."
      ],
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/ruocake.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "As two professional yappers",
      description: [
        "They decided to take their voices to good use – through podcasting.",
        "Every week they share personal insights on topics relevant to navigating their twenties."
      ],
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/ruocake.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Honest conversations",
      description: [
        "Sometimes messy, sometimes insightful, but always authentic.",
        "Serving up a slice of chaos and comfort while navigating life in my twenties.",
        "Whether you’re listening while commuting, doing laundry, or avoiding responsibilities – I’m glad you’re here!"
      ],
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/ruocake.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

    return (
        <section className='flex flex-col gap-8 p-10 max-w-7xl mx-auto border border-gray-200 rounded-lg my-20' id="about">
            <div>
                <img
                    src="/ruocake-logo.png"
                    alt="logo"
                    width={180}
                    height={180}
                />
            </div>
           
            <StickyScroll content={content}/>
            
        
        </section>
    )
}

export default About
