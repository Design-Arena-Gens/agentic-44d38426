import { IdeaCard, type Idea } from "./components/IdeaCard";

const ideaGroups: Record<string, Idea[]> = {
  "community-impact": [
    {
      title: "Local Resource Finder",
      summary: "Build a directory that maps free resources like food banks, shelters, and community centers with simple filters and geolocation.",
      impact: "Delivers tangible value to a local audience and offers a clear goal to demonstrate in a short hackathon demo.",
      stack: ["Next.js", "Supabase", "Leaflet", "Tailwind"],
      learningFocus: "Covers CRUD basics, database relationships, and map integration without overwhelming complexity."
    },
    {
      title: "Campus Skill Swap",
      summary: "Create a platform where students barter skills (design help for tutoring, etc.) using lightweight profiles, matching, and chat prompts.",
      impact: "Makes the project relatable to judges and easy for beginners to scope within a weekend.",
      stack: ["Next.js", "Firebase", "Clerk", "Framer Motion"],
      learningFocus: "Introduces authentication, real-time data, and motion basics with generous starter templates."
    }
  ],
  "health-and-wellness": [
    {
      title: "Micro Habit Buddy",
      summary: "Provide a focused dashboard for tracking and celebrating bite-sized habits, with daily encouragement prompts driven by a simple rules engine.",
      impact: "Visually engaging and highly demoable; judges love seeing progress tracking and user delight moments.",
      stack: ["Next.js", "Supabase", "Recharts"],
      learningFocus: "Teaches state management, serverless functions, and basic data visualization."
    },
    {
      title: "Mental Break Library",
      summary: "Curate short guided breaks (breathing, stretching, mindfulness) with timers and an accessible, mobile-first layout.",
      impact: "Perfect for showing responsive design chops and thoughtful UX that resonates with most audiences.",
      stack: ["Next.js", "Contentlayer", "Vercel Analytics"],
      learningFocus: "Encourages content modeling, markdown workflows, and measuring engagement."
    }
  ],
  "education-tools": [
    {
      title: "AI Study Partner",
      summary: "Summarize class notes and let users generate quick quizzes with lightweight AI integrations via serverless functions.",
      impact: "Highlights modern capabilities with a manageable AI surface area and lots of room for iteration.",
      stack: ["Next.js", "OpenAI", "LangChain", "Upstash"],
      learningFocus: "Demystifies AI prompts, rate limiting, and caching results for quick demos."
    },
    {
      title: "Beginner Dev Launchpad",
      summary: "Interactive roadmap that pairs foundational tutorials with mini checklists, progress badges, and community submitted tips.",
      impact: "Empowers other beginners and demonstrates empathy-driven design judges appreciate.",
      stack: ["Next.js", "Sanity CMS", "GitHub API"],
      learningFocus: "Shows how to pull data from APIs, manage content, and ship a polished UI."
    }
  ]
};

const kickoffChecklist = [
  "Define a problem statement in one sentence",
  "Sketch your ideal user journey in 20 minutes",
  "Assign a feature owner for each major section",
  "Agree on stretch goals vs. must-haves",
  "Schedule demo dry-run 2 hours before the deadline"
];

const pitchAngles = [
  {
    title: "Story-first",
    detail: "Open with a real person and how your solution changes their day."
  },
  {
    title: "Before vs. after",
    detail: "Show the painful current workflow and contrast it with your app's key moments."
  },
  {
    title: "Why now",
    detail: "Reference fresh trends, new APIs, or timely events that make your project relevant."
  },
  {
    title: "Technical stretch",
    detail: "Highlight the one feature you learned during the hackathon and why it mattered."
  }
];

const resourceBundles = [
  {
    title: "Design sprint starter",
    items: [
      { label: "Wireframes", link: "https://www.figma.com/community/file/1090813272684803221" },
      { label: "Gradient palettes", link: "https://uicolors.app" },
      { label: "Icon set", link: "https://phosphoricons.com" }
    ]
  },
  {
    title: "Developer essentials",
    items: [
      { label: "Next.js Learn", link: "https://nextjs.org/learn" },
      { label: "Supabase quickstart", link: "https://supabase.com/docs/guides/getting-started" },
      { label: "Deploy to Vercel", link: "https://vercel.com/docs/deployments/overview" }
    ]
  },
  {
    title: "Pitch polish",
    items: [
      { label: "Story template", link: "https://www.canva.com/p/templates/pitch-deck" },
      { label: "Live demo checklist", link: "https://www.notion.so/templates/product-demo-checklist" },
      { label: "Timeboxing tips", link: "https://www.youtube.com/watch?v=cY0dD8KRIv0" }
    ]
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>Beginner-Friendly Hackathon Website Ideas</h1>
        <p>
          Fast-track your hackathon planning with curated project ideas, structure blueprints, and ready-to-use resources—all designed for teams building their first web app.
        </p>
      </section>

      <section className="section" aria-labelledby="idea-library">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <span className="tag" style={{ background: "rgba(59, 130, 246, 0.12)", color: "#1e3a8a" }}>Idea Library</span>
            <h2 id="idea-library">High-impact projects you can ship in a weekend</h2>
          </div>
          <p style={{ maxWidth: 360, margin: 0 }}>
            Pick one theme, use the copy-ready project summary, and focus your build on a tight, demoable experience.
          </p>
        </div>

        <div className="grid grid-2" style={{ marginTop: "28px" }}>
          {Object.entries(ideaGroups).map(([category, ideas]) => (
            <div key={category} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <header style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span className="badge">{category.replaceAll("-", " ")}</span>
                <p style={{ margin: 0, color: "rgba(32,33,36,0.72)", fontSize: "0.95rem" }}>
                  {category === "community-impact"
                    ? "Solve real problems for neighbors and local organizers."
                    : category === "health-and-wellness"
                    ? "Build calm, supportive experiences that prioritize accessibility."
                    : "Help learners stay motivated with guided, interactive content."}
                </p>
              </header>
              {ideas.map((idea) => (
                <IdeaCard key={idea.title} idea={idea} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="kickoff">
        <span className="tag" style={{ background: "rgba(20, 184, 166, 0.14)", color: "#065f46" }}>Kickoff Blueprint</span>
        <h2 id="kickoff">Launch your project with a clear game plan</h2>
        <div className="timeline" role="list">
          {kickoffChecklist.map((item) => (
            <div key={item} className="timeline-step" role="listitem">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="pitch-stack">
        <span className="tag" style={{ background: "rgba(217, 119, 6, 0.18)", color: "#92400e" }}>Pitch Stack</span>
        <h2 id="pitch-stack">Frame your demo for maximum impact</h2>
        <div className="grid grid-4" style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {pitchAngles.map((angle) => (
            <div key={angle.title} className="card">
              <h3>{angle.title}</h3>
              <p>{angle.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="resources">
        <span className="tag" style={{ background: "rgba(37, 99, 235, 0.1)", color: "#1d4ed8" }}>Resource Kits</span>
        <h2 id="resources">Grab-and-go assets for beginners</h2>
        <div className="grid grid-3" style={{ marginTop: "24px" }}>
          {resourceBundles.map((bundle) => (
            <div key={bundle.title} className="card">
              <h3>{bundle.title}</h3>
              <div className="resources">
                {bundle.items.map((item) => (
                  <div key={item.label} className="resource-row">
                    <span>{item.label}</span>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      Open
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        Built for hackathon beginners—iterate fast, learn faster, and have fun shipping.
      </footer>
    </main>
  );
}
