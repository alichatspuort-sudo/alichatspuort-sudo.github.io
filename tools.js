/*
  ================================================================
  ADDING OR EDITING A TOOL
  ================================================================
  Copy a block below, paste it anywhere in the TOOLS array, and
  fill in your own values. "category" controls which filter tab
  it shows up under on the All Tools page.

  {
    name: "Tool Name",
    url: "https://example.com",
    category: "Writing",
    description: "One plain sentence on what it does and who it's for."
  },
  ================================================================
*/

const TOOLS = [
  // ---- Chatbots & Assistants ----
  { name: "ChatGPT", url: "https://chatgpt.com", category: "Chatbots & Assistants", description: "General-purpose AI assistant for writing, coding help, and everyday questions." },
  { name: "Claude", url: "https://claude.ai", category: "Chatbots & Assistants", description: "AI assistant known for handling long documents and careful reasoning." },
  { name: "Gemini", url: "https://gemini.google.com", category: "Chatbots & Assistants", description: "Google's assistant, built into Search, Docs, and Gmail." },
  { name: "Perplexity", url: "https://www.perplexity.ai", category: "Chatbots & Assistants", description: "AI answer engine that shows cited sources for every response." },
  { name: "Microsoft Copilot", url: "https://copilot.microsoft.com", category: "Chatbots & Assistants", description: "Assistant built into Windows, Edge, and Office apps." },
  { name: "Poe", url: "https://poe.com", category: "Chatbots & Assistants", description: "One app for chatting with many different AI models side by side." },
  { name: "Character.AI", url: "https://character.ai", category: "Chatbots & Assistants", description: "Lets you create and chat with custom AI personas and characters." },
  { name: "You.com", url: "https://you.com", category: "Chatbots & Assistants", description: "Search engine with a built-in AI chat and app builder." },
  { name: "Pi", url: "https://pi.ai", category: "Chatbots & Assistants", description: "Personal AI from Inflection, built for supportive everyday conversation." },
  { name: "Meta AI", url: "https://www.meta.ai", category: "Chatbots & Assistants", description: "Meta's assistant built into Facebook, Instagram, and WhatsApp." },

  // ---- Writing & Content ----
  { name: "Jasper", url: "https://www.jasper.ai", category: "Writing & Content", description: "AI copywriting tool built for marketing teams and brand voice." },
  { name: "Copy.ai", url: "https://www.copy.ai", category: "Writing & Content", description: "Generates marketing copy, emails, and social captions quickly." },
  { name: "Grammarly", url: "https://www.grammarly.com", category: "Writing & Content", description: "Checks grammar, tone, and clarity as you write anywhere online." },
  { name: "QuillBot", url: "https://quillbot.com", category: "Writing & Content", description: "Paraphrasing and summarizing tool popular with writers and students." },
  { name: "Sudowrite", url: "https://www.sudowrite.com", category: "Writing & Content", description: "AI writing partner built specifically for fiction authors." },
  { name: "Writesonic", url: "https://writesonic.com", category: "Writing & Content", description: "AI content generator for blog posts, ads, and landing pages." },
  { name: "Notion AI", url: "https://www.notion.so", category: "Writing & Content", description: "Writing and summarizing assistant built directly into Notion docs." },
  { name: "Hemingway Editor", url: "https://hemingwayapp.com", category: "Writing & Content", description: "Highlights overly complex sentences to make your writing simpler." },
  { name: "Rytr", url: "https://rytr.me", category: "Writing & Content", description: "Budget-friendly AI writer for short-form marketing content." },
  { name: "Wordtune", url: "https://www.wordtune.com", category: "Writing & Content", description: "Rewrites sentences instantly to match a tone you choose." },

  // ---- Image Generation ----
  { name: "Midjourney", url: "https://www.midjourney.com", category: "Image Generation", description: "Produces highly stylized, artistic AI images from text prompts." },
  { name: "DALL·E", url: "https://openai.com/dall-e-3", category: "Image Generation", description: "OpenAI's image generator, available directly inside ChatGPT." },
  { name: "Stability AI", url: "https://stability.ai", category: "Image Generation", description: "Makers of Stable Diffusion, an open image-generation model." },
  { name: "Adobe Firefly", url: "https://www.adobe.com/products/firefly.html", category: "Image Generation", description: "Adobe's generative image tool, built into Photoshop and Express." },
  { name: "Leonardo AI", url: "https://leonardo.ai", category: "Image Generation", description: "Image generator popular for game art and concept design." },
  { name: "Ideogram", url: "https://ideogram.ai", category: "Image Generation", description: "AI image generator known for rendering clean, readable text in images." },
  { name: "Canva", url: "https://www.canva.com", category: "Image Generation", description: "Design app with built-in text-to-image generation (Magic Media)." },
  { name: "Playground", url: "https://playground.com", category: "Image Generation", description: "Free-to-start AI image generator with a full editing canvas." },
  { name: "Recraft", url: "https://www.recraft.ai", category: "Image Generation", description: "AI tool focused on vector graphics, icons, and brand assets." },
  { name: "Krea", url: "https://www.krea.ai", category: "Image Generation", description: "Real-time AI image generation, enhancement, and upscaling." },

  // ---- Video Generation & Editing ----
  { name: "Runway", url: "https://runwayml.com", category: "Video", description: "AI video generation and editing suite used by filmmakers." },
  { name: "Pika", url: "https://pika.art", category: "Video", description: "Text-to-video generator for short, AI-animated clips." },
  { name: "Sora", url: "https://openai.com/sora", category: "Video", description: "OpenAI's text-to-video generation model." },
  { name: "Synthesia", url: "https://www.synthesia.io", category: "Video", description: "Creates videos of an AI avatar reading your script aloud." },
  { name: "HeyGen", url: "https://www.heygen.com", category: "Video", description: "AI avatar video generator popular for marketing and training videos." },
  { name: "Descript", url: "https://www.descript.com", category: "Video", description: "Edits video and podcasts by editing the text transcript directly." },
  { name: "CapCut", url: "https://www.capcut.com", category: "Video", description: "Video editor with AI features like auto-captions and background removal." },
  { name: "Luma Dream Machine", url: "https://lumalabs.ai", category: "Video", description: "Text or image-to-video generator known for realistic motion." },
  { name: "Kaiber", url: "https://kaiber.ai", category: "Video", description: "Turns images, audio, or text into stylized AI music videos." },
  { name: "Opus Clip", url: "https://www.opus.pro", category: "Video", description: "Automatically turns long videos into short clips for social media." },

  // ---- Audio & Voice ----
  { name: "ElevenLabs", url: "https://elevenlabs.io", category: "Audio & Voice", description: "Realistic AI text-to-speech and voice cloning." },
  { name: "Suno", url: "https://suno.com", category: "Audio & Voice", description: "Generates full songs, including vocals, from a text prompt." },
  { name: "Udio", url: "https://www.udio.com", category: "Audio & Voice", description: "AI music generator for creating original songs from prompts." },
  { name: "Murf", url: "https://murf.ai", category: "Audio & Voice", description: "Studio-quality AI voiceovers for videos and presentations." },
  { name: "Adobe Podcast", url: "https://podcast.adobe.com", category: "Audio & Voice", description: "Cleans up and enhances recorded audio automatically." },
  { name: "Play.ht", url: "https://play.ht", category: "Audio & Voice", description: "Text-to-speech app and API with a large voice library." },
  { name: "Voicemod", url: "https://www.voicemod.net", category: "Audio & Voice", description: "Real-time AI voice changer for calls and livestreams." },
  { name: "Krisp", url: "https://krisp.ai", category: "Audio & Voice", description: "Removes background noise from calls in real time." },

  // ---- Coding & Dev ----
  { name: "GitHub Copilot", url: "https://github.com/features/copilot", category: "Coding & Dev", description: "AI pair programmer built directly into your code editor." },
  { name: "Cursor", url: "https://www.cursor.com", category: "Coding & Dev", description: "AI-first code editor built around working with a whole codebase." },
  { name: "Claude Code", url: "https://www.anthropic.com/claude-code", category: "Coding & Dev", description: "Anthropic's agentic coding tool for the terminal and IDE." },
  { name: "Replit", url: "https://replit.com", category: "Coding & Dev", description: "Browser-based coding environment with a built-in AI agent." },
  { name: "Tabnine", url: "https://www.tabnine.com", category: "Coding & Dev", description: "AI code completion that can run privately on your own code." },
  { name: "v0", url: "https://v0.dev", category: "Coding & Dev", description: "Generates React UI components from plain-language descriptions." },
  { name: "Lovable", url: "https://lovable.dev", category: "Coding & Dev", description: "Builds full web apps from a plain-language description." },
  { name: "Bolt.new", url: "https://bolt.new", category: "Coding & Dev", description: "Generates and runs full-stack apps directly in the browser." },
  { name: "Windsurf", url: "https://windsurf.com", category: "Coding & Dev", description: "AI coding assistant and editor for autocompletion and chat." },
  { name: "Sourcegraph Cody", url: "https://sourcegraph.com/cody", category: "Coding & Dev", description: "AI coding assistant that understands your entire codebase." },

  // ---- Productivity & Automation ----
  { name: "n8n", url: "https://n8n.io", category: "Productivity & Automation", description: "Open-source workflow automation tool with built-in AI-agent nodes." },
  { name: "Zapier", url: "https://zapier.com", category: "Productivity & Automation", description: "Connects apps together with automated, no-code workflows." },
  { name: "Make", url: "https://www.make.com", category: "Productivity & Automation", description: "Visual automation builder for connecting apps and APIs." },
  { name: "Motion", url: "https://www.usemotion.com", category: "Productivity & Automation", description: "AI calendar that automatically schedules your tasks around meetings." },
  { name: "Reclaim.ai", url: "https://reclaim.ai", category: "Productivity & Automation", description: "Protects focus time by auto-scheduling habits and tasks." },
  { name: "Superhuman", url: "https://superhuman.com", category: "Productivity & Automation", description: "Email client with AI-written replies and fast inbox triage." },
  { name: "Otter.ai", url: "https://otter.ai", category: "Productivity & Automation", description: "Records and transcribes meetings with AI-generated summaries." },
  { name: "Fireflies.ai", url: "https://fireflies.ai", category: "Productivity & Automation", description: "Meeting recorder and note-taker that joins your video calls." },
  { name: "Airtable", url: "https://www.airtable.com", category: "Productivity & Automation", description: "Database and spreadsheet hybrid with AI fields built in." },
  { name: "Grain", url: "https://grain.com", category: "Productivity & Automation", description: "Records calls and automatically creates shareable video highlights." },
  { name: "Fathom", url: "https://fathom.video", category: "Productivity & Automation", description: "Free AI notetaker that records and summarizes video calls." },

  // ---- Research & Search ----
  { name: "Elicit", url: "https://elicit.com", category: "Research & Search", description: "AI research assistant for finding and summarizing academic papers." },
  { name: "Consensus", url: "https://consensus.app", category: "Research & Search", description: "Search engine that answers questions using scientific papers." },
  { name: "NotebookLM", url: "https://notebooklm.google", category: "Research & Search", description: "Google's AI notebook that answers questions from your own documents." },
  { name: "Scite", url: "https://scite.ai", category: "Research & Search", description: "Shows how a research paper has been cited by later studies." },
  { name: "SciSpace", url: "https://typeset.io", category: "Research & Search", description: "Helps read, summarize, and get explanations of academic papers." },
  { name: "Semantic Scholar", url: "https://www.semanticscholar.org", category: "Research & Search", description: "Free AI-powered search engine for scientific literature." },

  // ---- Design & Presentation ----
  { name: "Gamma", url: "https://gamma.app", category: "Design & Presentation", description: "Generates full slide decks and pages from a text outline." },
  { name: "Beautiful.ai", url: "https://www.beautiful.ai", category: "Design & Presentation", description: "Presentation tool that auto-designs slides as you type." },
  { name: "Tome", url: "https://tome.app", category: "Design & Presentation", description: "Generates narrative presentations and one-pagers from a prompt." },
  { name: "Framer", url: "https://www.framer.com", category: "Design & Presentation", description: "Generates full, publishable websites from a text prompt." },
  { name: "Uizard", url: "https://uizard.io", category: "Design & Presentation", description: "Turns sketches or text into app and website mockups." },
  { name: "Galileo AI", url: "https://www.usegalileo.ai", category: "Design & Presentation", description: "Generates editable UI designs from a text description." },

  // ---- Marketing & SEO ----
  { name: "Surfer SEO", url: "https://surferseo.com", category: "Marketing & SEO", description: "Optimizes written content for search rankings using AI analysis." },
  { name: "Semrush", url: "https://www.semrush.com", category: "Marketing & SEO", description: "SEO and marketing suite with AI content and keyword tools." },
  { name: "HubSpot", url: "https://www.hubspot.com", category: "Marketing & SEO", description: "CRM and marketing platform with built-in AI content tools." },
  { name: "AdCreative.ai", url: "https://www.adcreative.ai", category: "Marketing & SEO", description: "Generates ad creatives and banners optimized for conversions." },
  { name: "Copysmith", url: "https://copysmith.ai", category: "Marketing & SEO", description: "AI copywriting tool built for e-commerce product listings." },
  { name: "Predis.ai", url: "https://predis.ai", category: "Marketing & SEO", description: "Generates social media posts and captions from a product link." },

  // ---- Data & Analytics ----
  { name: "Julius AI", url: "https://julius.ai", category: "Data & Analytics", description: "Analyzes and charts spreadsheet data through a chat interface." },
  { name: "Akkio", url: "https://akkio.com", category: "Data & Analytics", description: "No-code AI tool for building predictive models from your data." },
  { name: "Obviously AI", url: "https://www.obviously.ai", category: "Data & Analytics", description: "Builds machine-learning predictions without writing any code." },
  { name: "Tableau", url: "https://www.tableau.com", category: "Data & Analytics", description: "Data visualization platform with AI-generated insights built in." },

  // ---- 3D, Avatars & Photo Tools ----
  { name: "D-ID", url: "https://www.d-id.com", category: "3D, Avatars & Photo", description: "Turns a photo and script into a talking AI avatar video." },
  { name: "Ready Player Me", url: "https://readyplayer.me", category: "3D, Avatars & Photo", description: "Creates a cross-app 3D avatar from a single selfie." },
  { name: "Meshy", url: "https://www.meshy.ai", category: "3D, Avatars & Photo", description: "Generates 3D models from text descriptions or images." },
  { name: "Remove.bg", url: "https://www.remove.bg", category: "3D, Avatars & Photo", description: "Instantly removes the background from any photo." },
  { name: "Cleanup.pictures", url: "https://cleanup.pictures", category: "3D, Avatars & Photo", description: "Erases unwanted objects from photos automatically." },
  { name: "Photoroom", url: "https://www.photoroom.com", category: "3D, Avatars & Photo", description: "AI photo editor built for product and portrait images." },

  // ---- Developer Platforms & Models ----
  { name: "Google AI Studio", url: "https://aistudio.google.com", category: "Developer Platforms", description: "Free playground for building with Google's Gemini models." },
  { name: "Hugging Face", url: "https://huggingface.co", category: "Developer Platforms", description: "Hub for open-source AI models, datasets, and live demos." },
  { name: "Replicate", url: "https://replicate.com", category: "Developer Platforms", description: "Runs and combines open-source AI models through a simple API." },
  { name: "LangChain", url: "https://www.langchain.com", category: "Developer Platforms", description: "Framework for building applications powered by language models." }
];
