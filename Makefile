# To develop
dev:
	npm run serve

# Runs type checkking with vue-tsc and builds production app and runs it 
# Before using run:
# npm install -g serve
#
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem
production: 
	npm run build
	serve -s dist

# Formats with prettier and fix linting problems
format-lint: 
	npm run format
	npm run fix-lint 