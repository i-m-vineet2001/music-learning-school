# Music Learning School

A modern, responsive web application for a music learning school built with Next.js, React, and Tailwind CSS.

## Features

- **Modern Design**: Clean, responsive interface with gradient backgrounds and smooth animations
- **Course Catalog**: Comprehensive listing of available music courses (Piano, Guitar, Violin, Drums, Voice, Bass)
- **Instructor Profiles**: Detailed information about professional music instructors
- **Contact Forms**: Interactive contact and inquiry forms
- **User Authentication**: Login and signup pages with form validation
- **Mobile Responsive**: Optimized for all device sizes
- **Accessible**: Built with accessibility best practices

## Pages

- **Home**: Hero section, course overview, instructor highlights, and contact form
- **Courses**: Detailed course listings with pricing and information
- **Instructors**: Professional instructor profiles and backgrounds
- **About**: School history, mission, and values
- **Contact**: Contact information, hours, and inquiry form
- **Login/Signup**: User authentication pages

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Tabler Icons React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/i-m-vineet2001/music-learning-school.git
   cd music-learning-school
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── courses/           # Courses page
│   ├── instructors/       # Instructors page
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── ContactSection.tsx
│   ├── CourseSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── InstructorSection.tsx
└── public/               # Static assets
```

## Key Components

- **Header**: Navigation with mobile menu support
- **Hero**: Landing section with call-to-action buttons
- **CourseSection**: Course grid with instrument categories
- **InstructorSection**: Instructor showcase cards
- **ContactSection**: Contact form and information
- **Footer**: Site links and contact details

## Styling

The project uses Tailwind CSS for styling with:
- Responsive design breakpoints
- Custom color scheme (blue and purple gradients)
- Hover effects and transitions
- Shadow and border utilities
- Typography scale

## Future Enhancements

- Backend integration for forms and authentication
- Payment processing for course enrollment
- Student dashboard and progress tracking
- Online lesson scheduling system
- Video lesson integration
- Blog/news section
- Multi-language support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about this project, please contact:
- GitHub: [@i-m-vineet2001](https://github.com/i-m-vineet2001)
- Project Link: [https://github.com/i-m-vineet2001/music-learning-school](https://github.com/i-m-vineet2001/music-learning-school)
