const posts = [
  {
    id: 'getting-started-github-pages',
    title: 'How I Set Up My Website with GitHub Pages and Actions',
    date: '2025-06-08',
    content: (
      <>
        <p>Hi! I'm Charlie. This is my first blog post, where I'll explain how I built this website.</p>
        <p>
          I recently set up this blog using React, Material UI, and GitHub Pages for free static hosting,
          with automatic deployments powered by GitHub Actions. Here's a detailed breakdown so you can do it too!
        </p>
        <p>
          Before we dive in, let's cover the basics of what you'll need:
          <ul>
            <li>
              <strong>VSCode (Visual Studio Code)</strong>: This is a free "IDE" (Integrated Development Environment). This is a tool for writing and editing code.
            </li>
            <li>
              <strong>GitHub account</strong>: GitHub is a website for storing your code online and sharing it with others. It also lets you publish your website for free using a feature called GitHub Pages.
            </li>
          </ul>
        </p>
        <h3>Step 1: Create a New React App</h3>
        <p>
          <strong>What are we doing?</strong><br />
          React is a tool to build dynamic websites, which can set up everything you need in one step.
          I started by a creating a new React project, which gave me a ready-made project structure to styart with as a foundation.
        </p>
        <p>
          <strong>How:</strong><br />
          Open VSCode and open a new terminal and run this command:
        </p>
        <pre>
          npx create-react-app my-blog
        </pre>
        <p>
          This will create a new folder named <code>my-blog</code> with all your project files. Go into this folder:
        </p>
        <pre>
          cd my-blog
        </pre>

        <h3>Step 2: Initialize a Git Repository</h3>
        <p>
          <strong>What are we doing?</strong><br />
          We're setting up version control using Git. This helps you keep track of changes and work with GitHub.
        </p>
        <p>
          <strong>How:</strong><br />
          In your terminal, run:
        </p>
        <pre>
          git init
        </pre>
        <p>
          This command turns your project folder into a Git repository.
        </p>

        <h3>Step 3: Create a Repository on GitHub</h3>
        <p>
          <strong>What are we doing?</strong><br />
          We're making a repository on GitHub to store your code online.
        </p>
        <p>
          <strong>How:</strong><br />
          Go to <a href="https://github.com/">github.com</a> and log in. Click the <strong>+ (plus)</strong> icon in the top right, then choose <strong>New repository</strong>. Give it a name (like <code>my-blog</code>) and click <strong>Create repository</strong>.
        </p>

        <h3>Step 4: Connect Your Local Project to GitHub</h3>
        <p>
          <strong>What are we doing?</strong><br />
          We're linking your project folder to your GitHub repository, so you can upload your code.
        </p>
        <p>
          <strong>How:</strong><br />
          In your terminal, run (replace <code>YOUR-USERNAME</code> and <code>my-blog</code> with your info):
        </p>
        <pre>
          git remote add origin https://github.com/YOUR-USERNAME/my-blog.git
        </pre>
        <p>
          Then add and commit your files:
        </p>
        <pre>
          git add .
          git commit -m "Initial commit"
        </pre>
        <p>
          And push your code to GitHub:
        </p>
        <pre>
          git push -u origin main
        </pre>

        <h3>Step 5: Install gh-pages Package (for Easy Deployment)</h3>
        <p>
          <strong>What are we doing?</strong><br />
          Installing a tool to help us publish our site to GitHub Pages, which is a feature of github that allows you to easily deploy a webiste.
        </p>
        <p>
          <strong>How:</strong><br />
          In your project folder, run:
        </p>
        <pre>
          npm install --save gh-pages
        </pre>

        <h3>Step 6: Update package.json for Deployment</h3>
        <p>
          <strong>What are we doing?</strong><br />
          Telling React and GitHub Pages where your website will live, by updating a config file.
        </p>
        <p>
          <strong>How:</strong><br />
          In your <code>package.json</code> file, add a <code>homepage</code> property at the top (replace <code>YOUR-USERNAME</code> and <code>my-blog</code>):
        </p>
        <pre>
          "homepage": "https://YOUR-USERNAME.github.io/my-blog",
        </pre>
        <p>
          Then add these scripts to your <code>scripts</code> section:
        </p>
        <pre>
          {`
          "predeploy": "npm run build",
          "deploy": "gh-pages -d build",
          `}
        </pre>
        <h3>Step 7: Deploy Your Website</h3>
        <p>
          <strong>What are we doing?</strong><br />
          Publishing your website online for the first time!
        </p>
        <p>
          <strong>How:</strong><br />
          Run this in your terminal:
        </p>
        <pre>
          npm run deploy
        </pre>
        <p>
          After a minute, your site will be live at the URL you set in <code>homepage</code>.
        </p>

        <h3>Step 8: Set Up Automatic Deployment with GitHub Actions (Optional, but Recommended)</h3>
        <p>
          <strong>What are we doing?</strong><br />
          Setting up GitHub to build and publish your site automatically every time you push changes. This means you won't need to manually run any commands everytime you update the website.
        </p>
        <p>
          <strong>How:</strong><br />
          Create a new folder called <code>.github/workflows</code> in your project. Inside, create a file named <code>deploy.yml</code> with this content:
        </p>
        <pre>
          {`
name: Deploy to GitHub Pages
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          `}
        </pre>
        <p>
          Now, whenever you push to the <code>main</code> branch, GitHub will build and deploy your site automatically!
        </p>

        <h3>Congratulations!</h3>
        <p>
          You've just set up a modern website using React, VSCode, and GitHub Pages, with automatic deployments!
        </p>
      </>
    )
  }
]

export default posts;