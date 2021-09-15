
const menus = [
     {
        key: 0,
        title: "My Works",
        link: "/projects"
    },
    {
        key: 1,
        title: "Resume",
        link: "/resume"
    },
     {
        key: 2,
        title: "Blogs",
        link: "/blogs"
    },
     {
        key: 3,
        title: "About Me",
        link: "/aboutMe"
    },
    {
        key: 4,
        title: "Contact Me",
        link: "/contactMe"
    }
]

const markets = {
    title: 'FINSERV MARKETS APP',
    description: 'The app provides users a central marketplace to buy physical products as well as soft products like insurances, loan, digital Gold, etc. It also allows users to transfer payments between contacts, make payments to businesses, initiate money requests from others and more. ',
    client: 'Bajaj Finserv Direct Limited',
    language: 'English',
    domain: 'Finance',
    appStoreLink: 'https://apps.apple.com/in/app/finserv-markets/id1482914241#?platform=iphone',
    techStacks: ['iOS', 'Swift 5.0'],
    integratedFeatures: ['3DTouch', 'Siri Shortcuts', 'HealthKit', 'Branch SDK', 'Fisdom SDK', 'Adobe Analytics', 'Dark Mode Support', 'Neumorphic Design(for Login Module)']
}


const pey = {
    title: 'PEY MOBILE APP',
    description: 'The wallet allows users to transfer payments between contacts, make payments to businesses, initiate money requests from others and more. Parents can use it to invite their children to use their wallet and set restrictions on children\'s transactions.',
    client: 'Hold Me Ltd (Israel)',
    language: 'Hebrew',
    domain: 'Finance',
    appStoreLink: 'https://apps.apple.com/il/app/pey-wallet/id1473103150',
    techStacks: ['iOS', 'Swift 4.2'],
    integratedFeatures: ['RTL Localisation', 'Custom Keyboard']
}

const orgamax = {
    title: 'ORGAMAX',
    description: 'A productivity application that helps users to create workflows and assign them to their teams. Users can track the task progress using this application.',
    client: 'Deltra Business Solutions',
    language: 'German',
    domain: 'Business Productivity/Finance',
    appStoreLink: 'https://itunes.apple.com/us/app/rechnung-in-1-minute-orgamax/id1434483537?ls=1&mt=8',
    techStacks: ['iOS', 'Swift 4.2', 'Objective-C'],
    integratedFeatures: ['Firebase Cloud Messaging', 'In-app Purchase', 'Dark Mode Support']
}

const hire = {
    placeholder: 'Write something to me..',
    value: 'Hi Shubham,\n\n I would like to hear more about your works. Lets meet on this weekend to discuss ...'
}

const rawTitles = {
    projectPageTitle: 'Have a look at my'
}

const favouriteBlogs = [
    {
        title: "Essential Developer by Caio and Mike",
        description: "",
        link: "https://essentialdeveloper.com"
    },
    {
        title: "Swift by Sundell",
        description: "",
        link: "https://www.swiftbysundell.com/"
    },
    {
        title: "Hacking With Swift",
        description: "",
        link: "https://www.hackingwithswift.com/"
    },
    {
        title: "Cocoacasts by Bart Jacobs",
        description: "",
        link: "https://cocoacasts.com/"
    },
    {
        title: "raywenderlich.com",
        description: "",
        link: "https://www.raywenderlich.com/"
    }
]


const techBooks = [
    {
        title: "Data Structures and Algorithms using Swift",
        description: "",
        link: "",
        writer: "raywenderlich.com"
    },

    {
        title: "UML Distilled",
        description: "",
        link: "",
        writer: "Martin Fowler"
    }
]

const favouriteBooks = [
    {
        title: "Getting Things Done",
        description: "",
        link: "",
        writer: "David Allen"
    },
    {
        title: "How to win friends",
        description: "",
        link: "https://www.amazon.in/How-Win-Friends-Influence-People/dp/0091906350",
        writer: "Dale Carnegie"
    },
    {
        title: "The subtle art of not giving a f*ck",
        description: "",
        link: "",
        writer: "Mark Manson"
    },
    {
        title: "Meditation and its methods",
        description: "",
        link: "",
        writer: "Swami Vivekanand"
    }
]

export default {
    markets,
    pey,
    orgamax,
    hire,
    menus,
    rawTitles,
    favouriteBlogs,
    favouriteBooks,
    techBooks
}