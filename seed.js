require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Activity = require('./models/activity');

(async function() {
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Fine Motor', sortOrder: 10},
        {name: 'Gross Motor', sortOrder: 20},
        {name: 'Early Literacy', sortOrder: 30},
        {name: 'Math', sortOrder: 40},
        {name: 'Sensory', sortOrder: 50},
    ]);

    await Activity.deleteMany({});
    const activities = await Activity.create([
        {name: 'Play Dough', 
        category: categories[0], 
        description: 'Grab some play-dough and let your child squeeze, stretch, pinch and roll different shapes or even practice with safety scissors to cut different shapes', 
        duration: 60},
        {name: 'Painting', 
        category: categories[0], 
        description: 'Allow your child to get creative with a pallete of paint colors using their fingers or a brush', 
        duration: 30},
        {name: 'Sponge Play', 
        category: categories[0], 
        description: 'Using a new, clean sponge, some water, and two bowls, allow your child to soak the sponge and squeeze the water into the empty bowl', 
        duration: 30},
        {name: 'Rice races', 
        category: categories[0], 
        description: 'Divide a handful of uncooked rice into two plastic bowls and, using small plastic tweezers, see who can be the first to transfer their rice into an empty bowl', 
        duration: 30},
        {name: 'Water play', 
        category: categories[0], 
        description: 'Fill a cup a quarter full of water and let your child use an eyedropper or syringe to transfer the water into an empty cup', 
        duration: 30},
        {name: 'Seed the Garden', 
        category: categories[0], 
        description: 'Help your child to transfer seeds into premade holes in a potter or the family garden', 
        duration: 60},
        {name: 'Trampoline Time', 
        category: categories[1], 
        description: 'Allow your child to jump around and improve their balance on an indoor mini trampoline or take a trip to a trampoline park', 
        duration: 60},
        {name: 'Hopscotch', 
        category: categories[1], 
        description: 'Improve balance and coordination by playing a game of hopscotch either outside using chalk or down the hallway using painters tape', 
        duration: 60},
        {name: 'Playground Play', 
        category: categories[1], 
        description: 'Take a trip to your favorite local playground and let your child practice swinging, climbing, and jumping', 
        duration: 90},
        {name: 'Balloon and bubble play', 
        category: categories[1], 
        description: 'Blow up some balloons and blow some bubbles and have your child chase them around and try to pop as many as they can', 
        duration: 60},
        {name: 'Pedal power', 
        category: categories[1], 
        description: 'Break out the tricycles, scooters, and pedal cars and let your child practice balance and pedaling through an obstacle course', 
        duration: 60},
        {name: 'Dancing', 
        category: categories[1], 
        description: 'Put on some songs with lyrics that add movement and have fun making up some fun dance moves with your child', 
        duration: 60},
        {name: 'Picture book time', 
        category: categories[2], 
        description: 'Open up a picture book and let your child help turn the pages and guess what is happeing in the story', 
        duration: 30},
        {name: 'ABC Animals', 
        category: categories[2], 
        description: 'Find a bunch of pictures of animals and let your child guess which animals start with each letter of the alphabet', 
        duration: 60},
        {name: 'ABC Song', 
        category: categories[2], 
        description: 'Sing the ABC song with your child as loud as you can', 
        duration: 30},
        {name: 'Flashcard Frenzy', 
        category: categories[2], 
        description: 'Use some flashcards with easy three letter words and pictures of things your child would recognize to practice word recognition', 
        duration: 60},
        {name: 'Story Time', 
        category: categories[2], 
        description: 'Read a story or two to your child making sure to be as animated as possible', 
        duration: 60},
        {name: 'Scribble and Trace', 
        category: categories[2], 
        description: 'Monitor your child while they practice scribbling on a paper or trying to trace letters in preparation for writing letters and words', 
        duration: 60},
        {name: 'Count and Sort', 
        category: categories[3], 
        description: 'Give your child some empty bowls or cups and different items they can sort and count as they fill the bowls', 
        duration: 60},
        {name: 'Roll and Count', 
        category: categories[3], 
        description: 'Take turns rolling dice and counting the dots to determine what number is lands on', 
        duration: 30},
        {name: 'Number Match', 
        category: categories[3], 
        description: 'Tape some numbered envelopes in a grid on the wall and give your child numbered popsicle sticks to place in the correct slots', 
        duration: 60},
        {name: 'Counting Flowers', 
        category: categories[3], 
        description: 'Create numbered flowers stems with whatever material you have on hand and help your child stick the correct number of pedals on each flower', 
        duration: 60},
        {name: 'Toy Counting', 
        category: categories[3], 
        description: 'Help your child to count all their stuffies or cars or dolls', 
        duration: 30},
        {name: 'Find and Count', 
        category: categories[3], 
        description: 'Draw a variety of shapes in random order and quantity and have your child find and count each shape', 
        duration: 30},
        {name: 'Sensory Bin', 
        category: categories[4], 
        description: 'Create a sensory bin filled with items of varying textures shapes and sizes and let your child feel and play with each item', 
        duration: 60},
        {name: 'Food Play', 
        category: categories[4], 
        description: 'Fill a tray with foods of varying taste, texture, size, and shape and let your child squish, smear, taste, and smell as they play and snack', 
        duration: 60},
        {name: 'Sound tubes', 
        category: categories[4], 
        description: 'Fill paper towel rolls with a variety of materials and secure the ends so your child can shake them to hear the different sounds they make', 
        duration: 60},
        {name: 'Sandbox', 
        category: categories[4], 
        description: 'Create an indoor or outdoor sandbox with real or magnetic sand and let your child feel the texture and use household items to create shapes', 
        duration: 60},
        {name: 'Bread making', 
        category: categories[4], 
        description: 'Let your child help you make some bread dough and then knead and shape it to create some delicious homemade bread', 
        duration: 90},
        {name: 'Homemade instruments', 
        category: categories[4], 
        description: 'Make maracas with a paper cup, dried beans, and wax paper and a homemade guitar with an empty tissue box and some rubber bands', 
        duration: 90},
    ]);

    console.log(activities)

    process.exit();

})();