import {
  src,
  dest
} from 'gulp';

export var hello = (cb) => {
  console.log("Hello, Gulp");
  return cb();
};

export var build = (cb) => {
  src('src/index.html').pipe(dest('docs'));
  return cb();
};

//# sourceMappingURL=gulpfile.js.map
