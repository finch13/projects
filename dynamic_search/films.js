'use strict';

const store = [
    {
        id : 1,
        name : 'The internship',
        poster: "new/films/1_The_Internship(2003_comedy).jpg",
        description: 'Two salesmen whose careers have been torpedoed by the digital age find their way into a coveted internship at Google, where they must compete with a group of young, tech-savvy geniuses for a shot at employment.',
        date : 1370552400000,  //7 June 2013
        href : '#'
    },
    {
        id : 2,
        name : 'The Big Lebowski',
        poster: "new/films/2_the_big_lebowski(1998_comedy-crime).jpg",
        description: '"The Dude" Lebowski, mistaken for a millionaire Lebowski, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
        date : 889135200000, //6 march 1998
        href : '#'
    },
    {
        id : 3,
        name : 'Waiting',
        poster: "new/films/3_Waiting(2005_comedy).jpg",
        description: 'Young employees at Shenaniganz restaurant collectively stave off boredom and adulthood with their antics.',
        date : 1120683600000, // 2005
        href : '#'
    },
    {
        id : 4,
        name : 'Bad grandpa',
        poster: "new/films/4_bad_grandpa(2013_comedy).jpg",
        description: '86-year-old Irving Zisman takes a trip from Nebraska to North Carolina to take his 8 year-old grandson, Billy, back to his real father.',
        date : 1382648400000, //25 October 2013
        href : '#'
    },
    {
        id : 5,
        name : 'Anger management',
        poster: "new/films/5_anger_management(2003_comedy).jpg",
        description: 'Dave Buznik is a businessman who is wrongly sentenced to an anger-management program, where he meets an aggressive instructor.',
        date : 1050008400000, //11 April 2003
        href : '#'
    },
    {
        id : 6,
        name : 'Catch me if you can',
        poster: "new/films/6_catch_me_if_you_can(2002_biography-crime-drama).jpg",
        description: `The story of Frank Abagnale Jr., before his 19th birthday, successfully forged millions of dollars' worth of checks while posing as a Pan Am pilot, a doctor, and legal prosecutor as a seasoned and dedicated FBI agent pursues him.`,
        date : 1040767200000, //25 December 2002
        href : '#'
    },
    {
        id : 7,
        name : 'American sniper',
        poster: "new/films/7_american_sniper(2014_action-biography-drama).jpg",
        description: `Navy S.E.A.L. sniper Chris Kyle's pinpoint accuracy saves countless lives on the battlefield and turns him into a legend. Back home to his wife and kids after four tours of duty, however, Chris finds that it is the war he can't leave behind`,
        date : 1421359200000, //16 January 2015
        href : '#'
    },
    {
        id : 8,
        name : 'The intern',
        poster: "new/films/8_the_intern(2015_comedy-drama).jpg",
        description: `70-year-old widower Ben Whittaker has discovered that retirement isn't all it's cracked up to be. Seizing an opportunity to get back in the game, he becomes a senior intern at an online fashion site, founded and run by Jules Ostin.`,
        date : 1443128400000, //25 September 2015
        href : '#'
    },
    {
        id : 9,
        name : 'Into the wild',
        poster: "new/films/9_into_the_wild(2007_adventure-biography-drama).jpg",
        description: `Student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.`,
        date : 1192741200000, //19 October 2007
        href : '#'
    },
    {
        id : 10,
        name : '127 hours',
        poster: "new/films/10_127_hours(2010_adventure-biography-drama).jpg",
        description: `An adventurous mountain climber becomes trapped under a boulder while canyoneering alone near Moab, Utah and resorts to desperate measures in order to survive.`,
        date : 1296165600000, //28 January 2011
        href : '#'
    },
    {
        id : 11,
        name : 'The Secret Life of Pets',
        poster: "new/films/11_The Secret Life of Pets.jpg",
        description : 'For one bustling Manhattan apartment building, the real day starts after the folks on two legs leave for work and school. That’s when the pets of every stripe, fur, and feather begin their own nine-to-five routine: hanging out with each other, trading humiliating stories about their owners or auditioning adorable looks to get better snacks.',
        date : 1467925200000, //July 8th, 2016
        href : '#'
    },
    {
        id : 12,
        name : 'Independence Day: Resurgence',
        poster: "new/films/12_Independence Day_Resurgence.jpg",
        description : 'We always knew they were coming back. After INDEPENDENCE DAY redefined the event movie genre, the next epic chapter delivers global spectacle on an unimaginable scale. Using recovered alien technology, the nations of Earth have collaborated on an immense defense program to protect the planet.',
        date : 1466715600000, //June 24th, 2016
        href : '#'
    },
    {
        id : 13,
        name : 'Green Room',
        poster: "new/films/13_Green_Room.jpg",
        description : 'In the crime thriller Green Room, a young punk rock band find themselves trapped in a secluded venue after stumbling upon a horrific act of violence, fighting for their lives against a gang of white power skinheads intent on eliminating all witnesses.',
        date : 1460667600000, //April 15th, 2016
        href : '#'
    },
    {
        id : 14,
        name : 'Kingsman: The Golden Circle',
        poster: "new/films/14_Kingsman_The-Golden-Circle.jpg",
        description : `When their headquarters are destroyed and the world is held hostage, the Kingsman's journey leads them to the discovery of an allied spy organization in the US. These two elite secret organizations must band together to defeat a common enemy.`,
        date : 1506027600000, //22 September 2017
        href : '#'
    },
    {
        id : 15,
        name : 'It',
        poster: "new/films/15_It.jpg",
        description : 'A group of bullied kids band together when a shapeshifting demon, taking the appearance of a clown, begins hunting children.',
        date : 1504818000000, // 8 September 2017
        href : '#'
    },
    {
        id : 16,
        name : 'Guardians of the Galaxy: Vol. 2',
        poster: "new/films/16_Guardians_of_the_Galaxy_Vol-2.jpg",
        description : `The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.`,
        date : 1493931600000, // 5 May 2017
        href : '#'
    },
    {
        id : 17,
        name : 'Deadpool 2',
        poster: "new/films/17_Deadpool-2.jpg",
        description : 'Deadpool 2 is an upcoming American superhero film based on the Marvel Comics character Deadpool, distributed by 20th Century Fox. It is intended to be the twelfth installment in the X-Men film series, and a sequel to the 2016 film Deadpool.',
        date : 1527800400000, // 1 June 2018
        href : '#'
    },
    {
        id : 18,
        name : 'Jurassic World: Fallen Kingdom',
        poster: "new/films/18_Jurassic_World-Fallen_Kingdom.jpg",
        description : 'With all of the wonder, adventure and thrills synonymous with one of the most popular and successful franchises in cinema history, this all-new motion-picture event sees the return of favorite characters and dinosaurs along with new breeds more awe-inspiring and terrifying than ever before. ',
        date : 1529614800000, //22 June 2018
        href : '#'
    },
    {
        id : 19,
        name : 'Tomb Raider',
        poster: "http://www.gstatic.com/tv/thumb/movieposters/13061659/p13061659_p_v8_aa.jpg",
        description : `Lara Croft is the fiercely independent daughter of an eccentric adventurer who vanished years earlier. Hoping to solve the mystery of her father's disappearance, Croft embarks on a perilous journey to his last-known destination -- a fabled tomb on a mythical island that might be somewhere off the coast of Japan.`,
        date : 1521151200000, // 16 March 2018
        href : '#'
    }
];


/* // функція для переведення дати в секунди
store.forEach( (e, i) => {
    console.log(i, new Date(e.date).getTime());
}) */