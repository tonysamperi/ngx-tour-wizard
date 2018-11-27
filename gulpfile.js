const gulp = require("gulp"),
    path = require("path"),
    runSequence = require("run-sequence"),
    exec = require("child_process").exec,
    sass = require("gulp-sass")
;

const rootFolder = path.join(__dirname);
const srcFolder = path.join(rootFolder, "lib");
const distFolder = path.join(rootFolder, "dist");

//TS
const stylesDistFolder = path.join(distFolder, "styles");
const tasks = {
    compile: "packagr",
    main: "build",
    pack: "pack",
    stylesBuild: "build:scss"
};

gulp.task(tasks.stylesBuild, function (cb) {
    console.info("***** Task '" + tasks.stylesBuild + "' started *****");
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
    console.info("***** Task '" + tasks.stylesBuild + "' finished *****");
    cb();
});

gulp.task(tasks.compile, function (cb) {
    console.info("***** Task '" + tasks.compile + "' started *****");
    exec("ng-packagr -p ng-package.json", function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        console.info("***** Task '" + tasks.compile + "' finished *****");
        cb(err);
    });
});

gulp.task(tasks.main, function (cb) {
    console.info("***** Task '" + tasks.compile + "' started *****");
    runSequence(tasks.compile, tasks.stylesBuild, function (err) {
        console.info("***** Task '" + tasks.compile + "' finished *****");
        cb(err);
    });
});

gulp.task(tasks.pack, function (cb) {
    console.info("***** Task '" + tasks.pack + "' started *****");
    exec("npm pack ./dist", function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        console.info("***** Task '" + tasks.pack + "' finished *****");
        cb(err);
    });
});
