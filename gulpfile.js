"use strict";

function logStart(msg) {
    console.info("***** Task '" + msg + "' started *****");
}

function logEnd(msg) {
    console.info("***** Task '" + msg + "' finished *****");
}

const gulp = require("gulp"),
    path = require("path"),
    runSequence = require("run-sequence"),
    exec = require("child_process").exec,
    sass = require("gulp-sass"),
    tildeImporter = require("node-sass-tilde-importer")
;

const libName = "ngx-tour-wizard";
const rootFolder = path.join(__dirname);
const srcFolder = path.join(rootFolder, `projects/${libName}/src/lib`);
const distFolder = path.join(rootFolder, `dist/${libName}`);

//TS
const taskNames = {
    ngBuild: "ngBuild",
    main: "build",
    mdsCopy: "mdsCopy",
    pack: "pack",
    handleStyles: "build:scss"
};

gulp.task(taskNames.ngBuild, function (cb) {
    logStart(taskNames.ngBuild);
    exec(`ng build ${libName}`, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        logEnd(taskNames.ngBuild);
        cb(err);
    });
});

gulp.task(taskNames.handleStyles, function (cb) {
    logStart(taskNames.handleStyles);
    // SASS BUILD SCSS SOURCES
    gulp.src([
        path.join(srcFolder, "scss/tour-wizard.scss"),
    ])
    .pipe(sass({
        importer: tildeImporter
    }))
    .pipe(gulp.dest(path.join(distFolder, "css")));

    // COPY SCSS SOURCES
    gulp.src([
        path.join(srcFolder, "scss/*.scss"),
    ])
    .pipe(gulp.dest(path.join(distFolder, "scss")));
    logEnd(taskNames.handleStyles);
    cb();
});

gulp.task(taskNames.mdsCopy, (cb) => {
    logStart(taskNames.mdsCopy);
    gulp.src([
        path.join(rootFolder, "changelog.md"),
        path.join(rootFolder, "README.md")
    ])
    .pipe(gulp.dest(distFolder));
    logEnd(taskNames.mdsCopy);
    cb();
});

// PACK
gulp.task(taskNames.pack, function (cb) {
    logStart(taskNames.pack);
    exec(`npm pack ./dist/${libName}`, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        logEnd(taskNames.pack);
        cb(err);
    });
});

//MAIN
gulp.task(taskNames.main, function (cb) {
    logStart(taskNames.main);
    runSequence(taskNames.ngBuild, taskNames.handleStyles, taskNames.mdsCopy, function (err) {
        logEnd(taskNames.main);
        cb(err);
    });
});

