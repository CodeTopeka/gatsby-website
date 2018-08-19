// import React from "react"
// import Layout from "../components/layout"

// export default () => (
// <Layout>
//   <div>
//     <h1>About me</h1>
//     <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
//   </div>
// </Layout>
// )




// import React from "react"
// import Layout from "../components/layout"

// export default () => (
//   <Layout>
//     <h1>About Pandas Eating Lots</h1>
//     <p>
//       We're the only site running on your computer dedicated to showing the best
//       photos and videos of pandas eating lots of food.
//     </p>
//   </Layout>
// )




import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "emotion"

import vilhelm_hammershoi_3 from "../img/the-royal-palace-church-in-copenhagen-1910.jpg"

export default ({ data }) => (
  <Layout>
    <div className={css``}>
        <img src={vilhelm_hammershoi_3} width="100%" alt="Painting 'The Royal Palace Church in Copenhagen' by Vilhelm Hammershøi, 1910"/>
    </div>
    <div className={css`
      margin: 0 auto;
      max-width: 800px;
      padding: 0 10px;
    `}>
      
      {/* <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        Holm School is a side-project administrated by Ryan Holm, who has been working on Educational Technology web sites to teach K-12 computer science for two years at a job at Rensselaer Polytechnic Institute in Troy, NY. 
      </p>
      
      <p>
        For more information regarding Open Educational Resources and what they are, please read the <a href="https://en.wikipedia.org/wiki/Open_educational_resources">Wikipedia page</a> or read the free epub <a href="https://unglue.it/work/208269/">"Open: The Philosophy and Practices that are Revolutionizing Education and Science"</a>. 
      </p>
      <p>
        Holm School is programmed using <a href="http://gatsbyjs.com">GatsbyJS</a> for a static JAM stack site hosted for free on <a href="http://netlify.com">Netlify</a>.  Thank you to the open source programmers who make that possible. All resources created by Holm School are in the public domain and downloadable at our repo on <a href="http://github.com/HolmSchool">GitHub</a>.
      </p> */}

      <h1>About</h1>

      <p>
        For more information regarding Open Educational Resources and what they are, please read the <a href="https://en.wikipedia.org/wiki/Open_educational_resources">Wikipedia page</a> or read the free epub <a href="https://unglue.it/work/208269/">"Open: The Philosophy and Practices that are Revolutionizing Education and Science"</a>. 
      </p>

     

      <p><strong>I. Introduction - How to Be a Not Rich Computer Scientist</strong></p>

      <p><strong>Hello friend/world</strong></p>

      <p>Being a computer scientist is not the panacea most STEM proponents proclaim it to be. Supposedly you can become a millionaire by programming a novel app, there are zero boundaries to getting your foot in the door (it's a total meritocracy!), it's the highest-paid profession out of college, and so forth. This all sounds good for all the privileged students who have zero problems with enrolling at elite colleges for four years. But not everyone can afford college. It's tens of thousands of dollars, it requires food and housing in the most expensive cities in the country, the social scene is based around wasting parents' money each and every weekend, it requires moving out of your parents' house when you don't yet even have an income, etc. For some careers, college is simply a requirement. Biologists, chemists, and physicists need the labs, liberal arts researchers need the libraries and journals collections, people interested in becoming professors need a PhD, and so on.</p>

      <p>But computer science doesn't need the academic infrastructure to teach what needs to be learned. The basic requirements are a computer (you don't even necessarily need a laptop) and the internet. There aren't socratic seminars and philosophical discussions surrounding your most recent readings. Classes are simply lectures, sometimes powerpoints. The problem sets don't require a lab, they are doable on your personal laptop and don't require equipment you don't personally own. When you are at the library you aren't examining books from the stack that you don't own at home. Usually you are reading the class textbook. Nothing in the computer science curriculum requires academic infrastructure. As long as you have a computer and the internet, you are able to complete college-level computer science work. It is not worth spending four years at college to realize that everything you did at a private library and campus you could have done from your room at your parent's house for free. Take my word: there is nothing that is required for learning computer science that can't be accomplished for hundreds of dollars a year in your childhood room at your parents place as long as you have a computer and the internet, instead of spending tens of thousands of dollars a year at a university.</p>

      <p>Becoming a computer scientist is a long process. I have been coding since I was 11 years old and making web pages since I was 12. If you don't have that type of experience, your learning curve will be more pronounced and you're going to have to spend a lot of time in the weeds getting your bearings straight. That's why you should totally save your money and not go to college to study computer science, except if you do have the funds. It is such a long process that saving your money by living at home and using inexpensive equipment and free internet resources provides you time to study the vast array of information that is required to know to be a programmer longer. If you spend four years in college, the debt will require that you immediately get a job. If you study online, then you can spend extra time learning entirely new fields like AI programming or web programming that you otherwise don't learn in standard computer science academic curricula. The general gist is that you have to spend 10 hours a day reading a book for months on end to learn a single topic at just an introductory level. The most sustainable way to do this is obviously the most inexpensive. Don't get caught up in the belief you have to have a degree to learn what needs to be learned. By reading the (same) textbooks at home and doing the (same) programming exercises at home, you'll learn the material and not come out burdened by debt that pays for needless things like sports teams, lawn manicure, janitorial services, and exercise rooms. Education can happen at a shoestrings budget, and university is an option that preys on people without community by threatening a life of failure if you don't pay the ransom of tens of thousands of dollars for a certification. Computer science is a badass profession. It is solving many real world problems and is improving life around the globe. But I am relentlessly pro-science. You don't need a university degree or independent wealth to contribute to these solutions. Save your money learning what you need at your parents house for four years instead of spending tens of thousands of dollars at university, then get out there, get a job in a city, and start making amazing new technologies debt-free!</p>

      <p>I guess I should use this introduction to explain why I feel computer science isn't a topic that requires attending college. That doesn't mean that I think you can get a programming job out of high school (unless you studied programming all your childhood) if you don't already know how to code, or that there's no work involved. It just means that the time invested in learning computer science is better served at home using your personal computers than it is using the resources and buildings offered by a college. All you really need to learn CS resource-wise is a computer and the internet and plenty of free time. It just so happens that you're more bound to have free time if you aren't going deeply into debt during your study time. Personally I think the government should pay you to study CS, it improves people's lives around the world so much, so I think there is no economic argument for going into debt to study something that is bound to not only get you a job but also pay for your "profitless" study time in due course. Given that you can get a raspberry pi for $50 and internet for $45 a month, which is sufficient to sustain an independent study of an entire undergraduate computer science curriculum (4 years), we're talking absolutely no need to pay for a college infrastructure. Being a humanities major requires college because your job future is teaching other people in a classroom the humanities with you as the lecturer (and classrooms require a college infrastructure). Computer Science jobs provide you with a laptop to do your work in a minimally-infrastructure-requiring role. They don't require infrastructure at the job site, so neither does learning how to do that job. You can't teach a humanities seminar at a coffee shop, but you can do your programming job at a coffee shop. A public library is sufficient infrastructure for a undergraduate CS student. A _bedroom_ is sufficient infrastructure for a CS student. Mixing college infrastructure is simply a luxury, in the same sort of way that being a member of a country club is a luxury. It doesn't provide anything that is necessary for life or employment, but it's a nice hangout if you have the money to pay for the buildings and golf courses and their upkeep. Well, we don't have enough money to pay for it. We're not-rich. College is bloated and recklessly spends what money we do give it, so it is constantly asking for more money and threatening to kick you out of the country club if you don't pay more and more each month. It used to be useful for finding employment, but now that formerly exclusive benefit is found via the internet too, and so it can no longer be justified in its cost given that the internet is $540 a year and a Raspberry Pi is $50.</p>

      <p>I'm not arguing for the elimination of country clubs. I agree with Steven Pinker in Enlightenment Now (2018) that wealth is not a zero-sum game and that income inequality isn't an injustice. If I were rich, I'd have a country club membership. The idea that country club memberships should be mandatory for everyone in the nation, regardless of financial stability, is dumb and impractical and risky. Country clubs should turn down membership requests from people that can't afford the monthly bill. And colleges should do the same. Going into debt just to learn what can be learned on the internet is a foolish endeavor for not-rich people. Colleges seem great because they offer a place for a lot of rich, smart people to congregate and socialize. But that is also true of the workforce. You can get a lot of that great conversation and interaction with smart people at a good job. That's why you should spend your time now, while you're unemployed, studying computer science as many hours as you can fit in a day, so that you can get that great job that replaces the social function of college. Become OER literate and earn what you deserve.</p>

      <p>A video summary of the rest of this document is at <a href="https://www.youtube.com/watch?v=Bij7UvR38yc">https://www.youtube.com/watch?v=Bij7UvR38yc</a></p>

      <p><strong>II. Books</strong></p>

      <p><strong>OER</strong></p>

      <p>You can go down the super hardcore path of learning computer science only through OER (Open Educational Resources). These are books that are available for free online. Dedicated groups are trying to improve OER books. There is little indexing of OER books anywhere, so finding them is more an exercise in frustration than anything. OER usually only covers introductory material, so the topics are limited in scope too. But OER can get you off the ground if you are new to programming, so they are worth investigating. I'm not going to focus on OER in this document, but I really do appreciate all the authors that have open sourced their books. They are cool people. Just google "OER" and "programming" or "computer science." If you are completely new to OER, check out OpenStax ( <a href="http://www.openstax.org">http://www.openstax.org</a>) for college-level textbooks in most disciplines (except computer science, unfortunately). If you want to study the liberal arts and STEM along with your deep dive into computer science, be sure to read the OpenStax books. People who create educational content and give it away on the internet are heroes. University of the People uses Saylor's OER for their entire curriculum ( <a href="http://saylor.org">http://saylor.org</a>), so if you are using OER you might as well just get a computer science degree from UoPeople.</p>

      <p>The best compendium of all the free OER programming books available on the internet is located at:   <a href="https://github.com/EbookFoundation/free-programming-books/blob/master/free-programming-books.md">https://github.com/EbookFoundation/free-programming-books/blob/master/free-programming-books.md</a>.  Find a modern programming language and dive in! There's no need to pay for introductory books to a programming language.</p>

      <p>Another good website is <a href="http://FreeComputerBooks.com">FreeComputerBooks.com</a></p>

      <p>Summary video: <a href="https://www.youtube.com/watch?v=xN7kJmqoVtA">https://www.youtube.com/watch?v=xN7kJmqoVtA</a></p>

      <p><strong>Public Library</strong></p>

      <p>The next paragraph is only applicable to people living in bigger cities that have a nice public library. Use your public library's computer science and programming books as much as possible. After you complete some introductory programming courses on the internet (or possibly through University of the People), then just go to your public library and check out those fat books on the various programming languages. Those fat books are enough to get you started on a programming language. Public libraries are really good about buying programming language books. Many of them are outdated, being that it's the public library after all, but if you consult YouTube for a video tutorial on how to set up a modern IDE and compiler for the given language, those old textbooks are gold for teaching you programming languages for free. Public libraries don't usually stock computer science books, but if you are trying to increase the number of programming languages you know, those fat language books are a great resource. There is no need to buy any of those sorts of books if you have a good public library. The computer books start at Dewey Decimal Number 0-100.</p>

      <p>If you need a textbook or book that isn't available at your public library, they might offer an Interlibrary Loan system with other libraries in your state. Just because a book isn't available at your local library doesn't mean it's not available for you if you are willing to wait a week or two for transit time.</p>

      <p><strong>College Library</strong></p>

      <p>The local college in my hometown offers a borrower's card for anyone living in the city. In other words, I have the same amount of access to books as any of the paying students. This is so helpful if it takes a bit of effort to actually get to the library. Granted, I can't access the wifi or computers, but if I have a cellphone I can have my local wan hotspot and don't need their internet anyway. Maybe you can score a wifi account if you email the college's IT department and explain that you're a townie that wants to do independent studying.</p>

      <p><strong>II. Computers</strong></p>

      <p><strong>Tablet</strong></p>

      <p>You might be wondering the best technique to get through all those digital books. Everyone knows that reading books in paper form is preferable to reading digital copies, but if you spend a little money on a nice tablet then reading digital books can become a painless endeavor. Elsewhere I will promote using the cheapest computer available (a Raspberry Pi) to do your research and work, but here is where I will promote splurging (if you are serious about becoming a programmer) and purchasing a nice tablet. Obviously I'm still going to promote being frugal, but there is a lot of return on investment on purchasing a nice tablet given all the reading that is required for a computer science education.</p>

      <p>In my opinion, you should purchase an apple ipad. Over the past few years they have become increasingly affordable. You can now purchase a refurbished Apple Air 2 ipad for $270 (<a href="https://www.apple.com/shop/browse/home/specialdeals">https://www.apple.com/shop/browse/home/specialdeals</a>). You don't want a size smaller than an ipad (avoid the ipad mini), and ipad pros are so new that they are still expensive. But old ipad models like the ipad or ipad air 2 are $240-290. The reason I promote an ipad is that the Retina display is high resolution so pdf text looks super crisp and sharp. You can get an Amazon fire tablet for $50, but the screen is smaller and the screen resolution is so poor that the text looks pixelated. There is no reason to fatigue your eyes (when reading a digital textbook is fatiguing enough already) by sacrificing for a low resolution screen. I am a total bibliophile and the only thing that has gotten me to read digital copies 99% of the time is my ipad. I bought an amazon fire for $33 on black friday just as a backup because my ipad was 5 years old, but I laughed out loud when I first used it. Splurge on an ipad, get the cheapest model available, and save up the money for as long as it takes it if you need to. It will be worth your time and energy. When you are reading tiny pdf-text squished onto a tiny tablet-screen, you want as high as resolution as possible. Look, the future is now and paper books are a relic of the past. Given that you can learn computer science for free through OER and high-resolution tutorial videos of people typing code into an text editor, you want a screen with a high enough resolution to render the pdfs and the tutorial video text. Splurge on an ipad. Eat black beans, lentils, and oatmeal for three months if you have to. If you are committed to keeping out of the Apple ecosystem, then find an appropriate Android or HD Kindle. One more detail to note is that ipad batteries last for 10+ hours, making it amazing for those days when you are reading from wake-up to bedtime. You want a minimum of 32gb to stock your phat OER stockpile, and to make your tablet future-proof regarding large operation system updates.</p>

      <p><strong>Dual Monitors</strong></p>

      <p>Dual monitors are extremely important if you are using online education because it is near impossible to alt+tab back and forth between your tutorial video with code and your actual IDE on a single screen. You will need to have your tutorial code on the left with your IDE on the right. The sad thing is that the Raspberry Pi only has a single monitor jack. Fortunately you can compromise by purchasing a tablet computer that can serve as a second monitor. What you do is purchase a small stand that allows your ipad to be propper up to the left of your desktop/laptop, and then play the tutorial video on your ipad while typing on your laptop. This is what I do when I'm studying Treehouse: I load the Treehouse app on my ipad and watch the videos, following along by typing the code onto my laptop's IDE. You can also download the app "Duet" which allows you to use your ipad as a tethered second monitor.</p>

      <p><strong>Computer</strong></p>

      <p>You can't program on a tablet, unfortunately, so you're stuck with purchasing a computer as your workhorse. Here's where you'll input all your source code, compile, and run the programs you code. Fortunately, desktop computers are cheap and ubiquitous and there's no reason to spend a lot of money on a desktop that only compiles and runs your teeny-tiny programming problem sets. I promote purchasing a Raspberry Pi ( <a href="http://www.raspberrypi.org">http://www.raspberrypi.org</a>) for around $50 (once you include the SD card and case). Raspberry Pi's run Debian ( <a href="http://debian.org">http://debian.org</a>), which is my favorite linux distribution. Ubuntu is fine but it takes more memory. I don't want to overwhelm you with the linux stuff right now, so I'll skip the discussion other than pointing out that if you want to become a programmer you need to learn linux. The gift is that linux is free and runs great on old hardware, so you can do all your programming on a $120 laptop as long as you run Debian. Taking care of your desktop computing with a Pi is a gift of modernity, and it would be a waste of money to purchase an expensive desktop computer for your undergraduate-equivalent study. Everything you need to do as a computer science student you are able to do on linux. The side benefit is that knowing how to use linux is almost a requirement of most professional programming jobs. An introduction to linux is $50 for a Raspberry Pi. Raspberry Pi's aren't sold in stores, so if you need to purchase one with cash you can buy a reloadable credit card, load it up for $50, and purchase your Pi off amazon. Purchase your keyboard, mouse, and HDMI monitor/television from Craigslist. Get a nice fat SD card for your disk drive, something at least 64 gb.</p>

      <p>As an example of why you shouldn't pay a lot for a desktop: I purchased the cheapest Apple possible (a refurbished mini for $420) because my apple air that my sister bought me broke and I wanted to learn objective-c and swift. I thought I was going to be studying computer science on my own for a little bit longer, but I applied to a nice job I found on nature.com the month after I quit school and totally got it. The job furnished me with a modern Apple laptop that I carry home with me after work to study on. I haven't used my mac mini once in the whole time that I've had this job. It's dead weight. If I didn't have a tendency to hoard my old apple computers, I would just sell it on craigslist. Live cheap and use your job-furnished computer once you find employment to study and code!</p>

      <p><strong>Laptop</strong></p>

      <p>The question of if you need a laptop comes down to preference. There is a lot to be gained from being able to work on your work on-the-go, at a coffeeshop, at the public library, etc. The trade off is that laptops are the most expensive computer equipment. Once you learn how to use linux, however, you are going to be able to finish your work on a much cheaper laptop than if you didn't know how to use linux. Debian works on a $100, ten-year old laptop. Just find the cheapest laptop possible that can still play HD YouTube videos and use that with Debian. If you use your Raspberry Pi as your main work computer and just use your laptop for small work that you're working on while on the go, you don't require an expensive laptop.</p>

      <p><strong>No Personal Computer</strong></p>

      <p>The hardest of hardcore. If your circumstances are such that you can't afford a computer at all in any form, don't fret. Everything that is required for a computer science degree can be completed at a public library station using a cloud IDE and the library's internet. Just spend the long hours necessary to complete your work at the public library. Pack three meals of beans, lentils, and rice and camp out there the whole day doing your work from open to close. Spend the next four years there. Google "cloud IDE" to find an IDE (Integrated Development Environment) that permits you to run your code, save your programs to your cloud account, etc. I think cloud9 ( <a href="https://aws.amazon.com/cloud9/">https://aws.amazon.com/cloud9/</a>) is sufficient for most cases. Maybe use google drive to save your code. If you are broke, use your public library computers and internet. There will be tons of good programming books you can work through there too. Keep your OER pdfs on a usb drive or google drive. Learning computer science is a good bet if you are trying to break out of the cycle of poverty. As I've mentioned before, unlike other STEM field, computer science does not require a university environment like labs. The curriculum is entirely achievable given the free resources at your public library. Teach yourself computer science at the public library using UoPeople, for example, get yourself a first job programming somewhere, and take the small steps to help break the cycle of poverty. Watch craigslist like a hawk for a free laptop or desktop computer. Even without internet at home, having a free offline linux computer can be useful for nighttime work or study.</p>

      <p><strong>Cellphone</strong></p>

      <p>A lot of people in poverty have cell phones nowadays. Personally I wouldn't pay for a cell phone if I couldn't afford it-- it's utility is small. But if you do have a cell phone, you can use it for an on-the-go internet connection using a personal hotspot. Your data plan might prevent you from watching video tutorials, but if you have a free wifi from somewhere during the day, you can download your video tutorials during the day and use your cell phone as a internet connection at home for low-bandwidth browsing such as text tutorials or OER downloads. My friend at the moment is forgoing cable at home and is using an unlimited-data T-Mobile connection as his main internet at home. I think this is definitely what people are going to do in the future, it might be a little early for its time, but if you do the research and experimentation perhaps this is a good way to save the $45/month bandwidth charge. If you spend all day at the public library (or a makerspace) using their wifi, hoarding the high-bandwidth stuff for later, then for the few hours you spend at home at night before you go to bed, if you keep it low-bandwidth perhaps a 5G connection is enough.</p>

      <p>It is very difficult to learn how to program on just a cellphone, but it might serve as a suitable ebook reader if you can't afford a tablet. Personally I'd rather use a $50 amazon fire for reading ebooks, but if you don't get a headache reading pdfs/epub on your cell phone, or your cell phone is super large, then go for it! Be creative with the technology you can afford.</p>

      <p><strong>III. Education</strong></p>

      <p><strong>High School - National Merit Scholarship</strong></p>
      <p>
        One thing you can do to ensure that you can go to college affordably is to study your butt off for the PSAT while you are a freshman through sophomore in college. If you have been a life long reader, and also skilled in math, now is the time to convert your precociousness into actual concrete dollars. That is to say, if you have been reading books obsessively your whole life, there is no reason not to get on top of studying for the PSAT in order to make a payoff with state schools in the form of full ride scholarships. Being a reader, you are posed to do very well on the written/reading portion of the PSAT. Some good students forgo studying for the PSAT, thinking they can just wing it and pull off being a finalist, but oftentimes even good students don't make the cut off for NM finalists and all their lifelong effort is lost just because they didn't study for the PSAT. Don't make this mistake, and use your college years to study vocabulary so that you are all set for the PSAT. Studying vocabulary also will help your reading and writing, so you'll craft better essays and be more prepared for college. It's quite rewarding!
      </p>
      <p>
        One thing I would do to study for the PSAT is download Anki (<a href="https://apps.ankiweb.net/">https://apps.ankiweb.net/</a>). Anki is a flash card program that is prioritized to increase learning gains by delaying frequency of showing cards that you know while increasing frequency of cards you don't know. Watch a tutorial on Anki on YouTube to get yourself aquainted. You definitely want to get yourself acquainted with Anki as soon as you can in your life. It is an asset, whether you are studying English vocab or even a foreign language! Anki is much better than just making paper flashcards. Learn how to make your own set of flashcards on Anki and maintain a deck for your current studies! This is valuable knowledge that will pay off if you dedicate an hour every day to studying vocab. You can import flashcard sets for free on Anki. Just click the "Get Shared" button on the decks panel to be transported to the AnkiWeb site. You can search for "PSAT" or "SAT" to find vocabulary compendiums to import to Anki. Do this as soon as you can! The rewards will be limitless! One thing I did in college was to cut index cards into fourth and use a hole punch to pop out a hole on the left side. I then attached the deck of flashcards on a closeable metal ring. I wrote the vocab word I didn't know on one side, then wrote a simple definition on the other side. I could pull the deck of flashcards out and flip through them whenever I had a break. Start doing this even in high school, whenever you read a vocab word that you don't know. Obviously you can have different decks for different source words, e.g. literature vocab, science vocab, etc. But in this day and age I would rely on custom-made Anki decks. In fact, that's what I do nowadays for my vocab.
      </p>
      <p>
        Khan Academy also offer SAT prep as a module on their web site. Be sure to study these videos years before you take the SAT, so that you are prepared for the PSAT. Obviously Khan Academy is also a great place for studying math in general. Take studying for the PSAT as a job: You are basically competing for a full ride scholarship to a state school, which is worth $10k a year, so devote as much of your free time as you can towards it. The PSAT takes place early in your high school career to cut out anyone who doesn't get a jump on studying for it. Don't be one of those people and study for the PSAT as soon as you're consciously able to do so. If you are smart you are only throwing away money if you don't take the time to study vocab. Don't let an unwillingness to study vocabularly words on Anki step between you and $40k! Become an expert on using Anki, and prosper as a student in high school!
      </p>

      <p><strong>Tuition Reimbursement from Employment</strong></p>

      <p>One ideal to aim for is to secure yourself a job as soon as possible given the lowest amount of credentials and time invested. That's almost a tautology, but there are some benefits of jumping into the work pool, especially if you are working as a programmer. Many jobs offer tuition reimbursement for courses taken while working. In other words, if you can get a job with an associate's degree, then your employment sometimes will reimburse you to finish your bachelor's degree (and also your master's degree). My current job, for example, reimburses 75% of the cost of tuition. That means I could get a master's degree from Georgia Tech OMSCS for $1750 (<a href="http://www.omscs.gatech.edu/">http://www.omscs.gatech.edu/</a>). Spending $1750 on getting a master's degree in computer science is a lush opportunity, to say the least. Unfortunately the program for Georgia Tech is focused on systems engineering rather than web development, otherwise I would be studying there right this moment via my job benefits! Obviously studying while working 40 hours a week isn't ideal, but it's otherwise possible if you take it slow. When you work in computer science you are usually studying programming anyway after work: You might as well be earning credit for it. Georgia Tech's OMSCS masters is created for people with 40 hour-a-week jobs, so as long as you take the fewest number of classes possible each semester you will be able to dedicate enough time to your classes to get good grades. The nice thing is that you already have a job in this setup, so you don't particularly have to rush to earn the degree. Find a job that offers tuition reimbursement! Additionally, I've had jobs that pay for a free Lynda or PluralSight account in addition to tuition reimbursement!</p>

      <p><strong>College</strong></p>

      <p>If you receive a full-ride to a college, either in state or out of state, be sure to take the opportunity and earn a bachelor's degree for free. If you are a national merit scholar, you can pretty much be assured of a good scholarship as long as you apply everywhere in your state. With the internet, the actual resources offered by the university you attend matters less and less and it's now a matter of self motivation and discipline. You can study all the topics you need to study thanks to the internet! I wouldn't pay more than $6k/year for a brick and mortar four-year college. If you earn good grades in high school, there is no reason to turn down the college that offers you the cheapest tuition and inexpensive dorming. Don't worry about the prestige of the college, just go with the cheapest one with a computer science department. All you need is a library to study at during the day and a dorm to sleep in at night. Bonus points if the college is in your hometown and you can just live and eat at home for four years to save money.</p>

      <p><strong>Community College</strong></p>

      <p>If your hometown has a community college, I suggest going to it for as long as you can instead of moving out of city or state and having to pay rent. You can live at home for free while you earn an associates degree in computer science. Earning an associates degree would cost about $10k total in-state tuition. Again, don't worry about prestige and understand that you can transfer the computer science credits you earned at a community college into credits at UoPeople. Obviously it's going to look better having a bricks and mortar community college associates degree than just a bachelor's from UoPeople, so if you are able to get financial aid at your hometown community college, take it! Don't spend more than $10k getting the associate's degree. Live at home.</p>

      <p>Another option to save money is to just take computer science classes (only) at your local community college (or even four year institution). That way you won't be paying for accessory classes like liberal arts classes just to earn an associates degree. By only taking computer science (and concomitant math) classes, you won't earn a degree, but you'll also have more time each day to dedicate to reading computer science textbooks and doing problem sets than if you had to use that time reading fiction or theater or painting or whatever. When I went back to school for two years to study computer science, I only took computer science classes, usually 2-3 each semester. I had so much free time that I was able to study web development with Treehouse on the side. Having time meant that I got straight A's in all my classes because I was never stressing over the burden of homework from other non-CS classes. I am able to put on my resume that I studied computer science at yada yada university for two years, taking these nine courses, and earning a departmental gpa of 4.0. That's enough for my resume, even though I don't have a computer science degree. If I really wanted a CS degree I would just apply to UoPeople and transfer in enough credits with my CS courses that it wouldn't take long to earn a bachelor's of science from them. Community college is so cheap that it would be a mistake to skip them over if they offer computer science classes.</p>

      <p>My recommendation: Take as many Math, CS, and STEM classes as you can at your local community college, living at home and studying all the extra necessary CS stuff with OER, then transfer your community college credits over to an inexpensive four year college when you have exhausted their CS catalog.</p>

      <p><strong>University of the People</strong> <a href="http://uopeople.edu"><strong>http://uopeople.edu</strong></a></p>

      <p>Allow me to geek out about the University of the People. This is a sweet program that is new and answer a lot of questions concerning how to get a job as a programmer when you are broke and can't afford college. Obviously you can study online for free through MOOCs and OER, but when it comes to getting your application moved forward you are going to want to have a degree in computer science from somewhere. University of the People is an online college that offers such a degree for $4k total. I'm not going to be obtuse and say that's not a lot of money. It's basically the cost of a cheap used car. But at the moment that is the cheapest possibility for college tuition ignoring some other factor like scholarships or financial aid. Some people criticize the name, saying no employer would take it seriously, but I think it's a totally bad-ass name and any employer that cares about social justice-y school names isn't one you want to work for anyway. Relying on social justice programs to get your through financially difficult times shouldn't be embarrassing now or ever. The simple fact is that if you study at UoPeople because you can't afford brick and mortar college, it shows that even when you couldn't afford college you wanted to study computer science at college and sacrificed to make that possible. That shows dedication, and any employer who doesn't realize that is aloof. I'm just going to be honest, most people who learn how to program as children and decide that that is a potential future career don't do it because it's a cush money maker, but they realize technology's promise to solve social problems. UoPeople is one such solution that has been created: It uses the internet and OER to design a certified online computer science curriculum that is affordable. Yes, it's not regionally accredited, so you can't transfer class credit. So finish the degree if you start. But it's an opportunity that only is available because of the technologies that computer science has invented. Keep the cycle of giving going and learn to program in order to contribute the next new technology that solves social problems. Enroll in UoPeople if you don't have a inexpensive college within driving range of your home. Supplement their courses with MOOCs, OpenCourseWare, and OER, and this website's curriculum.</p>

      <p>That said, UoPeople has its downsides. First, I would say that it is incredibly expensive given that it is based around OER that is openly available. You can just go to <a href="http://saylor.org">http://saylor.org</a> and read all the computer science classes, which are the same reading materials as UoPeople classes. Why pay money for free OER? Just read it on your own and save $4k. I'm tempted to say UoPeople is just a way to monetize OER, without any reward like regional accreditation. I've also heard that UoPeople tests are incredibly easy. That's a shame, I really wish they would keep their curricula rigorous and challenging. Having a pud CS class without access to a professor to ask questions isn't worth the money, to be honest, when you could just study a textbook and consult OpenCourseWare for free. If you aren't even challenged by your class, why not just independently study?</p>

      <p>$4k is a lot of money to spend on computer science online study. I went to two years of computer science classes at a four year university in my hometown for $8k total. Granted, I didn't get a degree, but I have transferable classes if I ever feel the need to get a b.s. in CS (which I don't), and I have professors that can act as references on my resume. I could fund a <a href="http://teamtreehouse.com">http://teamtreehouse.com</a> account for 11 years with $4k, and have access to their proprietary video tutorials for so many years that I could complete the entire curriculum and learn about ~8 programming languages and a dozen more web frameworks, UoPeople just offers access to otherwise free OER from Saylor and doesn't even provide video tutorials or access to a professor (who can learn CS by emailing a volunteer professor?) or even video conferences for all the students each day. They don't offer anything that requires high bandwidth in order to support students in Africa, so you're not exactly utilizing technology to improve your student success. It's completely text-based, and texts that are free online anyway. Sorry, UoPeople is too bare bones to justify $4k unless you have no other option in your hometown to study CS at a community college or college and you're really driven to have a degree. If you live in a rural setting or all the colleges in your hometown are too expensive or something, then maybe UoPeople can be justified. UoPeople operates under the assumption that people need degrees, and I simply don't believe that to be the case. If you resume is solid, you have a lot of good source code up on github, you've done all your homework, and you've studied 10+ hours a day for 4 years, you're going to be able to get a job somewhere that'll reimburse your tuition so you can come out of working there with a degree. If you're actually not extremely poor, and you're willing to play risky with $4k if you think that's enough to snag a job (and maybe you like the structure of having daily homework, even if that homework is pud), then go for it! Otherwise buy 11 years of Treehouse (assuming it isn't free already from your public library). In reality you'll need only two or three years of Treehouse after your first year of intro programming courses.</p>

      <p>My advice is to make the degree as challenging as Stanford or Carnegie Mellon and flunk all the people who are looking for an easy degree and unwilling to put in the time and work, and then you'll turn out smart programmers. If I were UoPeople I would focus on making my CS curriculum one of the most challenging in the world. Then people would pay $4k.</p>

      <p>Recommendation: Try to independently study CS for cheap using the curriculum provided by this website. Go to community college if there is one in your hometown that you can live at home and attend. Remember that you can always transfer your credits into UoPeople whenever you feel it's time to start saving on tuition and enroll at UoPeople. Get an associates at community college if your hometown only has a community college, then transfer into UoPeople's bachelor degree program. Remember that understanding how to code comes from reading books, doing problem sets each chapter, or developing personal projects on github/heroku, and keep studying beyond the minimum requirements for daily assignments. Try to progress as fast as possible in your programming skills. You can do this because your costs are so low and you are living so frugally, affording more time devoted to study instead of working to pay expenses.</p>

      <p>
        Recommendation Two: If it's too expensive to go to college in your hometown, or you like the idea of an online degree in CS for $4k, I would enroll in UoPeople and study as hard as you can for four years, supplementing their courses with this website's curriculum as well as plenty of moocs for each subject studied. With a degree in hand, you can then apply for a $7k masters degree from Georgia Tech in their OMCSCS degree (next section). That means you can get a master's degree in CS for roughly $11k in tuition plus the cost of six years of bandwith ($3000), so we'll say $15k. If you make use of these affordable online computer science degrees, you can really learn a lot and use the savings to afford yourself more study time so you can program above and beyond the minimal requirements for assignments and homework. If you pump six years into online study and emerge with a master's degree, you will be set education-wise. Honestly, a lot of good paying computer science jobs require a B.A. degree, so $4k for such a certificate might just be the necessary ransom money you have to pay to ensure your job application isn't rejected a priori. Don't worry, in the future you'll get your online degree free through your public library, but until that's the case UoPeople is the best option for CS students to get a B.A. if their hometown doesn't have affordable college.
      </p>

      <p>One more thought. Part of what makes college interesting as an activity is its receptivity to technological advancement. Remember, if there weren't computer science departments at college, you wouldn't even have to ask whether you should go to college to study computer science. But colleges adapt to technology, so they do things like add computer science departments when they see that programming is going to play an essential part to the future. Part of that technological receptivity also is beholden to the student. If the prospective student chooses a college that doesn't embrace technology, often they are only harming themselves. A college needs to prove to the prospective student that it has a grasp on technology and a pulse to the adaptations of education as a result of new inventions and EdTech. In that sense, UoPeople should look really good to you, because it's basically futureproof. At no point in the future are people going to look at a cheap online computer science education as "a bad idea." In fact it is the most sensible response given how important programming is, and that we as a nation don't want to exclude working class kids from playing, experimenting, and inventing with computers. In that sense, UoPeople, once it gets a little more wind in its sails, is going to become a very important player in what it means to be a computer scientist in a decade or two. There is no reason not to be an early adapter, however, and partake in the benefit of getting a bachelors degree with minimum student debt. If I didn't believe that OER was just as good as paid textbooks, I wouldn't have made this site. And if I didn't believe a college degree that uses OER is just as good as a textbook-based college degree, I wouldn't have made this site. Using OER proves that UoPeople has a good grasp of technology and is able to predict the future. That sort of foresight is what you want to see in your college of choice. The fact that this foresight is found in a college that has $1k a year tuition is a godsend. I'm a big fan of public school and would promote them before any private school, but if you wind up crunching the numbers and discover public school is too expensive compared to UoPeople, as long as you don't use online classes as an excuse to slack off and still go to the public library every day to study, you should make a lot of progress in learning how to program while completely avoiding student debt. Investing in foresight is rarely a bad choice if you are studying technology.

      </p>
      <p>
        I think the day and age of the student loan has passed. Student loans becoming a tradeable commodity on wall street was just one of the reasons for the crash in 2008. I think the wise decision going forth is always pay in cash your tuition and never take out a student loan. That might seem silly, but I think that's the reason UoPeople is so amazing. To fund UoPeople and four years of internet ($2000) would require 800 hours of labor at minimum wage. That means, following high school, you could work for 20 weeks (5 months) to pay for your bachelor's degree tuition and hardware expenses. This is just two more months than a summer job. I very much like this idea of paying for your tuition in cash and never taking out a (non-forgiveable) student loan. This is possible through UoPeople.
      </p>

      <p><strong>Georgia Tech Online Masters of Science in Computer Science</strong> <a href="http://www.omscs.gatech.edu/"><strong>http://www.omscs.gatech.edu/</strong></a></p>

      <p>
        A $7k online master's degree in Computer Science. The core specializations are Computing Systems, Machine Learning, AI, or Computational Perception/Robotics. If those aren't your areas of research interest, you might have to make some sacrifices. Computing systems is the most generic, allowing something more like a software engineering trajectory rather than operating systems or such. This is a legit program, no complaints, so work hard on acquiring the cheapest B.A. in computer science you can and then put up two years to get this master's degree for only $7k. This program is designed for working students, so your best angle of attack might be to get your B.A. in computer science through local colleges or UoPeople, then find employment, then using tuition reimbursement from your job to pay for an OMSCS degree. If I were to do that at my current job, for example, an OMSCS degree would cost $1.8k total for me. That's practically free, and honestly I'm a fool for not taking it up as soon as I got this job and wasting two years choosing to study Treehouse and Lynda instead in my spare time. Such is the life of a full stack developer! Don't make the same mistake I did, and as soon as you get a job with tuition reimbursement apply to OMSCS. Have this be a life goal.
      </p>

      <p><strong>Makerspaces</strong></p>

      <p>If your town has a makerspace, this can be a good place to study that isn't the public library. Makerspaces aren't free, but they present a good community setting that is dedicated to STEM, so it's a good alternative to the study spots that brick and mortar colleges usually provide. Test the waters by getting a makerspace subscription for a few months and spend as much time as possible there studying your classes on your laptop and meeting new people. You'll make some friends, hopefully, and then you can decide if the space is rewarding enough to continue to pay its monthly fees. Perhaps you can work out a deal because you are a student/in-need/unemployed.</p>

      <p><strong>Tips for Being a Student</strong></p>

      <p>Search for "study skills" in YouTube and spend as long as necessary learning how to succeed with college-level work. Programming isn't easy, and you can't skimp on the workload even if you are studying online and aren't bound by grades. If you are unemployed and have the whole day to yourself, try to study computer science for 10 hours a day, every day for 2+ years until you get a job. To fritter away valuable free time is anathema to one's goals. You should either be working and earning money, or studying in order to obtain a job to earn money. To waste your time while unemployed by not studying is playing with fire: if you can't program after four years of independent studying, what excuse will you have? Blame OER for not being good enough? Responsibility for studying each day in order to obtain a good job requires: a) never playing video games again, b) not mindlessly surfing the internet for anything more than 20 minutes a day, c) never watching tv again. Adults don't do this sort of thing anyway, and you don't want to be that drone of an adult sort that can't talk about anything other than shows on Netflix. Television and video games are for elementary school kids. Don't be a manchild and think you can succeed without work. Subscribe to PBS Passport for $60 a year instead of Netflix.</p>

      <p><strong>IV. The Public Library</strong></p>

      <p><strong>Introduction</strong></p>

      <p>Public libraries are increasingly becoming providers of online education in computer science, such as providing free access to Lynda.com and teamtreehouse.com. In my opinion, in the future you will receive a bachelor's degree for free through services provided by the public library. It is almost inevitable, mark my words. That's why I argue against spending a lot of money on a bachelor's degree because it won't be too long in the future that you will be able to receive an equivalent education for free through your public library. I can see schools like the University of the People or equivalent offering public library unlimited subscriptions for cardholders in return for a yearly sum, offering free bachelor's degrees in computer science for all library patrons. Given that  teamtreehouse.com is nearly equivalent to a computer science degree in scope (with the library offering a nonaccredited service that costs $300 a year versus UoPeople's accredited cost of $1000 a year), you could even say it is already happening, but without accreditation. Many public libraries offer cards for anyone living in the same state. For example, I can access NYPL's Lynda.com subscription even though I live in Troy, NY and will never visit the NYPL in person. If your public library doesn't offer an online service that you think it should, you can email them and request that they subscribe. Regularly check in on your library's digital resources page and take advantage of all the free services they offer. I read the New Yorker and Architectural Digest for free thanks to my public library's subscription to Flipster! That saves me like $50 a year. I can watch all the Criterion Collection movies and Teaching Company lectures thanks to the NYPL's Kanopy subscription. It's a great time to be a library patron! Public Libraries are your greatest ally as a computer science student.</p>

      <p><strong>Treehouse</strong> <a href="http://teamtreehouse.com"><strong>http://teamtreehouse.com</strong></a></p>

      <p>My public library in Topeka, KS offers free subscriptions (a $25/month value). These video tutorials are invaluable to someone like myself that wants to work in web development. If you are able to get a teamtreehouse subscription through a public library (if not, ask!), it is basically equivalent to getting a full ride scholarship to college. Treehouse doesn't teach computer science, more programming, so don't rely on it alone for your education or else you'll be deficient in actual computer science knowledge. But it is a great supplement to OpenCourseWare/OER. There was a point in my studies where I was learning more job-valuable skills through Treehouse than I was studying CS at university, so I unenrolled from university to study dedicatedly at Treehouse (for free, mind you). I got a job instead, rendering my super-frugal plans moot, but I am still at the point that I'm not enrolling in any more university classes (including UoPeople and Georgia Tech OMSCS) until I completely exhaust the resources available through Treehouse. It's a great service and I am grateful to my public library for being so progressive as to seeing the value of paying for it. Personally I wish Treehouse were a nonprofit but whatev.</p>

      <p><strong>Lynda</strong> <a href="http://lynda.com"><strong>http://lynda.com</strong></a></p>

      <p>More likely your public library will subscribe to Lynda. Lynda rocks! They have an extensive computer science section of tutorial videos. You can take many classes on most mainstream programming languages, and Lynda excels at taking you from zero experience to enough knowledge of a programming language to be able to study it at a more advanced level on your own through OER. There are more Lynda tutorials than there are hours in the day, so you'll never run out of computer science topics to learn about. My public library's dual offering of Lynda and Treehouse subscriptions keep me busy in the four hours or so I have to study after work. My job, for example, offers a free Lynda subscription to all employees! I think I have three valid Lynda subscriptions at the moment.</p>

      <p><strong>V. Free Online Services</strong></p>

      <p><strong>Introduction</strong></p>

      <p>These are computer science curricula that are online and require no monthly subscription fee.</p>

      <p><strong>Khan Academy</strong> <a href="http://khanacademy.org"><strong>http://khanacademy.org</strong></a></p>

      <p>Khan Academy can provide the equivalent of a first year of college for free. Their STEM curriculum is stupendous for being free. Combining Khan Academy with an OpenStax textbook ( <a href="http://openstax.org">http://openstax.org</a>) can provide ample learning. I think everyone attempting to earn a college-equivalent education should complete the entire oeuvre at Khan Academy. You might as well finish the entire oeuvre over at Crash Course's YouTube channel too, while you're at it. Then hit the advanced stuff and never look back.</p>

      <p>Khan Academy also offers computer science topics. They are good introductions but are not going to replace OpenCourseWare. Of course the target audience for Khan Academy is high schoolers taking AP classes, so YMMV. My favorite is their class on Information Theory. If you have not watched that, drop whatever you are doing right now, sign up for a Khan Academy account, and watch the course ( <a href="https://www.khanacademy.org/computing/computer-science/informationtheory">https://www.khanacademy.org/computing/computer-science/informationtheory</a>)</p>

      <p><strong>PluralSight</strong> <a href="http://pluralsight.com"><strong>http://pluralsight.com</strong></a></p>

      <p>I learned about PluralSight by receiving a free subscription when I did an internship at a local company. It's a very valuable resource for programming video tutorials. It is a little more advanced than Lynda's offerings, aiming at a target audience of people that already know how to code. But they offer many beginner's courses for people that do not yet. PluralSight is usually $200/year, however PluralSight is available free through a 3 month trial period using a Microsoft account. Go to <a href="http://signup.live.com">http://signup.live.com</a> and make an account. Then go to <a href="https://my.visualstudio.com/">https://my.visualstudio.com/</a> and sign in with your Microsoft account you just made. At the Visual Studio Dev Essentials page choose PluralSight and click "Get Code." Go to the PluralSight page and redeem your account. </p>

      <p><strong>FreeCodeCamp</strong> <a href="http://freecodecamp.org"><strong>http://freecodecamp.org</strong></a></p>

      <p>This is a neat nonprofit that teaches front-end web development for free. They are trying to fulfill the need for resume material so people can get jobs, so they are very focused on certificates as you move along through their curriculum. I'm not sure they're exactly resume fodder, but if you've never done web development and you need an introduction this is a great resource. A good community too and the fact that they do it all for free is hella respectable.</p>

      <p><strong>VI. OpenCourseWare</strong></p>

      <p><strong>Introduction</strong></p>

      <p>OpenCourseWare is video of an actual college classroom lecture. Usually the syllabus of the class is available online somewhere too, so at minimum you can read along with the assigned textbook. At best you can do the same problem sets as the students. OCW is starting to show its age. It's high expense (requiring a professor, a classroom, a zoom digital camera, microphones, and so forth) prevents scaling up for distribution at low costs. But it's an interesting vantage if you are interested in seeing how college lectures are given. People are now able to create MOOCs with an iphone and a wacom bamboo tablet, so OCW might become overkill for the future. But if you are following along at home by reading the assigned textbook (always read the assigned textbook! Skipping the textbook and only watching OCW is akin to reading just the cliff notes of fine literature), you can learn a ton if the professor is good. OCW usually also covers more advanced topics, though rarely graduate level classes. Supplement your UoPeople classes with OCW found on YouTube.</p>

      <p><strong>MIT OpenCourseWare</strong> <a href="http://ocw.mit.edu"><strong>http://ocw.mit.edu</strong></a></p>

      <p>This started it all. A listing of OpenCourseWare that contains video is at <a href="https://ocw.mit.edu/courses/audio-video-courses">https://ocw.mit.edu/courses/audio-video-courses</a></p>

      <p><strong>aGupieWare OCW Roundup Blog Post</strong> <a href="http://blog.agupieware.com/2014/06/online-learning-intensive-bachelors.html"><strong>http://blog.agupieware.com/2014/06/online-learning-intensive-bachelors.html</strong></a></p>

      <p>This blog post is starting to show its age, but a few years ago this was the best compendium of OCW YouTube lectures on the internet. You could follow along class by class basically receiving an equivalent of a bachelor's degree. These lectures helped me so much when I was working through my computer science classes. Be sure to read whatever textbook the professor is lecturing on.</p>

      <p><strong>VII. MOOCs</strong></p>

      <p><strong>Introduction</strong></p>

      <p>Don't pay money for any of these MOOCs. They will try and entice you into paying for a certificate but please do not if you are poor. Certificates will not help you in any form. Always audit the classes. MOOC videos are not a replacement for reading the textbook on the subject. In fact I firmly believe people's time is better used reading books than it is watching MOOCs. Usually they are more like cliff's notes.</p>

      <p><strong>Class Central MOOC Search Engine</strong> <a href="http://class-central.com"><strong>http://class-central.com</strong></a></p>

      <p>A search engine for MOOC classes. Find what specialization you're looking to learn about.</p>

      <p><strong>Open Source Society University</strong> <a href="https://github.com/ossu/computer-science"><strong>https://github.com/ossu/computer-science</strong></a></p>

      <p>This is a solid compendium of MOOC classes that fulfill some semblance of a complete computer science curriculum.</p>

      <p><strong>Coursera</strong> <a href="http://coursera.org"><strong>http://coursera.org</strong></a></p>

      <p>For-profit MOOC platform. They have a good grasp on what's possible through a MOOC and don't usually make overly grand promises on the potential of their classes in getting you a job. They're also classy enough to offer their certification courses for free to audit and not hiding them behind a paywall.</p>

      <p><strong>edX</strong> <a href="http://edx.org"><strong>http://edx.org</strong></a></p>

      <p>Non-profit MOOC platform. Really good classes. Also won't hide their multi-course certification classes behind a paywall.</p>

      <p><strong>Udacity</strong> <a href="http://udacity.com"><strong>http://udacity.com</strong></a></p>

      <p>Alright if you can find a class that's actually free.</p>

      <p><strong>Stanford Lagunita</strong> <a href="https://lagunita.stanford.edu/courses"><strong>https://lagunita.stanford.edu/courses</strong></a></p>

      <p>Stanford doesn't pair with any MOOC platform, so they just created their own platform on which to serve MOOC content. Not a wide selection, and some Stanford classes are available through OCW on YouTube, but there are some classics here like compilers and databases.</p>

      <p><strong>Other Notable Platforms</strong></p>

      <p><a href="http://futurelearn.com">http://futurelearn.com</a></p>

      <p><strong>VIII. Sample Curriculum</strong></p>

      <p><strong>Introduction</strong></p>

      <p>Do each of these steps one by one to completion. Don't work on multiple steps simultaneously.</p>

      <p><strong>Getting Started: Classes for Kids (and total newbies like you)</strong></p>

      <ol>
        <li>Finish the entire CS curriculum at Khan Academy. <a href="https://www.khanacademy.org/computing">https://www.khanacademy.org/computing</a></li>
        <li>Watch the Crash Course on CS <a href="https://www.youtube.com/watch?v=tpIctyqH29Q&amp;list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo">https://www.youtube.com/watch?v=tpIctyqH29Q&amp;list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo</a></li>
        <li>Finish the entire curriculum on Swift Playgrounds on your new fancy ipad.</li>
        <li>Finish the entire edX curriculum on Beauty and Joy of computing from Berkeley <a href="https://www.edx.org/course/beauty-joy-computing-apr-cs-principles-uc-berkeleyx-bjc-12x-0">https://www.edx.org/course/beauty-joy-computing-apr-cs-principles-uc-berkeleyx-bjc-12x-0</a></li>
        <li>Also read the written curriculum on Snap! <a href="https://bjc.edc.org/">https://bjc.edc.org/</a></li>
        <li>Learn to code in Scratch on edX <a href="https://www.edx.org/course/programming-scratch-harveymuddx-cs002x-1">https://www.edx.org/course/programming-scratch-harveymuddx-cs002x-1</a></li>
      </ol>

      <p><strong>Learn the Basics of your Raspberry Pi:</strong></p>

      <ol>
        <li>Learn linux at <a href="https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-1">https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-1</a> then supplement your knowledge of the terminal using the OER at <a href="http://linuxcommand.org/tlcl.php">http://linuxcommand.org/tlcl.php</a>  Read the entire book after finishing the edX program. You are going to want to know linux as well as you can to get a good developer job. You've been using your Raspberry Pi and Debian laptop this entire time, right? No Windows or OSX allowed. After this and learning C with CS50, you will be able to analyze the source code of linux and begin writing open source software. This step can be done out of order and with another step. Always be reading a textbook on Linux as you are also studying programming languages.</li>
        <li>Choose a text editor to get you through the programming language work. Good choices are either Microsoft Visual Studio Code ( <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>) or Atom ( <a href="http://atom.io">http://atom.io</a>)</li>
        <li>Install Chromium on your raspbian: <a href="https://raspberrypi.stackexchange.com/questions/374/how-do-i-install-google-chrome">https://raspberrypi.stackexchange.com/questions/374/how-do-i-install-google-chrome</a></li>
        <li>Google &lt;programming language&gt; + "install debian" to learn how to install programming languages on debian. Usually it's just an apt-get (although Java is more difficult)</li>
        <li>Keep your system up to date: <a href="https://www.raspberrypi.org/documentation/raspbian/updating.md">https://www.raspberrypi.org/documentation/raspbian/updating.md</a></li>
      </ol>

      <p><strong>Learn the Basics of Programming:</strong></p>

      <p>Buy Introduction to Java Programming by Y. Daniel Liang, ninth edition for $15 on amazon. <a href="https://www.amazon.com/gp/offer-listing/0132936526/ref=dp_olp_all_mbc_mma?ie=UTF8&amp;condition=all">https://www.amazon.com/gp/offer-listing/0132936526/ref=dp_olp_all_mbc_mma?ie=UTF8&amp;condition=all</a> Be sure you get the full edition, not the half edition (which cuts the number of chapters covered in half). This is a very good book in which it would be preferable to have the latest edition, but the latest edition is $150 whereas the $15 ninth edition covers pretty much the basics which don't really change from year to year. What you need to do is read through each and every chapter, typing in all the example code into your text editor (Visual Studio Code or Atom) and compiling using your terminal. Debug your typos. Read each chapter, then answer EVERY question at the end of each chapter. You will write a single program that does what's requested each problem. You will memorize the syntax of java by typing in a program from scratch every question, then compiling and debugging until it works. There are answers available for the odd questions available on the internet (<a href="http://www.cs.armstrong.edu/liang/intro9e/exercisesolution.html">http://www.cs.armstrong.edu/liang/intro9e/exercisesolution.html</a>) but DO NOT use them at all, unless you are absolutely stuck. If you cheat and look at the answer before attempting to answer the question yourself, you are only robbing yourself of the learning opportunity. I would rather you move on from the questions you can't answer and leave it broken than look at the answers in the zip and get into a bad habit. Read the entire book and do the questions for each and every chapter, except the graphics and GUI chapters on Swing which have been replaced with JavaFX. It is most important that you read Chapter 1 - 16 (through object oriented computing). The following chapters are on Swing/JavaFX, which is useful but Swing has been replaced by JavaFX, and after that there are chapters on Data Structures which you will want to read even if you are studying data structures somewhere else through OpenCourseWare. It will take you a long time to read the entire book if you are doing each and every problem at the end of each chapter, but by the end you'll be a confident java programmer than can create programs from scratch. Even though this step costs $15, you cannot skip it if you truly want to be a programmer. You cannot learn what you learn in this book through OpenCourseWare. You have to read the explanations of Object Oriented Programming in print, not video. This will be the wisest $15 you've ever invested. READ THE WHOLE BOOK. It will take you anywhere from 3 months to a year if you are doing each and every problem at the end of each chapter. At the conclusion of this step you can begin relying on OER for your studies, now that you know the basics of programming, which will make it much easier to learn new programming languages now that you know the fundamentals.
      </p>

      

      <p><strong>IX. Internships</strong></p>

      <p><strong>Unpaid Internship</strong></p>

      <p>Personally if I lived in a city with industry I would obtain an unpaid internship after one year of studying CS. I wouldn't work more than 10 hours a week. As long as you can code OOP you can generally operate effectively enough for an unpaid internship. There might be some perks with the internship too. I wouldn't do this more than six months or the amount of time it took to find a paid internship.</p>

      <p><strong>Paid Internship</strong></p>

      <p>Try and get an paid internship as soon as you have been studying CS for 2-3 years. It will pay $10-15 an hour. I still wouldn't work more than 20 hours a week while studying.</p>

      <p><strong>X. The humanities and other STEM classes</strong></p>

      <p>Be sure to read for pleasure while you're studying computer science, but just don't use it to procrastinate either. Reading literature will help your writing skills. Most of the primary sources studied in humanities classes can be found at your public library. There are many humanities courses on coursera and edx too. NYPL offers Kanopy, which has The Teaching Company lectures, which cover many humanities topics. . If your public library has a Lynda subscription, there are many art and illustration courses offered. Be sure to go to museums, play an instrument, study a foreign language, read books, etc. Don't think that you need a discussion group in order to learn anything about humanities. Just like CS, a lot of really good OER exists related to the humanities. The public library is invaluable for humanities studies, just google syllabi from good universities and read the assigned books. Public Libraries also offer pretty good ebook services that have quality books. Overdrive makes an app called Libby that some libraries subscribe to that has a very good selection of books.</p>

      <p>Most of what OER literacy applies to CS also applies to other STEM classes. All the resources for free CS classes also offer other STEM classes, though not as much. OpenStax is a great source for textbooks on first-year STEM. Khan Academy is helpful for overviews on the subject. Honestly I would be careful combining MOOCs for CS with MOOCs for STEM. You might just burn out on MOOCs. Try and add variety somehow, whether that means reading OER instead of watching videos, etc.</p>

      <p><strong>XI. Living Cheap</strong></p>

      <p><strong>Veganism</strong></p>

      <p>I eat five things everyday for 1500 calories. I have a $15 food scale to weigh my servings:</p>

      <p>Breakfast: one 40g serving of oatmeal and 13g of flax seeds for breakfast (sweetened with splenda), 42g serving of soy protein powder</p>

      <p>Lunch: 350g of cooked lentils, 42g serving of soy protein powder</p>

      <p>Dinner: 300g of cooked black beans, 42g serving of split pea/rice protein powder</p>

      <p>If you aren't dieting like I am, you can include extra food like rice, wheat bread, and peanut butter to add calories. Add vegetables as much as you can and still keep on track with your calories (I struggle to make it to the store every week to buy vegetables). I put my lunch and dinner in zip lock baggies and carry them in my backpack so I can eat them at work and head directly to the library after work to study instead of heading home. I eat this every day and supplement with vegetables/salads when I can manage to make it to the store. I obviously take vitamins every day: B12, a multivitamin, and D. It's pretty boring to eat the same thing everyday but I was $3000 under budget for food last year. The nice thing about eating this every day is that you can go to the store and buy two month's worth of food for $100-200 (bags of dried beans and lentils, cannisters of oatmeal, etc) and not worry about having to go shopping ever. I cook a big batch of black beans and lentils (two 1lb bags of black beans, two 1lb bags of lentils) separately on the weekend, and refrigerate them in tupperware to last the entire week.  I buy my soy protein powder in 40lb bags from <a href="https://www.bulksupplements.com/">https://www.bulksupplements.com/</a>. I put my day's worth of protein powder in separate ziplock bags that I reuse each day and carry them in my backpack's front pocket. It's a little awkward to make protein shakes at work but then again don't get between a vegan and their vegan protein.</p>

      <p>Also never eat out at restaurants, even during the weekend (carry your beans and lentils with you, with a spoon for total on-the-go meals).</p>

      <p><strong>Cars and Biking</strong></p>

      <p>Always buy a used car. If you don't need a car, get a scooter. If you don't need a scooter, get a bicycle. Get a cheap bicycle off craigslist and always try to bicycle wherever you're going. It will double as exercise. Try and live within biking distance of your job.</p>

      <p><a href="https://www.mrmoneymustache.com/2013/04/22/curing-your-clown-like-car-habit/">https://www.mrmoneymustache.com/2013/04/22/curing-your-clown-like-car-habit/</a></p>

      <p><a href="https://www.mrmoneymustache.com/2011/04/19/how-to-come-out-way-ahead-when-buying-a-used-car/">https://www.mrmoneymustache.com/2011/04/19/how-to-come-out-way-ahead-when-buying-a-used-car/</a></p>

      <p><a href="https://www.mrmoneymustache.com/2012/03/19/top-10-cars-for-smart-people/">https://www.mrmoneymustache.com/2012/03/19/top-10-cars-for-smart-people/</a></p>

      <p><strong>Thrift Stores for clothes</strong></p>

      <p>It is a sensible thing to buy your clothes used from Goodwill or Salvation Army (or whatever cheap thrift stores your town might have). These are kind of bad companies, morality-wise (they're still beating that homophobia dead horse), but ultimately there is no one else offering the service that they do. I recently lost two dress sizes due to dieting and replaced my entire closet for $300 from Goodwill and Salvation Army. Each piece was a fancy brand name.</p>

      <p><strong>Live at Home</strong></p>

      <p>If you're just studying computer science until you get a job, you will find you have more time to study when you don't have to have a job to pay rent for a studio apartment (which you have to pay cable internet costs for, utilities, etc.). Though living at home while you're 18-22 is no treat, the money saved is worth it especially when studying computer science offers so many opportunities to land a great job and move on to the next chapter of your life. I recommend going to a college that's in your home town just so you don't have to pay for rent. If you get away from home by going to the public library or a makerspace to study each day, carrying your lunch and dinner with you, you can get away with just being at home to sleep. If you work on your lifestyle so that you're no longer drinking, there's no reason why not to live at home and save hundreds of dollars a month. Your main focus is on studying computer science.</p>

      <p><strong>Drop alcohol and coffee and pot and diet soda</strong></p>

      <p>These are luxury items reserved for the rich. You cannot afford them, and don't try and pretend that you can. They are highly addictive anyway, and compromise your health (mental and physical) and sleeping patterns. Never buy coffee from a shop unless you're paying for the right to study at their space (and in that case, buy decaf). Watch this lecture through Kanopy, and never touch a psychoactive again: <a href="https://www.thegreatcourses.com/courses/the-addictive-brain.html">https://www.thegreatcourses.com/courses/the-addictive-brain.html</a>. I'm a vegan straightedger and it saves me thousand of dollars a year. It is also a fun challenge to remain sober and frugal each weekend and still have fun with your friends. It's also ridiculously difficult to get through a day without taking in any caffeine or wasting money on soda (I drink decaf tea every day), but when you can invest that money in retirement instead it's totally worth the struggle.</p>

      <p><strong>Exercise</strong></p>

      <p>Prioritize your health. You will be able to study longer and more focused if you exercise every day. Start long distance running and weight lifting. I don't have recommendations for doing this frugally, because I live in an apartment with a gym and treadmills so I don't have to worry about the cost of equipment or a gym membership. But before that I would run an hour a day outside when the weather is warm enough. You don't have to spend money on exercise clothing (see <a href="https://deadspin.com/whyd-you-dress-up-1796983974">https://deadspin.com/whyd-you-dress-up-1796983974</a> and <a href="http://gawker.com/5931205%2Fyou-dont-need-that-fancy-shit">http://gawker.com/5931205%2Fyou-dont-need-that-fancy-shit</a>). A good beginner's weight lifting program is Phrak's Greyskull LP ( <a href="https://www.reddit.com/r/Fitness/wiki/phraks-gslp">https://www.reddit.com/r/Fitness/wiki/phraks-gslp</a>). A good guide to weight lifting is <a href="https://veganliftz.com/vegan-bodybuilding/">https://veganliftz.com/vegan-bodybuilding/</a>. My one-hour-a-day schedule is: one day run an hour, the next day lift for 30 minutes then run for 30 minutes. Repeat. Long run of 2 hours on the weekend.</p>

      <p><strong>XII. Relevant Links</strong></p>

      <p><strong>CS</strong></p>

      <p><a href="https://teachyourselfcs.com/">https://teachyourselfcs.com/</a></p>

      <p><strong>Frugality</strong></p>

      <p><a href="http://www.mrmoneymustache.com/">http://www.mrmoneymustache.com/</a></p>

      <p><strong>Not-Rich Guides</strong></p>

      <p>Being Not-Rich at University of Michigan <a href="https://docs.google.com/document/d/1Ou-AelCrAg6soUJVbiviKAGBGF276w-UBlw-eMigwOA/">https://docs.google.com/document/d/1Ou-AelCrAg6soUJVbiviKAGBGF276w-UBlw-eMigwOA/</a></p>

      <p>How to Prep for Grad School While Poor</p>

      <p><a href="https://howtogradschoolwhilepoor.blogspot.com/">https://howtogradschoolwhilepoor.blogspot.com/</a></p>
      
    </div>
    
    
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `