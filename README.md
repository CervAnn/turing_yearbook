# Turing Yearbook

This application was built with `create-react-app`.

### Set Up

Clone down this repo.

Because you don't want to be pushing your updates to this boilerplate repository, we're going to have to do a few things to get set up with your own repository.

1. On GitHub, create a new, empty repository and name it something like 'turing-yearbook'.
2. Update the current remote (called "origin") so that it points at the URL of the repository you just created on GitHub. Read how to do this [here](https://help.github.com/en/articles/changing-a-remotes-url).
3. Once you've updated the remote, you should run `npm install`, commit, and then push your initial commit to your personal repository. You will need to use the `-u` flag when you push (like this: `git push -u origin master`).
4. Run `npm start` to start up your React server.

### Expectations / Rules

Build a React App that displays Turing front-end staff!

![turing yearbook screenshot]('https://raw.githubusercontent.com/turingschool-examples/yearbook/master/screenshot.png')

We want to see good commit habits - atomic commits that log small, focused changesets.


### Iteration 0

Get set up (per the instructions above)!

We've provided a boilerplate for you to work with. Look through the file structure to get a sense of the app.

Notice that we have multiple stylesheets - one for each component. You are welcome to style this application however you'd like. We got you started with a little styling, but feel free to get creative. (Remember, though - most of your energy should be spent on learning React, not styling.)

### Iteration 1

Create a Cohort component, which will act as a container that renders each of our Person cards. For now, the Cohort being displayed will be "Staff". Figure out how to pass information from `App.js` to `Cohort.js`!

### Iteration 2

Create a Person component. Each Person card will display: the image, the name, the quote, and the superlative (see the screenshot above for an idea).

In your Cohort component, create Person cards that have the information each needs to display properly.

### Iteration 3 (extension - do not attempt until iterations 0 - 2 are completed)

In the `yearbook-data.js` file, un-comment-out the "students" information. Get that information displaying, too. How can you reuse components?

### Iteration 4 (extension - do not attempt until iterations 0 - 3 are completed)

Create a controlled component that allows people to add a new student.
