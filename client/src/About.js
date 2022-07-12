import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import {
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  IconButton,
} from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FixedColumns() {
  return (
    <Box
      sx={{
        display: "flex",
        justify: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "flex",
        minHeight: "flex",
      }}
    >
      <Masonry
        columns={2}
        spacing={2}
        sx={{
          display: "flex",
          justify: "center",
          justifyContent: "center",
          width: "flex",
          minHeight: "flex",
        }}
      >
        <Card>
          <CardHeader
            title="REACT"
            action={
              <IconButton>
                {" "}
                <Avatar
                  sx={{ bgcolor: deepOrange[500], width: 100, height: 100 }}
                >
                  R
                </Avatar>
              </IconButton>
            }
          />
          <CardContent>
            <Typography variant="h5" fontFamily="monospace">
              React is a powerful tool for building single page web applications
              that builds on an understanding of JAVASCRIPT. While many of the
              built in tools allow for javascript code, the jump in logic on
              information flow (STATE) can be very confusing. Here I offer is a
              generalized process to follow that might help map the path for new
              leaners. First and foremost, this is written with the expectation
              that you understand the fundamentals of JAVASCRIPT state, callback
              functions, props and components. From that base we can explore the
              specific uses of state and how I personally learned when to use if
              for what to achieve the deliverables required. As we have learned
              and repeated, the first thing we will want to do is fetch data
              with useEffect and set into state to be rendered our data  onto
              our site. This step is pretty easily understood, but when we move
              into the moving parts of multiple components with state, its
              important to identify some repeated concepts and how to filter
              through them: BUTTON TOGGLE FORM SUBMIT SEARCH DELETE These four
              examples are perfect for representing how we should look a state
              for REACT. Let’s start with the simplest form of state, BUTTON
              TOGGLE.  Here we use a BOOLEAN (true or false) version of state
              where we simply want to represent a true or false on a click
              event. ie, when the button is clicked, we call our previous state
              and set our new state to the opposite using the setState
              function.  Another way to think about it is the click will  use
              State like a switch jumping between either true or false. Since we
              don't need this state for any other component, it can live in the
              lowest component which is the component with the button itself. IF
              this state affects other components like DARK MODE TOGGLE would
              affect the entire page, state affects more than this component and
              we cannot approach it like this. However for the simple toggle,
              this is not needed. We will see below when state needs to be
              called elsewhere. Next are examples of how we need to send state
              into components and the complexity on where to store it grows. In
              general we want state to live in the highest common component so
              things we do in our child component can be passed sideways to our
              other children components by way of the parent. Let’s begin with
              DELETE. Here we are really learning how to pass event info back to
              our components that need it. When we click, we are able to use the
              event target value to take the id. For us to move the to where we
              need it, we use a callback and pass it up through props. We can
              decide if we need to persist whee to allow that to live. Usually
              APP is very cluttered if many of our state changes occur there, so
              I personally like to keep it in the component and use a second
              function to send to to APP since When our id arrive at our app, we
              will want to fire a change based on that. While we can use state
              it is not NEEDED for user input so I try to avoid it in this case.
              After the fetch deletes from the server, we then send the id to
              app where we will set a variable to our filter function. This
              filter will go through our main data set and if its id doesn’t
              match, it will return a new array without our item we deleted.
              This array will THEN get passed as our data state where it will
              render. newItem= AllItems.filter((item)=>item.id !== id)
              setState(newItem) to summarize, when we delete we will filter our
              initial state by checking agains the id and then using that  new
              array to pass through to our state things to note: state lives in
              Parent, we use a callback to send our specifci id and tht same
              funciton to assign a new variable and filter based on the id.
              Second: Search here we will show an example of how we will use
              state instead of a callback to update a search state in our App
              component and then only display items based on meeting that search
              criteria. We use state to accomplish this because its based on
              USER INPUT so, in our App component we must add a  search state
              and pass  the variable and the setter to the component that
              contains the inputs we need to grab info from. in the SEARCH
              component we need to attach event listener (onChange), make sure
              there is a name and a value which is our variable. we then need to
              fire a callback ()=>setSearchState(event.target.value) this will
              send our search terms as searchState to our APP component. here we
              will have a variable created called something like "fiteredItems"
              where we will filter our item state against our search state. if
              no search, we return all items becauase of how .includes()
              functions  const filterPokeMon=
              Allitems.filter(item=>item.name.toLowerCase()
              .includes(searchState.toLowerCase())) If we have a delete
              function, it doesn’t interfere because our “ALLITEMS” is set from
              the data we first had AND our updated array based on the delete
              click from before Finally, to handle A FORM we combine the two
              concepts of processing stuff state and passing information from
              our fetch response. This concept is difficult because we add a
              state in our FORM component and assemble a new object then pass
              that object into our fetch. Our state here will then need to be
              passed to our ALL items state where we can add it to the array.
              So, to start we need to create a formData state. This state begins
              as an empty object mimicking our json data we will want to post
              to. The Keys are extremely important that they match to the
              db.json keys . We then set all values as empty strings. We then
              must get the user input and assign it to this state so we can
              process an object we want to post. Our event handler will take the
              change, deconstruct the EVENT by name and value, then use the
              spread operator to add it to form state as the user create input.
              The state we created will take all the data and set it to be the
              value of the key we created earlier. We then handle our
              submission. Onsubmit we will prevent default then create an object
              with the values of our formData. We then pass this form into our
              fetch call to post
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            variant="h4"
            colorfontFamily="monospace"
            action={
              <IconButton>
                {" "}
                <Avatar
                  sx={{ bgcolor: deepOrange[500], width: 100, height: 100 }}
                >
                  M
                </Avatar>
              </IconButton>
            }
            title="MaterialUI"
          />
          <CardContent>
            <Typography variant="h5" fontFamily="monospace">
              Material UI: The good and the bad Material ui is a powerful
              addition to react hat uses many(many) prebuilt components to
              develop a front end experience in REACT. By simply cut cop and
              pasting you can render a full webpage with reactive gestures,
              responsive features, and simple styles very, very easily. However
              there is always a catch, being a very built and heavy component,
              as well as very little documentation on styling, makes it a very
              challenging task to customize these compoentners to create a
              unique webpage and feel. With my time using the framework I have
              come to appreciate certain things about it and will point out
              others. The biggest and most daunting aspect of Material UI is
              that its pretty generic and cheap looking out of the box. The
              colors are harsh and unappealing as well as the default font etc.
              changing this can be done one of two ways. The suggested method is
              to override the defaults in the THEME OBJECT. Many tutorials
              online can provide a good use of how to do this, but essentially
              by renting the value of the appropriate key, one can set every
              default color, font, etc to most of the compoentners. This is
              great to depart from the starting colors and fonts however
              impementiaon can be frustrating and in the end the easiest way to
              quickly get a page setup is to use inline style assignments Moving
              on from style, id like to identify the most useful features.i
              found valuable: Masonry, Grid: this compentent was what drew me to
              MUI in the first place. Its extensive mutability and relative ease
              of setup allows for a quick setup. It allows to center and align
              with page sizes and its easy to set up the relative layouts.
              Beyond that its heavy framework with a lot of layers so import and
              learn so I wouldn’t say it is any easier than learning another css
              framework. Obviously CSS IS NOT TAUGHT AT FLATIRON so you can
              learn whatever you want.
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            title="MFA and security on Your site "
            color="inherit"
            action={
              <IconButton>
                {" "}
                <Avatar
                  sx={{ bgcolor: deepOrange[500], width: 100, height: 100 }}
                >
                  MFA{" "}
                </Avatar>
              </IconButton>
            }
          />
          <CardContent>
            <Typography variant="h5" fontFamily="monospace">
              The whole internet is Hot or Not.com So the inspiration for this
              site came from the joke I told myself every phase along the way,
              every time I leaned more about the INTERNT. “ oh, so everything is
              hot or not?”. And while I treated this aas a joke for the first
              phases, after learning rails and how DB associations work, I
              really was on to the idea that hot or not really buillt the
              framework for the internet we use today. SO, AFTER DECIDING TO
              MAKE THIS MY final project I researched HOT OR NOT in more detail
              and found some interesting perspectives I feel are relevant for
              this scope. Basically, YOUTUBE, TINDER, TWITTER, FACEBOOK, WERE
              ALL BORN FROM hot or not. Baaically the idea of social media in
              general was catapulted from HOT OR NOT. No MySpace, no instagram.
              Nothing except the boring internet where you went and looked at
              stuff. The Social Network jump. So the biggest thing that made hot
              or not famous was the fact that mark zuckerbuerg who built a ton
              of projects while in college, used the idea to start hi Harvard
              picture voting platform that then spun off into Facebook. It is
              interesting to note that many of the social media pitfalls
              (comments and unsolicited feedback) were avoided during hot or
              nots creation. It was here wheee there was a pure form of the
              internet still, expcpet people could now log on to interact with
              other humans in a way that was never before used. More notably as
              well they came fro the asked of the 2000 dot com bubble pop where
              billions (in 2000 dollars) were wiped out from the industry, not
              much unlike today. It was the r bare bones and highly delevelpped
              method of user bias that was conciouous of social media effect as
              well as the pecieved sexism and judgment the site was based on.
              However by making user experience and fun their foremost goal,
              they were able to avoid the terribleness that human and bot trolls
              can inflci on the network
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            title="ActionMailer and RAILS setup"
            action={
              <IconButton>
                {" "}
                <Avatar
                  sx={{ bgcolor: deepOrange[500], width: 100, height: 100 }}
                >
                  AM
                </Avatar>
              </IconButton>
            }
          />
          <CardContent>
            <Typography variant="h5" fontFamily="monospace">
              Action mailer and google POST 2022 UPDATE Acton mailer is powerful
              tool offered through the RAILS backend.I can be triggered and to
              send welcome emails, reset a password, or provide digital goods
              via email in an e-commerce setting. SETUP: There are plenty of
              tutorials setting up the mailer but I want to point out new
              updates to google and some small GOTCHYAs to look out for. GOOGLE:
              As of May, 30, 2022 google now requires an access key ( in a.
              Departure from your google password) from an application or
              website that requests to use their SMTP. To generate a key, simply
              go to your google account and login in. Access your profile then
              security settings. Under here w must first set up Multifactor
              Authentication from google and set that up on your phone or
              secondary email. From here you can then generate an APP key . This
              key will simply replace your google password in the mailer
              configuration. Caveats: You need to use a google key, not your
              password Action mailer REQUIRES a text and html .erb file to
              generate the email even if the email service only uses one of the
              two The user_mailer html and text file must be named the same as
              the method used to send the email. Ie, welcome_email We use RAILS
              VIEW as the method to render the html and text in the email. This
              differs from the client server relationship we have for most other
              processes in this application Overall actionmaier is a simple to
              use addition to the backend that allows powerful Email
              capabilities
            </Typography>
          </CardContent>
        </Card>
      </Masonry>
    </Box>
  );
}
