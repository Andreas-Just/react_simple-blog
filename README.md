# Simple Blog



#### Result

- [DEMO LINK](https://andreas-just.github.io/simple-blog/#/)
- [PULL REQUEST](https://github.com/Andreas-Just/simple-blog/pull/1)

___

## Task

Hey, let's build simple Blog.

We will start with simple MVP. It will have Posts and Comments features.

Use **React** as view framework. JavaScript has to be ES 6/7 (Babel + Webpack) or TypeScript.

State layer should be handled with **Redux** or similar solution you're experienced with.

Styling recommended to do in CSS in JS library you have experience with, usually, [styled-components](https://github.com/styled-components/styled-components) will be the best choice.

Use [React Router](https://github.com/ReactTraining/react-router) in case of React. Other frameworks going to have different routers out of the box.

### Pages and Features

Our blog going to have next pages:

- **Latest Posts /** -- List of all Posts, Post short description, author and publish date
- **View Post /posts/:postId** -- Post page

Features:

- View list of latest Posts
- View specific Post
- Create new comment under Post
- Create / Edit Post _* Optional_

### API

To persist data and work with real API, we're going to use simple Node.js API created in few minutes. API hosted in cloud and you can query it from anywhere. API endpoints documentation: https://documenter.getpostman.com/view/1917440/RzteTChV

### Structure and Code Style

- Split components to [Presentational and Container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- Redux action, reducers, and selectors should be separate from each other. To handle network you can use native browser [fetch](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) method and [redux-thunk middleware](https://github.com/gaearon/redux-thunk). As another option we prefer is [Axios](https://github.com/axios/axios) and [redux-axios-middleware](https://github.com/svrcekmichal/redux-axios-middleware).
- Check JS code style with [ESLint](https://eslint.org/docs/user-guide/getting-started)
- Use functional programming if you know how. [Ramda.js](http://ramdajs.com/) or [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) is +100 to your score ;)
- ES 6/7 features are very welcome. If you want to use `async / await`, pipes etc. go ahead and do it.

### Design

The design is up to you. Simple, minimalistic and clean would be nice. As general example check [Ghost standard UI](https://blog.ghost.org/).

___

1. ## Workflow

    - Clone forked repository 
        ```bash
        git clone git@github.com:<user_name>>/<task_repository>.git
        ```
    - Run `npm install` to install dependencies.
    - Then develop

2. ## Development mode 

    - Run `npm run start` to start `http-server` on `http://localhost:3000`
        When you run server the command line window will no longer be available for 
        writing commands until you stop server (`ctrl + c`). All other commands you 
        need to run in new command line window.
    - Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
    - Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
    - When you finished `Deploy on gh-pages`

3. ## Deploy on gh-pages

    - Build the project
      ```bash
      $ npm run build
      ```
    - Commit and push all recent changes
      ```bash
      $ git add .
      $ git commit -m 'commit message'
      $ git push origin master
      ```
    - Execute `npm run deploy`. This command will push the `/build` folder to branch
      `gh-pages` in your remote repository. 
    - Add links to your demo in readme.md.
      - `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)` - this will be a 
      link to your index.html
    - Commit and push all recent changes again.
    - Create `Pull Request` from forked repo `(<branch_name>)` to original repo 
    (`master`).
