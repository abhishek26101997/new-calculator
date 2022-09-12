import React, { Component } from "react";
import Base from "./base";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Base>
          <h3 id="simple-web-calculator-built-with-react">
            Simple web calculator built with React
          </h3>
          <p>
            <a href="https://github.com/livrth/calculator">Source code here!</a>
          </p>
          <p>
            Click the calculator button on the top menu bar to use it &#128512;{" "}
          </p>
          <h4>Deployment</h4>
          <p>Git clone the repository</p>
          <pre>
            <code>
              <span class="hljs-built_in">
                git clone git@github.com:livrth/calculator.git
              </span>
            </code>
          </pre>
          <p>Install all required dependencies</p>
          <pre>
            <code>
              <span class="hljs-built_in">npm install</span>
            </code>
          </pre>
          <p>In the project directory, you can run:</p>
          <pre>
            <code>
              <span class="hljs-built_in">npm</span> start
            </code>
          </pre>
          <p>
            Runs the app in the development mode. Open{" "}
            <a href="http://localhost:3000">http://localhost:3000</a> to view it
            in your browser. The page will reload when you make changes. You may
            also see any lint errors in the console.
          </p>
          <pre>
            <code>
              npm <span class="hljs-built_in">test</span>
            </code>
          </pre>
          <p>
            Launches the test runner in the interactive watch mode. See the
            section about{" "}
            <a href="https://facebook.github.io/create-react-app/docs/running-tests">
              running tests
            </a>{" "}
            for more information.
          </p>
          <pre>
            <code>
              npm <span class="hljs-keyword">run</span>
              <span class="bash"> build</span>
            </code>
          </pre>
          <p>
            Builds the app for production to the <code>build</code> folder. It
            correctly bundles React in production mode and optimizes the build
            for the best performance.
          </p>
          <p>
            The build is minified and the filenames include the hashes. Your app
            is ready to be deployed!
          </p>
          <p>
            See the section about{" "}
            <a href="https://facebook.github.io/create-react-app/docs/deployment">
              deployment
            </a>{" "}
            for more information.
          </p>
          <pre>
            <code>
              npm <span class="hljs-keyword">run</span>
              <span class="bash"> eject</span>
            </code>
          </pre>
          <p>
            <strong>
              Note: this is a one-way operation. Once you <code>eject</code>,
              you can&#39;t go back!
            </strong>
          </p>
          <p>
            If you aren&#39;t satisfied with the build tool and configuration
            choices, you can <code>eject</code> at any time. This command will
            remove the single build dependency from your project.
          </p>
          <p>
            Instead, it will copy all the configuration files and the transitive
            dependencies (webpack, Babel, ESLint, etc) right into your project
            so you have full control over them. All of the commands except{" "}
            <code>eject</code> will still work, but they will point to the
            copied scripts so you can tweak them. At this point you&#39;re on
            your own.
          </p>
          <p>
            You don&#39;t have to ever use <code>eject</code>. The curated
            feature set is suitable for small and middle deployments, and you
            shouldn&#39;t feel obligated to use this feature. However we
            understand that this tool wouldn&#39;t be useful if you couldn&#39;t
            customize it when you are ready for it.
          </p>
        </Base>
      </React.Fragment>
    );
  }
}

export default Home;
