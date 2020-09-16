"use strict";

function logStart(msg) {
    console.info("***** Task '" + msg + "' started *****");
}

function logEnd(msg) {
    console.info("***** Task '" + msg + "' finished *****");
}

const gulp = require("gulp"),
    path = require("path"),
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
    copySassSources: "copySassSources",
    ngBuild: "ngBuild",
    mdsCopy: "mdsCopy",
    pack: "pack",
    postBuild: "postBuild",
    doSass: "doSass"
};

gulp.task(taskNames.doSass, (cb) => {
    logStart(taskNames.doSass);
    // SASS BUILD SCSS SOURCES
    gulp.src([
        path.join(srcFolder, "scss/tour-wizard.scss"),
    ])
    .pipe(sass({
        importer: tildeImporter
    }))
    .pipe(gulp.dest(path.join(distFolder, "css")))
    .on("end", () => {
        logEnd(taskNames.doSass);
        cb();
    });
});

gulp.task(taskNames.copySassSources, (cb) => {
    // COPY SCSS SOURCES
    return gulp.src([
        path.join(srcFolder, "scss/*.scss"),
    ])
    .pipe(gulp.dest(path.join(distFolder, "scss")))
    .on("end", () => {
        logEnd(taskNames.copySassSources);
        cb();
    });
})

gulp.task(taskNames.mdsCopy, (cb) => {
    logStart(taskNames.mdsCopy);
    return gulp.src([
        path.join(rootFolder, "changelog.md"),
        path.join(rootFolder, "README.md")
    ])
    .pipe(gulp.dest(distFolder))
    .on("end", () => {
        logEnd(taskNames.mdsCopy);
        cb();
    });
});

// PACK
gulp.task(taskNames.pack, (cb) => {
    logStart(taskNames.pack);
    exec(`npm pack ./dist/${libName}`, (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        logEnd(taskNames.pack);
        cb(err);
    });
});

//MAIN
gulp.task(taskNames.postBuild,  gulp.series(taskNames.doSass, taskNames.copySassSources, taskNames.mdsCopy, (cb, err) => {
    logEnd(taskNames.postBuild);
    cb(err);
}));