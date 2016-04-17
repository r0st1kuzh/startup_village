// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  startup: require("../assets/startup-circles.png"),
  lean: require("../assets/lean-circles.png"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  vision: require("../assets/icons/eye.png"),
  goals: require("../assets/icons/target.png"),
  effort: require("../assets/icons/tools.png"),
  profit: require("../assets/icons/rocket.png"),
  action: require("../assets/icons/genius.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081",
  vision: "#77b3d4",
  target: '#4f5d73',
  effort: '#76c2af',
  action: '#e0995e'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Start IT up
            </Heading>
            <Heading size={1} fit caps>
              the collection of best practicies
            </Heading>
            <Heading size={1} fit caps textColor="black">
              to make your startup successful
            </Heading>
            <Text textSize="1.5em" margin="60px 0px 0px" bold>Ros Trocyuk | 2016</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              What is successful startup
            </Heading>
            {/*<Layout>
              <Appear fid="2">
                <Image src={images.kat.replace("/", "")} margin="20px auto 40px" height="293px"/>
              </Appear>
              <Appear fid="1">*/}
            <Image src={images.startup.replace("/", "")} margin="20px auto 40px" height="550px"/>
              {/*</Appear>
            </Layout>*/}
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1} caps fit textColor="white" margin="0 0 80px" textFont="primary">
              Key points
            </Heading>
            <Image src={images.vision.replace("/", "")} margin="20px" height="128px"/>
            <Image src={images.goals.replace("/", "")} margin="20px" height="128px"/>
            <Image src={images.action.replace("/", "")} margin="20px" height="128px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="tertiary">
              Vision
            </Heading>
            <Image src={images.vision.replace("/", "")} margin="20px" height="128px"/>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="tertiary">
                The conceptual part of the idea
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Should be developed before any line of code is written
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="vision" textColor="tertiary">
            <Image src={images.vision.replace("/", "")} margin="0" height="128px"/>
            <Heading size={5} textColor="tertiary" caps fit>
              What we should think about first?
            </Heading>
            <List>
              <Appear><ListItem>Core business idea of the startup</ListItem></Appear>
              <Appear><ListItem>Significance of this project to overall business</ListItem></Appear>
              <Appear><ListItem>Who are our customers? What their problems do we solve?</ListItem></Appear>
              <Appear><ListItem>Are there any competitors? What competitive advantage we can propose?</ListItem></Appear>
              <Appear><ListItem>Revenue model</ListItem></Appear>
              <Appear><ListItem>Goals and CSF(Critical Success Factors)</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="tertiary">
              GOALS
            </Heading>
            <Image src={images.goals.replace("/", "")} margin="20px" height="128px"/>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                The output based on vision and market analysis
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="tertiary">
                Answers the question - what exactly we should do and why
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="target" textColor="tertiary">
            <Image src={images.goals.replace("/", "")} margin="0" height="128px"/>
            <Heading size={5} textColor="tertiary" caps>
              We should do that as MVP
            </Heading>
            <Text textColor="tertiary" margin="40px 0 0">MVP - acts as Minimal Viable Product</Text>
            <Text textColor="tertiary" margin="20px 0 0" >An MVP isn’t the quickest or the most perfect product.</Text>
            <Text textColor="tertiary" margin="20px 0 0">It's a product with minimum development effort that creates maximum value to maximize learning while minimizing risk and investment</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
            <Image src="http://www.mhonorato.com/wp-content/uploads/2014/06/BnkTGbTIcAAj5Qt.png" margin="20px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="target" textColor="tertiary">
            <Image src={images.goals.replace("/", "")} margin="0" height="128px"/>
            <Heading size={5} textColor="tertiary" caps>
              MVP
            </Heading>
            <Text textColor="tertiary" margin="40px 0 0"> Can be used for: </Text>
            <List>
              <ListItem>limiting your scope of work to testing just the core value of your product</ListItem>
              <ListItem>testing of market demand for such kind of solution</ListItem>
              <ListItem>maximizing learning with minimal effort so you don’t go down the wrong path</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="target" textColor="tertiary">
            <Image src={images.goals.replace("/", "")} margin="0px" height="128px"/>
            <Heading size={5} textColor="tertiary" caps>
              Discovery phase
            </Heading>
            <Text textColor="tertiary" margin="40px 0 0"> The output of the discovery phase should be: </Text>
            <List>
              <ListItem>set of data describing the vision of a product</ListItem>
              <ListItem>list of high level stories based on vision with priorities</ListItem>
              <ListItem>?the main architectural decisions should be determined, as well as proof-of-concept ones</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="tertiary">
              Action
            </Heading>
            <Image src={images.action.replace("/", "")} margin="20px" height="128px"/>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Organize your work process the right way
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="tertiary">
                Answers the question - how we should do
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="action" textColor="tertiary">
            <Image src={images.action.replace("/", "")} margin="0" height="128px"/>
            <Heading margin="0 0 40px" size={5} textColor="tertiary" caps>
              SCRUM
            </Heading>
            <Text textColor="tertiary" margin="0 0 20px"> The right process - critical part of product development </Text>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TRcReyRYIMg" frameborder="0" allowfullscreen></iframe>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" textColor="tertiary">
            <Image src={images.action.replace("/", "")} margin="0 20px" height="128px"/>
            {/*<Text textColor="tertiary" margin="20px 0 0"> The output of the process based on SCRUM: </Text>*/}
            <Layout>
              <Fill>
                <List>
                  <Appear><ListItem>iterative(sprint-based) project development, which delivers working product increment as a result</ListItem></Appear>
                  <Appear><ListItem>transparent activities. Everyone knows what is going on the project and what is the current state</ListItem></Appear>
                  <Appear><ListItem>ability to dynamically adjust project plan for product needs</ListItem></Appear>
                  <Appear><ListItem>acts as a platform for development and improving of team workflow</ListItem></Appear>
                  <Appear><ListItem>drives teams to the point where become more self-organized</ListItem></Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="action" textColor="tertiary">
            <Image src={images.action.replace("/", "")} margin="0 20px 20px 20px" height="128px"/>
            <Heading margin="0 0 40px" textColor="tertiary" size={5} caps>
              Lean
            </Heading>
            <Layout>
              <Fill>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_a3s0IXSuxY" frameborder="0" allowfullscreen></iframe>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="tertiary" textColor="black">
            <Image src={images.action.replace("/", "")} margin="0 20px 20px 20px" height="128px"/>
            <Heading margin="0 0 40px" size={5} textColor="black" caps >
              overall Lean process schema
            </Heading>
            <Image src={images.lean.replace("/", "")} margin="20px auto" height="305px"/>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote textSize="3rem">I think it’s very important to have a feedback loop, where you’re constantly thinking about what you’ve done and how you could be doing it better. I think that’s the single best piece of advice: constantly think about how you could be doing things better and questioning yourself. Failure is an option here. If things are not failing, you are not innovating enough.</Quote>
              <Cite>Elon Musk</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Dont't be afraid to Make your ideas live!
            </Heading>
            <Heading size={1} caps>
              Just do it right!
            </Heading>
            <Text textSize="1.5em" margin="100px 0px 0px" bold>Thanks!</Text>
          </Slide>


          {/*<Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>*/}
        </Deck>
      </Spectacle>
    );
  }
}
