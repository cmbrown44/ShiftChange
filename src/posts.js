const posts = [
  {
    id: 'getting-started-github-pages',
    title: 'How I Set Up My Website with GitHub Pages and Actions',
    date: '2025-06-08',
    content: (
      <>
        <p>Hi! I’m Charlie. This is my first blog post, and I’m excited to share my journey as a woman in tech.</p>
        <p>
          I recently set up this blog using React, Material UI, and GitHub Pages for free static hosting,
          with automatic deployments powered by GitHub Actions. Here’s a detailed breakdown so you can do it too!
        </p>
        <h3>Step 1: Create a New React App</h3>
        <pre>
          <code>
            npx create-react-app shift-change-blog
            <br />
            cd shift-change-blog
          </code>
        </pre>
        <h3>Step 2: Initialize Git and Push to GitHub</h3>
        <pre>
          <code>
            git init
            <br />
            git remote add origin https://github.com/yourusername/your-repo.git
            <br />
            git add .
            <br />
            git commit -m "Initial commit"
            <br />
            git push -u origin main
          </code>
        </pre>
        <h3>Step 3: Add Material UI for Styling</h3>
        <pre>
          <code>
            npm install @mui/material @emotion/react @emotion/styled
          </code>
        </pre>
        <p>I then set up a custom theme and used Material UI components for my layout and typography.</p>
        <h3>Step 4: Prepare for GitHub Pages Deployment</h3>
        <pre>
          <code>
            npm install gh-pages --save-dev
          </code>
        </pre>
        <p>
          Then, in <code>package.json</code>, set the homepage field to your GitHub Pages URL:
        </p>
        <pre>
          <code>
            "homepage": "https://yourusername.github.io/your-repo"
          </code>
        </pre>
        <p>
          Add these scripts to <code>package.json</code>:
        </p>
        <pre>
          <code>
            "predeploy": "npm run build",<br/>
            "deploy": "gh-pages -d build"
          </code>
        </pre>
        <h3>Step 5: Set Up GitHub Actions for Automatic Deployment</h3>
        <pre>
          <code>
{`name: Deploy React App to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
`}
          </code>
        </pre>
        <h3>Step 6: Configure GitHub Pages</h3>
        <p>
          On GitHub, go to <b>Settings &gt; Pages</b>, and set the source branch to <b>gh-pages</b> and the folder to <b>/(root)</b>.
        </p>
        <h3>Troubleshooting & Lessons Learned</h3>
        <ul>
          <li>
            <b>Missing <code>react-scripts</code>:</b> If you get <code>react-scripts: command not found</code>, run <code>npm install</code> to restore dependencies.
          </li>
          <li>
            <b>npm audit warnings:</b> Some warnings (especially from <code>gh-pages</code> and Material UI) are common and can be ignored for personal/static sites.
          </li>
          <li>
            <b>Deployment not triggering:</b> Make sure your GitHub Actions workflow is set to run on <code>push</code> to <code>main</code>, not <code>gh-pages</code>.
          </li>
          <li>
            <b>Permission denied to <code>gh-pages</code>:</b> If you see <code>Permission to ... denied to github-actions[bot]</code>, go to <b>Settings &gt; Actions &gt; General</b> and set Workflow permissions to “Read and write”.
          </li>
          <li>
            <b>Branch protection rules:</b> If you have protection on <code>gh-pages</code>, allow GitHub Actions to push or temporarily remove the rule.
          </li>
          <li>
            <b>App in a subfolder:</b> If your React app is in a subdirectory, use the <code>working-directory</code> option in your workflow. Simpler: move your app to the repo root.
          </li>
        </ul>
        <h3>Final Thoughts</h3>
        <p>
          Setting up a modern, auto-deploying blog with React and GitHub Pages is a great way to learn web development basics and CI/CD.
          Troubleshooting along the way is part of the learning process, and each fix makes you more confident with tools like npm and GitHub Actions.
        </p>
        <p>
          Stay tuned for more posts about what I learn next!
        </p>
      </>
    ),
  },
  // Add more posts here!
];

export default posts;