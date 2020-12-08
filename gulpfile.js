import {
  task, src, dest as _dest, watch as _watch, parallel,
} from 'gulp';
import { onError as _onError } from 'gulp-notify';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';

const paths = {
  sass: {
    source: 'sass/styles.scss',
    dest: 'src/styles/',
    watch: 'sass/**/*.scss',
  },
};

function onError(err) {
  _onError({
    title: 'Gulp Error - Compile Failed',
    message: 'Error: <%= error.message %>',
  })(err);

  this.emit('end');
}

task('css:compile', () => src(paths.sass.source)
  .pipe(
    plumber({
      errorHandler: onError,
    }),
  )
  .pipe(sass())
  .pipe(_dest(paths.sass.dest)));

task('watch', () => {
  _watch(paths.sass.watch, parallel('css:compile'));
});
