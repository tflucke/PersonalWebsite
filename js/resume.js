const resume = {
    separator: " ▪ ",
    
    fname: "Thomas",
    lname: "Flucke",
    name: function() {
        return this.fname + " " + this.lname
    },
    contact: {
        phone: "(314) 517 - 6572",
        url: "https://www.tflucke.name",
        git: "https://git.tflucke.name/tflucke",
        email: "tflucke@tflucke.name",
        address: [
            "415 W. Jefferson Ave.",
            "Unit 401",
            "Kirkwood, MO 63122"
        ],
        linkedin: "https://www.linkedin.com/in/tomflucke/",
        github: "https://github.com/tflucke"
    },
    education: [
        {
            longName: "California Polytechnic University, San Luis Obispo",
            name: "Cal Poly University, San Luis Obispo",
            longLevel: "Bachelors + Masters of Science",
            level: "BS + MS",
            subject: "Computer Science",
            concentration: "Security",
            gpa: 3.717,
            date: {
                start: "August 2014",
                end: "December 2019"
            },
            honors: {
                "Dean's List": 8,
                "President's List": 1
            },
            interest: 0.5
        }
    ],
    jobs: [
        {
            company: "Boeing",
            title: "Software Engineer Level 4",
            url: "https://www.boeing.com/",
            date: {
                start: "February 2022",
                end: "Present"
            },
            description: [
                "Ported large code base to be compatible with newest Red Hat Kernel and GNU compiler",
                "Inspected and renewed unmaintained regression tests"
            ],
            interest: 1.1
        },
        {
            company: "Green Hills Software",
            title: "Software Engineer",
            url: "https://dawnproject.com/",
            date: {
                start: "April 2020",
                end: "February 2022"
            },
            description: [
                "Augmented ARM/ARM64 C compiler to produce more secure embedded software",
                "Augmented ARM/ARM64 simulator with features matching hardware specification",
                "Crafted tests to verify compiler, assembler, and simulator correctness and detect bugs",
                "Researched security protocols and developed requirement documents"
            ],
            interest: 1.3
        },
        {
            company: "Microcon Inc.",
            title: "Programmer",
            url: "https://microcon.com/",
            date: {
                start: "May 2014",
                end: "April 2020"
            },
            description: [
                "Created an API translation interface using object-orient design principles",
                "Set up source control server and instructed current version control techniques",
                "Upgraded legacy code base to improve web page usability using jQuery, VBS, and ASP"
            ],
            interest: 1.2
        },
        {
            company: "Cal Poly San Luis Obispo",
            url: "https://csc.calpoly.edu/",
            longTitle: "I.S.A. (307, 309, 357, 430)",
            title: "I.S.A. (307-9, 357, 430)",
            date: {
                start: "August 2017",
                end: "December 2019"
            },
            description: [
                "Developed automated grading script to detect errors and assign grades with Junit tests",
                "Explained C and Unix systems concepts to students and assisted with debugging",
                "Graded exams and evaluated solutions for degenerate behavior or successful exploitation"
            ],
            interest: 1.1
        },
        {
            company: "Green Hills Software",
            title: "Intern",
            date: {
                start: "June 2019",
                end: "August 2019"
            },
            description: [
                "Created applications to run in a security critical IoT device",
                "Designed system to record and reproduce problematic behavior"
            ],
            interest: 1.2
        },
        {
            company: "Green Hills Software",
            title: "Intern",
            date: {
                start: "June 2018",
                end: "August 2018"
            },
            description: [
                "Found and patched bugs in microcontroller management management systems",
                "Documented and analyzed the debug process to formulate a debugging curriculum"
            ],
            interest: 1.08
        },
        {
            company: "Qnet Security",
            url: "https://qnetsecurity.com/",
            title: "Intern",
            date: {
                start: "June 2017",
                end: "August 2017"
            },
            description: [
                "Developed network sniffer to capture and display cleartext/encrypted packets",
                "Designed and wrote testing framework for system testing hardware network devices"
            ],
            interest: 1.15
        },
        {
            company: "Mentor eData",
            title: "Developer & GIS Specialist",
            date: {
                start: "November 2014",
                end: "January 2017"
            },
            description: [
                "Optimized and augmented PostgreSQL GIS database, improving run time by 1800%",
                "Maintained and updated existing code bases that were in active use",
                "Used business analytics tools to aid the development and optimization of algorithms"
            ],
            interest: 1.2
        },
        {
            company: "Livermore Labs",
            url: "https://www.llnl.gov",
            title: "Computational Intern",
            date: {
                start: "April 2016",
                end: "August 2016"
            },
            description: [
                "Developed Angular front-end and Java Play API back-ends to manage financial data",
                "Use Java Hibernate and MVC design to interface with an Oracle SQL database",
                "Discussed design and interfaces with non-technical users in an agile office"
            ],
            interest: 1.2
        }
    ],
    skills: {
        languages: [
            {
                name: "C",
                icon: "devicon-c-plain"
            },
            {
                name: "Java",
                icon: "devicon-java-plain"
            },
            {
                name: "Python",
                icon: "devicon-python-plain"
            },
            //"Go",
            //"Rust",
            {
                name: "C#",
                icon: "devicon-csharp-plain"
            },
            {
                name: "Shell",
                icon: "devicon-bash-plain"
            },
            //"Regular Expressions",
            {
                name: "PostrgeSQL",
                icon: "devicon-postgresql-plain"
            },
            //"MySql",
            {
                name: "MongoDB",
                icon: "devicon-mongodb-plain"
            },
            {
                name: "CSS 2/3",
                icon: "devicon-css3-plain"
            },
            {
                name: "Javascript",
                icon: "devicon-js-plain"
            },
            {
                name: "ASP.NET",
                icon: "devicon-dot-net-plain"
            },
            {
                name: "PHP",
                icon: "devicon-php-plain"
            },
            {
                name: "Classic ASP"
            },
            //"Racket",
            {
                name: "eLisp"
            },
            {
                name: "Scala",
                icon: "devicon-scala-plain"
            }
        ],
        frameworks: [,
            {
                name: "ScalaPLAY!"
            },
            {
                name: "jQuery",
                icon: "devicon-jquery-plain"
            },
            {
                name: "Angular 1.7",
                icon: "devicon-angularjs-plain"
            },
            //"Racket",
            {
                name: "JavaPLAY!"
            },
            {
                name: "NodeJS",
                icon: "fab fa-node-js"
            },
            {
                name: "Bootstrap",
                icon: "devicon-bootstrap-plain"
            },
            {
                name: "JUnit"
            },
            {
                name: "Java Hibernate"
            }
        ],
        editors: [
            {
                name: "Emacs"
            },
            {
                name: "Vim",
                icon: "devicon-vim-plain"
            },
            {
                name: "Intellij",
                icon: "devicon-intellij-plain"
            },
            {
                name: "Eclipse"
            },
            //"Vissual Studio 2010",
            {
                name: "Notepad++"
            }
        ],
        tools: [
            {
                name: "MULTI"
            },
            {
                name: "gbuild"
            },
            {
                name: "Subversion",
                icon: "devicon-subversion-original"
            },
            {
                name: "Git",
                icon: "devicon-git-original"
            },
            {
                name: "Metasploit"
            },
            {
                name: "Makefiles"
            },
            {
                name: "OpenVPN"
            },
            {
                name: "SSH",
                icon: "devicon-ssh-original"
            },
            {
                name: "valgrind"
            },
            {
                name: "JIRA",
                icon: "devicon-jira-plain"
            },
            {
                name: "SonarQube"
            },
            {
                name: "Microsoft Office"
            },
            {
                name: "Inkscape",
                icon: "devicon-inkscape-plain"
            }
        ],
        servers: [
            {
                name: "Apache2",
                icon: "devicon-apache-plain"
            },
            {
                name: "Tomcat",
                icon: "devicon-tomcat-plain"
            }
        ],
        "O.S.": [
            {
                name: "INTEGRITY"
            },
            {
                name: "Ubuntu",
                icon: "devicon-ubuntu-plain"
            },
            {
                name: "Debian",
                icon: "devicon-debian-plain"
            },
            {
                name: "Arch Linux"
            },
            {
                name: "Slackware"
            }
        ]
    },
    projects: [
        {
            name: "Budget App",
            //url: "https://budget.tflucke.name",
            paragraph: [
                "I pay very close attention to my finances and make detailed plans for my budget.  Despite having a budget app to keep track of my expenses, I found myself supplementing it with many spreadsheets and a few custom utility programs.  I eventually realized that I would be better off writing my own budget app that combined all of these features together; and so I did.",
                "I carefully designed a model to be a coherent digital representation of how I thought about my money and finances to make sure that the data in the application exactly matched how I think about my income and expenses without over-complicating the algorithms which have to manipulate the data.",
                "Although this is still a work-in-progress, it already out preforms my previous application with quality-of-life features that I use almost daily like stateless budget analysis and event duplication."
            ],
            description: [
                "Architected a budget model that exactly reflected my needs with consideration for algorithm complexity",
                "Created an intuitive Scala.js web interface using Functional Reactive Programming",
                "Built a robust RESTful API to abstract SQL database implementation"
            ],
            interest: 0.5
        },
        {
            name: "T-Snapshot",
            url: "https://github.com/tflucke/tsnapshot",
            paragraph: [
                "Disappointed that my backup program (rsnapshot) lacked certain capabilities that I would want for some of my systems, I decided to create my own implementation and familiarize myself with the latest systems-programming crazy: Rust.  Tsnapshot is another backup program that allows for the creation of regular backups using a flexible configuration file, including the option to compress the backups, balance space and redundancy, and determine all of this using a recursive config file that allows for per-directory configuration."
            ],
            description: [
                "Created and tested a Rust application to create space-efficient backups on schedule",
                "Designed recursively defined, human-readable configuration file"
            ],
            interest: 0.4
        },
        {
            name: "Thesis: Identification of Users via SSH Timing Attack",
            url: "https://digitalcommons.calpoly.edu/theses/2208/",
            paragraph: [
                "I recorded the SSH sessions of student volunteers using virtual machines and tested several machine learning algorithms to see if I could identify the traffic based solely on the timing of the keystrokes."
            ],
            description: [
                "Developed virtual machine environment to observe participant network activities",
                "Designed machine learning algorithms to identify users using encrypted ssh activity"
            ],
            interest: 0.4
        },
        {
            name: "Vietnamese Listening Practice",
            url: "tone.tflucke.name",
            paragraph: [
                "While I was practicing Vietnamese for a year, I noticed that I wasn't picking up a particular skill: hearing inflections.  Since Vietnamese is a tonal language, the inflections change the meanings of words, but often the words were different enough that I could treat them as homonyms (much the same way I would never confuse \"meet\" with \"meat\").  This got me through lessens, but I felt frustrated that I wasn't learning this skill.  So I created this game which removes all contextual clues for what the word is, forcing me to practice hearing the inflection.",
            ],
            description: [
                "Designed a game to isolate and test for a particular skill",
                "Created a scala framework to convert Scala.js RPC calls into Scala PLAY! REST APIs",
                "Designed unit tests to verify web interface basic functionality using Selenium"
            ],
            interest: 0.1
        },
        {
            name: "Neuroprosthetics Research Paper",
            description: [
                "Wrote a 35 page report on technologies utilized in a neuroprosthetic",
                "Collaborated with a group of five from four disciplines",
                "Researched learning algorithms and electrode’s long-term impact on brain tissue",
                "Scripted 30 minute presentation on findings in a informative and engaging manner"
            ],
            interest: 0.1
        },
        {	
            name: "Artificial Neural Network Animation",
            description: [
                "Created an animation using Photoshop and Pulse Audio to demonstrate basics of an ANN",
                "Communicated complex computer science jargon to a non-engineering audience"
            ],
            interest: 0.07
        },
        {
            name: "Arduino Robot",
            description: [
                "Built and tested Arduino robot to follow a line with reflection sensors and PWM motor control",
                "Developed alternate program to control robot with bluetooth signals or testing purposes",
                "Assembled circuit to run ATMega-328P microprocessor independently of third-party boards"
            ],
            interest: 0.007
        },
        {
            name: "Simple Artificial Neural Network",
            description: [
                "Researched basics of artificial neural networks",
                "Implemented a one-node network in C++ that “learned” the position of a line"
            ],
            interest: 0.05
        },
        {
            name: "Dominion Card Randomizer",
            url: "https://dominion.tflucke.name",
            paragraph: [
                "When I was in high school, my family and I loved Dominion.",
                "We ended up buying all of the expansions and playing several times a week.",
                "Creating a good random setup with this many cards was difficult as other randomizers didn't update frequently.",
                "So I ended up writing my own.",
                "And while I did, I added nice utility features like building the Black Market deck.",
                "I haven't been able to play with them as much since college so most of the newest expansions are not included, but if anyone wants me to add them send me an email.",
            ],
            description: [
                "Wrote a web site with PHP to choose a set of cards for unique game set-ups semi-randomly",
                "Developed a system of inputs which allows a user to choose weights/restrictions",
                "Maintains personal server to host it as well as other test projects"
            ],
            interest: 0.05
        },
        {
            name: "Extreme Tic-Tac-Toe Game",
            description: [
                "Developed a recursive implementation of a Tic-Tac-Toe game in Java",
                "Designed a generic Java interface to allow players to play remotely or with an AI"
            ],
            interest: 0.03
        },
        {
            name: "Functional Language Compiler",
            description: [
                "Wrote a compiler for a hypothetical functional language using Scala",
                "Included lambda lifting, inlining, dead-code removal and precomuting optimizations"
            ],
            interest: 0.1
        },
        {
            name: "Personal Server",
            url: "https://www.tflucke.name",
            paragraph: [
                "This web site you're looking at.",
            ],
            description: [
                "Set up cloud storage, VPN, RSS feed, and recipie book",
                "Managed security programs, including SSH and iptables firewall",
                "Protected against a distributed dictionary attack"
            ],
            interest: 0.2
        },
        {
            name: "Personal Cloud",
            url: "https://cloud.tflucke.name",
            paragraph: [
                "My own personal cloud storage which I use to sync files across all my devices.",
                "Brought to you by <a href=\"https://nextcloud.com/\">nextcloud</a>."
            ],
            interest: 0.1
        },
        {
            name: "Personal RSS Client",
            url: "https://rss.tflucke.name",
            paragraph: [
                "My web based rss client which I use to keep up with my favorite content creators anywhere I go.",
                "Brought to you by <a href=\"https://community.tt-rss.org/\">TT-RSS</a>."
            ],
            interest: 0.1
        },
        {
            name: "Personal Git Server",
            url: "https://git.tflucke.name",
            paragraph: [
                "My own git server, mostly so that I can have private remote repositories without having to pay for a service.",
                "Brought to you by <a href=\"https://gogs.io\">Gogs</a>."
            ],
            interest: 0.1
        },
        {
            name: "Metasploit Attacks",
            description: [
                "Attacked a system using metasploit scripts in a contained environment",
                "Gained root access through a poorly secured PostgreSQL database"
            ],
            interest: 0.2
        }
    ],
    clubs: [
        {
            name: "For the Inspiration of Science and Technology/F.I.R.S.T.",
            shortname: "FIRST Robotics",
            url: "https://www.firstinspires.org/robotics/frc",
            date: {
                start: "January 2012",
                end: "May 2014"
            },
            paragraph: [
                "In high school, I lead the software subteam of my school's FRC team.",
                "It was the highlight of my high school experience and I love to contribute to FIRST in any way that I can."
            ],
            description: [
                "Headed the software sub-team coordinating with other team leaders and managing priorities",
                "Developed a vision processing algorithm to identify and aim for targets",
                "Assembled Hardware-Software Integration Test System to test new code safely",
                "Trained new recruits with minimal technical experience in electronic and software development"
            ],
            interest: 0.15
        },
        {
            name: "Karate",
            shortname: "Karate",
            url: "http://www.shorinryu-karate.com/",
            date: {
                start: "August 2014",
                end: "Present"
            },
            paragraph: [
                "Currently a shodan in matsubayashi shorin ryu, I started practicing in college to get in shape but it quickly evolved into something more.",
                "Unfortunately, being away from my sensei's dojo means I do most of my practicing on my own."
            ],
            description: [
                "Organized important recruiting events managing the efforts of 10+ people",
                "Practiced extended, intense focus working on incremental improvements for long periods of time"
            ],
            interest: 0.15
        },
        {
            name: "Tabletop Games",
            shortname: "Board Games",
            date: {
                start: "August 2010",
                end: "Present"
            },
            paragraph: [
                "In middle school my robotics teacher introduced me to a wonderful game called Dominion.",
                "I remember loving it so much I bought it on amazon soon after and pestered anyone I could find to play with me.",
                "After much persistence I eventually convinced my dad to try it out, soon to be followed by us sharing several games each day for the rest of the summer.",
                "After that, I started collecting more games.",
                "Tabletop gaming is probably my biggest passion and I rarely turn down a chance to break out of favorites."
            ],
            description: [
                "Competed in social challenges of strategy and critical thinking",
                "Worked in cooperative groups to achieve common goal"
            ],
            interest: 0.15
        },
        {
            name: "Lingistics",
            shortname: "Lingistics",
            date: {
                start: "August 2010",
                end: "Present"
            },
            paragraph: [
                "I've long had a bit of an interest in linguistics and language structure.",
                "It probably started back in high school when I took Latin, mostly because I felt I needed a second language for college and I like Greco-Roman mythology.",
                "I eventually ended up practicing (and becoming vaguely conversation) with Vietnamese and now put more of a focus on Spanish.",
                "I'm not great at any of these languages since I don't practice very often.  I just find the structure interesting."
            ],
            interest: 0.15
        }
    ]
}
