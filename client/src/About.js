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
            title="Blog Card"
            action={
              <IconButton>
                {" "}
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              </IconButton>
            }
          />
          <CardContent>
            <Typography>
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
            action={
              <IconButton>
                {" "}
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              </IconButton>
            }
            title="Blog 2"
          />
          <CardContent>
            <Typography>Blog 2</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            title="Blog 3"
            action={
              <IconButton>
                {" "}
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              </IconButton>
            }
          />
          <CardContent>
            <Typography>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            title="Blog 4"
            action={
              <IconButton>
                {" "}
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              </IconButton>
            }
          />
          <CardContent>
            <Typography>Blog 4</Typography>
          </CardContent>
        </Card>
      </Masonry>
    </Box>
  );
}
