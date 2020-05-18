> [background music]

> *Matt Stratton:* Welcome to Arrested DevOps Episode 42: Life, the Universe, and Everything. I mean, ChatOps Extravaganza. I'm your co-host Matt Stratton, @mattstratton on Twitter.

> *Trevor Hess:* I'm your co-host Trevor Hess, @trevorghess on Twitter.

> *Female Facilitator:* Arrested DevOps is brought to you by 10th Magnitude. A cloud services company that figures that if you're listening to this podcast, you must be pretty cool. You can find out about joining their cloud services team at [arresteddevops.com/10thmagnitude](http://arresteddevops.com/10thmagnitude).

> *Matt:* This episode is also sponsored by VictorOps, from initial alarm to final retrospective. Mission of VictorOps is to make on-call suck less. Easily integrate with your existing monitoring systems, and managed on-call schedules with rules for intelligent rally. In the live infrastructure time line, get real context and see annotated alarms with resolution documentation.
>
> When you're in the fire fight, collaboratively troubleshoot using native chat or bi-directional integrations with your favorite chat clients. Visit [arresteddevops.com/victorops](http://arresteddevops.com/victorops) and sign up for our 14-day free trial to see how they're making on-call suck less.

> *Matt:* This episode is also brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and Dev teams. Datadog brings in together system metrics, changes, alerts and events from over 70 common infrastructure tools such as Chef, Docker and AWS, so that Dev and ops teams share their key data and alerts in a single place and collaborate on issues in real-time. Datadog is available for a free 14-day trial at [arresteddevops.com/datadog](http://arresteddevops.com/datadog).

> *Matt:* We're recording this live from DevOpsDays Chicago. Joining us again is Jason Hand of VictorOps.

> *Jason Hand:* Hey, how's it going? Happy to be here.

> *Matt:* Jason, I think this is your third time on Arrested DevOps.

> *Jason:* Yeah. The first time was DevOpsDays Chicago last year, although I don't remember what the topic was.

> *Matt:* It was DevOpsDays Chicago, I think.
>
> [laughter]

> *Matt:* What's the topic?

> *Jason:* That's why I don't remember. It's great to be back.

> *Matt:* Actually, technically you were on our ChefConf episode reading the VictorOps ad.

> *Jason:* Yeah. That's true.

> *Matt:* I guess that counts. We also have another repeat guest, which is our old pal Sasha Rosenbaum. Sasha, can you remind people who you are.

> *Sasha Rosenbaum:* Yes. I'm a consultant. I work with 10th Magnitude, the Chicago-based consulting company who is also a sponsor of this show. This is also my third time on the show. I'm super exited to be here.

> *Matt:* Can you tell our listeners the other shows that at their episodes you are in.

> *Sasha:* Right in the beginning is the one was about help, which was entirely awesome, I think, and another, I think it was about managing your mental stack.

> *Matt:* Oh that's right, OK. That's two.

> *Matt:* Its two, three beats on the same...
>
> [crosstalk]

> *Matt:* Thanks, Sasha, for joining us. Our single first-time guest is Peter Burkholder of Chef.
>
> Peter, can you tell us, the audience, a little bit about yourself?

> *Peter Burkholder:* As you mentioned, I'm at Chef. I'm a customer engineer, guiding many of our enterprise customers on the road to using Chef and succeeding in DevOps.

> *Matt:* Great. We've had a desire to do an episode around ChatOps for a while. Trevor has been demanding to do this. I told him, "Well, fine. Plan it. Make it happen."
>
> I think we started talking about it about a year ago, and now you're finally doing it. So awesome. Good job.

> *Matt:* It was six months ago. [laughs] To be fair.

> *Matt:* Interestingly. We knew right away, when we wanted to do this episode, that we wanted to have Jason on. As he has, maybe to his chagrin, become known as the ChatOps person over the last year.
>
> But at the same time, we've had some conversations. I know Sasha's talked about the use of chat within a professional work. Then recently at Chef, we...Can you guys hear Peter's eye roll happen that just occurred as I said that?
>
> [laughter]

> *Matt:* We just rebooted, in some way, some of our internal communication to be very chat-focused. Peter and I have talked about it a bunch and wanted to have a pretty frank, open forum around both how ChatOps...As crazy as it is to say, traditional ChatOps. Or what we traditionally think of.
>
> But then also what does this asynchronous, or synchronous as it might be, type of chat communication mean inside a company that's going through these transitions.
>
> That being started, one of the things is what is the difference between chat and ChatOps? So to speak.

> *Male Participant:* I think the origins of the term ChatOps itself actually came out of the Ops team and GitHub. I think that teams initially have this idea that ChatOps is really only about pushing code and deploying platforms. All that kind of stuff, which certainly is activities that teams are doing. But, at least within victor ops, we're seeing results simply by just having a general rule that if I have a question from somebody who's an employee of mine, or co-worker of mine...
>
> Rather than doing an email back and forth, a conversation that is essentially being black-boxed or siloed, I can now just put that out into a room that everybody gets to see. We can have these same conversations. But instead of them being, like I said, completely black-boxed, and controlled, and away from everybody else, we're now starting to have it a little bit more shared.
>
> And...
>
> [crosstalk]

> *Matt:* Go ahead.

> *Male Participant:* That seems to fall into the realm of general group chat. ChatOps has been an incredibly powerful tool to actually take actions from a shared client that you can see what's going on. Bringing your infrastructure into the room itself is pretty much an unalloyed good.
>
> I think there's a little bit of over subscription to chat, when you start mixing in synchronous and asynchronous forms of communication. Something should be black-boxed in asynchronous. When I emailed Matt Stratton about what hotel I should stay in Austin
>
> [laughter]

> *Male Participant:* I emailed him because I could get an answer anytime in the next 24 hours. I didn't give a damn when I got the answer back. Then he said, "Hey what about Slack?"
>
> [laughter]

> *Male Participant:* He's like, "Damn it. I already Slack." What I actually need, "Hey I am in a meeting with a client right now." I don't know what the hell is going on with this wonderful piece of code you wrote."
>
> Then I actually needed him to be synchronously interrupted. So I think we just need some new ways as we move to chat or identify what's wrong with email? How do we identify new ways of handling asynchronous communication that may be different in nature and in content? And what's happening real time in a chat room?

> *Matt:* Yeah and I think what you're suggesting is, we need to maybe start thinking about standardized way. I mean I had the same problems I can probably reach out to anyone of you right now via Slack, via Facebook, via text, via Twitter. Like there's all kinds of ways. How do you decide what is the most appropriate way. I'm not sure that you know we're going to give a standardized way.

> *Sasha:* I think I slightly disagree on synchronous versus asynchronous. I think chat works very well for asynchronous, because whenever you get that message and whenever you get to answering in on...So works as well as email and it's shared and personal. Not personal, searchable.
>
> But my problem was ChatOps and the whole team sharing and tool sharing. The problem is it creates enormous amount of noise. If I'm watching every message that pops up and every conversation that I'm in, I get too much. If I'm not watching any of them and end up not watching any of them. Right?

> *Male Participant:* I think that is a little bit about you were saying is interruptions. I think that the [inaudible 08:11] is on the user. The person you're communicating with to determine their tolerances for interruptions. If you know that you personally can't handle having that message flash all the time...I can't I had to turn off a bunch of my notifications but now I just have a little HipChat flash at the bottom.
>
> It doesn't tell me the message. Because if I see the message comes up I'll read it, and want to respond to it. But if I had that flashing, I will eventually go into it and respond to it. Again I know if someone really needs my attention, they're going to really make it blow up at me.

> *Male Participant:* That's the tricky part I think. We have this conversation...Last week we were at the sales offsite and there's kind of conversation about kind of the overload of Slack. One of my co-workers on the sales side said, "I don't have time to go read through all the back scroll." And they said "You don't have to read through all the back scroll." The analogy that came to me when I was trying to describe it was it was like TiVo.
>
> If you remember when we all first got TiVo, what did you do? You recorded a shit ton of stuff and you felt an obligation to watch everything that you've recorded. Then that was not scalable, it didn't work. So you just recorded a whole bunch of stuff and watched whatever. The tricky part of that -- and it requires kind of a balance on both sides and I don't have a very specific answer to it but -- is to realize that important things will rebubble again.
>
> Because the problem with saying...Like especially things like decision making. Decision making is really hard to do in chat. With geographically dispersed team that don't live in that chat room. Our sales engineering team at Chef we are all over the world.
>
> What will happen is, someone will say well you know what, "We should start using Cloud Formation for our demos instead of Chef Provisioning" Then like three people are in there and have a whole conversation about it and then...I'm on vacation and I come back next week and it's like, "Hey guess what? We made this decision", and I was like wait a minute. Or even forget about being on vacation.
>
> I was talking to a customer and I come back I miss this whole conversation. So it's tricky with things like decisions. It's tricky with things where you need to create consensus. I think it's great for, in the moment problem solving. For saying if there's someone here. I think you have to build the culture that says...You also have to build a culture that says, "It's OK to ask a question again." You don't have to feel like you're bugging people.
>
> If I come in there and I pop into the chef DK chat room and say, "Hey I'm having this problem with this particular jam and I get crickets." It's OK for me to come back an hour later and ask the question again. Because someone else might be there.

> *Male Participant:* Unless you're actually needing to fix that problem now with a customer. Why is no one responding to the notification?

> *Male Participant:* How would email be different?

> *Male Participant:* What would be different is that you could ignore your email and know that people are only using the chef DK chat room for things that need synchronous communication.

> *Male Participant:* In that particular example, I have the greater capability of saying I'm going to throw it out there. There may be no one listening but then, if I'm doing email, I have to be a little more targeted.
>
> There's downsides too because I've had coworkers who have said, "I mute all notifications of any channel unless I'm at replied to." That sucks because unless I know I should be talking to Peter...Peter is the subject matter expert of tons of things.
>
> He might be watching the Chef DK chat room and he might answer but if I don't know as for the Slack by the way, Peter's Slack notification just went off. There's a matter of figuring out where that comes in but I do think it's risky in any way to go super pendulum swing one way or the other.
>
> There's certainly opportunity for value of not just for immediate in the moment communication in the chat room. There is to completely throw the baby out with the bathwater and say email is crazy, we should never do it.
>
> Again, to Peter, to your point, we need to fix what's wrong with email. It's one or the other. It's like I sometimes have to email with customers, so I'm only going to ever use email because it's annoying for me to have two tools.

> *Male Participant:* You brought up an interesting point about decision making. A lot of teams foolishly think that we can or should make decisions within chat but that's not what the chat is for. It's for collaborating and hashing out things and brainstorming but maybe not making decisions.
>
> If our alternative is to make decisions within email, I'm not sure that that's any better.

> *Male Participant:* People ignore emails people miss emails.

> *Male Participant:* Yeah exactly. We get so many emails that that's just as much noise. It's more noise for me in fact. It's probably going to vary but one thing I wanted to add was when I did a talk in Minneapolis for DevOps, I did a lot of research because I wanted to back up some of the claims I was making.
>
> [laughter]
>
> I found this report. It was something about synchronous forms of communication. They had determined that we spend something close to 25 percent of our work week just managing our inboxes. Going through inboxes and trying to get caught up on conversations on these long threads.
>
> We're spending a ton of time just dealing with our inbox and then, they took it a little bit further and said you can actually increase productivity just by moving to more synchronous.
>
> That could just be something like instant messaging, it could be text messages it could be something. I'm unaware of all these numbers; these are just some numbers I found that helpfully...

> *Male Participant:* They happen to support your hypothesis and therefore, they must be right.

> *Male Participant:* It helped me how I needed it but when I think about it, I honestly think that it does have some truth to it.

> *Male Participant:* I've seen that. I had a client that was across Europe in the United States. There were conversations that were happening at the coffee machines in the local office and never being brought further anywhere else.
>
> There were these giant email chains that people weren't really reading all of and were missing, like the QA team didn't know when the Dev team was doing anything. We were yelling at operations because they thought there was something wrong with the actual servers that were running the software.
>
> We brought a chat tool in and it was like night and day because suddenly, QA was able to see that it wasn't the operations team that was having problems. It was the developers were solving a problem and then working with operations to pull things together.

> *Male Participant:* The reason why some of those email, they get a little bit out of control and they turn into these long long threads that we've stopped treating email as a form of corresponding and we've turned it into chat.
>
> I'll ask you a question, what hotel room should I stay in and you're going to respond back and then, I've got another question. We just do this back and forth, we're actually using email to chat and then, we're also slapping in all these different forwards and footers and all these different things to the body of the message. It's turning it into a journal.

> *Male Participant:* Suddenly, you need your retina display to be able to see far enough across the screen.

> *Sasha:* What I wanted to do is take a step back and again talk about what ChatOps is and what ChatOps is good at. What kind of problems it's excellent at solving and maybe what kind of problems we have with it.
>
> It's excellent in solving that communication problem and it's excellent in bringing everybody into the same experience. Everybody's remote in a chat room. Even if you're sitting right next to each other, everybody's in the same position.
>
> If you're in the office across Europe or if you're across the room, you're having the same conversation. You can even brainstorm on the whiteboard in the same chat room. It brings people through the same experience and lets them share information.
>
> Another thing chat is excellent for is that shared history. Instead of repeating, rehashing yourself, you can just send someone and be like, "Search slack for xyz," and then we're getting the benefit of shared history of huge conversations.
>
> Another thing it's good for is getting messages from integrated tools. This is another thing that ChatOps is talking about. I can talk about my commits or my failed bills or whatever it is and I can see it right in my chat room.
>
> The problem I keep having with it though and I'm sure you guys have different problems and different problems that it also helps you solve. The problem I keep having with it is that it's incredibly noisy and I want to be in the room where everybody shares excellent gifts of whatever memes came out this week.
>
> I do want to see that but then, presenting to a client and my chat just keeps popping up with messages that I don't even want to...

> *Male Participant:* ...Let me ask you this. If a Jenkins build fails, how do you know? If it's not in chat, what method is that communicated to you?

> *Sasha:* Most normally, it would be email.

> *Male Participant:* Do you have a filter for the email?

> *Male Participant:* And or do you need to share that with the rest of the team that it failed at any point or is that just information only for you?

> *Sasha:* Again, we can be talking about different things. I'm doing consulting, so I'm in a different client environment every week. Some people have groups that things get emailed to and some people have chat that it gets flushed into. You can have different systems for this.

> *Male Participant:* The point I'm trying to illustrate is this is important information that you needed to know some way or another. Even if it's just that you started a platform build or whatever the case is, you're going to want to know the result of that somehow, some way.
>
> If that takes you going over to your tool and looking to see what happens, that's one way for you to get it or you could also have it served to you. No matter what, you need to know that information one way or the other.
>
> I totally agree that chat does get very noisy especially when there's a lot of things, a lot of tools all going into one room or channel. Not having that information is more detrimental than siloing it off into these other places that you then have to go get and then, just turn around and share.

> *Male Participant:* Not having that information I think it's more detrimental than swallowing it off into these other palaces that you didn't have to go get and then just turn around and share it.

> *Male Participant:* I actually have a new thought on this that I just had this week and that is as a consultant that primarily works with client teams directly and not so much internal teams. The internal ChatOps tool is almost useless. I say that loving the ChatOps tool but what it winds up becoming is once every two weeks somebody will say anecdote or something that is actually related to the technologies we work with.
>
> Most of the time it's cat pictures. That's where I agree yes I find myself turning HipChat off, our internal HipChat off and then only using the client's HipChat or Slack or whatever tool that they are using

> *Matt:* The downside is how are you...I know you've got a bunch of individual thrives to all of your different clients and customers. Again fin the case of...like peter your scenario is fairly similar in some ways but you are missing a huge opportunity of being able to...you are all working in your own individual silo at this point because chances are there is actually something there you are doing that would be interesting to Sasha.
>
> Because Sasha is not working with that customer she has no way of knowing and I don't have an answer to that. The other thing that I...and this is something that I know in some our internal conversations have come up is that when you look what's in an organization depending upon your role within that organization, sometimes it seems like a no brainer.
>
> You are like, "What do you mean you don't like chat," this solves every problem I possibly have, that's actually usually someone in engineering or an operational role. Then you start talking about people who are customer facing, like people in Peter's role who say, "Hey, I actually don't spend most of my time talking to the rest of you all, I spend most of my time talking to my customers," maybe, right or "For me, I actually spend way too much time talking to my coworkers but that's OK."
>
> It's cross functional, there's capability for cross functional communication but then the people that I spend most of my time working with don't want to work in this tool, they don't want to live in this world because they don't spend most of their time, like sales reps, sales reps live in email and that will never change nor should it because that's how they talk to their customers.

> *Male Participant:* If you listen to this podcast and thinking what should I do about chat and ChatOps in my organization, I think all of us are creative; you should have a rich chat client and find good uses for it. By rich I mean it supports searchable history, the ability to create topic based rooms, second integrate with Box. Beyond that...

> *Sasha:* Super important feature that it has to support is conditional notification; you have to be able to select which rooms you get notified about...

> *Facilitator:* I think a lot of that is table stakes these days.

> *Male Participant:* Now if I can remember my next point which was how do you actually use that in your teams? For remote teams use that religiously. I've been in situations where Sasha and I are sitting next to each other, I would be sitting next to Sasha, instead of talking to her typing in chat because I knew that the people from the San Francisco office and Seattle office also need to know what's going on and they would look back at me and also type, that is great because it brings remote teams together in real time.

> *Facilitator:* Even for the fact of including them it's also making them not be the exception, like Etsy does this incredibly well while as the idea if we all live in chat it means if you are a remote person you are not the exception.

> *Male Participant:* Yeah and it's supposed to build that empathy.

> *Male Participant:* Now do you start replacing other forms of communication with it, that's the opportunity start running experiments. This is something I wish we had done when we rolled out Slack at Chef. There was an email that would go out once a week with all the news that came out in Chef.
>
> It would have been really interesting to have included redirections of those, you could say by email; the news got a click through rate of 67 percent. Now we are serving those messages out in Slack, what's the click through rate. It would have been an interesting experience.

> *Male Participant:* Yeah I know.

> *Male Participant:* The other is to use...

> *Sasha:* ...You can probably go back into it and look at the statistics.

> *Male Participant:* It's too late.

> *Facilitator:* The ship has sailed.

> *Facilitator:* We will edit this part out.
>
> [laughter]

> *Male Participant:* The other thing is if you are familiar with rescue time which is a client that tracks which applications you are using throughout the day, strips out potentially private information and makes that searchable on that site. You could track how much time are people spending in Gmail and HipChat and Slack versus various changes in topic.
>
> Or when we get a new hire we send out a welcome message by email. How many welcome messages do they get back in email versus Slack? Those are some of the experiments that I thought of that one could do before and after to see what is the impact we want to have and what is the actual...

> *Facilitator:* ...This is a thing that I really agree with you on Peter, not that it's that odd for me to agree with you.
>
> [laughter]

> *Facilitator:* But in this case where in a lot of ways in this particular implementation...again it's not picking on Chef but we're like, "You need to have your measurement in place but if you want to pivot it, if you want to make a change, you need to know before and after not just based upon your gut."
>
> To be able to have that data...the thing is to Peter's point; he just gave three really easy examples of how to capture that data without a whole lot of work. The good thing is it lets you know if your experiment is successful and then if it is, here is the other thing because you are going to always have adoption problems, there's people who don't want to change.
>
> Let's say that everything is awesome moving to chat and you still have your 20 percent of the company that are like, "Fuck Slack, I don't do that." You can now sit there and say, "But look, here's data that actually shows this is better." The problem that we might have right now, if I'm going to go to my sales reps that I work with or whom have I worked with and say, "You really should be using this," I have to invent a business case for it. I don't have time for that

> *Male Participant:* I can tell you something that worked for us, I actually think that rescue time that sounds like something everybody should try.

> *Facilitator:* I will make a comment, we will post some stuff in the show notes. I know Peter had captured just some data for whatever its worth. I use the rescue time religiously, I didn't get around to actually pulling any charts and graphs to show the difference.
>
> At the very minimum I'll post in the show notes my personal comparison of how much time I spent in Gmail before and after our Slack conversion. I have no idea what the answer is going to be, actually I kind of do because I get reports that I spend way more time in slack than I did in email. That's open to debate as to whether or not that's good, I don't know [laughs] .

> *Male Participant:* You made the statement; you need to make a use case or argument for someone in the sales team per se. We saw the same thing, it was something that was obviously adopted within our technical teams, our engineers fronting back in, myself, we all just totally took to chat over email almost immediately but had some real strong push back from sales, from marketing, from sea level and even support because they prefer email.
>
> I think mostly because that's the way that they communicate externally with the customers. Which I totally get and that's not something that's going to change anytime soon. What I can say that has worked for us internally is to actually start moving their tools, not technical tools necessarily, not things like GitHub or Travis, things like that but using whatever tools that they use like Trello, like Salesforce.
>
> Making it so that...for example there's information within our Salesforce system that I need to reference occasionally. The ChatOps book for example, when someone downloads that I'm curious to see how many times has this been downloaded this week. I don't have to go look for that anymore. The bot goes and tells me every time somebody downloads that book, it also tells me every time somebody signs up for VictorOps.
>
> This is all just happening now, I would have to take time...set aside time at some point today to log in to Salesforce, do some querying, clicking around to go find the information that I want. Now I just have it just giving it to me. The fact that's very useful for someone on our sales team, all of a sudden our adoption rate changed immediately, like overnight. That to me, that's all I needed to do, was I just needed to make something useful for them in chat
>
> [crosstalk]

> *Facilitator:* Then without convincing them you are actually just utilizing the tool to make things better. It's not like how can I trick them into wanting to use chat, it's because to me as I'm a developer am like, "OK, I see the value" because I'm not interrupted then, I can see my commits, I can see whatever.
>
> I'm a sales person, I could give a shit about get commits and messengers but how can...one of the things we have push backs from a lot is tool overload especially from customer facing teams and stuff.
>
> We already have a bunch of extra crap they have to do, now say, "Wait a minute, sometimes I look at a thing in Trello but these things in Salesforce, this thing, now you are saying this is Slack, this in itself is an opportunity to make that and I do not...I intentionally would not use the term single pain of glass but just simplify their world."

> *Sasha:* If you want to pitch to your CEO or whoever, just take a problem that they have to solve every week manually and solve it in chat, right?

> *Facilitator:* Our problems wouldn't have to pitch for our CEO; our CEO is the one who told us to do it.
>
> [laughter]

> *Sasha:* That's a huge problem.

> *Male Participant:* What you are suggesting is exactly what I did, I actually just created a Google form and I did a poll around the office, ironically I sent it out via email, I said, "OK, if you could get something...One magical thing to happen, if I could just do one thing for you within chat what would it be?" I just took that and I ran with it and I started making something useful for every single team and all of a sudden, they were just on board themselves.

> *Male Participant:* Had you demonstrated that now that people are doing these things by chat, is the company actually better off. Are you spending less time with the communication tools or are they better informed?

> *Male Participant:* We definitely have not tried to figure that out, I think that something probably that is coming for sure because now that we have adopted it and we have moved definitely away from email, we have this culture of measuring everything, we want to understand are we improving, is this the best way of getting this done. I'm not sure the actual best way to do the measurement, sounds maybe rescue time is something that we can look at providing some sort of measurements.

> *Sasha:* Now you can have a bot that will inform you what rescue times are.

> *Male Participant:* You said that you get a weekly email from your...we use Slack, so I get a weekly email and it tells me all kinds of activity, gives me a percentage. The one thing I struggle with right now is that I'm still seeing the majority of our...It depends on a week but many of our conversations are actually happening as direct messages rather than just in the group chat.

> *Facilitator:* I want to ask about that because I remember making that comment, I think it came up in internal Slack and it was brought up and we were saying, "Why is that bad?" I want to know...I understand the whole like communicate in the open and stuff like that but is that inherently bad to actually be having one on one conversation?

> *Male Participant:* I think just in terms of the DevOps philosophy and mindset is that we want to openly share everything possible so that we can learn and everybody has this transparency and you are constantly pairing. If Matt let's say if you and I work with each other.
>
> You've got a question that you know I can answer, you are going to direct message me that question and me just being stubborn, I'm actually going to then hop into our general room and answer your question because I just have a hunch the answer is useful to someone beyond just you.
>
> I'm trying to stay out of direct messages unless it really is a private conversation. If this is something that I actually don't want anyone else to know about which isn't very often, why doesn't it just have to be a conversation that we are having as though we are standing next to each other and there are other people listening.

> *Male Participant:* Well it's about interrupt management. If I ask a question in Chef DK and no one answers, I have a choice of saying @channel, "Hey, can someone answer this question" and interrupting 18 people in six different time zones, while as if I just go to one person I know in that channel...

> *Facilitator:* But if you...

> *Sasha:* You can go to @mattstratton inside the room instead of doing a direct message.

> *Male Participant:* Which allows anybody else in that room to respond. There's a couple ways you can do that.
>
> [crosstalk]

> *Matt:* No.
>
> [crosstalk]

> *Matt:* I do think it's still OK. I pulled it up for curiosity's sake. My rescue time report for last week, for the week of August 16th, I spent almost four hours in Slack.
>
> These numbers are slightly skewed because I use Slack for a lot more than just work. Especially that number probably went way up the week or two before DevOps days because we use Slack for planning this conference. All of last week I spent 48 minutes in email.

> *Sasha:* Wow.

> *Male Participant:* What I was looking at is that my total time spent in Gmail and slack has gone up, but I...
>
> [crosstalk]

> *Matt:* Versus, I have to crunch those numbers.

> *Male Participant:* That's probably because I'm a fairly ineffective Slack user, so I don't know what...
>
> [crosstalk]

> *Matt:* Right, so I think the question that would be interesting to look at, and then to determine whether or not this is the right axis of measurement is, if before, if you take Gmail plus Slack together as amount of time spent communicating, if that number, if I'm being more efficient with communication by using Slack, that cumulative number should go down.
>
> The question though, and that becomes a value judgment, is that actually good that it goes down? It's not necessarily purely quantitative. That's super hard; I don't know the answer to that. Maybe I'm spending less time communicating, but that's because I just table-flipped it and said, "This is stupid. I can't ever talk to anybody."
>
> Or it may be that I'm spending more time, but saying, "Look; now I'm spending more time communicating so I'm much more open."
>
> You're like, "No, it's just a bunch of cat pictures." [laughs]
>
> [crosstalk]

> *Sasha:* Just so you know, cat pictures improve productivity.
>
> [laughter]
>
> [crosstalk]

> *Male Participant:* We should all tweet at Rescue Time, saying, "Hey, could you please mind the data globally for trends in use of HipChat, Gmail, Slack?" They could do that, and it would be wonderful.
>
> [crosstalk]

> *Male Participant:* That would be really interesting for us.

> *Sasha:* That is an awesome idea.

> *Matt:* We're coming close to it, so won't you...?
>
> [crosstalk]

> *Sasha:* I have a different question. One thing that we struggled with as a company, and I think that every company that I've ever been to struggles with is knowledge sharing, like articles and blog posts and things that you know are going to be useful to your team two weeks from now or three months from now. You want to share it with your company.
>
> So people adapt all sorts of solutions like SharePoint and Yammer and Weekies and whatever. From what I've seen it almost always fails. I want to ask if anybody has adopted ChatOps as a solution to this problem and how?

> *Matt:* We went through this, in Slack there's this idea...I'm going not speak specifically around Chef. I'm going to talk very specifically about my team at Chef. I don't know how everybody is doing it at Chef.
>
> In Slack there's this idea of pinned items. You're saying, "This is a little bookmark for this channel," as opposed to my personal bookmarks of a post.
>
> What we do is, for a while, we were pinning stuff all the time. Then you get pin overload. There's 20,000 pinned items in this channel. We treat our pinned items as the refrigerator. You've got the refrigerator in the office. At the end of the week everything gets thrown away.
>
> We self-curate, because nothing in there really should live longer than that. If it's something that is very long-lived, we have a Google web page thing. If you've ever had to use Google's pages thing, Google apps, it will send you flashbacks to Microsoft Front Page 1997. It's hilarious, it's awful, but it's useful for our point.
>
> If something should live longer than a week because it's a useful bit of resource, not an article, not a how-to, then we will move it. "I'm going to put this into our FAQs or our Tips page or whatever." But as I'm going along if somebody posts something, "Here's the link to this 'read me about how-to-do thing,'" someone will pin it.
>
> Then we self-curate at the end of the week and look back and say, "Yep, this stuff's a week old, it's stale," and remove it, so you can always know. Why that was really important for us, too, is being geographically dispersed. We have a fair number of people on our team who are on our media, who are eight hours ahead of us.
>
> The problem is the folks over there in the UK and all that, they get up in the morning, go into the sales engineering room, and they're like, "I have to scroll back through 20 pages of Matt's stupid animated gifts and jokes about Gordon Ramsey and blah blah blah to find a couple nuggets of information that I care about."
>
> We've taken to saying that if there's something really important we pin it so that our colleagues that might not be there can do a quick...that makes the back-scroll a little more manageable. They can look back through that quick and understand because it only has to be long-lived for 48 hours, or something like that.
>
> Long-lived bookmarks, I think they need to go into...There's a big difference of trying to use the same tool for your long-lived knowledge sharing, as well as for your quick little, "Hey, I just read this article about how I wired my great Instagram." That does not need to go into your knowledge base portal. That's something you want to share with people ephemerally.

> *Sasha:* It's more like highlights of the week, automatic newsletter.

> *Matt:* Highlights of the week kind of thing, whatever, and if it looks like something that you're like, "This is part of our ongoing knowledge," then it goes into a knowledge base. The reality of the world is that stuff is far less frequent than you think it needs to be.

> *Male Participant:* I love the way you're handling it, as far as the self-curating part. I think that's probably something we should all consider. A lot of people forget that these channels, or rooms, whatever it is depending on the tool, should be, can be treated as disposable.
>
> A lot of people are trying to put too much stuff into rooms like a general room, or a random room, or a fun room. We split things off so that we have a good reads room.
>
> I have read an article that Trevor or somebody wrote. I think there's something useful here. I'm going to put it into the good reads. I don't want to bother anybody about it, but I'm going to put it in there...
>
> [crosstalk]

> *Matt:* It's like in a way instead of the topic being about the content it's about the way it's consumed almost. Instead of saying, "Here's my room about Ruby, I have room about Python, I have a room about Chef." It's more like, "I have a room that is short articles, I have a room that is books, I have a room that is projects, I have a room that is videos..."
>
> [crosstalk]

> *Male Participant:* I could take it even further. I could make it a room about today's project, and as soon as this project is over, we just archive that conversation. I can always go back and get it later if I like. Let's just take it off our plate so we don't see it.
>
> A lot of people get tied up into, "This conversation is more marketing related so it's got to be in the marketing thing." It is marketing related but it's actually Q3 DevOpsDay Chicago. It's very specific to that.
>
> Let's create a room or channel just for that. Then everybody can still, no matter what team they're on, marketing, sales, engineers, they can all see it and they can all be a part of that conversation.

> *Matt:* It's like an open space, and when it's done it's done.

> *Male Participant:* I have a question that may be of interest to our listeners, but I don't know if we have time for a new topic. I practice inbox zero. How do you practice ChatOps zero?
>
> [crosstalk]

> *Matt:* Command Q.
>
> [laughter]

> *Matt:* No, there's a command. What is it? Command, escape and Slack, it clears everything. You're done.

> *Male Participant:* I have a sense that people have been trying to communicate to me by email. I can decide whether or not to read the message based on the subject line. At some point I've zeroed out my inbox. I know that people that've been trying to reach me are done. People have been trying to send me information I'm caught up with. I have a hard sense of knowing when I'm caught up.

> *Sasha:* This is an excellent point. In an inbox you have a subject line which helps you and who it directed to, whether you've copied or you're directed to, so in a chat, unless it's at you, it's very hard to tell which messages are important and which are not.

> *Matt:* That's the way that I do it. I would put this as a short thing because we're going to have to wrap it up, but this is a question to the listeners. Listeners we would love, please tweet at us at @ArrestedDevOps and let us know how you might practice ChatOps zero or leave a comment on this episode, which is at [arresteddevops.com/42](http://arresteddevops.com/42).
>
> I'll just tell you the way that I do it is a combination of, in Slack if you hit command, period, and you get the little side bar. By the way everybody listening, you can't see me gesturing off to the side. If you have recent mentions...

> *Male Participant:* It's not very helpful.

> *Matt:* I'm not done.

> *Male Participant:* He means gesturing to the side.
>
> [crosstalk]
>
> [laughter]

> *Matt:* I can look at recent mentions, which is across all of my channels. I do that when I've been stepped away for a while. I'll go very quickly, look at recent mentions, then of the small handful of rooms where I'm like, "This is where important things happen," I go and I do a quick scan through the pinned items. That's my inbox zero.
>
> If it was important, it's either that I got tagged in it or it was pinned. If those things don't happen they'll bubble up somewhere else, but what that requires also is a certain level of trust that I am not working in a team that is assuming that consensus about an important decision is going to be made solely in chat.
>
> That's a thing within our particular team at Chef that we have made. We've struggled with it and we've changed and said, "Within sales engineering, consensus-based decisions are not made in slack. We make them in a different way."
>
> That has lifted this giant burden off my shoulders of feeling like if I don't stay on top of everything I'm going to miss out.
>
> [crosstalk]

> *Matt:* Exactly, and that helps a lot in my particular experience. With that being said we are coming up on the end of our time. Those of you listening we're doing this during an open space. The barbarians are at the gate and wanting to use this room probably.
>
> [laughter]

> *Matt:* I lost my notes here.

> *Male Participant:* We have time, each for one summation comment.

> *Matt:* Let's do that real quick. We're going to go around to our guests. What would be your bit of advice, bit of warning, bit of wailing and gnashing of teeth about Chat?

> *Matt:* What I'm looking forward to is computers being smart enough not knowing when to interrupt us. One aspect of computing sees a message in a chat room, determines who's the least invested in their work right now, and just notifying that person instead of notifying everyone.
>
> [whispering]

> *Female Facilitator:* My take-away is, if you're considering using ChatOps, the verdict is definitely use it, but be very careful about how you use it, on how you start the [inaudible 43:31] option and be very careful about selecting the right tool for you.

> *Matt:* Yep. Agree with all those. I would just add that it's not perfect, for sure. I think this is something that just in the past handful of years teams are starting to sort of look at as an alternative to old-school ways of getting things done in this is just a new way of getting things done.
>
> We're taking the things we're already doing and we're merging them with the conversations we're already having, and it's creating these new efficiencies that we all of a sudden are at least interested in exploring.

> *Matt:* Great. We got a couple things to wrap up. First of all we got, very quickly on the upcoming conferences; don't forget to go check out [devopsdays.org](http://devopsdays.org/). There's a whole bunch of new DevOps days coming up in the next couple months.
>
> There's CFPs open. Come and speak. Give a talk about ChatOps. It'll be great. Want to share with you, I promised on our last episode that we would have a discount code for the Chef community summits. These are good for both the Seattle and the London version of Chef community summit. The discount code ArrestedDevOps will get you 20 percent off your registration.
>
> Seattle version of Chef community summit is October 14th through the 15th and London will be November 3rd and 4th. Go to [Chef.io/summit](http://chef.io/summit). We're skipping checkouts because we are. Just a quick reminder that we do have a newsletter, [arresteddevops.com/bananastand](http://arresteddevops.com/bananastand). It's the best way to know about upcoming podcast episodes and cool news with DevOps. We have an iPhone app if you want to put an iPhone app that says ArrestedDevOps on your phone, go to [arresteddevops.com/iPhone](http://arresteddevops.com/iPhone).

> *Trevor:* Thanks to our sponsors. Be sure to visit them at [arresteddevops.com/tenthmagnitude](http://arresteddevops.com/tenthmagnitude) and [arresteddevops.com/victorops](http://arresteddevops.com/victorops) and [arresteddevops.com/datadog](http://arresteddevops.com/datadog). Thanks to Jason, Sasha, and Peter for joining us and to our loyal listeners. Let's get a cheer, everybody in the room.
>
> [cheering]
>
> [applause]
>
> [laughter]

> *Trevor:* If you enjoy ArrestedDevOps, [laughs] we'd appreciate if you'd visit [arresteddevops.com/iTunes](http://arresteddevops.com/iTunes) and leave us a review in the iTunes store. We would love to know what you thought of this episode. Please leave us a comment at [arresteddevops.com/42](http://arresteddevops.com/42).

> *Matt:* You can check us out at [arresteddevops.com](http://arresteddevops.com/) or @ArrestedDevOps on twitter. We're always happy to get your input, ideas, or feedback at shows at [arresteddevops.com](http://arresteddevops.com/). Please let us know any ideas you have for future episodes. I'm Matt @mattstratton.

> *Trevor:* I'm Trevor, @trevorghess. We're ArrestedDevOps, and remember, there's always DevOps...

> *Matt:* ...In the banana stand.
>
> [background music]
>
>