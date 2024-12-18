<<<<<<< HEAD
# ClubWorld
=======
# ClubWorld

A modern web application for discovering and comparing private members clubs worldwide.

## Features

- Browse and compare prestigious private clubs
- Filter by amenities, price range, and location
- View detailed club information including facilities and membership requirements
- Modern, responsive design with real-time updates

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Supabase
- Vite
- shadcn/ui

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/isabellagreco1997/ClubWorld.git
   ```

2. Install dependencies:
   ```bash
   cd ClubWorld
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/        # React components
│   ├── club/         # Club-related components
│   ├── header/       # Header components
│   ├── hero/         # Hero section components
│   ├── layout/       # Layout components
│   ├── paywall/      # Paywall-related components
│   └── ui/           # UI components (shadcn/ui)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and services
│   ├── constants/    # Constants and enums
│   ├── services/     # API services
│   ├── supabase/     # Supabase client and types
│   └── utils/        # Utility functions
├── types/            # TypeScript type definitions
└── App.tsx           # Root component
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
>>>>>>> origin/main
