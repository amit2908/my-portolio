
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

const payzapp = {
    title: 'Payzapp 2.0',
    description: 'The new PayZapp gives you the choice to pay via UPI, Debit / Credit Cards and PayZapp Prepaid Wallet. You can Scan any QR or Swipe to Pay. With PayZapp you can Send/ Transfer Money to anyone, anywhere, any mobile number irrespective of the app they use. You can make recharges and bill payments across several categories like mobile (prepaid/ postpaid), DTH, Electricity etc. You can even shop in-app for travel (flight/hotel) or buy 200+ brand vouchers for online/offline shopping. Earn PayZapp Cashpoints and rewards on every transaction. Powered by HDFC Bank, PayZapp is 100% secure. Now with PayZapp, Pay your Way!',
    client: 'Zeta Suite(AKA Directi)',
    language: 'English',
    domain: 'Payments and Security',
    appStoreLink: 'https://apps.apple.com/in/app/payzapp-upi-payments/id6443480917',
    techStacks: ['iOS', 'Swift 5.0','React Native', 'Objective-C', 'SwiftUI', 'Combine'],
    integratedFeatures: ['Google Sign', 'Polling Mechanism', 'Moengage Analytics', 'Firebase Crashlytics', 'SDK Integration', 'CI CD Pipeline Integration']
}

const markets = {
    title: 'FINSERV MARKETS APP',
    description: 'The app provides users a central marketplace to buy physical products as well as soft products like insurances, loan, digital Gold, etc. It also allows users to transfer payments between contacts, make payments to businesses, initiate money requests from others and more. ',
    client: 'Bajaj Finserv Direct Limited',
    language: 'English',
    domain: 'Payments and Insurance',
    appStoreLink: 'https://apps.apple.com/in/app/finserv-markets/id1482914241#?platform=iphone',
    techStacks: ['iOS', 'Swift 5.0'],
    integratedFeatures: ['3DTouch', 'Siri Shortcuts', 'HealthKit', 'Branch SDK', 'Fisdom SDK', 'Adobe Analytics', 'Dark Mode Support', 'Neumorphic Design(for Login Module)']
}


const pey = {
    title: 'PEY MOBILE APP',
    description: 'The wallet allows users to transfer payments between contacts, make payments to businesses, initiate money requests from others and more. Parents can use it to invite their children to use their wallet and set restrictions on children\'s transactions.',
    client: 'Hold Me Ltd (Israel)',
    language: 'Hebrew',
    domain: 'Payments',
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
    payzapp,
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