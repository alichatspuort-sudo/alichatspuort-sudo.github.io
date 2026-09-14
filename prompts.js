/*
  ================================================================
  ADDING OR EDITING A PROMPT
  ================================================================
  Copy a block below, paste it anywhere in the PROMPTS array, and
  fill in your own values. "category" controls which filter tab
  it shows up under on the Best Prompts page.

  {
    category: "Writing & Content",
    text: "Your prompt text here, with [bracket] placeholders."
  },
  ================================================================
*/

const PROMPTS = [
  // ---- Writing & Content ----
  { category: "Writing & Content", text: "Rewrite this paragraph to sound more concise without losing meaning: [paste text]" },
  { category: "Writing & Content", text: "Write an opening paragraph for a blog post about [topic] that hooks the reader in the first two sentences." },
  { category: "Writing & Content", text: "Turn these bullet points into a flowing paragraph: [paste bullets]" },
  { category: "Writing & Content", text: "Suggest 10 alternative titles for this piece, ranked from safest to boldest: [paste title or topic]" },
  { category: "Writing & Content", text: "Explain [topic] in three different tones: formal, casual, and humorous." },
  { category: "Writing & Content", text: "Summarize this article in exactly 3 sentences: [paste article]" },
  { category: "Writing & Content", text: "Continue this story in the same voice and tone: [paste story so far]" },
  { category: "Writing & Content", text: "Identify any unclear or repetitive sentences in this draft and suggest fixes: [paste draft]" },
  { category: "Writing & Content", text: "Write a short bio, under 50 words, for [name or role] that sounds confident but not boastful." },
  { category: "Writing & Content", text: "Turn this technical explanation into something a 12-year-old could understand: [paste text]" },

  // ---- Business & Marketing ----
  { category: "Business & Marketing", text: "Write 5 subject lines for an email announcing [product or offer], each testing a different angle." },
  { category: "Business & Marketing", text: "Draft a cold outreach email to [type of prospect] offering [service], under 120 words." },
  { category: "Business & Marketing", text: "Create a one-paragraph value proposition for [business idea]." },
  { category: "Business & Marketing", text: "List 10 possible objections a customer might have to buying [product], and a short response to each." },
  { category: "Business & Marketing", text: "Write a LinkedIn post announcing [milestone or launch] in a confident, non-salesy tone." },
  { category: "Business & Marketing", text: "Generate 5 taglines for [brand name] that emphasize [key benefit]." },
  { category: "Business & Marketing", text: "Draft a follow-up message for a client who hasn't responded in a week, friendly but direct." },
  { category: "Business & Marketing", text: "Write a short case study outline based on this result: [paste result or data]" },
  { category: "Business & Marketing", text: "Suggest 3 pricing page headline options for [product], each targeting a different customer motivation." },
  { category: "Business & Marketing", text: "Turn this list of features into customer-facing benefits: [paste feature list]" },

  // ---- Coding & Tech ----
  { category: "Coding & Tech", text: "Explain what this code does, line by line, in plain language: [paste code]" },
  { category: "Coding & Tech", text: "Find potential bugs or edge cases in this function: [paste code]" },
  { category: "Coding & Tech", text: "Refactor this code for readability without changing its behavior: [paste code]" },
  { category: "Coding & Tech", text: "Write unit tests for this function, covering normal and edge cases: [paste code]" },
  { category: "Coding & Tech", text: "Convert this code from [language A] to [language B]: [paste code]" },
  { category: "Coding & Tech", text: "Suggest a simple database schema for an app that does [description]." },
  { category: "Coding & Tech", text: "Write a regex that matches [pattern description], and explain how it works." },
  { category: "Coding & Tech", text: "Review this API design and suggest improvements for clarity and consistency: [paste API spec]" },
  { category: "Coding & Tech", text: "Explain the tradeoffs between [option A] and [option B] for [use case]." },
  { category: "Coding & Tech", text: "Write a clear commit message summarizing these changes: [paste diff or summary]" },

  // ---- Image Generation ----
  { category: "Image Generation", text: "A [subject] in the style of [art style], soft lighting, high detail, [color palette]." },
  { category: "Image Generation", text: "Minimalist logo concept for a [industry] brand, flat design, two colors only." },
  { category: "Image Generation", text: "[Character description] standing in [setting], cinematic lighting, wide shot." },
  { category: "Image Generation", text: "Isometric illustration of [object or scene], clean vector style, pastel colors." },
  { category: "Image Generation", text: "Product photo of [product] on a plain background, studio lighting, high resolution." },
  { category: "Image Generation", text: "[Subject] rendered as a watercolor painting, loose brush strokes, muted tones." },
  { category: "Image Generation", text: "Cozy interior of a [type of room], warm lighting, detailed textures." },
  { category: "Image Generation", text: "Flat icon set representing [theme], consistent line weight, single accent color." },
  { category: "Image Generation", text: "[Animal or creature] in a fantasy setting, glowing details, dramatic atmosphere." },
  { category: "Image Generation", text: "Abstract background pattern using [color scheme], geometric shapes, subtle gradient." },

  // ---- Productivity & Planning ----
  { category: "Productivity & Planning", text: "Break this goal down into a 30-day action plan: [describe goal]" },
  { category: "Productivity & Planning", text: "Turn this messy to-do list into a prioritized plan for today: [paste list]" },
  { category: "Productivity & Planning", text: "Suggest a weekly schedule template for someone balancing [work situation] and [personal commitment]." },
  { category: "Productivity & Planning", text: "Identify which of these tasks can be delegated, automated, or dropped: [paste task list]" },
  { category: "Productivity & Planning", text: "Write a short daily reflection template with 3 questions to end the workday." },
  { category: "Productivity & Planning", text: "Turn this project idea into a list of concrete first steps: [describe idea]" },
  { category: "Productivity & Planning", text: "Suggest a simple system for tracking [type of habit or metric]." },
  { category: "Productivity & Planning", text: "Draft an agenda for a 30-minute meeting about [topic]." },
  { category: "Productivity & Planning", text: "Summarize this meeting transcript into action items with owners: [paste transcript]" },
  { category: "Productivity & Planning", text: "Suggest 3 ways to simplify this workflow: [describe current process]" },

  // ---- Learning & Research ----
  { category: "Learning & Research", text: "Explain [concept] using a simple real-world analogy." },
  { category: "Learning & Research", text: "Create a beginner-friendly study plan for learning [skill or topic] in 4 weeks." },
  { category: "Learning & Research", text: "Quiz me with 5 questions on [topic] to test my understanding." },
  { category: "Learning & Research", text: "Summarize the key arguments for and against [topic or debate]." },
  { category: "Learning & Research", text: "Explain [term] as if I already know [related field], skip the basics." },
  { category: "Learning & Research", text: "List the most common misconceptions about [topic] and correct each one." },
  { category: "Learning & Research", text: "Compare [option A] and [option B] across cost, time, and difficulty." },
  { category: "Learning & Research", text: "Turn these notes into a set of flashcards: [paste notes]" },
  { category: "Learning & Research", text: "Give me a step-by-step explanation of how [process] works." },
  { category: "Learning & Research", text: "Suggest 5 good follow-up questions to ask after learning about [topic]." },

  // ---- Social Media ----
  { category: "Social Media", text: "Write 3 Instagram captions for a photo of [description], each with a different tone." },
  { category: "Social Media", text: "Turn this blog post into a 5-tweet thread: [paste post]" },
  { category: "Social Media", text: "Suggest 10 relevant hashtags for a post about [topic]." },
  { category: "Social Media", text: "Write a short, scroll-stopping hook for a video about [topic]." },
  { category: "Social Media", text: "Draft a week of social media post ideas for a [type of business]." },
  { category: "Social Media", text: "Rewrite this caption to sound more personal and less promotional: [paste caption]" },
  { category: "Social Media", text: "Suggest 3 content series ideas for a [niche] social media account." },
  { category: "Social Media", text: "Write a poll question and 3 answer options about [topic] to boost engagement." },
  { category: "Social Media", text: "Turn this customer review into a short, shareable testimonial post: [paste review]" },
  { category: "Social Media", text: "Suggest a content calendar theme for each day of the week for a [niche] account." },

  // ---- Career & Resume ----
  { category: "Career & Resume", text: "Rewrite this resume bullet point to focus on measurable results: [paste bullet]" },
  { category: "Career & Resume", text: "Write a short, confident answer to 'Tell me about yourself' based on this background: [paste background]" },
  { category: "Career & Resume", text: "Suggest 5 interview questions I should prepare for when applying to a [role] position." },
  { category: "Career & Resume", text: "Turn this list of responsibilities into resume-ready achievement statements: [paste list]" },
  { category: "Career & Resume", text: "Write a short LinkedIn headline for someone who does [job or skill]." },
  { category: "Career & Resume", text: "Draft a polite email negotiating a higher salary offer for [role]." },
  { category: "Career & Resume", text: "Suggest talking points for a performance review, based on these accomplishments: [paste list]" },
  { category: "Career & Resume", text: "Write a short thank-you note to send after a job interview for [role]." },
  { category: "Career & Resume", text: "Help me phrase this career change in a way that sounds intentional, not random: [describe situation]" },
  { category: "Career & Resume", text: "Suggest 3 questions to ask an interviewer that show genuine interest in the role." },

  // ---- Personal & Life ----
  { category: "Personal & Life", text: "Suggest a simple weekly meal plan for [dietary preference], with a grocery list." },
  { category: "Personal & Life", text: "Help me plan a [number]-day trip to [destination] with a mix of sightseeing and rest." },
  { category: "Personal & Life", text: "Suggest a thoughtful gift for someone who likes [interests], under [budget]." },
  { category: "Personal & Life", text: "Write a heartfelt but not overly long message for [occasion]." },
  { category: "Personal & Life", text: "Suggest a simple budget breakdown for someone earning [income] with goals like [goals]." },
  { category: "Personal & Life", text: "Give me 5 ideas for a low-key weekend that doesn't involve screens." },
  { category: "Personal & Life", text: "Suggest a beginner workout routine for someone who can train [days per week]." },
  { category: "Personal & Life", text: "Help me write a polite message declining [invitation or request] without over-explaining." },
  { category: "Personal & Life", text: "Suggest a reading list of 5 books on [topic], from beginner to advanced." },
  { category: "Personal & Life", text: "Write a short journal prompt to reflect on [life area] at the end of the week." },

  // ---- Data & Analysis ----
  { category: "Data & Analysis", text: "Explain what this dataset seems to show, in plain language: [paste data summary]" },
  { category: "Data & Analysis", text: "Suggest 3 charts that would best represent this data: [describe data]" },
  { category: "Data & Analysis", text: "Identify any outliers or anomalies worth investigating in this data: [paste data]" },
  { category: "Data & Analysis", text: "Turn these numbers into a short summary a non-technical manager could understand: [paste numbers]" },
  { category: "Data & Analysis", text: "Suggest what additional data would help answer this question: [describe question]" },
  { category: "Data & Analysis", text: "Write a SQL query to find [describe what you need] from a table with these columns: [list columns]" },
  { category: "Data & Analysis", text: "Explain the difference between correlation and causation using this example: [describe example]" },
  { category: "Data & Analysis", text: "Suggest a simple A/B test to validate this idea: [describe idea]" },
  { category: "Data & Analysis", text: "Turn this spreadsheet summary into 3 key takeaways for a presentation: [paste summary]" },
  { category: "Data & Analysis", text: "Suggest what metric best measures success for [goal or project]." }
];
