const lessons = [

{
    id:1,

    icon:"🎉",

    title:"Welcome to Vestra",

    description:
    "Welcome to Vestra! This platform lets you learn stock market trading without risking real money. Every new trader begins with virtual funds so you can practice, experiment, and build confidence before entering the real market.",

    example:{
        title:"You Receive",
        content:[
            "💵 Cash Account : $25,000",
            "📈 Trading Account : $50,000",
            "Practice with virtual money.",
            "No real financial risk."
        ]
    },

    tip:
    "The goal is not just to earn profits, but to understand how trading actually works.",

    quiz:{
        question:"Is the money provided by Vestra real?",

        options:[
            "Yes",
            "No",
            "Only the Cash Account is real",
            "Only the Trading Account is real"
        ],

        answer:1
    }
},

{
    id:2,

    icon:"💵",

    title:"Cash Account",

    description:
    "The Cash Account acts like your wallet. It stores the money you own. You cannot directly buy stocks from this account until you transfer money into your Trading Account.",

    example:{
        title:"Example",
        content:[
            "Cash Balance : $25,000",
            "Transfer $5,000",
            "Cash Balance becomes $20,000",
            "Trading Balance becomes $55,000"
        ]
    },

    tip:
    "Think of the Cash Account as your bank account.",

    quiz:{
        question:"What is the primary purpose of the Cash Account?",

        options:[
            "Store owned stocks",
            "Store available money",
            "Store open positions",
            "Store orders"
        ],

        answer:1
    }
},

{
    id:3,

    icon:"🏦",

    title:"Trading Account",

    description:
    "The Trading Account is used to place buy and sell orders. Before trading, you transfer money from your Cash Account into this account.",

    example:{
        title:"Example",
        content:[
            "Trading Balance : $50,000",
            "Buy Apple worth $2,000",
            "Remaining Trading Balance : $48,000"
        ]
    },

    tip:
    "Only your Trading Account is used while placing orders.",

    quiz:{
        question:"Which account is used while placing trades?",

        options:[
            "Savings Account",
            "Cash Account",
            "Trading Account",
            "Portfolio"
        ],

        answer:2
    }
},

{
    id:4,

    icon:"📝",

    title:"Orders",

    description:
    "An order is simply an instruction you give to buy or sell a stock. Once the exchange executes the order, it may become a Holding or a Position depending on the product type.",

    example:{
        title:"Example",
        content:[
            "Buy 5 Apple Shares",
            "Price : $150",
            "Order Status : Executed"
        ]
    },

    tip:
    "Every trade starts with an order.",

    quiz:{
        question:"What is an order?",

        options:[
            "A stock",
            "A request to buy or sell",
            "Your wallet",
            "Your profit"
        ],

        answer:1
    }
},

{
    id:5,

    icon:"📈",

    title:"Holdings",

    description:
    "Holdings represent the stocks that you actually own. They remain in your portfolio until you decide to sell them.",

    example:{
        title:"Example",
        content:[
            "Bought 10 Tesla Shares",
            "Average Price : $300",
            "You continue owning them."
        ]
    },

    tip:
    "Holdings are generally created through CNC trades.",

    quiz:{
        question:"Holdings represent...",

        options:[
            "Open Trades",
            "Stocks You Own",
            "Orders",
            "Cash"
        ],

        answer:1
    }
},

{
    id:6,

    icon:"⚡",

    title:"Positions",

    description:
    "Positions represent trades that are currently active. They may be profitable or loss-making depending upon market movement.",

    example:{
        title:"Example",
        content:[
            "Bought Tesla @ $300",
            "Current Price : $312",
            "Profit : $12/share"
        ]
    },

    tip:
    "Positions continuously change as prices move.",

    quiz:{
        question:"Positions usually represent...",

        options:[
            "Money",
            "Completed Holdings",
            "Active Trades",
            "Orders"
        ],

        answer:2
    }
},

{
    id:7,

    icon:"🟢",

    title:"CNC Trading",

    description:
    "CNC stands for Cash and Carry. Stocks bought using CNC become your Holdings and can be kept for as long as you wish.",

    example:{
        title:"Example",
        content:[
            "Buy Infosys",
            "Keep for 2 Years",
            "Sell whenever you want"
        ]
    },

    tip:
    "Investors mostly use CNC.",

    quiz:{
        question:"CNC trades create...",

        options:[
            "Orders",
            "Holdings",
            "Cash",
            "Margin"
        ],

        answer:1
    }
},

{
    id:8,

    icon:"🔴",

    title:"MIS Trading",

    description:
    "MIS stands for Margin Intraday Square-off. Positions opened using MIS must usually be closed on the same trading day.",

    example:{
        title:"Example",
        content:[
            "Buy Reliance",
            "Sell Before Market Closes",
            "Profit or Loss Booked Today"
        ]
    },

    tip:
    "MIS is mainly used by day traders.",

    quiz:{
        question:"MIS positions should generally be...",

        options:[
            "Held Forever",
            "Closed the Same Day",
            "Transferred to Holdings",
            "Stored in Cash Account"
        ],

        answer:1
    }
},

{
    id:9,

    icon:"💹",

    title:"Profit & Loss",

    description:
    "Your profit or loss depends on the difference between your buying price and selling price.",

    example:{
        title:"Example",
        content:[
            "Bought @ $200",
            "Sold @ $230",
            "Profit : $30/share"
        ]
    },

    tip:
    "Always calculate risk before looking at profit.",

    quiz:{
        question:"Profit occurs when...",

        options:[
            "Sell Price > Buy Price",
            "Buy Price > Sell Price",
            "Both are Equal",
            "None"
        ],

        answer:0
    }
},

{
    id:10,

    icon:"🏁",

    title:"Ready to Trade",

    description:
    "Congratulations! You now understand the core concepts of trading. Practice with Vestra's virtual funds before moving to real markets.",

    example:{
        title:"Checklist",
        content:[
            "✔ Cash Account",
            "✔ Trading Account",
            "✔ Orders",
            "✔ Holdings",
            "✔ Positions",
            "✔ CNC",
            "✔ MIS"
        ]
    },

    tip:
    "Practice consistently before risking real money.",

    quiz:{
        question:"What should you do before real trading?",

        options:[
            "Practice",
            "Borrow Money",
            "Trade Blindly",
            "Ignore Risk"
        ],

        answer:0
    }
}

];

export default lessons;