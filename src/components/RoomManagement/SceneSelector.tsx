import React from 'react';
import { Sun, Moon, Wind, Settings } from 'lucide-react';

interface Scene {
  name: string;
  icon: React.ElementType;
  color: string;
  bg: string;
}

interface SceneSelectorProps {
  selectedScene: string;
  onSceneSelect: (scene: string) => void;
}

const scenes: Record<string, Scene> = {
  day: {
    name: 'Day Mode',
    icon: Sun,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50'
  },
  night: {
    name: 'Night Mode',
    icon: Moon,
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  relax: {
    name: 'Relax Mode',
    icon: Wind,
    color: 'text-green-500',
    bg: 'bg-green-50'
  },
  work: {
    name: 'Work Mode',
    icon: Settings,
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  }
};

const SceneSelector: React.FC<SceneSelectorProps> = ({ selectedScene, onSceneSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {Object.entries(scenes).map(([key, scene]) => {
        const Icon = scene.icon;
        return (
          <button
            key={key}
            onClick={() => onSceneSelect(key)}
            className={`p-4 rounded-xl flex flex-col items-center space-y-2 transition-all ${
              selectedScene === key 
                ? `${scene.bg} ${scene.color} ring-2 ring-offset-2 ring-current` 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-sm font-medium">{scene.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SceneSelector;