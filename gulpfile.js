const gulp = require("gulp"),
    path = require("path"),
    runSequence = require("run-sequence"),
    exec = require("child_process").exec,
    sass = require("gulp-sass")
    // tildeImporter = require("node-sass-tilde-importer")
;

const rootFolder = path.join(__dirname);
const srcFolder = path.join(rootFolder, "lib");
const distFolder = path.join(rootFolder, "dist");

//TS
const stylesDistFolder = path.join(distFolder, "styles");

gulp.task("build:scss", function (cb) {
    console.info("Build:SCSS");
    gulp.src([
        `${srcFolder}/tour-wizard.scss`,
    ])
    .pipe(sass({
        // importer: tildeImporter
    }))
    .pipe(gulp.dest(stylesDistFolder));
    gulp.src([
        `${srcFolder}/tour-wizard-vars.scss`,
        `${srcFolder}/tour-wizard.scss`,
    ])
    .pipe(gulp.dest(stylesDistFolder));
    cb();
});

gulp.task("packagr", function (cb) {
    exec("ng-packagr -p ng-package.json", function (err, stdout, stderr) {
        console.info("packed");
        cb(err);
    });
});

gulp.task("build", function (callback) {
    runSequence("packagr", "build:scss", callback);
});
