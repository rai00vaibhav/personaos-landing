// app/page.tsx (Next.js 14 with App Router)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to PersonaOS
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The ultimate lightweight web app for personalized motivation, productivity, and branding.
        </p>
        <a
          href="#"
          className="inline-block rounded bg-blue-600 px-6 py-3 text-white text-lg font-semibold hover:bg-blue-700 transition"
        >
          Join the Early Access
        </a>
      </div>

      <footer className="mt-16 text-sm text-gray-400">
        © 2025 PersonaOS. All rights reserved.
      </footer>
    </main>
  );
}
