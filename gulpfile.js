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
    sass = require("sass"),
    {inc} = require("semver"),
    log = require("plugin-log"),
    {obj} = require("through2"),
    {pathToFileURL} = require('url'),
    {existsSync} = require("fs")
;

const libName = "ngx-tour-wizard";
const rootFolder = join(__dirname);
const srcFolder = join(rootFolder, `projects/${libName}/src/lib`);
const distFolder = join(rootFolder, `dist/${libName}`);

const taskNames = {
    copySassSources: "copySassSources",
    ngBuild: "ngBuild",
    mdsCopy: "mdsCopy",
    pack: "pack",
    postBuild: "postBuild",
    doSass: "doSass"
};

const doBump = (type) => {
    return Promise.all(["./", join(rootFolder, "projects", libName)].map((p) => {
        return gulp.src(join(p, "package.json"))
        .pipe(obj((file, enc, cb) => {
            const pkgData = JSON.parse(file.contents.toString());
            const prevVersion = pkgData.version;
            pkgData.version = inc(prevVersion, type);
            file.contents = Buffer.from(JSON.stringify(pkgData, null, 4));
            log(
                "Bumped", log.colors.cyan(prevVersion),
                "to", log.colors.magenta(pkgData.version),
                "with type:", log.colors.cyan(type)
            );
            cb(null, file);
        }))
        .pipe(gulp.dest(p));
    }));
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

gulp.task("build++", () => {
    return gulp.src(join(__dirname, "package.json"))
    .pipe(obj((file, enc, cb) => {
        const pkgData = JSON.parse(file.contents.toString());
        const prevBuild = pkgData.build;
        pkgData.build++;
        file.contents = Buffer.from(JSON.stringify(pkgData, null, 4));
        log(
            "Increased", log.colors.cyan(prevBuild),
            "to", log.colors.magenta(pkgData.build)
        );
        cb(null, file);
    }))
    .pipe(gulp.dest(__dirname))
});

gulp.task(taskNames.doSass, (cb) => {
    logStart(taskNames.doSass);
    // SASS BUILD SCSS SOURCES
    gulp.src([
        join(srcFolder, "scss/tour-wizard.scss"),
    ])
    .pipe(obj((file, enc, cb) => {
        const compiled = sass.compile(join(srcFolder, "scss/tour-wizard.scss"), {
            importers: [
                {
                    findFileUrl(url) {
                        const useMatch = join(__dirname, "node_modules", url, "_index.scss");
                        const isMatch = existsSync(useMatch);
                        if (isMatch) {
                            return pathToFileURL(useMatch);
                        }
                        return null;
                    }
                }
            ]
        });
        file.contents = Buffer.from(compiled.css);
        log(log.colors.magenta("SASS"), log.colors.cyan("compiled"));
        cb(null, file);
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
gulp.task(taskNames.postBuild, gulp.series(taskNames.doSass, taskNames.copySassSources, taskNames.mdsCopy, (cb, err) => {
    logEnd(taskNames.postBuild);
    cb(err);
}));
