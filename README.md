# Testing MCP Repo - React Native Project

? A React Native testing project created to demonstrate MCP (Model Context Protocol) integration with Claude Code.

## ? Project Overview

This repository serves as a testing ground for exploring React Native development with AI assistance through Claude Code. The project follows modern React Native best practices and includes a comprehensive folder structure for scalable mobile app development.

## ? Tech Stack

- **React Native** - Cross-platform mobile development framework
- **TypeScript** - Type safety and better developer experience
- **React Navigation** - Navigation library for React Native
- **ESLint + Prettier** - Code linting and formatting
- **Jest** - Testing framework

## ? Project Structure

```
src/
??? components/          # Reusable UI components
?   ??? common/         # Generic components (Button, Input, etc.)
?   ??? specific/       # Feature-specific components
??? screens/            # Screen components
??? navigation/         # Navigation configuration
??? services/           # API calls and external services
??? hooks/             # Custom React hooks
??? utils/             # Helper functions and utilities
??? store/             # State management
??? types/             # TypeScript type definitions
??? constants/         # App constants and configuration
??? assets/            # Images, fonts, and static resources
```

## ? Getting Started

### Prerequisites

- Node.js (v18 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gastonmira/testing-mcp-repo.git
cd testing-mcp-repo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. For iOS (macOS only):
```bash
cd ios && pod install
```

### Running the App

**For Android:**
```bash
npm run android
```

**For iOS:**
```bash
npm run ios
```

**Start Metro bundler:**
```bash
npm start
```

## ? Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests
- `npm run type-check` - Run TypeScript type checking

## ? Claude Code Integration

This project includes a `claude.md` file that contains a comprehensive roleplay for Claude to act as an expert React Native engineer. This enables:

- **Intelligent Code Assistance** - Claude understands React Native best practices
- **Architecture Guidance** - Proper folder structure and component organization
- **Code Review** - TypeScript compliance and performance optimization
- **Testing Strategy** - Unit, integration, and E2E testing approaches

## ? Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling and loading states
- Write meaningful commit messages
- Maintain consistent code formatting with Prettier

### Testing
- Write unit tests for utilities and business logic
- Create component tests for UI components
- Implement integration tests for critical flows
- Maintain good test coverage

## ? Contributing

1. Create a feature branch from `main`
2. Make your changes following the coding guidelines
3. Write tests for new functionality
4. Run linting and tests before committing
5. Create a Pull Request with a clear description

## ? License

This project is for testing and learning purposes.

---

**Built with ?? for React Native development and AI-assisted coding**