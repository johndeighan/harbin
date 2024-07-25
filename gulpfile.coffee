import {src, dest} from 'gulp'

export build = (cb) =>
	src('src/index.html')
	.pipe(dest('docs'))
	cb()
