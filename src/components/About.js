import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Hero Section */}
        <section className="text-center py-10">
          <h1 className="mb-4 text-4xl font-bold text-slate-900">
            About iNotebook
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            iNotebook is a modern note-taking application designed to help users
            securely create, manage, and organize their notes anytime,
            anywhere.
          </p>
        </section>

        {/* Features */}
        <section className="mt-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Features
          </h2>
    <div className="grid gap-8 md:grid-cols-3 "> 

          <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <span className="material-symbols-outlined text-3xl">note_add</span>
            </div>
            <h3 className="text-xl font-bold text-slate-950">Create Notes</h3>
            <p className="mt-3 text-slate-600">
              Effortlessly capture your ideas, tasks, and important information. Our intuitive interface makes note-taking a breeze.
            </p>
          </div>

          {/* Delete Feature */}
          <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <span className="material-symbols-outlined text-3xl">delete</span>
            </div>
            <h3 className="text-xl font-bold text-slate-950">Delete Notes</h3>
            <p className="mt-3 text-slate-600">
              Keep your workspace clean and organized. Easily remove old or unnecessary notes with a single click.
            </p>
          </div>

          {/* Secure Feature */}
          <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <span className="material-symbols-outlined text-3xl">security</span>
            </div>
            <h3 className="text-xl font-bold text-slate-950">Secure Storage</h3>
            <p className="mt-3 text-slate-600">
              Your notes are private and protected. We use advanced encryption and secure authentication to keep your data safe.
            </p>
          </div>
    </div>
        </section>

        {/* Why iNotebook */}
        <section className="mt-16 rounded-2xl bg-indigo-50 p-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Why iNotebook?
          </h2>

          <p className="leading-relaxed text-slate-700">
            iNotebook was built to provide a simple, responsive, and secure
            note-taking experience. Whether you're storing ideas, planning
            projects, or keeping track of daily tasks, iNotebook helps you stay
            organized with an intuitive interface and reliable performance.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Built With
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            <span className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-800">
              React
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-800">
              Node.js
            </span>

            <span className="rounded-full bg-yellow-100 px-4 py-2 font-medium text-yellow-800">
              Express.js
            </span>

            <span className="rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-800">
              MongoDB
            </span>

            <span className="rounded-full bg-indigo-100 px-4 py-2 font-medium text-indigo-800">
              Tailwind CSS
            </span>

          </div>
        </section>

        {/* Developer */}
        <section className="mt-20 text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-indigo-400 text-3xl font-bold text-white shadow-md">
            VK
          </div>

          <h3 className="mt-5 text-3xl font-bold text-slate-900">
            Vivek Kushwaha
          </h3>

          <p className="mt-2 text-slate-600 font-bold">
            Full Stack Developer
          </p>

          <p className="mx-auto mt-4 max-w-xl text-slate-600 font-semibold">
            Passionate about building modern web applications using React,
            Node.js, MongoDB, and JavaScript. Continuously learning and creating
            projects to improve problem-solving and development skills.
          </p>

          <div className="mt-6 flex justify-center gap-4">

            <a
              href="https://github.com/vivekkushwaha14"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-slate-900 px-5 py-2 text-white transition hover:bg-slate-700"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
            >
              LinkedIn
            </a>

          </div>
        </section>

      </div>
    </div>
  );
};

export default About;