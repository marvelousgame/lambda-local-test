.PHONY: all dist

all: dist

dist:
	zip -FSqr ./dist/function.zip  *.js node_modules -x ./node_modules/aws-sdk/\* && \
	echo "updating Lambda function now..."
	aws lambda update-function-code --function-name yourFunctionName --zip-file fileb://dist/function.zip