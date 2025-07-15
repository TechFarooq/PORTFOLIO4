'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Palette, Check } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useColorTheme, type ColorTheme } from './theme-provider';

const colorThemes: { name: string; value: ColorTheme; colors: string[] }[] = [
  { name: 'Purple', value: 'purple', colors: ['#8B5CF6', '#A855F7'] },
  { name: 'Blue', value: 'blue', colors: ['#3B82F6', '#6366F1'] },
  { name: 'Green', value: 'green', colors: ['#10B981', '#059669'] },
  { name: 'Orange', value: 'orange', colors: ['#F59E0B', '#D97706'] },
  { name: 'Pink', value: 'pink', colors: ['#EC4899', '#DB2777'] },
  { name: 'Red', value: 'red', colors: ['#EF4444', '#DC2626'] },
];

export default function ThemeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { colorTheme, setColorTheme } = useColorTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-800 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors border border-gray-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-300" />
          )}
        </motion.button>

        {/* Color Theme Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-gray-800 dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors border border-gray-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Change color theme"
        >
          <Palette className="h-5 w-5 text-gray-300" />
        </motion.button>
      </div>

      {/* Color Theme Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-48 bg-gray-900 dark:bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden"
            >
              <div className="p-2">
                <div className="text-xs font-medium text-gray-400 px-2 py-1 mb-1">
                  Color Theme
                </div>
                {colorThemes.map((theme) => (
                  <motion.button
                    key={theme.value}
                    onClick={() => {
                      setColorTheme(theme.value);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        {theme.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300">{theme.name}</span>
                    </div>
                    {colorTheme === theme.value && (
                      <Check className="w-4 h-4 text-green-400" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}