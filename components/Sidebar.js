"use client"

import React from "react"
import { MoveHorizontal, Repeat, Flag, Eye, Database, PlusCircle, Music } from "lucide-react"

const blockCategories = [
  {
    name: "Motion",
    color: "#4C97FF",
    icon: <MoveHorizontal size={16} />,
    blocks: [
      "Move 10 Steps",
      "Move -10 Steps",
      "Turn Right",
      "Turn Left",
      "Go to X:100 Y:100",
      "Go to Random Position",
      "Glide 1 Sec to X:150 Y:150",
      "Change X by 20",
      "Change Y by 20",
      "Set X to 200",
      "Set Y to 150",
      "If on edge, bounce",
      "Point in Direction 90",
    ],
  },
  {
    name: "Looks",
    color: "#9966FF",
    icon: <Eye size={16} />,
    blocks: [
      "Say Hello for 2 seconds",
      "Say Hello",
      "Think Hmm... for 2 seconds",
      "Think Hmm...",
      "Switch costume to costume2",
      "Next costume",
      "Switch backdrop to backdrop1",
      "Next backdrop",
      "Change size by 10",
      "Set size to 100 %",
      "Change color effect by 25",
      "Set color effect to 0",
      "Clear graphic effects",
      "Show",
      "Hide",
    ],
  },
  {
    name: "Sound",
    color: "#CF63CF",
    icon: <Music size={16} />,
    blocks: [
      "Play sound meow until done",
      "Start sound meow",
      "Stop all sounds",
      "Change volume by -10",
      "Set volume to 100%",
    ],
  },
  {
    name: "Events",
    color: "#FFBF00",
    icon: <Flag size={16} />,
    blocks: [
      "When green flag clicked",
      "When space key pressed",
      "When this sprite clicked",
      "When backdrop switches to backdrop1",
      "When loudness > 10",
    ],
  },
  {
    name: "Control",
    color: "#FFAB19",
    icon: <Repeat size={16} />,
    blocks: [
      "Wait 1 Second",
      "Wait 2 Seconds",
      "Repeat 10 times",
      "Forever",
      "If <> then",
      "If <> then else",
      "Wait until <>",
      "Repeat until <>",
      "Stop all",
      "Stop this script",
    ],
  },
  {
    name: "Sensing",
    color: "#5CB1D6",
    icon: <Eye size={16} />,
    blocks: [
      "Touching mouse-pointer?",
      "Touching edge?",
      "Touching color?",
      "Color is touching color?",
      "Distance to mouse-pointer",
      "Ask and wait",
      "Key space pressed?",
      "Mouse down?",
      "Mouse x",
      "Mouse y",
      "Loudness",
      "Timer",
      "Reset timer",
    ],
  },
  {
    name: "Operators",
    color: "#59C059",
    icon: <Database size={16} />,
    blocks: [
      "0 + 0",
      "0 - 0",
      "0 * 0",
      "0 / 0",
      "Pick random 1 to 10",
      "< >",
      "= =",
      "> >",
      "And",
      "Or",
      "Not <>",
      "Join hello world",
      "Letter 1 of world",
      "Length of world",
      "Mod",
      "Round",
    ],
  },
  {
    name: "Variables",
    color: "#FF8C1A",
    icon: <Database size={16} />,
    blocks: ["Set variable to 0", "Change variable by 1", "Show variable", "Hide variable"],
  },
  {
    name: "My Blocks",
    color: "#FF6680",
    icon: <PlusCircle size={16} />,
    blocks: ["Define block"],
  },
]

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = React.useState(1) // Default to Looks category

  const handleDragStart = (e, text) => {
    e.dataTransfer.setData("text/plain", text)
  }

  const getBlockShape = (text) => {
    // Determine if block has special shape
    if (text.includes("for") && (text.includes("seconds") || text.includes("secs"))) {
      return "block-with-input"
    }
    if ((text.includes("to") && text.includes("costume")) || text.includes("backdrop")) {
      return "block-with-dropdown"
    }
    if (text.includes("by") || (text.includes("to") && text.includes("%"))) {
      return "block-with-number"
    }
    if (text.includes("effect")) {
      return "block-with-dropdown-number"
    }
    return "regular-block"
  }

  return (
    <div className="sidebar">
      <div className="category-tabs">
        {blockCategories.map((category, index) => (
          <div
            key={index}
            className={`category-tab ${activeCategory === index ? "active" : ""}`}
            style={{
              backgroundColor: activeCategory === index ? category.color : "#f0f0f0",
              color: activeCategory === index ? "white" : "#333",
            }}
            onClick={() => setActiveCategory(index)}
          >
            <div className="category-icon">{category.icon}</div>
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>

      <div className="blocks-list">
        {blockCategories[activeCategory].blocks.map((block, i) => {
          const blockShape = getBlockShape(block)

          return (
            <div
              key={i}
              draggable
              onDragStart={(e) => handleDragStart(e, block)}
              className={`block-item ${blockShape}`}
              style={{
                backgroundColor: blockCategories[activeCategory].color,
              }}
            >
              {blockShape === "block-with-input" ? (
                <div className="block-with-parts">
                  {block.split(" for ")[0]} for{" "}
                  <span className="block-input">{block.split(" for ")[1].split(" ")[0]}</span>{" "}
                  {block.split(" for ")[1].split(" ").slice(1).join(" ")}
                </div>
              ) : blockShape === "block-with-dropdown" ? (
                <div className="block-with-parts">
                  {block.split(" to ")[0]} to <span className="block-dropdown">{block.split(" to ")[1]}</span>
                </div>
              ) : blockShape === "block-with-number" ? (
                <div className="block-with-parts">
                  {block.includes("by") ? (
                    <>
                      {block.split(" by ")[0]} by <span className="block-number">{block.split(" by ")[1]}</span>
                    </>
                  ) : (
                    <>
                      {block.split(" to ")[0]} to <span className="block-number">{block.split(" to ")[1]}</span>
                    </>
                  )}
                </div>
              ) : blockShape === "block-with-dropdown-number" ? (
                <div className="block-with-parts">
                  {block.includes("by") ? (
                    <>
                      Change <span className="block-dropdown">color</span> effect by{" "}
                      <span className="block-number">25</span>
                    </>
                  ) : (
                    <>
                      Set <span className="block-dropdown">color</span> effect to{" "}
                      <span className="block-number">0</span>
                    </>
                  )}
                </div>
              ) : (
                block
              )}
            </div>
          )
        })}
      </div>

      <style jsx>{`
        .sidebar {
          width: 15%;
          height: 100%;
          background-color: #f0f0f0;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #ddd;
        }
        
        .category-tabs {
          display: flex;
          flex-direction: column;
          border-right: 1px solid #ddd;
          background-color: #f0f0f0;
          width: 70px;
          overflow-y: auto;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          padding-top: 50px; /* Space for header */
        }
        
        .category-tab {
          padding: 8px 5px;
          border: none;
          background-color: transparent;
          cursor: pointer;
          font-size: 11px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          border-radius: 4px;
          margin: 2px 5px;
          transition: background-color 0.2s;
        }
        
        .category-tab.active {
          font-weight: bold;
        }
        
        .category-icon {
          font-size: 20px;
          margin-bottom: 2px;
        }
        
        .category-name {
          text-align: center;
          font-size: 10px;
        }
        
        .blocks-list {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
          margin-left: 70px; /* Space for category tabs */
          padding-top: 50px; /* Space for header */
        }
        
        .block-item {
          margin: 5px 0;
          padding: 8px 10px;
          border-radius: 15px;
          cursor: grab;
          color: white;
          font-weight: 500;
          box-shadow: 0 2px 0 0 rgba(0,0,0,0.15);
          user-select: none;
          transition: transform 0.1s;
        }
        
        .block-item:active {
          cursor: grabbing;
          transform: scale(0.98);
        }
        
        .block-with-parts {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
        }
        
        .block-input, .block-dropdown, .block-number {
          background-color: white;
          color: #333;
          padding: 2px 6px;
          border-radius: 10px;
          font-size: 12px;
          min-width: 20px;
          text-align: center;
          display: inline-block;
        }
        
        .block-dropdown {
          position: relative;
          padding-right: 16px;
        }
        
        .block-dropdown:after {
          content: "▼";
          position: absolute;
          right: 4px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 8px;
        }
        
        .block-number {
          min-width: 30px;
        }
      `}</style>
    </div>
  )
}

export default Sidebar
