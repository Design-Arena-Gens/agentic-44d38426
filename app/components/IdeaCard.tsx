"use client";

import { useState } from "react";

export interface Idea {
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  learningFocus: string;
}

interface IdeaCardProps {
  idea: Idea;
}

export function IdeaCard({ idea }: IdeaCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="card" aria-label={idea.title}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        <h3>{idea.title}</h3>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          style={{
            border: "none",
            background: "rgba(37, 99, 235, 0.1)",
            color: "#1d4ed8",
            padding: "6px 12px",
            borderRadius: "999px",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          {expanded ? "Hide details" : "See details"}
        </button>
      </header>
      <p>{idea.summary}</p>
      {expanded && (
        <div style={{ display: "grid", gap: "12px", marginTop: "12px" }}>
          <div>
            <span className="badge">Why it works</span>
            <p style={{ marginTop: "6px" }}>{idea.impact}</p>
          </div>
          <div>
            <span className="badge">Suggested stack</span>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "6px" }}>
              {idea.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="badge">Beginner focus</span>
            <p style={{ marginTop: "6px" }}>{idea.learningFocus}</p>
          </div>
        </div>
      )}
    </article>
  );
}
