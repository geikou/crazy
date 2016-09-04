var gulp = require('gulp');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');

/* Server
****************************** */
var browser = require('browser-sync');
gulp.task('server', function() {
	browser({
		server: {
			baseDir: './app/public/'
		}
	});
});

/* Clean
****************************** */
var del = require('del');
gulp.task('clean', function() {
	del(['./app/public/']);
});

/* Sass
****************************** */
var sass = require('gulp-sass');
gulp.task('sass', function() {
	gulp.src(['./app/source/scss/**/*.scss', '!./app/source/scss/**/_*.scss'])
		.pipe(plumber())
		.pipe(sass())
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./app/public/css'))
		.pipe(browser.reload({stream:true}))
});


/* Combine MediaQuery
****************************** */
var cmq = require('gulp-combine-media-queries');
gulp.task('cmq', function() {
	gulp.src('./app/public/css/*.css')
		.pipe(plumber())
		.pipe(cmq({
			log: true
		}))
		.pipe(gulp.dest('./app/public/css'));
});

/* Ejs
****************************** */
var ejs = require('gulp-ejs');
gulp.task('ejs', function() {
	gulp.src(['./app/source/ejs/**/*.ejs','!./app/source/ejs/**/_*.ejs'])
		.pipe(plumber())
		.pipe(ejs())
		.pipe(gulp.dest('./app/public'))
		.pipe(browser.reload({stream:true}))
});


// 複製タスクに関わるパス
var copyPaths = [
	{
		from: './app/source/images/**/*',
		to: './app/public/images'
	}, {
		from: './app/source/fonts/**/*',
		to: './app/public/fonts'
	}, {
		from: './app/source/js/**/*',
		to: './app/public/js'
	}, {
		from: './app/source/plugins/**/*',
		to: './app/public/plugins'
	}
];

/* Copy
****************************** */
gulp.task('copy', function() {
	Object.keys(copyPaths).forEach(function (key) {
		gulp.src(copyPaths[key].from).pipe(gulp.dest(copyPaths[key].to));
	});
});

/* Watch
****************************** */
var watch = require('gulp-watch');
gulp.task('watch', function() {
	watch(['./app/source/scss/**/*.scss'], function(event){
		gulp.start('sass');
	});
	watch(['./app/source/ejs/**/*.ejs'], function(event){
		gulp.start('ejs');
	});
	// 複製タスクはループを回す
	for(var i=0; i<copyPaths.length; i++){
		watch(copyPaths[i].from, function(event){
			gulp.start('copy');
		});
	}
});

gulp.task('build', ['clean'], function (callback) {
	return runSequence(['ejs', 'sass', 'copy'], callback);
});


/* Default
****************************** */
gulp.task('default', function() {
	return runSequence(['server'],['watch']);
});
