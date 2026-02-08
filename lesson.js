const modulesData = {
  lessons: {
    truths: [
      {
        id: 1,
        title: "Advanced ≠ Complicated",
        content: `
In software development, "advanced" doesn't mean "complicated". 
An advanced developer understands **flow, logic, and problem-solving** more than just memorizing syntax. 
Complexity often comes from bad design, poor structure, or lack of planning. 
Focus on learning how systems interact, how data flows, and how events trigger actions.
        `
      },
      {
        id: 2,
        title: "Frameworks Don’t Make You Senior",
        content: `
Frameworks are tools to make coding faster, but **mastering fundamentals is key**. 
JavaScript, Python, data structures, algorithms, and problem-solving are the foundation. 
A framework won't help if you don't understand the logic behind it. 
Real senior developers can build apps with or without frameworks because they understand **how the code flows and interacts**.
        `
      },
      {
        id: 3,
        title: "Debugging Is Learning",
        content: `
Every error is a **mini-lesson**. Analyze it, understand why it happened, and fix it. 
Debugging teaches you how programs actually work under the hood. 
Use tools like console logging, breakpoints, or error stacks to **trace and understand issues**.
        `
      },
      {
        id: 4,
        title: "Read Documentation First",
        content: `
Before jumping into coding, **read the official docs**. 
Documentation often explains edge cases, best practices, and examples. 
Skipping docs leads to trial-and-error coding and wasted time. 
Advanced developers **read docs regularly** and learn features deeply rather than memorizing hacks.
        `
      }
    ],
    how: [
      {
        id: 1,
        title: "How an App Runs",
        content: `
When you run an application, a series of steps happen:
1. Your code is loaded into memory.
2. Dependencies (libraries or modules) are resolved.
3. The runtime initializes and sets up events or listeners.
4. Your app responds to user actions or system events.
5. Errors or exceptions are thrown if logic conflicts with reality.

Understanding **execution flow** is critical for debugging, performance optimization, and scaling applications.
        `
      },
      {
        id: 2,
        title: "Frontend vs Backend",
        content: `
Frontend is everything the user interacts with: UI, layout, interactivity. 
Backend handles business logic, data, and server-side processing. 
Understanding how **frontend communicates with backend** (through APIs, sockets, or events) is essential for building real applications.
        `
      },
      {
        id: 3,
        title: "APIs Connect Apps",
        content: `
APIs (Application Programming Interfaces) allow software to communicate. 
A frontend app can request data from a backend using REST APIs or GraphQL. 
Bots, mobile apps, and web apps all use APIs to **interact without needing to know internal logic**.
        `
      }
    ],
    errors: [
      {
        id: 1,
        title: "Errors Are Feedback",
        content: `
An error is **not failure**, it's feedback. 
It tells you where your logic disagrees with reality. 
Understand the type of error: ReferenceError, TypeError, SyntaxError, etc. 
Then trace your code step by step to find the root cause.
        `
      },
      {
        id: 2,
        title: "Common JavaScript Errors",
        content: `
1. ReferenceError → variable not defined.  
2. TypeError → value type incompatible with operation.  
3. SyntaxError → invalid syntax.  

Knowing common errors lets you **quickly diagnose issues** without frustration.
        `
      },
      {
        id: 3,
        title: "Debugging Tools",
        content: `
Console logging, breakpoints, browser dev tools, and Node.js inspectors are essential. 
Advanced developers **observe program behavior** instead of guessing. 
Logging strategically helps visualize data flow and event sequences.
        `
      }
    ],
    paths: [
      {
        id: 1,
        title: "Zero → WhatsApp Bot",
        content: `
To build a WhatsApp bot conceptually:
1. Learn HTTP requests, events, sessions.
2. Understand how to manage state between messages.
3. Use APIs for sending/receiving messages.
4. Focus on **logic and flow** before libraries.

Even without writing code, you can **simulate bot behavior** and understand automation.
        `
      },
      {
        id: 2,
        title: "Frontend Path",
        content: `
HTML → CSS → JavaScript → Frameworks → Projects.  
Start with DOM manipulation, events, forms, API calls.  
Then move to React, Vue, or Svelte.  
Projects solidify knowledge and teach **real problem-solving**.
        `
      },
      {
        id: 3,
        title: "Backend Path",
        content: `
Node.js → Databases → APIs → Servers → Projects.  
Learn how to structure code, handle async events, and manage databases.  
Focus on building systems that handle real-world data and scale efficiently.
        `
      }
    ],
    botSession: [
      {
        id: 1,
        title: "Bot Introduction",
        content: `
A bot is an **automated program** that reacts to events.  
Bots listen for messages, actions, or API triggers, and respond programmatically.  
They save developers time by automating repetitive tasks or providing instant feedback.
        `
      },
      {
        id: 2,
        title: "Bot Connections",
        content: `
Bots connect via APIs to platforms like WhatsApp or Telegram.  
They do not “type” manually but **send/receive data programmatically**.  
You can simulate a bot locally to learn its flow: events → logic → response.
        `
      },
      {
        id: 3,
        title: "Bot Events & State",
        content: `
Every bot works on **events and state**.  
- Event: incoming message, button click.  
- State: session data (e.g., user name, last action).  

Understanding events and state is **core to bot development**, even before touching libraries.
        `
      }
    ]
  },
  quizzes: {
    truths: [
      {
        question: "Which skill defines an advanced developer?",
        options: [
          "Memorizing frameworks",
          "Understanding logic & flow",
          "Typing fast",
          "Using libraries"
        ],
        answer: 1
      },
      {
        question: "Frameworks should be used after?",
        options: [
          "Skipping basics",
          "Mastering fundamentals",
          "Copy-pasting code",
          "Guessing syntax"
        ],
        answer: 1
      }
    ],
    how: [
      {
        question: "What happens first when an app runs?",
        options: ["Server listens","Code loads","User clicks","Error appears"],
        answer: 1
      },
      {
        question: "Frontend mainly handles?",
        options: ["Logic","UI","Database","APIs"],
        answer: 1
      }
    ],
    botSession: [
      {
        question: "Bots interact using?",
        options: ["APIs","Manual typing","Random guesses","Email only"],
        answer: 0
      },
      {
        question: "What triggers a bot response?",
        options: ["Events","Coffee","Sleep","Manual typing only"],
        answer: 0
      }
    ]
  }
};
