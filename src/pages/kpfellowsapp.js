import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import portfoliopdf from "../components/Aditi_Rajagopal_Portfolio.pdf"


export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const wnrsQuery = graphql`
  query {
    wnrs0: file(relativePath: { eq: "wnrs0.jpg" }) {
       ...fluidImage, publicURL }
    wnrs1: file(relativePath: { eq: "wnrs1.jpg" }) {
      ...fluidImage, publicURL
    }
  }
`

const KPFellowsPage = (props) => (
  <Layout>
    <SEO title="2021 Kleiner Perkins Fellows Application" />


		<h1 class="f3 f2-m f1-l headers">2021 Kleiner Perkins Fellows Application</h1>

			<dl class="lh-title mt0">
			  <dt class="measure f4 f3-ns lh-copy pb4">
			  	<AnchorLink to="#q1">Question 1: Impact</AnchorLink>
			  </dt>
			  <dt class="measure f4 f3-ns lh-copy pb4">
			  	<AnchorLink to="#q2">Question 2: Meaningful Experiences</AnchorLink>
			  </dt>
			  <dt class="measure f4 f3-ns lh-copy pb4">
			  	<AnchorLink to="#q3">Question 3: Product Obsession</AnchorLink>
			  </dt>
			  <dt class="measure f4 f3-ns lh-copy pb4">
			  	<AnchorLink to="#q4">Question 4: Notable Links</AnchorLink>
			  </dt>
			</dl>

        
        
        

		<article class="cf">
				<h2 class="f4 headers lh-title mt2 anchorClass" id="q1">
					What impact do you want to have on the world and why?
				</h2>
				<p class="lh-copy text">
					I plan to make an impact through a professional, personal, and advocacy lens. 
					Professionally, I want to build and grow resilient and empowered product teams that embody a "stakeholder 
					first" mentality. Given my skills at the intersection of business, technology, and data science, I want to 
					challenge my teams to creatively solve problems using data while acting responsibly and ethically. Based on 
					my past experiences working in turbulent organizations, I firmly believe that facilitating environments where 
					psychological safety and inclusion are at the forefront enable individuals to bring their best selves to any 
					challenge. I want to raise these expectations and redefine the possibilities for positive work environments 
					across the tech industry. I aspire to be a lifelong learner and to pick up skills no matter how mundane or 
					eccentric - for example, learning how to make homemade pizza dough and <a href="https://www.youtube.com/watch?v=3fG8rNHUspU">pepcorn</a> and sharing this passion with 
					others has encouraged team bonding for various projects. From an advocacy perspective, I plan to channel my 
					skills into my local community by engaging with public policy leaders in my area and continuing my leadership 
					with the Society of Women Engineers and other advocacy programs. Bringing these aspirations together, I want to 
					take my learnings from the KPCB Fellowship to facilitate the growth of the Midwest's tech sector by growing and 
					investing in ventures in the region while seeking opportunities for public and private sector partnerships to 
					promote economic development. I want to help rebuild and strengthen the community that raised me.  
				</p>
		</article>
		<article class="cf">
			<h2 class="f4 headers lh-title mt2 anchorClass" id="q2">
				Describe your most meaningful experience(s) and why they matter to you.
			</h2>
			<p class="lh-copy text">
				When I joined IBM's Rochester Minnesota office, someone who took an early interest in me was Jim, a senior 
				engineer and IBM "Master Inventor." Jim quickly turned into my mentor, innovation coach, and "work BFF" - 
				he helped me foment the direction of my life by always asking the question, "what's the goal?" Jim saw my 
				interest in the intersection of technology, design, and business as an asset, whereas in the past, many 
				misinterpreted these passions as a lack of interest in core engineering and technology. Jim nurtured my 
				potential and pushed me to channel my curiosity into action via patents and side projects. Working with Jim 
				eepened my appreciation for the tech industry and fueled me to encourage others to embrace engineering and 
				technology as a career path.  Through volunteerism, I aspired to make tech accessible to others in ways 
				that it wasn't for me (via the Society of Women Engineers, Girls Who Code, etc.) and mentoring (Darden MBA 
				mentoring programs, Women's Association of Venture and Equity, etc.). This past year has been especially 
				tumultuous for my family and me, but reflecting on Jim's mantra, "what's the goal," and on how he lived his 
				life has helped me zone in on what matters most to me, and what it means to live a well-rounded life. I want to 
				<a href="https://www.legacy.com/obituaries/postbulletin/obituary.aspx?pid=187837099"> honor his memory </a>
				by applying my learnings, leadership, and interpersonal skills to solve impossible problems 
				and to support those who matter the most to me.
			</p>
		</article>
		<article class="cf">
			<h2 class="f4 headers lh-title mt2 anchorClass" id="q3">
				What is the latest product you’re absolutely obsessed with and why? Briefly explain what the product is, provide a broader analysis on why it plays such a significant role, and come up with any recommendations you might have for future improvements. You can provide your submission as a link to your blog post or video.
			</h2>
			<p class="lh-copy text">
				Here at the University of Virginia, due to recent spikes in Covid-19 cases, the University in tandem with the 
				city of Charlottesville has limited social gatherings to 5 people or fewer. At a time where we are supposed to 
				be developing lifelong relationships, students are feeling increasingly isolated from one another and from loved 
				ones - myself included. A product that has been thought-provoking and joyful to experience is the game "We're Not 
				Really Strangers" (WNRS). Created by Koreen, the card game's goal is to cultivate meaningful connections through 
				three levels of questions. According to Koreen, you can either play safe or play to grow. 
			</p>
			<p class="lh-copy text">
				During quarantine, I have spent countless hours in virtual happy hours and game nights bonding with my classmates, 
				friends, and family. Traditional board games and virtual games start out as fun, but often turn repetitive and into 
				drinking games. I appreciate WNRS because it's a different experience every time you play, and the experience doesn't 
				end when the gameplay stops. Because the questions get increasingly reflective and personal, the memories are a lot 
				stronger and more vivid. An added bonus is that you always leave with memorabilia because the mandatory final card in 
				the game is "Each player writes a message to the other. Fold and exchange. Open only once you have parted". The game's 
				packaging foreshadows the thoughtfulness of the game's questions with subtle messages like "Come Curious, Leave Connected" 
				and "Inside we're all the same."
			</p>
		      <Img className="w-100 f3 measure dib" alt="Photo of WNRS game box" fluid={props.data.wnrs0.childImageSharp.fluid} />
			<p class="lh-copy text">
				The WNRS Instagram account and text messaging platform transcend WNRS and create a bridge from the game into an 
				immersive community. Through the Instagram account, Koreen shares her personal artwork and poses thought-provoking 
				questions throughout the week. The text messaging platform gives you early access to product drops, but also serves 
				as daily check-ins. Sometimes the text messages' timings are almost too coincidental, but serve as a way to check-in 
				with your heart on a daily basis (e.g. "Showing up as your authentic self gives others around you permission to do 
				the same"). I often share these texts with my friends and family, and I feel like they have sparked meaningful 
				conversation and brought us closer. As the WNRS community continues to grow, they can tap into the trend of text 
				message courses (similar to Arist.co and The Nudge) to expand their offerings. This way, they can continue to grow 
				the virtual counterpart of the physical product.
			</p>
	  	      <Img className="w-100 f3 measure dib" alt="Photo of WNRS game contents" fluid={props.data.wnrs1.childImageSharp.fluid} />
			<p class="lh-copy text">
				The expansion packs for the card game started with topics like dating (in collaboration with Bumble) but have 
				since expanded to be more timely topics such as BLM and the 2020 election. Considering the importance of the topics, I
				appreciate that the latter two expansion packs were free as printable pdfs. I see the expansion packs as an 
				avenue for future product improvements. On a couple of occasions where I suggested playing this game, I've 
				gotten the response, "this is game night, not a therapy session." Because of the game's introspective and 
				reflective nature, it creates a 'self-selecting' dynamic for those interested in playing. To make the game 
				more "game night friendly," I suggest launching an expansion pack with more accessible and light-hearted 
				questions that can ease newcomers into the original game. Additionally, they could create an expansion pack 
				for the workplace to get to know your teammates and coworkers, and perhaps a counterpart pack dedicated to 
				diversity and inclusion. WNRS strives to bring out the best in those who play the game and form tightly-knit 
				communities - why not expand it to different gameplay environments?
			</p>
		</article>
		<article class="cf">
			<h2 class="f3 headers lh-title mt2" id="q4">
				Feel free to submit a link to content you've created that is representative of who you are and what you care about. This can be your Twitter handle, Medium account, Youtube Channel, etc.
			</h2>
			<p class="lh-copy text">
				<a className="link dim text f6 f5-l dib mr3 mr4-l" href={portfoliopdf} title="Portfolio">portfolio</a>
				<a className="link dim text f6 f5-l dib mr3 mr4-l" href="https://docs.google.com/document/d/1BOPfeaoagLf27-6ROXcv2ypG396Ie0ejaXcrhC50DP8/edit?usp=sharing" title="Zoom Paper">Data Ethics Paper: Zoom</a>
				<a className="link dim text f6 f5-l dib mr3 mr4-l" href="https://twitter.com/aditi_rajagopal" title="Twitter">portfolio</a>				
			</p>
		</article>






		<footer class="text">
			<small class="mt3 tc pb4">Thanks for reading!</small>
		</footer>
  </Layout>
)

export default KPFellowsPage