var gulp = require('gulp');
var del = require('del');
var nunjucks = require( 'nunjucks' ) ;
var nunjucksRender = require('gulp-nunjucks-render');
var concat = require('gulp-concat');
var replace = require('gulp-regex-replace');
var rename = require('gulp-rename');
var data = require('gulp-data');
var sass = require('gulp-sass')(require('sass'));

var { SiteChecker } = require("broken-link-checker");


var manageEnvironment = function(environment) {
    environment.addFilter('test_filters', function(find, replace) {
        replaceString = this;
        var regex;
        for (var i = 0; i < find.length; i++) {
          regex = new RegExp(find[i], "g");
          replaceString = replaceString.replace(regex, replace[i]);
        }
        return replaceString;
      });
      environment.addFilter('sortByLength', function(arr) {
        arr.sort(function(a, b){return b.term.length - a.term.length});
        return arr;
      });
      environment.addFilter('test', function(string) {
        string.replaceAll(definition.term, '<span data-widget="tooltip" title="' + definition.description + '">' + definition.term + '</span>')
        return string;
      });
      environment.addFilter('rex', function(string) {
        var regex = new RegExp(string + '(?![^<]*<\/span>)');
        return regex;
      });
  }

gulp.task('clean', function() {
    return del(['public']);
});

gulp.task('clean-public', function() {
    return gulp.src('public/*', {read: false})
    .pipe(clean());
});
// Converts Sass to CSS with gulp-sass
gulp.task('sass', function(){
  return gulp.src('src/scss/*.scss')
    .pipe(sass({
      includePaths: ['node_modules']
    })) 
    .pipe(gulp.dest('src/css/'))
});
// Crawls active localhost for broken links
gulp.task("check-links", function(done) {
  const siteChecker = new SiteChecker(
      {
          excludeInternalLinks: true,
          excludeExternalLinks: false,
          filterLevel: 0,
          acceptedSchemes: ["http", "https"],
          excludedKeywords: ["linkedin"],
          excludeLinksToSamePage: true
      },
      {
          "error": (error) => {
              console.error(error);
          },
          "link": (result, customData) => {
              if(result.broken) {
                  if(result.http.response && ![undefined, 200].includes(result.http.response.statusCode)) {
                      console.log(`${result.http.response.statusCode} => ${result.url.original}`);
                  }
              }
          },
          "end": () => {
              done();
          }
      }
  );
  siteChecker.enqueue("http://localhost:6002/support/z-content-solutions/");
});
gulp.task('nunjucks', gulp.series('clean', function() {
    // Get all .html and .nunjucks files in the src/pages directory
    return gulp.src('src/pages/**/*.+(html|css|scss|nunjucks|yml)')
    // render the definitions data
    .pipe(data(function () {
        return require('./src/data/pages.json')
    }))
    // render the pages data
    .pipe(data(function () {
        return require('./src/data/terms.json')
    }))
    // render the templates with nunjucks
    .pipe(nunjucksRender({
        path: ['src/templates'],
        includePaths: ['node_modules'],
        manageEnv: manageEnvironment
    }))
    // and output all the files into the public folder
    .pipe(gulp.dest('public'));
}));

gulp.task("check-links", function(done) {

  const siteChecker = new SiteChecker(
      { 
          excludeInternalLinks: true,
          excludeExternalLinks: false, 
          filterLevel: 0,
          acceptedSchemes: ["http", "https"],
          excludedKeywords: ["linkedin"],
          excludeLinksToSamePage: true
      },
      {
          "error": (error) => {
              console.error(error);
          },
          "link": (result, customData) => {
              if(result.broken) {
                  if(result.http.response && ![undefined, 200].includes(result.http.response.statusCode)) {
                      console.log(`${result.http.response.statusCode} => ${result.url.original}`);
                  }
              }
          },
          "end": () => {
              done();
          }
      }
  );

  siteChecker.enqueue("http://localhost:6002/support/z-content-solutions/");
});

gulp.task('build', gulp.series('nunjucks', function() {
    return gulp.src(['src/css/**/*', 'src/docs/**/*', 'src/images/**/*', 'src/js/**/*',], {
        base: 'src'
    }).pipe(gulp.dest('public'));
}));

gulp.task('default', gulp.series('build'));
