"use client"
import { Settings, FileText, Edit, BookOpen, Bug } from "lucide-react"

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <span className="logo-text">Scratch</span>
      </div>

      <div className="main-menu">
        <div className="menu-item">
          <button className="menu-button">
            <Settings size={16} />
            <span>Settings</span>
          </button>
        </div>
        <div className="menu-item">
          <button className="menu-button">
            <FileText size={16} />
            <span>File</span>
          </button>
        </div>
        <div className="menu-item">
          <button className="menu-button">
            <Edit size={16} />
            <span>Edit</span>
          </button>
        </div>
        <div className="menu-item">
          <button className="menu-button">
            <BookOpen size={16} />
            <span>Tutorials</span>
          </button>
        </div>
        <div className="menu-item">
          <button className="menu-button">
            <Bug size={16} />
            <span>Debug</span>
          </button>
        </div>
      </div>

      <div className="user-menu">
        <button className="user-button">Join Scratch</button>
        <button className="user-button">Sign in</button>
      </div>

      <style jsx>{`
        .app-header {
          display: flex;
          align-items: center;
          background-color: #9966FF;
          color: white;
          padding: 0 15px;
          height: 50px;
        }
        
        .logo {
          font-weight: bold;
          font-size: 18px;
          margin-right: 20px;
        }
        
        .main-menu {
          display: flex;
          gap: 10px;
          flex: 1;
        }
        
        .menu-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .menu-button:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        .user-menu {
          display: flex;
          gap: 10px;
        }
        
        .user-button {
          background-color: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        
        .user-button:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </header>
  )
}

export default Header
