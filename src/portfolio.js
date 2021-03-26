/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Moe Richert",
  description:
    "Cartographer - Ecologist - Educator - Storyteller",
  og: {
    title: "Moe Richert's Portfolio",
    type: "website",
    url: "https://moerichert.github.io/portfolio",
  },
};

//Home Page
const greeting = {
  title: "Moe Richert",
  logo_name: "MRP.svg",
  subTitle:
    "Developer - Cartographer - Ecologist - Educator - Storyteller",
  resumeLink:
    "https://moerichert.github.io/",
  portfolio_repository: "https://moerichert.github.io/portfolio",
};

const aboutme = {
    line1:
      "My skills and passion are in design and development to enhance communication.",
    line2:
      "I specialize in learning information rapidly and in-depth, then distilling and interpreting that information for a wide variety of audiences.  I excel at conveying complex topics in easy to understand and palatable formats."
}

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/moerichert",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "Gmail",
    link: "mailto:richertmoe@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836", 
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/magpie.mischief/",
    fontAwesomeIcon: "fa-instagram", 
    backgroundColor: "#E4405F", 
  },
];


const skills = {
  data: [
    {
      title: "Website Development",
      fileName: "MoeDevImg",
      skills: [
        "⚈ Building responsive websites using React or HTML and jQuery",
        "⚈ Mobile-first development",
        "⚈ Creating application backend in Java or Ruby",
        "⚈ Database structure and management",
      ],
      softwareSkills: [
          
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon:sql",
          style: {
            backgroundColor: "#000000",
            color: "#FFFFFF",
          },
        },
        {
          skillName: "jquery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Data Management and Cartography",
      fileName: "CartImg",
      skills: [
        "⚈ GIS database structure and management",
        "⚈ Use of Python and R for statistical analysis and data manipulation",
        "⚈ Quantitative modelling and geospatial statistics",
        "⚈ Map and informative display design",  
      ],
      softwareSkills: [
        {
          skillName: "leaflet",
          fontAwesomeClassname: "file-icons:leaflet",
          style: {
              color: "#3cb043",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ESRI",
          fontAwesomeClassname: "bi:globe",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "QGIS",
          fontAwesomeClassname: "simple-icons:qgis",
          style: {
            color: "#3cb043",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Design",
      fileName: "DesignImg",
      skills: [
        "⚈ Designing attractive and intuitive user interfaces for mobile and web applications",
        "⚈ Designing logos and graphics from scratch",
        "⚈ Illustration",
        "⚈ Video editing and compilation",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "GIMP",
          fontAwesomeClassname: "simple-icons:gimp",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Premiere Pro",
          fontAwesomeClassname: "simple-icons:adobepremierepro",
          style: {
            color: "#734498",
          },
        },
        
      ],
    },
    {
      title: "Programming and Education",
      fileName: "MoeAdventureImg",
      skills: [
        "⚈ Planning, developing, and coordinating comprehensive educational programming on a wide variety of subjects",
        "⚈ Certified Interpretive Guide through the National Association of Interpretation",
        "⚈ Develop and implement strategies to reach underserved communities",
        "⚈ Social media and virtual outreach",
        "⚈ Developing and coordinating an immersive nature summer camp for children",
        "⚈ Training and managing staff",
      ],
      softwareSkills: [
        {
          skillName: "NAI",
          fontAwesomeClassname: "emojione-monotone:letter-n",
          style: {
            color: "#FF7C00",
          },
        },        
      ],
    },
    {
      title: "Wildlife Ecology and Management",
      fileName: "CatImg",
      skills: [
        "⚈ Handling of birds of prey",
        "⚈ Bird identification by sight and sound",
        "⚈ Working with live animals including reptiles, amphibians, fish, insects, mammals, and birds",
        "⚈ Analyzing animal tracks and sign",
        "⚈ Botanical surveys and plant identification",
        "⚈ Control and eradication of exotic and invasive species",
        "⚈ Construction and use of a variety of live animal traps",
      ],
      softwareSkills: [
        {
          skillName: "iNaturalst",
          fontAwesomeClassname: "openmoji:inaturalist",
          style: {
            color: "#FF7C00",
          },
        },  
        {
          skillName: "Seek",
          fontAwesomeClassname: "fa-solid:leaf",
          style: {
            color: "#028a0f",
          },
        },
        {
          skillName: "eBird",
          fontAwesomeClassname: "ls:e",
          style: {
            color: "#3cb043",
          },
        }, 
      ],
    },
      {
      title: "Improv Storytelling and Game Design",
      fileName: "RatImg",
      skills: [
        "⚈ Developing and adjusting storytelling games for a variety of audiences",
        "⚈ Leading virtual and in-person games",
        "⚈ Taking existing games and modifying them to make them educational experiences",
        "⚈ Developing new games to suit organization goals",
        "⚈ Cartography and illustration",
      ],
      softwareSkills: [
        {
          skillName: "Zoom",
          fontAwesomeClassname: "grommet-icons:zoom",
          style: {
            color: "#FF7C00",
          },
        },  
        {
          skillName: "Discord",
          fontAwesomeClassname: "ph:discord-logo-fill",
          style: {
            color: "#464646",
          },
        },
        {
          skillName: "D&D",
          fontAwesomeClassname: "fa-brands:d-and-d",
          style: {
            color: "#3d3d3d",
          },
        }, 
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "University of Wisconsin-Madison",
      subtitle: "Masters in Geographic Information Systems and Web Map Programming",
      logo_path: "wisc",
      alt_name: "WISC Madison",
      duration: "2019 - 2021",
      descriptions: [
        "⚈ This degree focused on development, mobile app creation, and web map scripting.",
        "⚈ I studied and applied graphic design concepts to web and mobile programming",
        "⚈ I also studied spatial database development and spatial analysis",
        
      ],
      website_link: "https://geography.wisc.edu/gis/",
    },
    {
      title: "Auburn University",
      subtitle: "B.S. in Wildlife Ecology and Management",
      logo_path: "auburn",
      alt_name: "Auburn University",
      duration: "2011 - 2016",
      descriptions: [
        "⚈ I studied how to conduct research using a variety of animal capture, handling, and monitoring techniques and how to analyze and interpret the information. ",
        "⚈ While attending Auburn, I worked extensively at the university as an instructor and research lead",
        "⚈ I instructed students ages 19 to 35 in animal identification, habitat measurements, animal capture methods, monitoring techniques, data analysis, and scientific paper writing.",
        "⚈ While working as a lead research assistant, I developed and implemented protocols for monitoring a variety of different species as well as instructed and supervised a team of technicians in carrying out those protocols.",
        "⚈  In addition, I presented protocols, budgets, current research, and proposed research to large assemblies as well as small meetings. "
      ],
      website_link: "https://sfws.auburn.edu/",
    },
  ],
};


//videos
const videos = {
    data:[
        {
            title: "Project Pitch - Where Does the Water Go?",
            link: "https://www.youtube.com/embed/JEYg3wGnBoQ",
            Id: "JEYg3wGnBoQ",
        },
        {
            title: "BREC - Where Does the Water Go?",
            link: "https://www.youtube.com/embed/urQG5jvuXxc",
            Id: "urQG5jvuXxc",
        },
        {
            title: "BREC - What is a Watershed?",
            link: "https://www.youtube.com/embed/-CD2S5T7oHY",
            Id: "-CD2S5T7oHY",
        },
    ]
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteering",
  description:
    "Jack of all trades, master of quite a few of them.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      id: "0",
      experiences: [
        {
          title: "Conservation Specialist",
          company: "BREC - Baton Rouge Parks and Recreation",
          company_url: "https://www.brec.org/",
          logo_path: "BREC",
          duration: "Sept 2017 - PRESENT",
          location: "Louisiana",
          description:
            "I am responsible for planning, developing, and coordinating comprehensive educational programming (programs, events, field trips, etc) that foster an appreciation, understanding, and sustainable use of the natural environment.  This includes developing strategies to ensure access for underserved communities as well as developing innovative ways to reach the community through new mediums.",
          color: "#008000",
        },
        {
          title: "Botany Technician",
          company: "U.S. Forest Service",
          company_url: "https://www.fs.usda.gov/",
          logo_path: "usfs",
          duration: "June 2017 - Sept 2017",
          location: "Camino, California",
          description:
            "Conducted field studies of botanical species and their habitats to determine population characteristics, environmental conditions, and factors affecting the vigor of species and their habitat.",
          color: "#0000ff",
        },
        {
          title: "Naturalist",
          company: "Great Basin Outdoor School",
          company_url: "https://www.greatbasin-os.org/",
          logo_path: "GBOS",
          duration: "March 2017 – June 2017",
          location: "Glenbrook, NV",
          description:
            "Developed and lead activity oriented, interdisciplinary curriculum in science and environmental field study in an outdoor setting",
          color: "#4b0082",
        },
        {
          title: "Children’s Ski Instructor",
          company: "Squaw Valley",
          company_url: "https://www.squawalpine.com/",
          logo_path: "SV",
          duration: "Nov 2016 – Feb 2017",
          location: "Olympic Valley, CA",
          description:
            "Taught children ages 3-13 how to ski",
          color: "#ff0000",
        },
        {
          title: "Naturalist / Curriculum Developer",
          company: "YMCA Camp Colman",
          company_url: "https://www.seattleymca.org/programs/camps/camp-colman",
          logo_path: "colman",
          duration: "August 2016 – Nov 2016",
          location: "Longbranch, WA",
          description:
            "Utilized extensive knowledge of different habitat types and ecological principles to develop and implement interpretive materials and programs",
          color: "#ffa500",
        },
          {
          title: "Wildlife Biologist",
          company: "Trutech",
          company_url: "https://www.trutechinc.com/",
          logo_path: "tt",
          duration: "April 2016 – August 2016",
          location: "New Orleans, LA",
          description:
            "Utilized strong interpersonal and communications skills to work with agitated and stressed customers and resolve their nuisance wildlife problems",
          color: "#ffff00",
        },
          {
          title: "Graduate Research Assistant",
          company: "Auburn University",
          company_url: "https://sfws.auburn.edu/",
          logo_path: "auburn",
          duration: "Jan 2015 – April 2016",
          location: "Oakmulgee NF, AL",
          description:
            "Developed methods and protocols for collection and analysis of data, conducted surveys of wild turkeys, and assimilated data and research into presentations and written reports.",
          color: "#008000",
        },
          {
          title: "Undergraduate Research Assistant",
          company: "Auburn University",
          company_url: "https://sfws.auburn.edu/",
          logo_path: "auburn",
          duration: "Jan 2013 – Dec 2014",
          location: "Auburn, AL",
          description:
            "Lead a project studying the effects of an altered predation threat on the mortality of eastern cottontail rabbits",
          color: "#0000ff",
        },
          {
          title: "Undergraduate Teacher's Assistant",
          company: "Auburn University",
          company_url: "https://sfws.auburn.edu/",
          logo_path: "auburn",
          duration: "May 2014 – July 2014",
          location: "Conecuh, AL",
          description:
            "I assisted students with data analysis using Netica, R, and Bayesian statistics.  I also taught capture, handling, and monitoring techniques for mammals, herpetofauna, and birds as well as wildlife and land management practices",
          color: "#4b0082",
        },
          {
          title: "Music Teacher",
          company: "Self-Employed",
          company_url: "https://moerichert.gitub.io/portfolio",
          logo_path: "MP",
          duration: "May 2008 – August 2011",
          location: "Huntsville, AL",
          description:
            "Instructed students in piano, saxophone, clarinet, and guitar",
          color: "#ff0000",
        },
      ],
    },
    {
      title: "Volunteering",
      id: "1",
      experiences: [
        {
          title: "Raptor Rehabilitator",
          company: "Southeastern Raptor Rehabilitation Center",
          company_url: "https://www.vetmed.auburn.edu/raptor/",
          logo_path: "SERC",
          duration: "Jan 2012 – May 2014",
          location: "Auburn, AL",
          description:
            "Assisted in raptor care and feeding, including the handling and medicating of sick and injured raptors",
          color: "#4b0082",
        },
        {
          title: "Game Master",
          company: "Self-Volunteered",
          company_url: "https://moerichert.gitub.io/portfolio",
          logo_path: "d20",
          duration: "May 2020 – Present",
          location: "Virtual",
          description:
            "I lead improv storytelling games for groups online",
          color: "#0000ff",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects are catered towards the interpretation of complex subjects for various audiences and take advantage of a wide variety of technology and expertise.",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "moeicon.png",
    description:
      "Feel free to contact me with any questions, requests, or potential commission work.",
  },
};

export {
  settings,
  seo,
  greeting,
  aboutme,
  socialMediaLinks,
  skills,
  videos,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
