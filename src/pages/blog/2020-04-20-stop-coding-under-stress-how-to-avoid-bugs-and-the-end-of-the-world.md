---
templateKey: blog-post
title: 'Stop Coding Under Stress: How to Avoid Bugs and the End of the World'
date: 2020-04-20T04:05:51.862Z
description: >-
  Vague requirements, unrealistic expectations, and a humorless workplace can
  put programmers at risk. Stress-related disease and a sedentary life creep up
  on us unaware. This is a real problem, but there is much we can do to live a
  full life.
featuredpost: false
featuredimage: /img/the_scream.jpg
tags:
  - software
  - opinion
---
The physical effects of stress are well-understood and often discussed [in the media](https://www.health.harvard.edu/mind-and-mood/protect-your-brain-from-stress) and [scientific journals](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5137920/). Under extreme stress, excess cortisol floods through our bloodstream. Under this influence, our brain's amygdala activates, arousing a fight-or-flight reflex. Our heart starts pumping, beads of sweat form on our brow, and our minds shut out everything except the object of our fear. This response may work when fleeing a grizzly bear (though [experts advise against it](https://www.pbs.org/wnet/nature/the-good-the-bad-and-the-grizzly-what-to-do-if-you-encounter-a-bear/117/)). But fight-or-flight fails us when the object of our stress is an abstract concept. To where must one flee to avoid an unrealistic deadline? Ah, the ills of the modern age.

## But Can't Stress be Helpful?

Not all stress is bad for us. In fact, a moderate amount of stress spurs us to action. "You need some stress," says Michael D. Watkins, "Without it, not much happens—you stay in bed munching chocolates."[^1] Unless we all want to be chocolate-munching bed-dwellers (which has a certain appeal) we need a bit of positive stress in our lives. But how does stress go bad and become a source of physical and mental disease?

As the demands of work and life overwhelm our ability to perform, we experience [chronic stress](https://en.wikipedia.org/wiki/Chronic_stress). Every day, we become even more aware of our failure to meet the demands placed on us. And with those demands in place, the stress stays with us. Hormones that were helpful in the short-term become destructive as time goes on. These rogue hormones suppress the immune system and can even lead to heart disease. 

## Stress and Your Code

When I am having a bad day, I am cranky. My words may carry an unintended negative tone. I may even overreact to the requests or critical feedback of others. These responses are predictable annoyances that amplify stress at work. But far more worrisome things result from chronic stress on programmers at work.

### Loss of Positivity

Without a hopeful, positive outlook, learning is impossible. "Positive emotions are as important as negative ones—positive emotions are critical to learning, curiosity, and creative thought," says usability expert Don Norman.[^2] Without a sense of wellbeing a programmer's drive to learn and grow will stagnate. Long-term, this produces sub-par developers and low-quality software.

### The Knife in Our Chest

Without context, we stumble as we pursue elegant architecture, maintainable programs and bug fixes. "We have long known," says Don Norman, "that when people are anxious they tend to narrow their thought processes, concentrating upon aspects directly relevant to a problem." This narrowed focus causes us to lose perspective. Without the big picture, we limit our approach to problem solving. As detective Burl Loomis says, "It's been my experience, when a man has been stabbed in the chest that's pretty much all he wants to talk about."[^3]

One day, a junior member on my team interrupted my work with an interesting challenge. I switched gears, helped him work through the problem and got back to work. When we deployed his code to production, it became clear that he had introduced a bug. 

Who was responsible for this bug? Me. My tunnel vision caused me to ignore the context of another developer's problem. 

### A Bad User Experience

Stress scrambles our brains. We lose context. Besides bugs, this often creates a bad user experience. When bugs make it past the development team and QA into production, customers feel the pain. If your company depends on sales generated online, the cost of such inattention can be very high.

The negative effect on our users is not always this overt. Pressure applied while we are designing a new feature or product causes us to miss many of the options available to us. Niceties like critical discussion and empathy for the user are smoothed over or discarded altogether. We skip over nuances and focus on the bottom line.  

### Security? What Security?

Few business leaders can test the security of a Web application. Because of this, developers sometimes sacrifice security for expediency. In their haste, they leave architectural flaws and bugs in code that open our business to hackers. Our software development and design teams need a safe place to innovate. Time to think through the impact of each design decision and line of code is essential for security.

Hackers recently [stole customer information](https://www.infosecurity-magazine.com/news/data-thieves-hit-wolfeassociates/) from a California property management company. In response, the company changed Web platforms to ward off such attacks. How may stress and loss of context caused them to forget to upgrade their out of date security measures and opened them to attack?

### A Breakdown in Communication

One of the worst organizational diseases caused by chronic stress is communication breakdown. Technical people can react to stress by withdrawing from others. They replace honest conversation with assumptions. They work feverishly to avoid disappointment but produce results no one requested.

Managers should see missing communication from a team or team member as a warning sign. It never hurts to check in and see how a team member is feeling. Remember, techies are people too.

## Causes of Programmer Stress

### External Causes

What exactly is the proverbial knife in the programmer's chest? Pell-mell completion of half-considered work. The frantic pace only adds to our stress. When rushed code gets into production, a bad user experience produces a bad developer experience. In response, managers apply more pressure without realizing they are compounding the problem. Their already-to-high expectations have produced the result they feared: mediocrity and missed deadlines. 

This adds to the frustration of a team of motivated software developers. As the time for a production release approaches, anxiety mounts. This discouragement, Nicole Ferguson says, "highlights the friction and disconnect that exist between the activities used to develop and test software and the work done to maintain and keep software operational."[^4] An effective manager can shield their team from such toxic unrealistic expectations. 

### Internal Causes

The pace of change in software development tools, languages, and methods is unrelenting. This year's innovations belong in next year's dustbin. Many of our mental models remain, but the tactics we use are in continual flux. Software developers must keep up. We know this, and feel an internal pressure to always be learning. But time spent learning is inefficient. It requires experimentation and time for reflection. 

Some of us, the neurotic ones, feel a sense of inadequacy.The weight of the unknown weighs us down. We will never read all the technical articles, take all the courses, or try all the programming languages. Each new publication is a product vying for our attention. "Try this new framework." "Check out this fancy new language!" "All the advertising, promotions and pressure employed to tempt us one way or another," Simon Sinek says, "Ultimately yields one consistent result: stress."[^5] Filtering out the noise and focusing on what we need to know each day is a critical ability. 

## Stressed? Write Good Code Anyway

In an environment prone to stress, how should software engineers respond? Choose your response. Though external stressors are unavoidable, we can slow down and react on our own schedule. "When you are on the receiving end of a sudden change," Says Rabbi Daniel Lapin, "you are seldom under any obligation to respond while your soul is still coping with the initial stress."[^6] Take a moment, as much time as you need, before responding to shifts in priority. Respond thoughtfully. Don't risk misunderstanding because you feel a need to respond in the moment.  

### Insist on Clarity

Which is better? An hour spent thinking, discussing, and writing, or an hour writing code? It's a trick question. If I am clear on what needs to be done, I'd pick the hour writing code every time. But in the absence of clarity, an hour writing code is a profligate waste.

When given a task, my first job is to clarify the requirements for the work. Someone has to make a plan to achieve our business goals. It might as well be the people closest to the problem—the programmers. I rarely receive tasks with enough clarity to warrant writing code. Research and planning are always needed. It may be nice to skip all that planning, but it would deprive us of using our strategic abilities. 

Planning we do as software developers results in found work. Planning the implementation details  feature or bug fix uncovers assumptions missed by those not so close to the problem. This found work often extend the scope of a project and make business planning difficult. This causes stress for the developers and business stakeholders.

Agile software development acknowledges this problem and recommends breaking work into chunks that can be completed by a team in a short period of time (often two weeks). This "sprint" includes time for collaborative planning and estimation before work begins. During this process found work is discussed, planned, and communicated to stakeholders.

Traditional software development does not recognize the problem of found work. As specifications are thrown over the wall, consternation ensues for the business stakeholders and developers. Not much can be done to reduce the stress of this scenario. Effective communication helps, but the answer as I see it is to adopt an agile approach to planning.

### Take Time to Play

"Rule-busting innovation requires a sense of play, a sense of delight, a refusal to be corralled int a strict method," says Marty Neumeier, "Design is a 'ludic' process, from the Latin LUDERE, meaning 'to play'."[^7] Everyone who writes a line of code is a designer. From the formatting our code to the way we name our variables and methods, we either clarify or confuse the problem. And play helps us see the problem clearly. 

Stress narrows our focus. Play opens up possibilities. Though it may be hard, a good response to stress and anxiety is to shrug it off. Step away from the keyboard. Take a brief walk or lean back in your chair and turn the problem over. Be kind to yourself and let your imagination play with a problem. When you can see more than one solution, it may be time to write some code.

### Take a Walk

After enough time pushing on an intractable problem to feel your heart racing and feel a glimmer of desire to change careers, get up. Leave your desk and walk around a bit. You can walk around inside your office building. Look out a window. Step outside and get some sun on your face.

Whatever you do, change your frame of reference and let your subconscious work on the problem for a bit. You might gain an insight that lets you reframe the problem in a way that is much more easily solved. You'll save your heart the extra wear and tear as well.

### Learn Strategically

We cannot learn it all. This is not a moral judgment, it is a brute fact. I cope with this reality by learning as much as I can on the job. I take a strategic approach to acquiring new skills and knowledge relevant to my work. To guide my learning, I subscribe to technology podcasts, read articles and books, and talk to others in my field. This constant flow of information keeps me abreast of the changes coming my way. Then, as I take on projects that justify using a new technology or skill, I build that into my work. This "just in time" learning adds to the scope of the project, and is only justified if the new technology is in my employer's best interests.

This is difficult to balance. On one hand, we could pad every project with time to learn a new programming language or framework. On the other, we could always put off learning and soldier on without learning new skills. The first approach leaves a trail of programming languages and frameworks used once and discarded. The second sticks us with out-of-date skills and frameworks that others have long since abandoned. How you find your balance depends on the culture and priorities of your company. Weigh any technology choice you make today against their impact on your entire team and your company's software.

With some knowledge of your company's needs you can plan to learn on your own time. This takes some of the burden of your professional development off your employer. Andy Hunt advises software engineers, "Model your knowledge portfolio with the same care you would manage a financial investment portfolio."[^8] So take steps each day to learn skills that will add value for your employer. Stay ahead of their needs by learning just in time for your daily work.

### Adjust Unrealistic Expectations
Many programmers are introverts. We prefer the neat structure of ideas to the messy web of interactions that make up human relationships. But we cannot avoid communication. If we insist on clarity, there will be many times we give bad news to our superiors. This is not a bad thing. Clear communication is part of every software engineer's job. 

Business stakeholders often give deadlines to their superiors to justify your next project. This results in deadlines imposed without consideration of the details. Communicate about potential missed deadlines as soon as you become aware of them. Explain the likely delay so your stakeholders can justify the change with the company leadership. Otherwise, your concerns will backfire—making you seem hesitant and fearful rather than assertive and responsible.

Business leaders aren't the only ones with absurd expectations. As professionals, we hold a high opinion of our abilities and expect a great deal of ourselves. We only add to our stress when, if we fall short of our own internal standard, we berate ourselves. Here's the truth. No one else cares about your missed expectations of yourself. 

Set goals. Work hard. Forgive yourself.

### Cultivate a Sense of Humor

One of the best ways to forgive yourself is to learn not to take yourself too seriously. For most of my life, I have been intense, driven, and self-critical. It's hard to forgive myself if the weight of the world rests on my shoulders. But here's the thing: none of us bears our burdens alone. Team members, customers, friends, and loved ones who see our flaws continue to work with us, buy from us, spend time with us, and love us. Sometimes, we can join them in laughing at our mistakes. This helps us let go and move forward.

Letting go can make our work fun and our products fun to use. "Good design is often slightly funny," says venture capitalist Paul Graham, "I think it's because humor is related to strength. To have a sense of humor is to be strong: to keep one's sense of humor is to shrug off misfortunes, and to lose one's sense of humor is to be wounded by them. And so the mark—or at least the prerogative—of strength is not to take oneself too seriously."[^9]

## Save the World

So how does this save the world? Well, it may not save the actual world. A little hyperbole makes a good title. But if you manage your own stress well, it takes a load off your coworkers, customers, friends, and loved ones. And, it can even save your life. 

As I said at the outset of this article, stress is a killer. I discussed this article with a good friend and mentor. During his long career in IT, he had several heart attacks which he attributes in large part to stress. He said, "I now know stress almost killed me. Not sure how you can control yours but you need to." Take his words to heart.

You might save the world—or at least your world.

## Footnotes
[^1]: Watkins, Michael D. _The First 90 Days_. Harvard Business Review Press, 2013, pp. 226-7.
[^2]: Norman, Don. _Emotional Design: Why We Love (or Hate) Everyday Things_. Basic Books, 2004, p. 19.
[^3]: "Who Killed the Guy on the Ski Lift?" _The Good Cop_, created by Andy Breckman, performance by Isaiah Whitlock Jr., season 1, episode 7. Andy Breckman Productions and Netflix, 2018.
[^4]: Ferguson, Nicole Phd., Humble, Jez and Gene Kim. _Accelerate: Building High Performing Technology Organizations_. IT Revolution, 2018, p. 89
[^5]: Sinek, Simon. _Start with Why: How Great Leaders Inspire Everyone to Take Action_. Portfolio/Penguin, 2009, p. 33.
[^6]: Lapin, Daniel. _Thou Shall Prosper_. John Wiley & Sons, Inc., 2010, pp. 218-9.
[^7]: Neumeier, Marty. _The Designful Company: How to Build a Culture of Nonstop Innovation_. New Riders, 2009, p. 48.
[^8]: Hunt, Andy. _Pragmatic Thinking & Learning: Refactor Your Wetware_. The Pragmatic Programmers, LLC., 2008, p. 133.
[^9]: Graham, Paul. _Hackers & Painters: Big Ideas from the Computer Age_. O'Reilly Media, Inc., 2004, pp. 135-6.