/*
  ================================================================
  HOW TO ADD TODAY'S POST
  ================================================================
  Copy the block below, paste it at the TOP of the ENTRIES array
  (so newest stays first), and fill in your own values.

  {
    day: 2,
    date: "Sep 14, 2026",
    tool: "Tool Name",
    url: "https://the-tool-website.com",
    description: "One or two plain-sentence explanation of what the tool does and who it's for.",
    prompts: [
      "First ready-to-use prompt for this tool.",
      "Second ready-to-use prompt for this tool.",
      "Third ready-to-use prompt for this tool."
    ]
  },

  Then open index.html in a browser to check it, and re-upload/
  redeploy the folder to Netlify. That's the whole workflow.
  ================================================================
*/

const ENTRIES = [
  {
    day: 1,
    date: "Sep 13, 2026",
    tool: "ChatGPT (GPT-5)",
    url: "https://chat.openai.com",
    description: "A general-purpose AI chat assistant for writing, research, coding help, and brainstorming. Best starting point if you're new to AI tools.",
    prompts: [
      "Act as a senior copywriter and rewrite this paragraph to sound more confident: [paste text]",
      "Explain [topic] to me like I'm a complete beginner, using one real-world analogy.",
      "Give me 10 headline options for a blog post about [subject], ranked from safest to boldest."
    ]
  }
];
