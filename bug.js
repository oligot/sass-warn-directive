const nodeSass = require('node-sass');
const dartSass = require('sass');

function render(sass) {
  const warnings = [];
  const result = sass.renderSync({
    file: 'style.scss',
    functions: {
      '@warn'(warning) {
        warnings.push(warning.getValue());
        return warning;
      }
    }
  });
  console.log(result.css.toString(), warnings);
}

render(nodeSass);
render(dartSass);
