"use strict";

function logStart(msg) {
    console.info("***** Task '" + msg + "' started *****");
}

function logEnd(msg) {
    console.info("***** Task '" + msg + "' finished *****");
}

const gulp = require("gulp"),
    {join} = require("path"),
    exec = require("child_process").exec,
    sass = require("gulp-sass"),
    tildeImporter = require("node-sass-tilde-importer"),
    bump = require("gulp-bump")
;

const libName = "ngx-tour-wizard";
const rootFolder = join(__dirname);
const srcFolder = join(rootFolder, `projects/${libName}/src/lib`);
const distFolder = join(rootFolder, `dist/${libName}`);
const doBump = (type) => {
    return Promise.all(["./", join(rootFolder, "projects", libName)].map((p) => {
        return gulp.src(join(p, "package.json"))
        .pipe(bump({type}))
        .pipe(gulp.dest(p));
    }));
};

//TS
const taskNames = {
    copySassSources: "copySassSources",
    ngBuild: "ngBuild",
    mdsCopy: "mdsCopy",
    pack: "pack",
    postBuild: "postBuild",
    doSass: "doSass"
};

gulp.task("bump:patch", () => {
    return doBump("patch");
});

gulp.task("bump:minor", () => {
    return doBump("minor");
});

gulp.task("bump:major", () => {
    return doBump("major");
});

gulp.task(taskNames.doSass, (cb) => {
    logStart(taskNames.doSass);
    // SASS BUILD SCSS SOURCES
    gulp.src([
        join(srcFolder, "scss/tour-wizard.scss"),
    ])
    .pipe(sass({
        importer: tildeImporter
    }))
    .pipe(gulp.dest(join(distFolder, "css")))
    .on("end", () => {
        logEnd(taskNames.doSass);
        cb();
    });
});

gulp.task(taskNames.copySassSources, (cb) => {
    // COPY SCSS SOURCES
    return gulp.src([
        join(srcFolder, "scss/*.scss"),
    ])
    .pipe(gulp.dest(join(distFolder, "scss")))
    .on("end", () => {
        logEnd(taskNames.copySassSources);
        cb();
    });
})

gulp.task(taskNames.mdsCopy, (cb) => {
    logStart(taskNames.mdsCopy);
    return gulp.src([
        join(rootFolder, "changelog.md"),
        join(rootFolder, "README.md")
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
