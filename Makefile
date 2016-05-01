TSC=tsc typings/tsd.d.ts --outDir lib --target es6 --jsx react

.PHONY: build
build:
	$(TSC) src/App.tsx

.PHONY: watch
watch:
	$(TSC) --watch src/App.tsx