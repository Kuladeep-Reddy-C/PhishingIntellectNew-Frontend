import { Shield, LogIn, User } from 'lucide-react';

function Navbar({ onNavigate, onScrollToSection, userRole, currentPage }) {
  const getLoginIcon = () => {
    if (userRole === 'admin') return <Shield className="w-5 h-5" />;
    if (userRole === 'user') return <User className="w-5 h-5" />;
    return <LogIn className="w-5 h-5" />;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <Shield className="w-6 h-6 text-black" />
            <span className="text-xl font-bold tracking-tight text-black">TrustNet</span>
          </button>

          <div className="flex items-center space-x-8">
            <button
              onClick={() => onNavigate('detect')}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Detect
            </button>
            <button
              onClick={() => onScrollToSection('how-trustnet-helps')}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              How it Works
            </button>
            <button
              onClick={() => onNavigate('report')}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Report
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              About
            </button>
            <button className="text-gray-700 hover:text-black transition-colors">
              {getLoginIcon()}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;