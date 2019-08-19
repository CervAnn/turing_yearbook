const people = {
  staff: [
    {id: 1, name: 'Eric', quote: 'You miss all the shots you don\'t take.', superlative: 'Most Likely to Win the PGA', photo: './eric.jpg'},
    {id: 2, name: 'Amy', quote: 'I believe in you, cuties!', superlative: 'Most Likely to Be an Actual Superhero', photo: './amy.jpg'},
    {id: 3, name: 'Khalid', quote: 'Don\'t put the world on your shoulders.', superlative: 'Most Likely to Save the Planet from Alien Invasion', photo: './khalid.png'},
    {id: 4, name: 'Travis', quote: 'You do you.', superlative: 'Most Likely to Win a Grammy', photo: './travis.jpg'},
    {id: 5, name: 'Leta', quote: 'It\'s okay to be kind of a mess.', superlative: 'Most Likely to Go to the Moon', photo: './leta.jpg'},
    {id: 6, name: 'Christie', quote: 'Every journey begins with a single step. So take the damn step!', superlative: 'Most Likely to Be President', photo: './christie.jpg'},
    {id: 7, name: 'Brittany', quote: 'It was Robbie.', superlative: 'Most Likely to Get Away with Murder', photo: './brittany.jpg'},
    {id: 8, name: 'Robbie', quote: 'Cool.', superlative: 'Most Likely to Be Accused of Murder', photo: './robbie.jpg'},
    {id: 9, name: 'Will', quote: 'Stop worrying and just do the thing.', superlative: 'Most Likely to Invent Cold Fusion', photo: './will.jpg'},
    {id: 10, name: 'Pam', quote: 'Shit!', superlative: 'Most Likely to Win a Gold Medal', photo: './pam.jpg'},
    {id: 11, name: 'David', quote: 'I love git.', superlative: 'Most Likely to Be Eaten by a Shark', photo: './david.JPG'},
    {id: 12, name: 'Louisa', quote: 'YOLO', superlative: 'Most Likely to Win a Knife Fight', photo: './louisa.jpg'},
    {id: 13, name: 'Jeff', quote: '::thoughtful nonsense::', superlative: 'Most Likely to Tell a Dad Joke', photo: 'https://i.ytimg.com/vi/DhqzMc_LXgQ/maxresdefault.jpg'},
  ],
  students: [
    {id: 21, name: 'Abigail', quote: 'And I love you like Kanye loves Kanye.', superlative: 'Most likely to be Instagram Famous', photo: './college_dropout_logo.jpg'},
    {id: 22, name: 'Brian', quote: 'Take a walk outside. Fresh air is healing', superlative: 'Most likely to break a world record', photo: './college_dropout_logo.jpg'},
    {id: 23, name: 'Charlotte', quote: 'You can say anything as long as you put the right emoji next to it.', superlative: 'Most likely to invent a new form of social media', photo: './college_dropout_logo.jpg'},
    {id: 24, name: 'Danesh', quote: 'Everything you do in life stems from either fear or love.', superlative: 'Most likely to save the planet', photo: './college_dropout_logo.jpg'},
    {id: 25, name: 'Evelyn', quote: 'All you have to be is yourself.', superlative: 'Most likely to win a Nobel Prize', photo: './college_dropout_logo.jpg'},
    {id: 26, name: 'Fatima', quote: 'Everyone should be their own biggest fan.', superlative: 'Most accident-prone', photo: './college_dropout_logo.jpg'},
    {id: 27, name: 'Glen', quote: 'You may be talented, but you\'re not Kanye West.', superlative: 'Most likely to be late for class', photo: './college_dropout_logo.jpg'},
    {id: 28, name: 'Harriet', quote: 'Sometimes I get emotional over fonts', superlative: 'Most likely to put something off until tomorrow', photo: './college_dropout_logo.jpg'},
    {id: 29, name: 'Isabella', quote: 'We lookin\' crazy fresh where\'s the paparazzi when you need em.', superlative: 'Most likely to not change at all', photo: './college_dropout_logo.jpg'},
    {id: 210, name: 'Jorge', quote: 'Kim doesn\'nt understand what a blessing I am to her', superlative: 'Most opinionated', photo: './college_dropout_logo.jpg'},
    {id: 211, name: 'Kelly', quote: 'I need a room full of mirrors so I can be surrounded by winners.', superlative: 'Most likely to never be single', photo: './college_dropout_logo.jpg'},
    {id: 212, name: 'Lucia', quote: 'Please: Do everything you possibly can in one lifetime', superlative: 'Most liked by parents', photo: './college_dropout_logo.jpg'},
    {id: 213, name: 'Mei', quote: 'Don\'t trade your authenticity for approval', superlative: 'Most involved', photo: './college_dropout_logo.jpg'},
    {id: 214, name: 'Nina', quote: 'She asked when is fashion week....uuuuum...I thought it was every week.', superlative: 'Most affectionate', photo: './college_dropout_logo.jpg'},
    {id: 215, name: 'Ophus', quote: 'You have distracted me from my creative process.', superlative: 'Most likely to drive to class', photo: './college_dropout_logo.jpg'},
    {id: 216, name: 'Parker', quote: 'Ima fix wolves', superlative: 'Cutest couple that never was', photo: './college_dropout_logo.jpg'},
    {id: 217, name: 'Quin', quote: 'Distraction is the enemy of vision.', superlative: 'Cutest couple that never was', photo: './college_dropout_logo.jpg'},
    {id: 218, name: 'Rosa', quote: 'Naps are awesome.', superlative: 'Most likely to survive the Hunger Games', photo: './college_dropout_logo.jpg'},
    {id: 219, name: 'Sam', quote: 'I wish I had a friend like me.', superlative: 'Best dressed', photo: './college_dropout_logo.jpg'},
    {id: 220, name: 'Tyrese', quote: 'I\'m nice at ping pong.', superlative: 'Most Athletic', photo: './college_dropout_logo.jpg'},
    {id: 221, name: 'Ursula', quote: 'All you have to be is yourself.', superlative: 'Most likely to succeed', photo: './college_dropout_logo.jpg'},
    {id: 222, name: 'Vic', quote: 'Everyone has made mistake. I just make them in public.', superlative: 'Most unique', photo: './college_dropout_logo.jpg'},
    {id: 223, name: 'Whitney', quote: 'Not smiling makes me smile.', superlative: 'Most changed', photo: './college_dropout_logo.jpg'},
    {id: 224, name: 'Xavier', quote: 'Fur pillows are hard to actually sleep on.', superlative: 'Most unforgettable', photo: './college_dropout_logo.jpg'},
    {id: 225, name: 'Yolanda', quote: 'I\'m not taking no advice for the rest of the year.', superlative: 'Biggest flirt', photo: './college_dropout_logo.jpg'},
    {id: 226, name: 'Zach', quote: 'Drake finally called.', superlative: 'Class clown', photo: './college_dropout_logo.jpg'},
  ]
}

module.exports = people;
